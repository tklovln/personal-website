// All site copy lives here. Edit this file to update the website.
// Each localized field is an object keyed by language: en / zh / ja / ko.

window.SITE = {
  name: "Ting-Kang Wang",
  email: "tim.tkwang@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/tkwang0415/",
    github: "https://github.com/tklovln",
    scholar: "https://scholar.google.com/citations?user=De7dd2EAAAAJ"
  },

  languages: [
    { code: "en", label: "EN", html: "en" },
    { code: "zh", label: "ZH", html: "zh-Hant" },
    { code: "ja", label: "JA", html: "ja" },
    { code: "ko", label: "KO", html: "ko" }
  ],

  ui: {
    nav_top: { en: "Top", zh: "Top", ja: "Top", ko: "Top" },
    nav_about: { en: "About", zh: "About", ja: "About", ko: "About" },
    nav_publications: { en: "Publications", zh: "Publications", ja: "Publications", ko: "Publications" },
    nav_experience: { en: "Experience", zh: "Experience", ja: "Experience", ko: "Experience" },
    nav_education: { en: "Education", zh: "Education", ja: "Education", ko: "Education" },
    nav_contact: { en: "Contact", zh: "Contact", ja: "Contact", ko: "Contact" },

    sec_about: { en: "About", zh: "關於我", ja: "プロフィール", ko: "소개" },
    sec_publications: { en: "Publications", zh: "論文發表", ja: "論文", ko: "논문" },
    sec_experience: { en: "Experience", zh: "工作經歷", ja: "職歴", ko: "경력" },
    sec_education: { en: "Education", zh: "學歷", ja: "学歴", ko: "학력" },

    hero_lead: {
      en: "I build machine learning systems for music, and I play the violin.",
      zh: "我做音樂的機器學習研究，也拉小提琴。",
      ja: "音楽のための機械学習を研究しています。ヴァイオリンも弾きます。",
      ko: "음악을 위한 머신러닝을 연구하고, 바이올린을 연주합니다."
    },
    hero_body: {
      en: "I work at the Original Content Center of Gamania in Taipei. My work covers violin transcription, playing technique detection, instrument synthesis and symbolic music generation, with earlier time at Sony CSL in Tokyo and the Institute of Information Science, Academia Sinica.",
      zh: "目前在台北的遊戲橘子原創內容中心工作。研究主題包含小提琴採譜、演奏技巧偵測、樂器聲音合成與符號音樂生成，過去曾在東京的 Sony CSL 與中央研究院資訊科學研究所進行研究。",
      ja: "現在は台北の Gamania（遊戯橘子）Original Content Center に所属しています。ヴァイオリンの自動採譜、奏法検出、楽器音合成、シンボリック音楽生成などに取り組んできました。これまでに東京の Sony CSL、台湾の中央研究院 資訊科学研究所で研究に携わりました。",
      ko: "현재 타이베이의 감마니아(Gamania) Original Content Center에서 일하고 있습니다. 바이올린 자동 채보, 연주 기법 검출, 악기 음색 합성, 심볼릭 음악 생성을 연구해 왔으며, 도쿄의 Sony CSL과 대만 중앙연구원 정보과학연구소에서 연구한 경험이 있습니다."
    },

    about_p1: {
      en: "I'm Ting-Kang Wang, or Tim. I work on music information retrieval and generative audio, and I care most about instruments that existing models handle poorly. For me that instrument is the violin. I play it myself, and much of my research is an attempt to make machines hear and play it the way violinists do: note by note, but also bow stroke by bow stroke.",
      zh: "我是 Ting-Kang Wang，大家叫我 Tim。我的研究領域是音樂資訊檢索（MIR）與生成式音訊，特別關注那些現有模型處理得不好的樂器。對我來說，那就是小提琴。我自己也拉小提琴，很多研究都是想讓機器像小提琴手一樣去聽、去演奏：不只是音符，還有每一次運弓。",
      ja: "Ting-Kang Wang（Tim）です。音楽情報処理（MIR）と音声生成を専門とし、既存のモデルがうまく扱えない楽器に特に関心があります。私にとってそれはヴァイオリンです。自分でも演奏するので、ヴァイオリニストと同じように、音符だけでなく一つひとつの運弓まで機械が聴き取り、演奏できるようにすることが研究の大きなテーマです。",
      ko: "Ting-Kang Wang, 영어 이름은 Tim입니다. 음악 정보 검색(MIR)과 생성형 오디오를 연구하며, 기존 모델이 잘 다루지 못하는 악기에 특히 관심이 있습니다. 저에게 그 악기는 바이올린입니다. 직접 연주하기도 해서, 기계가 바이올리니스트처럼 음표 하나하나뿐 아니라 활의 움직임까지 듣고 연주할 수 있게 만드는 것이 연구의 중심입니다."
    },
    about_p2: {
      en: "I received my M.S. from the Graduate Institute of Communication Engineering at National Taiwan University and my B.S. in Computer Science from National Tsing Hua University. Along the way I was a research intern at Sony CSL in Tokyo and a research assistant at the Institute of Information Science, Academia Sinica. Today I'm at Gamania's Original Content Center, bringing the same ideas into games and interactive content.",
      zh: "我畢業於國立臺灣大學電信工程學研究所（碩士）與國立清華大學資訊工程學系（學士）。求學期間曾在東京 Sony CSL 擔任研究實習生，也在中央研究院資訊科學研究所擔任研究助理。現在於遊戲橘子原創內容中心，把這些研究帶進遊戲與互動內容。",
      ja: "国立台湾大学 電信工学研究所で修士号、国立清華大学 資訊工学科で学士号を取得しました。在学中は東京の Sony CSL でリサーチインターン、中央研究院 資訊科学研究所でリサーチアシスタントを務めました。現在は Gamania の Original Content Center で、これらの研究をゲームやインタラクティブコンテンツに応用しています。",
      ko: "국립대만대학교 통신공학대학원에서 석사, 국립칭화대학교 컴퓨터공학과에서 학사 학위를 받았습니다. 그 과정에서 도쿄 Sony CSL에서 연구 인턴으로, 중앙연구원 정보과학연구소에서 연구 조교로 일했습니다. 지금은 감마니아 Original Content Center에서 이 연구들을 게임과 인터랙티브 콘텐츠로 옮기고 있습니다."
    },
    about_p3: {
      en: "Outside of research I have taught Unity game design, led the Google Developer Student Club at NTHU, and made VR games. I'm always happy to talk about music tech, games, or violins.",
      zh: "研究之外，我教過 Unity 遊戲設計課、帶過清華大學的 Google Developer Student Club，也做過 VR 遊戲。很樂意聊音樂科技、遊戲或小提琴。",
      ja: "研究以外では、Unity のゲームデザイン講師、清華大学 Google Developer Student Club のテックリードを務め、VR ゲームも制作しました。音楽テクノロジー、ゲーム、ヴァイオリンの話ならいつでも歓迎です。",
      ko: "연구 외에도 Unity 게임 디자인 강의를 했고, 칭화대학교 Google Developer Student Club을 이끌었으며, VR 게임을 만들었습니다. 음악 기술, 게임, 바이올린 이야기는 언제든 환영입니다."
    },

    btn_linkedin: { en: "LinkedIn", zh: "LinkedIn", ja: "LinkedIn", ko: "LinkedIn" },
    btn_github: { en: "GitHub", zh: "GitHub", ja: "GitHub", ko: "GitHub" },
    btn_scholar: { en: "Google Scholar", zh: "Google Scholar", ja: "Google Scholar", ko: "Google Scholar" },
    btn_arxiv: { en: "arXiv", zh: "arXiv", ja: "arXiv", ko: "arXiv" },
    btn_paper: { en: "Paper", zh: "Paper", ja: "Paper", ko: "Paper" },
    btn_project: { en: "Project page", zh: "Project page", ja: "Project page", ko: "Project page" },
    btn_code: { en: "Code", zh: "Code", ja: "Code", ko: "Code" },
    btn_openreview: { en: "OpenReview", zh: "OpenReview", ja: "OpenReview", ko: "OpenReview" },
    btn_workshop: { en: "Workshop", zh: "Workshop", ja: "Workshop", ko: "Workshop" },
    btn_dataset: { en: "Dataset", zh: "Dataset", ja: "Dataset", ko: "Dataset" },
    btn_email: { en: "Send an email", zh: "寄信給我", ja: "メールを送る", ko: "메일 보내기" },

    contact_title: {
      en: "Let's talk",
      zh: "歡迎聯絡",
      ja: "お気軽にご連絡ください",
      ko: "편하게 연락 주세요"
    },
    contact_desc: {
      en: "Research collaborations, talks, internships, or a chat about music and games. Email is the best way to reach me, and I'm also on LinkedIn.",
      zh: "研究合作、演講邀約、實習機會，或只是想聊聊音樂與遊戲，都歡迎來信。也可以在 LinkedIn 上找到我。",
      ja: "共同研究、講演のご依頼、インターンシップ、音楽やゲームの雑談まで、メールでお気軽にどうぞ。LinkedIn でもつながれます。",
      ko: "연구 협업, 강연 요청, 인턴십, 혹은 음악과 게임 이야기까지 메일로 편하게 연락 주세요. LinkedIn에서도 만날 수 있습니다."
    },
    footer_text: {
      en: "For collaborations and inquiries",
      zh: "合作與各項洽詢，歡迎來信",
      ja: "共同研究・お問い合わせはこちら",
      ko: "협업 및 문의"
    },
    page_top: { en: "Page Top", zh: "Page Top", ja: "Page Top", ko: "Page Top" },
    present: { en: "Present", zh: "現在", ja: "現在", ko: "현재" },
    equal: {
      en: "* Equal contribution",
      zh: "* 共同第一作者",
      ja: "* 筆頭著者同等貢献",
      ko: "* 공동 제1저자"
    }
  },

  // Order: newest first. "me" marks the author name to highlight.
  publications: [
    {
      year: 2026,
      title: "LumiComposer: Negotiating Creative Control Between Illumination, Mapping, and Generative Music Models",
      authors: "Chi-Hung Huang, Ting-Kang Wang, Chun-Huang Lin",
      venue: "NeurIPS 2026 Creative AI Track",
      links: {
        openreview: "https://openreview.net/forum?id=QoYWPPU5Vg",
        project: "https://neurips.cc/virtual/2026/loc/sydney/160672"
      }
    },
    {
      year: 2026,
      title: "What Makes Generated Content Functionally Legible? A VLM-Judged Ablation with Executable Ground Truth",
      authors: "Ting-Kang Wang",
      venue: "NeurIPS 2026 Workshop: Who Verifies the Agents?",
      links: {
        openreview: "https://openreview.net/forum?id=VKaimW0KzY",
        project: "https://neurips.cc/virtual/2026/loc/sydney/172984",
        workshop: "https://verify-agents-workshop.github.io/"
      }
    },
    {
      year: 2026,
      title: "VioTech: Frame-Level Violin Playing Technique Detection with Multi-Scale Mixture-of-Experts",
      authors: "Ting-Kang Wang, Vincent K. M. Cheung, Nan-Tien Lai, Li Su",
      venue: "ISMIR 2026",
      links: {
        arxiv: "https://arxiv.org/abs/2611.02680",
        project: "https://tklovln.github.io/VioTech/",
        code: "https://github.com/tklovln/VioTech"
      }
    },
    {
      year: 2026,
      title: "VIOLET: High-Fidelity Violin Synthesis with Techniques and Dynamics",
      authors: "Baotong Tian, Cynthia Lu, Vincent K. M. Cheung, Ting-Kang Wang, Jonathan Churchill, Zhiyao Duan",
      venue: "ISMIR 2026",
      links: {
        arxiv: "https://arxiv.org/abs/2608.07944",
        project: "https://user-tian.github.io/VIOLET_demo",
        code: "https://github.com/User-tian/VIOLET"
      }
    },
    {
      year: 2026,
      title: "VioPTT: Violin Technique-Aware Transcription from Synthetic Data Augmentation",
      authors: "Ting-Kang Wang*, Yueh-Po Peng*, Li Su, Vincent K. M. Cheung",
      venue: "IEEE ICASSP 2026",
      links: {
        arxiv: "https://arxiv.org/abs/2509.23759",
        project: "https://y10ab1.github.io/VioPTT/",
        code: "https://github.com/y10ab1/VioPTT"
      }
    },
    {
      year: 2026,
      title: "Time-Shifted Token Scheduling for Symbolic Music Generation",
      authors: "Ting-Kang Wang, Chih-Pin Tan, Yi-Hsuan Yang",
      venue: "IEEE ICASSP 2026",
      links: {
        arxiv: "https://arxiv.org/abs/2509.23749",
        project: "https://tklovln.github.io/dp-demo/",
        code: "https://github.com/tklovln/dp-scheduling"
      }
    },
    {
      year: 2025,
      title: "Is Transfer Learning Necessary for Violin Transcription?",
      authors: "Yueh-Po Peng, Ting-Kang Wang, Li Su, Vincent K. M. Cheung",
      venue: "ISMIR 2025 Late-Breaking Demo",
      links: {
        arxiv: "https://arxiv.org/abs/2508.13516",
        project: "https://tklovln.github.io/violin-transcription-demopage/"
      }
    },
    {
      year: 2024,
      title: "AnimalSense: Understanding Beyond-human Sensory Capabilities of Animals via VR Games",
      authors: "Yu-Lun Hsu, Chien-Ting Lu, Li-Chun Lu, Chih-Heng Tam, Yu-Chieh Sun, Ting-Kang Wang",
      venue: "CHI 2024 Extended Abstracts, Student Game Competition",
      note: {
        en: "Runner-up, CHI 2024 Student Game Competition",
        zh: "CHI 2024 Student Game Competition 亞軍",
        ja: "CHI 2024 Student Game Competition 準優勝",
        ko: "CHI 2024 Student Game Competition 준우승"
      },
      links: {
        paper: "https://doi.org/10.1145/3613905.3648102"
      }
    },
    {
      year: 2024,
      title: "S3: A Symbolic Music Dataset for Computational Music Analysis of Symphonies",
      authors: "Zih-Syuan Lin*, Yu-Chia Kuo*, Tzu-Yun Hung, Wei-Yang Lin, Ya-Hsuan Chu, Ting-Kang Wang, Jing-Heng Huang, Chien Chang, Christofer Julio, Gloria Hsieh, Li Su",
      venue: "ISMIR 2024 Late-Breaking Demo",
      links: {
        paper: "https://archives.ismir.net/ismir2024/latebreaking/000037.pdf",
        project: "https://ismir2024program.ismir.net/lbd_463.html",
        dataset: "https://github.com/iis-mctl/mctl-symphony-dataset"
      }
    }
  ],

  experience: [
    {
      period: { from: "2025", to: null },
      org: {
        en: "Gamania Digital Entertainment",
        zh: "遊戲橘子數位科技",
        ja: "Gamania Digital Entertainment",
        ko: "감마니아 디지털 엔터테인먼트"
      },
      role: {
        en: "Original Content Center",
        zh: "原創內容中心",
        ja: "Original Content Center",
        ko: "Original Content Center"
      },
      place: { en: "Taipei", zh: "台北", ja: "台北", ko: "타이베이" },
      desc: {
        en: "Research on generative audio and game content, including game asset generation and music and sound tools for game production.",
        zh: "研究生成式音訊與遊戲內容，包含遊戲素材生成，以及用於遊戲製作的音樂與音效工具。",
        ja: "生成音声とゲームコンテンツの研究。ゲームアセット生成や、ゲーム制作のための音楽・効果音ツールに取り組んでいます。",
        ko: "생성형 오디오와 게임 콘텐츠를 연구합니다. 게임 에셋 생성, 게임 제작을 위한 음악 및 사운드 도구를 다룹니다."
      }
    },
    {
      period: { from: "2025", to: "2025" },
      org: {
        en: "Sony Computer Science Laboratories",
        zh: "Sony Computer Science Laboratories",
        ja: "ソニーコンピュータサイエンス研究所",
        ko: "Sony Computer Science Laboratories"
      },
      role: { en: "Research Intern", zh: "研究實習生", ja: "リサーチインターン", ko: "연구 인턴" },
      place: { en: "Tokyo", zh: "東京", ja: "東京", ko: "도쿄" },
      desc: {
        en: "Violin transcription and playing technique analysis with Vincent K. M. Cheung. The work led to VioPTT (ICASSP 2026) and VioTech (ISMIR 2026).",
        zh: "與 Vincent K. M. Cheung 合作小提琴採譜與演奏技巧分析，成果發表為 VioPTT（ICASSP 2026）與 VioTech（ISMIR 2026）。",
        ja: "Vincent K. M. Cheung 氏とヴァイオリンの自動採譜と奏法解析に取り組み、VioPTT（ICASSP 2026）と VioTech（ISMIR 2026）として発表しました。",
        ko: "Vincent K. M. Cheung과 바이올린 채보 및 연주 기법 분석을 연구했고, VioPTT(ICASSP 2026)와 VioTech(ISMIR 2026)로 발표했습니다."
      }
    },
    {
      period: { from: "2023", to: "2025" },
      org: {
        en: "Institute of Information Science, Academia Sinica",
        zh: "中央研究院 資訊科學研究所",
        ja: "中央研究院 資訊科学研究所",
        ko: "중앙연구원 정보과학연구소"
      },
      role: { en: "Research Assistant", zh: "研究助理", ja: "リサーチアシスタント", ko: "연구 조교" },
      place: { en: "Taipei", zh: "台北", ja: "台北", ko: "타이베이" },
      desc: {
        en: "Music information retrieval research with Li Su, focused on violin transcription and expressive performance.",
        zh: "於蘇黎老師的實驗室從事音樂資訊檢索研究，主題為小提琴採譜與表情演奏。",
        ja: "Li Su 氏の研究室で音楽情報処理の研究に従事。ヴァイオリンの採譜と表現的演奏を中心に取り組みました。",
        ko: "Li Su 교수 연구실에서 음악 정보 검색을 연구했으며, 바이올린 채보와 표현적 연주에 집중했습니다."
      }
    },
    {
      period: { from: "2022", to: "2023" },
      org: {
        en: "Google Developer Student Club, NTHU",
        zh: "Google Developer Student Club 清華大學",
        ja: "Google Developer Student Club 清華大学",
        ko: "Google Developer Student Club 칭화대학교"
      },
      role: { en: "Tech Lead", zh: "技術負責人", ja: "テックリード", ko: "테크 리드" },
      place: { en: "Hsinchu", zh: "新竹", ja: "新竹", ko: "신주" },
      desc: {
        en: "Led student teams building web and mobile apps with Flutter and Google Cloud.",
        zh: "帶領學生團隊使用 Flutter 與 Google Cloud 開發網頁與行動應用程式。",
        ja: "Flutter と Google Cloud を使った Web・モバイルアプリ開発で学生チームをリードしました。",
        ko: "Flutter와 Google Cloud로 웹과 모바일 앱을 만드는 학생 팀을 이끌었습니다."
      }
    },
    {
      period: { from: "2022", to: "2022" },
      org: { en: "Sora Education", zh: "Sora Education", ja: "Sora Education", ko: "Sora Education" },
      role: {
        en: "Unity Game Design Lecturer",
        zh: "Unity 遊戲設計講師",
        ja: "Unity ゲームデザイン講師",
        ko: "Unity 게임 디자인 강사"
      },
      place: { en: "Taiwan", zh: "台灣", ja: "台湾", ko: "대만" },
      desc: {
        en: "Taught a full-time summer course on game design and C# programming in Unity.",
        zh: "擔任暑期全職 Unity 遊戲設計課程講師，教授遊戲設計與 C# 程式。",
        ja: "Unity によるゲームデザインと C# プログラミングの夏期講座を担当しました。",
        ko: "Unity 게임 디자인과 C# 프로그래밍 여름 정규 과정을 가르쳤습니다."
      }
    }
  ],

  education: [
    {
      period: { from: "2023", to: "2025" },
      org: {
        en: "National Taiwan University",
        zh: "國立臺灣大學",
        ja: "国立台湾大学",
        ko: "국립대만대학교"
      },
      role: {
        en: "M.S., Graduate Institute of Communication Engineering",
        zh: "電信工程學研究所 碩士",
        ja: "電信工学研究所 修士",
        ko: "통신공학대학원 석사"
      },
      place: { en: "Taipei", zh: "台北", ja: "台北", ko: "타이베이" },
      desc: {
        en: "Research in music information retrieval and symbolic music generation.",
        zh: "研究音樂資訊檢索與符號音樂生成。",
        ja: "音楽情報処理とシンボリック音楽生成を研究。",
        ko: "음악 정보 검색과 심볼릭 음악 생성을 연구했습니다."
      }
    },
    {
      period: { from: "2019", to: "2023" },
      org: {
        en: "National Tsing Hua University",
        zh: "國立清華大學",
        ja: "国立清華大学",
        ko: "국립칭화대학교"
      },
      role: {
        en: "B.S., Computer Science",
        zh: "資訊工程學系 學士",
        ja: "資訊工学科 学士",
        ko: "컴퓨터공학과 학사"
      },
      place: { en: "Hsinchu", zh: "新竹", ja: "新竹", ko: "신주" },
      desc: {
        en: "Machine learning and computer vision research, plus a lot of hackathons and game projects.",
        zh: "從事機器學習與電腦視覺研究，也參加了許多黑客松與遊戲專案。",
        ja: "機械学習とコンピュータビジョンの研究のほか、多くのハッカソンやゲーム制作に参加しました。",
        ko: "머신러닝과 컴퓨터 비전을 연구했고, 여러 해커톤과 게임 프로젝트에 참여했습니다."
      }
    }
  ]
};
