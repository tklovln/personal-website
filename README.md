# personal-website

Personal site of Ting-Kang (Tim) Wang. Plain HTML/CSS/JS, no build step.

## Edit content

All text, links, publications, experience and education are in `assets/js/content.js`.
Every localized field has `en`, `zh`, `ja` and `ko` entries. English is the default;
`?lang=zh`, `?lang=ja` or `?lang=ko` opens another language directly.

## Preview locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy on GitHub Pages

Push to `main`, then in the repository go to Settings > Pages and set
Source to "Deploy from a branch", branch `main`, folder `/ (root)`.
The site will be served at https://tklovln.github.io/personal-website/.
