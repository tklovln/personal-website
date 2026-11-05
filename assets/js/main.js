(function () {
  "use strict";

  var SITE = window.SITE;
  var COLORS = ["#ff2300", "#ff9201", "#ffeb00", "#89e82b", "#00c745", "#29ebfe", "#0d44fb", "#a725fc", "#fd1eba"];
  var NOISE = "url(assets/img/noise.png)";
  var EASE = "cubic-bezier(0.80, 0.000, 0.200, 1.0)";
  var DUR = 250;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canAnimate = !reduced && typeof Element.prototype.animate === "function";
  var lang = "en";

  if (!canAnimate) document.documentElement.classList.add("no-grad");

  function pickColors() {
    var a = Math.floor(Math.random() * COLORS.length), b;
    do { b = Math.floor(Math.random() * COLORS.length); } while (a === b);
    return [COLORS[a], COLORS[b]];
  }
  function gradient(c, triple) {
    var stops = triple ? c[0] + ", " + c[1] + ", " + c[1] : c[0] + ", " + c[1];
    return "linear-gradient(to right in oklab, " + stops + ")";
  }

  // ---------- reveal on scroll ----------
  var pending = new Map();
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var run = pending.get(e.target);
      io.unobserve(e.target);
      pending.delete(e.target);
      if (run) run();
    });
  }) : null;

  function whenVisible(el, run, immediate) {
    if (immediate || !io) { run(); return; }
    pending.set(el, run);
    io.observe(el);
  }

  function resetGrad(el) {
    if (el._gradCleanup) el._gradCleanup();
    if (io) io.unobserve(el);
    pending.delete(el);
  }

  function makeLayer(cls, img) {
    var d = document.createElement("div");
    d.className = cls;
    d.style.backgroundImage = NOISE + ", " + img;
    return d;
  }

  // Text / block reveal: a gradient bar wipes across, then the content
  // appears tinted with the gradient and fades to its real colour.
  function gradText(el, opts) {
    opts = opts || {};
    resetGrad(el);
    if (!canAnimate) return;
    var c = pickColors();
    var fade = makeLayer("grad-fade", gradient(c));
    var slide = makeLayer("grad-slide", gradient(c, true));
    el.classList.add("grad-base");
    if (opts.inline !== false) el.classList.add("grad-inline");
    if (opts.dark) { el.classList.add("grad-dark"); fade.classList.add("multiply"); }
    el.appendChild(fade);
    el.appendChild(slide);
    var anims = [];

    function cleanup() {
      anims.forEach(function (a) { a.cancel(); });
      anims = [];
      if (fade.parentNode) fade.parentNode.removeChild(fade);
      if (slide.parentNode) slide.parentNode.removeChild(slide);
      el.classList.remove("grad-base", "grad-dark");
      el._gradCleanup = null;
    }
    el._gradCleanup = cleanup;

    whenVisible(el, function () {
      var n = opts.immediate ? 0 : Math.random() * 500;
      anims.push(el.animate(
        [{ visibility: "hidden" }, { offset: 0.001, visibility: "visible" }, { visibility: "visible" }],
        { duration: DUR, delay: DUR / 2 + n, fill: "both" }));
      anims.push(slide.animate([
        { transform: "translateX(calc(-100% - 1px))" },
        { backgroundPosition: "0 0, 0 0", transform: "translateX(0)" },
        { backgroundPosition: "0 0, 100% 0", transform: "translateX(calc(100% + 1px))" }
      ], { duration: DUR, delay: n, fill: "both" }));
      var f = fade.animate([
        { visibility: "hidden", opacity: 1 },
        { offset: 0.001, visibility: "visible", opacity: 1 },
        { offset: 0.1, opacity: 1 },
        { opacity: 0 }
      ], { duration: 5 * DUR, delay: DUR / 2 + n, fill: "both" });
      anims.push(f);
      f.onfinish = cleanup;
    }, opts.immediate);
  }

  // Image reveal: wipe, then a gradient sheet that dissolves to the image.
  function gradImage(el) {
    resetGrad(el);
    if (!canAnimate) return;
    var c = pickColors();
    var cover = makeLayer("grad-image", gradient(c));
    var slide = makeLayer("grad-slide", gradient(c, true));
    el.classList.add("grad-base");
    el.appendChild(cover);
    el.appendChild(slide);
    var anims = [];

    function cleanup() {
      anims.forEach(function (a) { a.cancel(); });
      if (cover.parentNode) cover.parentNode.removeChild(cover);
      if (slide.parentNode) slide.parentNode.removeChild(slide);
      el.classList.remove("grad-base");
      el._gradCleanup = null;
    }
    el._gradCleanup = cleanup;

    function run() {
      var n = Math.random() * 500;
      anims.push(el.animate(
        [{ visibility: "hidden" }, { offset: 0.001, visibility: "visible" }, { visibility: "visible" }],
        { duration: DUR, delay: DUR / 2 + n, fill: "both" }));
      anims.push(slide.animate([
        { transform: "translateX(calc(-100% - 1px))", visibility: "visible" },
        { backgroundPosition: "0 0, 0 0", transform: "translateX(0)", visibility: "hidden" },
        { transform: "translateX(0)", visibility: "hidden" }
      ], { duration: DUR, delay: n, fill: "both" }));
      var f = cover.animate(
        [{ offset: 0.0001, visibility: "visible", opacity: 1 }, { opacity: 0 }],
        { duration: 4 * DUR, delay: DUR / 2 + n, fill: "both" });
      anims.push(f);
      f.onfinish = cleanup;
    }

    whenVisible(el, function () {
      var img = el.querySelector("img");
      if (!img || img.complete) run();
      else { img.addEventListener("load", run, { once: true }); img.addEventListener("error", run, { once: true }); }
    });
  }

  // Button hover: a gradient panel slides in from the left and leaves to the right.
  function bindButtonHover(link) {
    if (link._hoverBound) return;
    link._hoverBound = true;
    var stack = [];
    function enter() {
      if (!canAnimate) return;
      var bg = document.createElement("div");
      bg.className = "bb-bg";
      bg.style.backgroundImage = gradient(pickColors());
      link.appendChild(bg);
      stack.push(bg);
      bg.animate([{ left: "-100%", easing: EASE }, { left: "0%" }], { duration: 125, fill: "both" });
    }
    function leave() {
      var bg = stack.shift();
      if (!bg) return;
      bg.animate([{ left: "0%", easing: EASE }, { left: "100%" }], { duration: 125, fill: "both" })
        .onfinish = function () { if (bg.parentNode) bg.parentNode.removeChild(bg); };
    }
    link.addEventListener("mouseenter", enter);
    link.addEventListener("mouseleave", leave);
    link.addEventListener("click", leave);
  }

  // Text link hover: text and underline pick up a random gradient.
  function bindGradLink(el) {
    if (el._gradLinkBound) return;
    el._gradLinkBound = true;
    el.classList.add("grad-link");
    el.addEventListener("mouseenter", function () {
      var g = gradient(pickColors());
      el.style.backgroundImage = g;
      el.style.borderImage = g + " 1";
      el.classList.add("grad-link-hover");
    });
    el.addEventListener("mouseleave", function () {
      el.style.backgroundImage = "";
      el.style.borderImage = "";
      el.classList.remove("grad-link-hover");
    });
  }

  // ---------- i18n ----------
  function t(key) {
    var v = SITE.ui[key];
    if (!v) return key;
    return v[lang] || v.en;
  }
  function loc(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[lang] || obj.en || "";
  }
  function langInfo(code) {
    for (var i = 0; i < SITE.languages.length; i++) if (SITE.languages[i].code === code) return SITE.languages[i];
    return null;
  }
  function initialLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && langInfo(q)) return q;
    try {
      var s = localStorage.getItem("lang");
      if (s && langInfo(s)) return s;
    } catch (e) { /* storage unavailable */ }
    return "en";
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function blackButton(label, href, external) {
    var wrap = el("div", "black-button");
    wrap.setAttribute("data-grad", "");
    var a = el("a", "bb-link", label);
    a.href = href;
    if (external) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    wrap.appendChild(a);
    return wrap;
  }

  function linkHref(key) {
    if (key === "email") return "mailto:" + SITE.email;
    return SITE.links[key];
  }

  function periodText(p) {
    var to = p.to === null ? t("present") : p.to;
    return p.from === to ? p.from : p.from + " \u2013 " + to;
  }

  function renderPublications() {
    var root = document.getElementById("pubList");
    root.textContent = "";
    var years = [];
    var byYear = {};
    SITE.publications.forEach(function (p) {
      if (!byYear[p.year]) { byYear[p.year] = []; years.push(p.year); }
      byYear[p.year].push(p);
    });
    years.forEach(function (y) {
      var region = el("div", "region");
      var name = el("div", "region-name");
      var nameIn = el("span", null, String(y));
      nameIn.setAttribute("data-grad", "");
      name.appendChild(nameIn);
      region.appendChild(name);
      var items = el("div", "items");
      byYear[y].forEach(function (p) {
        var item = el("article", "item");
        [["item-meta", p.venue], ["item-title", p.title]].forEach(function (pair) {
          var w = el("div");
          var s = el(pair[0] === "item-title" ? "h3" : "div", pair[0], pair[1]);
          s.setAttribute("data-grad", "");
          w.appendChild(s);
          item.appendChild(w);
        });
        var aw = el("div");
        var authors = el("p", "item-desc");
        authors.innerHTML = escapeHtml(p.authors).replace(/Ting-Kang Wang\*?/g, function (m) { return "<b>" + m + "</b>"; });
        authors.setAttribute("data-grad", "");
        aw.appendChild(authors);
        item.appendChild(aw);
        if (p.note) {
          var nw = el("div");
          var note = el("p", "item-note", loc(p.note));
          note.setAttribute("data-grad", "");
          nw.appendChild(note);
          item.appendChild(nw);
        }
        var row = el("div", "btn-row small");
        var L = p.links || {};
        if (L.arxiv) row.appendChild(blackButton(t("btn_arxiv"), L.arxiv, true));
        if (L.paper) row.appendChild(blackButton(t("btn_paper"), L.paper, true));
        if (L.openreview) row.appendChild(blackButton(t("btn_openreview"), L.openreview, true));
        if (L.project) row.appendChild(blackButton(t("btn_project"), L.project, true));
        if (L.code) row.appendChild(blackButton(t("btn_code"), L.code, true));
        if (L.dataset) row.appendChild(blackButton(t("btn_dataset"), L.dataset, true));
        item.appendChild(row);
        items.appendChild(item);
      });
      region.appendChild(items);
      root.appendChild(region);
    });
  }

  function renderTimeline(rootId, list) {
    var root = document.getElementById(rootId);
    root.textContent = "";
    list.forEach(function (x) {
      var region = el("div", "region");
      var name = el("div", "region-name");
      var nameIn = el("span", null, periodText(x.period));
      nameIn.setAttribute("data-grad", "");
      name.appendChild(nameIn);
      region.appendChild(name);
      var items = el("div", "items single");
      var item = el("div", "item");
      var rows = [
        ["h3", "item-title", loc(x.org)],
        ["div", "item-meta", loc(x.role) + (x.place ? "  /  " + loc(x.place) : "")],
        ["p", "item-desc", loc(x.desc)]
      ];
      rows.forEach(function (r) {
        if (!r[2]) return;
        var w = el("div");
        var s = el(r[0], r[1], r[2]);
        s.setAttribute("data-grad", "");
        w.appendChild(s);
        item.appendChild(w);
      });
      items.appendChild(item);
      region.appendChild(items);
      root.appendChild(region);
    });
  }

  var SECTIONS = [
    ["nav_top", "#top"], ["nav_about", "#about"], ["nav_publications", "#publications"],
    ["nav_experience", "#experience"], ["nav_education", "#education"], ["nav_contact", "#contact"]
  ];

  function renderMenu() {
    var ul = document.getElementById("menuList");
    ul.textContent = "";
    SECTIONS.forEach(function (s) {
      var li = el("li");
      var wrap = el("span");
      wrap.setAttribute("data-grad", "white");
      var a = el("a", "menu-link", t(s[0]));
      a.href = s[1];
      a.setAttribute("data-grad-link", "");
      a.addEventListener("click", function (e) {
        e.preventDefault();
        closeMenu();
        scrollToHash(s[1]);
      });
      wrap.appendChild(a);
      li.appendChild(wrap);
      ul.appendChild(li);
    });
  }

  function renderLangSelects() {
    document.querySelectorAll("[data-langselect]").forEach(function (nav) {
      nav.textContent = "";
      SITE.languages.forEach(function (l, i) {
        if (i > 0) nav.appendChild(el("span", "sep", "  /  "));
        var a = el("a", l.code === lang ? "active" : "", l.label);
        a.href = "?lang=" + l.code;
        a.setAttribute("hreflang", l.html);
        a.setAttribute("lang", l.html);
        if (l.code === lang) a.setAttribute("aria-current", "true");
        a.addEventListener("click", function (e) {
          e.preventDefault();
          if (l.code === lang) return;
          var inMenu = !document.getElementById("menu").hidden;
          setLang(l.code, true);
          if (inMenu) closeMenu();
        });
        nav.appendChild(a);
      });
    });
  }

  var ICONS = {
    linkedin: '<svg viewBox="0 0 30 30" aria-hidden="true"><circle cx="15" cy="15" r="15" fill="#fff"/><rect x="8.6" y="12.4" width="2.8" height="9" fill="#333"/><circle cx="10" cy="9.4" r="1.7" fill="#333"/><path d="M13.6 12.4h2.7v1.3c.5-.9 1.6-1.6 3.1-1.6 2.6 0 3.3 1.7 3.3 4v5.3h-2.8v-4.7c0-1.2-.3-2.1-1.5-2.1-1.3 0-1.9.9-1.9 2.2v4.6h-2.9z" fill="#333"/></svg>',
    github: '<svg viewBox="0 0 30 30" aria-hidden="true"><circle cx="15" cy="15" r="15" fill="#fff"/><path transform="translate(6.2 6.2) scale(1.1)" fill="#333" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>',
    scholar: '<svg viewBox="0 0 30 30" aria-hidden="true"><circle cx="15" cy="15" r="15" fill="#fff"/><path d="M15 7.5 5.5 14.2h3.6a6 6 0 0 0 11.8 0h3.6z" fill="#333"/><circle cx="15" cy="17.6" r="4.4" fill="#333"/><circle cx="15" cy="17.6" r="2.6" fill="#fff"/></svg>'
  };

  function renderSns() {
    document.querySelectorAll("[data-sns]").forEach(function (box) {
      box.textContent = "";
      [["linkedin", "LinkedIn"], ["github", "GitHub"], ["scholar", "Google Scholar"]].forEach(function (s) {
        var a = el("a");
        a.href = SITE.links[s[0]];
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.setAttribute("aria-label", s[1]);
        a.title = s[1];
        a.innerHTML = ICONS[s[0]];
        box.appendChild(a);
      });
    });
  }

  function renderStatic() {
    document.querySelectorAll("[data-i18n]").forEach(function (n) {
      resetGrad(n);
      n.textContent = t(n.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-link]").forEach(function (a) {
      a.href = linkHref(a.getAttribute("data-link"));
    });
    document.querySelectorAll("[data-show-email]").forEach(function (a) {
      resetGrad(a);
      a.textContent = SITE.email;
    });
    document.querySelectorAll("[data-year]").forEach(function (n) {
      n.textContent = String(new Date().getFullYear());
    });
  }

  function applyEffects(scope, immediate) {
    (scope || document).querySelectorAll("[data-grad]").forEach(function (n) {
      if (n.closest(".menu") && document.getElementById("menu").hidden) return;
      var dark = n.getAttribute("data-grad") === "white";
      gradText(n, { dark: dark, immediate: immediate });
    });
    document.querySelectorAll(".bb-link").forEach(bindButtonHover);
    document.querySelectorAll("[data-grad-link]").forEach(bindGradLink);
  }

  function render() {
    renderStatic();
    renderPublications();
    renderTimeline("expList", SITE.experience);
    renderTimeline("eduList", SITE.education);
    renderMenu();
    renderLangSelects();
    renderSns();
    updateSideTitle(true);
  }

  function setLang(code, animate) {
    lang = code;
    var info = langInfo(code);
    document.documentElement.lang = info.html;
    try { localStorage.setItem("lang", code); } catch (e) { /* ignore */ }
    var url = new URL(location.href);
    if (code === "en") url.searchParams.delete("lang"); else url.searchParams.set("lang", code);
    history.replaceState(null, "", url.pathname + url.search + url.hash);
    render();
    if (animate) applyEffects();
  }

  // ---------- sidebar title follows the section in view ----------
  var currentSection = "nav_top";
  function sideLabel(key) {
    return key === "nav_top" ? SITE.name : t(key);
  }
  function updateSideTitle(force) {
    var node = document.getElementById("sideTitle");
    var label = sideLabel(currentSection);
    if (!force && node.textContent === label) return;
    resetGrad(node);
    node.textContent = label;
    gradText(node, { immediate: true });
  }
  function watchSections() {
    var sections = Array.prototype.slice.call(document.querySelectorAll("[data-section]"));
    function onScroll() {
      var mid = window.innerHeight * 0.4;
      var found = "nav_top";
      sections.forEach(function (s) {
        if (s.getBoundingClientRect().top <= mid) found = s.getAttribute("data-section");
      });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) found = "nav_contact";
      if (found !== currentSection) {
        currentSection = found;
        updateSideTitle(false);
      }
    }
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { ticking = false; onScroll(); });
    }, { passive: true });
    onScroll();
  }

  // ---------- menu ----------
  var menu = document.getElementById("menu");
  var menuBtnWrap = document.getElementById("menuButton");
  var menuBtn = menuBtnWrap.querySelector("button");

  function openMenu() {
    menu.hidden = false;
    document.body.classList.add("menu-open");
    document.documentElement.style.overflow = "hidden";
    menuBtn.setAttribute("aria-expanded", "true");
    gradText(menu.querySelector(".menu-bg"), { inline: false, immediate: true });
    menu.querySelectorAll("[data-grad]").forEach(function (n) {
      gradText(n, { dark: true, immediate: false });
    });
  }
  function closeMenu() {
    menu.hidden = true;
    document.body.classList.remove("menu-open");
    document.documentElement.style.overflow = "";
    menuBtn.setAttribute("aria-expanded", "false");
  }
  menuBtn.addEventListener("click", function () {
    if (menu.hidden) openMenu(); else closeMenu();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !menu.hidden) closeMenu();
  });

  function scrollToHash(hash) {
    var target = hash === "#top" ? null : document.querySelector(hash);
    var y = target ? target.getBoundingClientRect().top + window.scrollY - 40 : 0;
    window.scrollTo({ top: y, behavior: reduced ? "auto" : "smooth" });
  }
  document.querySelector(".logo").addEventListener("click", function (e) {
    e.preventDefault();
    if (!menu.hidden) closeMenu();
    scrollToHash("#top");
  });
  document.getElementById("pageTop").addEventListener("click", function () { scrollToHash("#top"); });

  // ---------- boot ----------
  lang = initialLang();
  setLang(lang, false);
  bindButtonHover(menuBtn);
  applyEffects();
  document.querySelectorAll("[data-grad-image]").forEach(gradImage);
  watchSections();
})();
