/* ===============================
   Multi-language content & logic
   for Yash Pandey Portfolio
   Default: English
   =============================== */

/** Helper: Safe setters **/
function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el && typeof html === "string") el.innerHTML = html;
}
function setText(id, text) {
  const el = document.getElementById(id);
  if (el && typeof text === "string") el.textContent = text;
}
function setList(id, items) {
  const el = document.getElementById(id);
  if (el && Array.isArray(items)) {
    el.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
  }
}

/* ===============================
   CONTENT: Full data in 5 languages
   (matches your existing sections/IDs)
   =============================== */
const content = {
  /* -------- ENGLISH -------- */
  en: {
    docLang: "en",
    nav: {
      about: "About Me",
      education: "Education",
      experience: "Experience",
      skills: "Skills",
      research: "Research",
      volunteer: "Volunteer",
      references: "References",
      contact: "Contact"
    },
    heroTitle: "Welcome to Yash Pandey's Portfolio",
    heroSubtitle: "Exploring Sustainable Energy and Beyond",
    heroCta: "Explore",

    aboutTitle: "About Me",
    aboutText:
      "I am Yash Pandey, a Ph.D. student (Electrical & Electronic Engineering) at National Shizuoka University, Japan. My work focuses on hybrid renewable energy microgrids and sustainable rural electrification. I combine HOMER Pro simulations, MATLAB analysis, and regression-based modeling to deliver practical, scalable solutions for underserved communities.",
    aboutHobbies:
      "<strong>Hobbies:</strong> Playing Football, Poetry Writing, Guitar Playing, Novel Reading, Travelling, Photography, Cooking",
    aboutAffiliations: "<strong>Affiliations:</strong>",
    aboutAffiliationsList: [
      "IAAM: International Association of Advanced Materials, Sweden."
    ],
    aboutFreelance: "<strong>Freelance Consulting:</strong>",
    aboutFreelanceList: [
      "Japan Development Private Limited, Lucknow, India.",
      "SALA Energy Corporation, Hamamatsu, Japan.",
      "Akamatsu Electric Company Limited, Iwata, Japan."
    ],
    aboutAddress:
      "<strong>Current Address:</strong> Room No. 102, Akebono Ryo, Shizuoka University Dormitory, Shijimizuka, Hamamatsu, Shizuoka, Japan.",

    educationTitle: "Education",
    educationList: [
      "<strong>Ph.D. in Electrical & Electronic Engineering</strong><br>National University Corporation Shizuoka University, Hamamatsu, Japan<br><em>Expected Graduation:</em> September 2028<br><em>Research Topic:</em> A Dynamic Framework for Adaptive Hybrid Renewable Energy Microgrids: Integrating Socio-Economic Growth, Techno-Economic Optimization, and Resilience in Rural Electrification.",
      "<strong>Master’s degree in Electrical & Electronic Engineering</strong><br>National University Corporation Shizuoka University, Hamamatsu, Japan<br><em>Graduation:</em> September 2025<br><em>Research Topic:</em> A Study of Optimal Capacity and Planning for Rural Electrification using Hybrid Microgrid Across Load Variability and Climatic Zones.<br><em>Remarks:</em> Recipient of ABP Full Scholarship (2023–2025), GPA: 2.9.",
      "<strong>Advance Diploma in Industrial Safety (ADIS)</strong><br>Regional Labour Institute, Kolkata, India — June 2022 (1st Class).",
      "<strong>B.Tech. in Electrical Engineering</strong><br>Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar, India — July 2020 (CGPA: 7.77).",
      "<strong>12th Standard (SSCE)</strong><br>Sir Padampat Singhania Education Centre, Kanpur, India — May 2016 (70%).",
      "<strong>10th Standard (SSE)</strong><br>Puranchandra Vidya Niketan, Kanpur, India — May 2014 (CGPA: 6.8)."
    ],

    experienceTitle: "Experience",
    experienceList: [
      "<strong>Research Assistant (RA)</strong><br>National Shizuoka University — <em>Current</em><br>Hybrid renewable energy microgrids research: HOMER Pro simulations for PV/BESS/DG sizing, analysis of GHI & load datasets, regression models; figures, manuscript drafting, reviewer responses. School of Electrical & Electronic Engineering. Reporting Supervisor: Prof. Hitoshi Haga.",
      "<strong>Teaching Assistant (TA)</strong><br>National Shizuoka University — Aug 2023 – Sep 2025<br>Taught Glow Discharge and Arc Discharge to bachelor’s students. Reporting Supervisor: Assoc. Prof. Hironobu Matsuo.",
      "<strong>Research Intern</strong><br>Nanhua University, Taiwan — Sep 2019 – Feb 2020 (Prof. Shin Chi Lai).",
      "<strong>Research Intern</strong><br>Asia University, Taiwan — Nov 2019 – Dec 2019 (Prof. T. Chen).",
      "<strong>Summer Intern</strong><br>TATA POWER, Odisha, India — May 2018 – Jun 2018.",
      "<strong>Research Intern</strong><br>KIIT University, India — Jun 2017 – Aug 2018 (Prof. B. B. Kar)."
    ],

    skillsTitle: "Skills",
    skillsLanguagesTitle: "Languages",
    skillsLanguagesList: [
      "English",
      "Japanese (Basic)",
      "Hindi",
      "Bhojpuri",
      "Bengali",
      "Odia"
    ],
    skillsCoursesTitle: "Courses",
    skillsCoursesList: [
      "TCS iON — Making Impactful Presentations",
      "TCS iON — Corporate Etiquette",
      "TCS iON — Writing an Effective Email",
      "TCS iON — Being Prepared for Group Discussions",
      "TCS iON — Developing Soft Skills Industry Needs",
      "IIT Kanpur — Potential Utility of Fly Ash and development into near-whitened polymer-like structures"
    ],
    skillsCertificationsTitle: "Certifications",
    skillsCertificationsList: [
      "VV Giri National Labour Institute — Code on Occupational Safety and Working Conditions",
      "VV Giri National Labour Institute — Addressing Source State Vulnerability to Distress Migration, Trafficking, Child & Bonded Labour",
      "VV Giri National Labour Institute — Online Sensitization: Prevention/Elimination of Bonded & Child Bonded Labour",
      "DGFASLI — Half-Day Training on Housekeeping & Cleanliness",
      "VV Giri National Labour Institute — Good Governance Through Labour Inspection",
      "TATA-POWER Summer Internship Certificate",
      "KITT FEST 2017 Certificate",
      "IIT Kanpur — Potential Utility of Fly Ash Certificate",
      "Texas Instruments USA IICDC-2019 Business Test Certificate",
      "Nanhua University Semester Course Completion",
      "ITRI Taiwan — Industry Interface Certificate",
      "Chung Cheng University Winter School Certificate",
      "Nanhua University Research Internship Certificate",
      "NHU — Teaching High School Students (Taiwan)",
      "Nanhua University — Award for Outstanding Life Education Personnel & National Life",
      "Nanhua University — New Southbound Life Education Program",
      "IEEE — Scope & Benefits of IoT; Graduate Member",
      "Central Vigilance Commission of India — Integrity Pledge",
      "Ministry of Labour & Employment (India) — No Child Labour Pledge"
    ],

    researchTitle: "Research and Publications",
    researchPapersTitle: "Research Papers",
    researchPublishedTitle: "Published",
    researchPublishedList: [
      "Advancing Sustainable Energy: Exploring New Frontiers and Opportunities in Green Transition — Wiley Publications.",
      "Bridging Complexity and Accessibility: A Novel Model for PV and BESS Capacity Estimation in Rural Microgrids Near the Equatorial Region — Elsevier, e-Prime.",
      "A Unified PV–BESS Capacity Estimation Framework for Rural Microgrids: From Equatorial Roots to Global Regions — IEEE Xplore (in press)."
    ],
    researchUpcomingTitle: "Under Review / Upcoming",
    researchUpcomingList: [
      "Piezoelectric metamaterials for energy harvesting — Elsevier (under peer review).",
      "Accelerating the Global Shift to Renewable Energy: Strategic Pathways for Achieving Net-Zero Emissions — Book of Abstracts (extended)."
    ],
    researchConferencesTitle: "Conferences",
    researchConferencesList: [
      "International Conference on Green Technology & Sustainability — Nanhua University, Taiwan.",
      "KOSMOS — AR/VR for Industry, Kaohsiung Convention Centre, Taiwan.",
      "JSES 2024 — Load Variability impacts on capacity & NPC, Sapporo City University, Japan.",
      "9th International Congress & Exhibition on Arsenic in the Environment — KIIT University, India."
    ],

    volunteerTitle: "Volunteer Work",
    volunteerText:
      "ATTAC NGO: Built website content and worked as Campaign Coordinator & Social Media Manager.",

    referencesTitle: "References",
    referencesList: [
      "Prof. Hitoshi Haga — College of Engineering, Division of Electrical & Electronic Engineering, Shizuoka University.",
      "Assoc. Prof. Hironobu Matsuo — Department of Electrical & Electronic Engineering, National Shizuoka University.",
      "Dr. Sushil Yadav Yamamoto — Registered Consultant, Ministry of Agriculture, Forestry and Fisheries (Japan).",
      "Prof. Satyendra Patnaik — Advisor to Founder, KIIT & KISS.",
      "Prof. (Dr.) Jyoti Prakash Maity — National Chung Cheng University / KIIT University.",
      "Prof. Byomkesh Nayak — Dean, School of Electrical Engineering, KIIT University.",
      "Prof. Congo Tak Shing CHING — Graduate Institute of Biomedical Engineering, National Chung Hsing University.",
      "Mr. Sanatan — Deputy Secretary, Ministry of Skill Development & Entrepreneurship, Government of India."
    ],

    contactTitle: "Contact",
    contactEmail:
      "Email: yashpdelhi@gmail.com, yashpjapan@yahoo.com",
    contactInstitutionalEmail:
      "Institutional Email: pandey.yash.23@shizuoka.ac.jp",
    contactPhone: "Mobile: +81-7090976618, +91-9455918918"
  },

  /* -------- JAPANESE -------- */
  ja: {
    docLang: "ja",
    nav: {
      about: "私について",
      education: "学歴",
      experience: "経験",
      skills: "スキル",
      research: "研究",
      volunteer: "ボランティア",
      references: "参考",
      contact: "連絡先"
    },
    heroTitle: "ヤシュ・パンディのポートフォリオへようこそ",
    heroSubtitle: "持続可能なエネルギーとその先を探求する",
    heroCta: "もっと見る",

    aboutTitle: "私について",
    aboutText:
      "私はヤシュ・パンディです。静岡大学 工学部 電子物質科学専攻（電気電子工学）博士課程在籍。ハイブリッド再生可能エネルギーによる農村電化を研究し、HOMER/MATLABと回帰モデルを用いて、実装可能でスケーラブルな計画を提案しています。",
    aboutHobbies:
      "<strong>趣味:</strong> サッカー、詩の執筆、ギター、読書、旅行、写真、料理",
    aboutAffiliations: "<strong>所属:</strong>",
    aboutAffiliationsList: ["IAAM（国際先端材料協会・スウェーデン）"],
    aboutFreelance: "<strong>フリーランスコンサルティング:</strong>",
    aboutFreelanceList: [
      "Japan Development Private Limited（ラクナウ、インド）",
      "SALA Energy Corporation（浜松、日本）",
      "Akamatsu Electric Company Limited（磐田、日本）"
    ],
    aboutAddress:
      "<strong>現住所:</strong> 〒— 静岡大学 曙寮 102号室（静岡県浜松市蜆塚）",

    educationTitle: "学歴",
    educationList: [
      "<strong>博士（電気電子工学）</strong><br>国立大学法人 静岡大学（浜松）<br><em>修了見込:</em> 2028年9月<br><em>研究課題:</em> 社会経済成長・経済最適化・レジリエンスを統合した適応型ハイブリッド再エネ・マイクログリッドの動的フレームワーク。",
      "<strong>修士（電気電子工学）</strong><br>国立大学法人 静岡大学（浜松）<br><em>修了:</em> 2025年9月（GPA 2.9）<br><em>研究課題:</em> 変動負荷・気候帯を考慮した農村電化の最適容量・計画（ハイブリッドMG）。<br>ABP全額奨学生（2023–2025）。",
      "<strong>産業安全 上級ディプロマ（ADIS）</strong><br>Regional Labour Institute（コルカタ）— 2022年6月（首席）。",
      "<strong>学士（電気工学）</strong><br>KIIT大学（ブバネーシュワル）— 2020年7月（CGPA 7.77）。",
      "12年生（2016年5月、70%） — Sir Padampat Singhania Education Centre（カンプル）",
      "10年生（2014年5月、CGPA 6.8） — Puranchandra Vidya Niketan（カンプル）"
    ],

    experienceTitle: "経験",
    experienceList: [
      "<strong>研究補助員（RA）</strong><br>静岡大学 — <em>在籍中</em><br>再エネハイブリッドMG研究、HOMERシミュレーション、GHI/負荷データ解析、回帰モデル、図表作成・論文執筆補助。指導：芳賀仁志 教授。",
      "<strong>ティーチング・アシスタント（TA）</strong><br>静岡大学 — 2023年8月–2025年9月<br>学部向けグロー放電・アーク放電の講義補助。指導：松尾弘信 准教授。",
      "研究インターン — 南華大学（2019年9月–2020年2月、Shin Chi Lai教授）",
      "研究インターン — 亜洲大学（2019年11月–2019年12月、T. Chen教授）",
      "サマーインターン — TATA POWER（2018年5月–2018年6月）",
      "研究インターン — KIIT大学（2017年6月–2018年8月、B. B. Kar教授）"
    ],

    skillsTitle: "スキル",
    skillsLanguagesTitle: "言語",
    skillsLanguagesList: [
      "英語",
      "日本語（基礎）",
      "ヒンディー語",
      "ボージュプリー語",
      "ベンガル語",
      "オディア語"
    ],
    skillsCoursesTitle: "コース",
    skillsCoursesList: [
      "TCS iON：インパクトのあるプレゼン",
      "TCS iON：コーポレート・エチケット",
      "TCS iON：効果的なメール作成",
      "TCS iON：グループディスカッション対策",
      "TCS iON：業界が求めるソフトスキル",
      "IITカンプール：フライアッシュ活用とポリマー様構造"
    ],
    skillsCertificationsTitle: "認定・証明",
    skillsCertificationsList: [
      "VV Giri 国立労働研究所：労働安全衛生関連",
      "同：移住・人身取引・児童/債務労働の脆弱性対応",
      "同：児童/債務労働の防止オンライン研修",
      "DGFASLI：ハウスキーピング／清潔研修",
      "同：労働検査によるガバナンス強化",
      "TATA-POWER サマーインターン証明",
      "KITT FEST 2017 証明",
      "IITカンプール：フライアッシュ活用",
      "Texas Instruments IICDC-2019 ビジネステスト",
      "南華大学 セメスター修了証",
      "ITRI 台湾：インダストリ・インターフェース",
      "中正大学 ウィンタースクール修了証",
      "南華大学 研究インターン修了証",
      "NHU：台湾高校での指導証明",
      "南華大学：ライフ教育 優秀者・国家賞",
      "南華大学：ニューサウスバウンド ライフ教育",
      "IEEE：IoTの範囲と利点・Graduate Member",
      "インド中央信義委員会：インテグリティ宣誓",
      "インド労働雇用省：児童労働反対誓約"
    ],

    researchTitle: "研究と出版物",
    researchPapersTitle: "研究論文",
    researchPublishedTitle: "掲載済み",
    researchPublishedList: [
      "持続可能エネルギーの推進：グリーントランジションの新境地 — Wiley",
      "農村MGのPV・BESS容量推定：複雑性とアクセス性の橋渡し — Elsevier e-Prime",
      "農村MGのPV–BESS統一推定フレームワーク — IEEE Xplore（印刷中）"
    ],
    researchUpcomingTitle: "査読中・予定",
    researchUpcomingList: [
      "エネルギーハーベスティングのための圧電メタマテリアル（査読中）",
      "再エネへの世界的移行を加速する戦略（拡張要旨）"
    ],
    researchConferencesTitle: "学会・会議",
    researchConferencesList: [
      "南華大学：Green Technology & Sustainability",
      "KOSMOS：AR/VR（高雄）",
      "JSES 2024（札幌市立大学）",
      "Arsenic in the Environment（KIIT, インド）"
    ],

    volunteerTitle: "ボランティア活動",
    volunteerText:
      "ATTAC NGO：Webコンテンツ作成、キャンペーン調整、SNS運用",

    referencesTitle: "参考（推薦者）",
    referencesList: [
      "芳賀仁志 教授（静岡大学）",
      "松尾弘信 准教授（静岡大学）",
      "Dr. Sushil Yadav Yamamoto（MAFF登録コンサルタント）",
      "Prof. Satyendra Patnaik（KIIT & KISS）",
      "Prof. Jyoti Prakash Maity（NCCU / KIIT）",
      "Prof. Byomkesh Nayak（KIIT）",
      "Prof. Congo Tak Shing CHING（NCHU）",
      "Mr. Sanatan（インド政府技能開発省）"
    ],

    contactTitle: "連絡先",
    contactEmail: "メール: yashpdelhi@gmail.com, yashpjapan@yahoo.com",
    contactInstitutionalEmail: "学内メール: pandey.yash.23@shizuoka.ac.jp",
    contactPhone: "携帯: +81-7090976618, +91-9455918918"
  },

  /* -------- CHINESE (Simplified) -------- */
  zh: {
    docLang: "zh",
    nav: {
      about: "关于我",
      education: "教育",
      experience: "经历",
      skills: "技能",
      research: "研究",
      volunteer: "志愿工作",
      references: "推荐人",
      contact: "联系方式"
    },
    heroTitle: "欢迎来到 Yash Pandey 的作品集",
    heroSubtitle: "探索可持续能源及更多",
    heroCta: "了解更多",

    aboutTitle: "关于我",
    aboutText:
      "我是 Yash Pandey，日本静冈大学电气与电子工程博士生。研究方向为混合可再生能源微电网与农村电气化，结合 HOMER/MATLAB 与回归建模，面向可落地、可扩展的解决方案。",
    aboutHobbies:
      "<strong>爱好:</strong> 踢足球、写诗、弹吉他、读小说、旅行、摄影、烹饪",
    aboutAffiliations: "<strong>隶属关系:</strong>",
    aboutAffiliationsList: ["IAAM：国际先进材料协会（瑞典）"],
    aboutFreelance: "<strong>自由咨询:</strong>",
    aboutFreelanceList: [
      "Japan Development Private Limited（勒克瑙，印度）",
      "SALA Energy Corporation（滨松，日本）",
      "Akamatsu Electric Company Limited（磐田，日本）"
    ],
    aboutAddress:
      "<strong>现住址:</strong> 日本静冈县滨松市蜆冢，静冈大学曙宿舍102室",

    educationTitle: "教育",
    educationList: [
      "<strong>博士（电气与电子工程）</strong><br>静冈大学（滨松）<br><em>预计毕业:</em> 2028年9月<br><em>研究课题:</em> 面向农村电气化的自适应混合可再生能源微电网动态框架：融合社会经济增长、技术经济优化与韧性。",
      "<strong>硕士（电气与电子工程）</strong><br>静冈大学（滨松）<br><em>毕业:</em> 2025年9月，GPA 2.9<br><em>研究课题:</em> 基于负荷变动与气候分区的农村电气化最优容量与规划（混合微电网）。<br>ABP 全额奖学金（2023–2025）。",
      "<strong>工业安全高级文凭（ADIS）</strong><br>加尔各答区域劳动研究所 — 2022年6月（优等）。",
      "<strong>电气工程学士</strong><br>KIIT 大学 — 2020年7月（CGPA 7.77）。",
      "12年级（2016年5月，70%）— SPS 教育中心（坎普尔）",
      "10年级（2014年5月，CGPA 6.8）— PVN 学校（坎普尔）"
    ],

    experienceTitle: "经历",
    experienceList: [
      "<strong>研究助理（RA）</strong> — 静冈大学（至今）<br>混合微电网研究、HOMER 仿真、GHI/负荷数据分析、回归建模、论文图表与稿件支持。导师：Hitoshi Haga 教授。",
      "<strong>教学助理（TA）</strong> — 静冈大学（2023/08–2025/09）<br>为本科生讲授辉光放电与电弧放电。导师：Hironobu Matsuo 副教授。",
      "研究实习 — 南华大学（2019/09–2020/02）",
      "研究实习 — 亚洲大学（2019/11–2019/12）",
      "暑期实习 — TATA POWER（2018/05–2018/06）",
      "研究实习 — KIIT 大学（2017/06–2018/08）"
    ],

    skillsTitle: "技能",
    skillsLanguagesTitle: "语言",
    skillsLanguagesList: ["英语", "日语（基础）", "印地语", "博杰普尔语", "孟加拉语", "奥里亚语"],
    skillsCoursesTitle: "课程",
    skillsCoursesList: [
      "TCS iON：高影响力演示",
      "TCS iON：商务礼仪",
      "TCS iON：高效邮件写作",
      "TCS iON：小组讨论准备",
      "TCS iON：行业软技能",
      "IIT 坎普尔：粉煤灰的潜在用途与聚合物结构"
    ],
    skillsCertificationsTitle: "认证",
    skillsCertificationsList: [
      "VV Giri 国家劳动研究所：职业安全与工作条件",
      "同：迁徙/拐卖/童工与债务劳动脆弱性",
      "同：消除童工与债务劳动在线课程",
      "DGFASLI：保洁与清洁培训",
      "同：劳动监察治理提升",
      "TATA-POWER 暑期实习证书",
      "KITT FEST 2017 证书",
      "IIT 坎普尔 粉煤灰应用证书",
      "TI IICDC-2019 商业测试证书",
      "南华大学 学期课程结业证",
      "台湾工研院（ITRI）接口证书",
      "中正大学 冬季学校证书",
      "南华大学 研究实习证书",
      "NHU 台湾高中授课证书",
      "南华大学 生活教育优秀人员奖",
      "南华大学 新南向生活教育证书",
      "IEEE：IoT 证书；毕业会员",
      "印度中央监察委员会：诚信承诺",
      "印度劳工部：禁止童工承诺"
    ],

    researchTitle: "研究与出版物",
    researchPapersTitle: "论文",
    researchPublishedTitle: "已发表",
    researchPublishedList: [
      "推进可持续能源：绿色转型的新前沿 — Wiley",
      "农村微电网 PV/BESS 容量估算新模型 — Elsevier e-Prime",
      "农村微电网 PV–BESS 统一估算框架 — IEEE Xplore（待刊）"
    ],
    researchUpcomingTitle: "在审 / 即将发表",
    researchUpcomingList: [
      "用于能量采集的压电超材料（审稿中）",
      "加速全球可再生能源转型的战略路径（扩展摘要）"
    ],
    researchConferencesTitle: "会议",
    researchConferencesList: [
      "南华大学：绿色技术与可持续性",
      "KOSMOS：AR/VR（高雄）",
      "JSES 2024（札幌市立大学）",
      "环境砷国际大会（KIIT，印度）"
    ],

    volunteerTitle: "志愿工作",
    volunteerText:
      "ATTAC NGO：网站内容建设、活动统筹与社媒管理。",

    referencesTitle: "推荐人",
    referencesList: [
      "Hitoshi Haga 教授（静冈大学）",
      "Hironobu Matsuo 副教授（静冈大学）",
      "Dr. Sushil Yadav Yamamoto（日本农林水产省顾问）",
      "Prof. Satyendra Patnaik（KIIT & KISS）",
      "Prof. Jyoti Prakash Maity（NCCU / KIIT）",
      "Prof. Byomkesh Nayak（KIIT）",
      "Prof. Congo Tak Shing CHING（NCHU）",
      "Mr. Sanatan（印度技能发展与创业部）"
    ],

    contactTitle: "联系方式",
    contactEmail: "电子邮件: yashpdelhi@gmail.com, yashpjapan@yahoo.com",
    contactInstitutionalEmail: "机构邮箱: pandey.yash.23@shizuoka.ac.jp",
    contactPhone: "电话: +81-7090976618, +91-9455918918"
  },

  /* -------- HINDI -------- */
  hi: {
    docLang: "hi",
    nav: {
      about: "मेरे बारे में",
      education: "शिक्षा",
      experience: "अनुभव",
      skills: "कौशल",
      research: "अनुसंधान",
      volunteer: "स्वयंसेवा",
      references: "संदर्भ",
      contact: "संपर्क"
    },
    heroTitle: "यश पांडे के पोर्टफोलियो में आपका स्वागत है",
    heroSubtitle: "सतत ऊर्जा और उससे आगे की खोज",
    heroCta: "देखें",

    aboutTitle: "मेरे बारे में",
    aboutText:
      "मैं यश पांडे, नेशनल शिज़ुओका यूनिवर्सिटी (जापान) में इलेक्ट्रिकल एवं इलेक्ट्रॉनिक इंजीनियरिंग का पीएचडी छात्र हूँ। मेरा शोध हाइब्रिड नवीकरणीय ऊर्जा माइक्रोग्रिड और ग्रामीण विद्युतीकरण पर केंद्रित है—HOMER/MATLAB व रिग्रेशन-आधारित मॉडलिंग के साथ।",
    aboutHobbies:
      "<strong>शौक:</strong> फ़ुटबॉल, कविता, गिटार, उपन्यास, यात्रा, फ़ोटोग्राफ़ी, कुकिंग",
    aboutAffiliations: "<strong>संबद्धताएँ:</strong>",
    aboutAffiliationsList: ["IAAM: इंटरनेशनल एसोसिएशन ऑफ़ एडवांस्ड मैटेरियल्स (स्वीडन)"],
    aboutFreelance: "<strong>फ्रीलांस कंसल्टिंग:</strong>",
    aboutFreelanceList: [
      "Japan Development Private Limited, लखनऊ, भारत",
      "SALA Energy Corporation, हमामात्सु, जापान",
      "Akamatsu Electric Company Limited, इवाता, जापान"
    ],
    aboutAddress:
      "<strong>वर्तमान पता:</strong> कक्ष 102, अकेबोनो र्यो, शिज़ुओका यूनिवर्सिटी डॉर्मिटरी, शिज़िमिज़ुका, हमामात्सु, जापान",

    educationTitle: "शिक्षा",
    educationList: [
      "<strong>पीएचडी (इलेक्ट्रिकल एवं इलेक्ट्रॉनिक इंजीनियरिंग)</strong><br>नेशनल शिज़ुओका यूनिवर्सिटी, जापान — <em>उत्तीर्ण अपेक्षित:</em> सितम्बर 2028<br><em>विषय:</em> सामाजिक-आर्थिक वृद्धि, टेक्नो-इकॉनमिक ऑप्टिमाइज़ेशन और रेज़िलिएंस को समेकित करता अनुकूली हाइब्रिड नवीकरणीय माइक्रोग्रिड का डायनेमिक फ्रेमवर्क।",
      "<strong>एम.टेक./मास्टर्स (इलेक्ट्रिकल एवं इलेक्ट्रॉनिक इंजीनियरिंग)</strong><br>नेशनल शिज़ुओका यूनिवर्सिटी — <em>सितम्बर 2025</em> (GPA 2.9)<br><em>विषय:</em> लोड वैरिएबिलिटी व जलवायु क्षेत्रों के पार हाइब्रिड माइक्रोग्रिड द्वारा ग्रामीण विद्युतीकरण हेतु क्षमता-योजना अध्ययन।<br>ABP पूर्ण छात्रवृत्ति (2023–2025)।",
      "<strong>एडवांस डिप्लोमा इन इंडस्ट्रियल सेफ़्टी (ADIS)</strong> — रीजनल लेबर इंस्टिट्यूट, कोलकाता (जून 2022, प्रथम श्रेणी)।",
      "<strong>बी.टेक. (इलेक्ट्रिकल इंजीनियरिंग)</strong> — KIIT यूनिवर्सिटी (जुलाई 2020, CGPA 7.77)।",
      "12वीं — SPS एजुकेशन सेंटर (मई 2016, 70%)",
      "10वीं — पुरनचंद्र विद्या निकेतन (मई 2014, CGPA 6.8)"
    ],

    experienceTitle: "अनुभव",
    experienceList: [
      "<strong>रिसर्च असिस्टेंट (RA)</strong> — शिज़ुओका यूनिवर्सिटी (<em>वर्तमान</em>)<br>PV/BESS/DG साइजिंग हेतु HOMER सिमुलेशन, GHI/लोड डेटा विश्लेषण, रिग्रेशन मॉडल; फ़िगर/मैनुस्क्रिप्ट/रिव्यूअर-रिप्लाई। पर्यवेक्षक: प्रो. हितोशी हागा।",
      "<strong>टीचिंग असिस्टेंट (TA)</strong> — शिज़ुओका यूनिवर्सिटी (अगस्त 2023 – सितम्बर 2025)<br>बैचलर छात्रों को ग्लो व आर्क डिस्चार्ज पढ़ाया। पर्यवेक्षक: एसोशिएट प्रो. हिरोनोबु मात्सुओ।",
      "रिसर्च इंटर्न — नानहुआ यूनिवर्सिटी (09/2019 – 02/2020)",
      "रिसर्च इंटर्न — एशिया यूनिवर्सिटी (11/2019 – 12/2019)",
      "समर इंटर्न — TATA POWER (05/2018 – 06/2018)",
      "रिसर्च इंटर्न — KIIT यूनिवर्सिटी (06/2017 – 08/2018)"
    ],

    skillsTitle: "कौशल",
    skillsLanguagesTitle: "भाषाएँ",
    skillsLanguagesList: [
      "अंग्रेज़ी",
      "जापानी (मूल)",
      "हिंदी",
      "भोजपुरी",
      "बंगाली",
      "ओड़िया"
    ],
    skillsCoursesTitle: "पाठ्यक्रम",
    skillsCoursesList: [
      "TCS iON — प्रभावशाली प्रस्तुति",
      "TCS iON — कॉर्पोरेट एटीकेट",
      "TCS iON — प्रभावी ईमेल लेखन",
      "TCS iON — समूह चर्चा तैयारी",
      "TCS iON — इंडस्ट्री-उन्मुख सॉफ्ट-स्किल्स",
      "IIT कानपुर — फ्लाय ऐश की उपयोगिता व पॉलिमर-सदृश संरचनाएँ"
    ],
    skillsCertificationsTitle: "प्रमाणपत्र",
    skillsCertificationsList: [
      "VV गिरी नेशनल लेबर इंस्टिट्यूट — OSH कोड",
      "— प्रवासन/ट्रैफिकिंग/बाल व बंधुआ श्रम संवेदनशीलता",
      "— बंधुआ/बाल-बंधुआ श्रम उन्मूलन ऑनलाइन कार्यक्रम",
      "DGFASLI — हाउस-कीपिंग व स्वच्छता",
      "— लेबर इंस्पेक्शन के माध्यम से सुशासन",
      "TATA-POWER समर इंटर्नशिप",
      "KITT FEST 2017",
      "IIT कानपुर — फ्लाय ऐश",
      "Texas Instruments IICDC-2019",
      "नानहुआ यूनिवर्सिटी — सेमेस्टर पाठ्यक्रम",
      "ITRI ताइवान — इंडस्ट्री इंटरफ़ेस",
      "चुंग चेंग यूनिवर्सिटी — विंटर स्कूल",
      "नानहुआ — रिसर्च इंटर्नशिप",
      "NHU — ताइवान हाई-स्कूल टीचिंग",
      "नानहुआ — लाइफ़ एजुकेशन अवार्ड",
      "नानहुआ — न्यू साउथबाउंड लाइफ़ एजुकेशन",
      "IEEE — IoT/Graduate Member",
      "भारत CVC — इंटेगिरिटी प्लेज",
      "भारत श्रम मंत्रालय — नो-चाइल्ड-लेबर प्रतिज्ञा"
    ],

    researchTitle: "अनुसंधान व प्रकाशन",
    researchPapersTitle: "अनुसंधान पत्र",
    researchPublishedTitle: "प्रकाशित",
    researchPublishedList: [
      "Advancing Sustainable Energy — Wiley",
      "Bridging Complexity & Accessibility — Elsevier e-Prime",
      "Unified PV–BESS Capacity Framework — IEEE Xplore (in press)"
    ],
    researchUpcomingTitle: "समीक्षा में / आगामी",
    researchUpcomingList: [
      "Piezoelectric metamaterials for energy harvesting (समीक्षा में)",
      "Accelerating the Global Shift to Renewable Energy (विस्तारित सार)"
    ],
    researchConferencesTitle: "सम्मेलन",
    researchConferencesList: [
      "Nanhua University — Green Technology & Sustainability",
      "KOSMOS — AR/VR (काउशुंग)",
      "JSES 2024 — सप्पोरो सिटी यूनिवर्सिटी",
      "Arsenic in the Environment — KIIT, इंडिया"
    ],

    volunteerTitle: "स्वयंसेवी कार्य",
    volunteerText:
      "ATTAC NGO: वेबसाइट कंटेंट निर्माण, कैंपेन समन्वय एवं सोशल-मीडिया प्रबंधन।",

    referencesTitle: "संदर्भ",
    referencesList: [
      "Prof. Hitoshi Haga — Shizuoka University",
      "Assoc. Prof. Hironobu Matsuo — Shizuoka University",
      "Dr. Sushil Yadav Yamamoto — MAFF (Japan)",
      "Prof. Satyendra Patnaik — KIIT & KISS",
      "Prof. Jyoti Prakash Maity — NCCU / KIIT",
      "Prof. Byomkesh Nayak — KIIT",
      "Prof. Congo Tak Shing CHING — NCHU",
      "Mr. Sanatan — Ministry of Skill Development & Entrepreneurship (India)"
    ],

    contactTitle: "संपर्क",
    contactEmail: "Email: yashpdelhi@gmail.com, yashpjapan@yahoo.com",
    contactInstitutionalEmail: "Institutional Email: pandey.yash.23@shizuoka.ac.jp",
    contactPhone: "Mobile: +81-7090976618, +91-9455918918"
  },

  /* -------- KOREAN -------- */
  ko: {
    docLang: "ko",
    nav: {
      about: "소개",
      education: "학력",
      experience: "경력",
      skills: "보유 기술",
      research: "연구",
      volunteer: "봉사",
      references: "추천인",
      contact: "연락처"
    },
    heroTitle: "야시 판데이의 포트폴리오에 오신 것을 환영합니다",
    heroSubtitle: "지속가능 에너지와 그 너머를 탐구하다",
    heroCta: "보러가기",

    aboutTitle: "소개",
    aboutText:
      "일본 시즈오카대학교 전자·전기공학 박사과정생 야시 판데이입니다. 하이브리드 재생에너지 마이크로그리드와 농촌 전력화 연구를 수행하며, HOMER/MATLAB 및 회귀모델을 활용해 실용적이고 확장 가능한 해법을 제시합니다.",
    aboutHobbies:
      "<strong>취미:</strong> 축구, 시 쓰기, 기타, 소설, 여행, 사진, 요리",
    aboutAffiliations: "<strong>소속:</strong>",
    aboutAffiliationsList: ["IAAM: 국제선진재료협회(스웨덴)"],
    aboutFreelance: "<strong>프리랜스 컨설팅:</strong>",
    aboutFreelanceList: [
      "Japan Development Private Limited(럭나우, 인도)",
      "SALA Energy Corporation(하마마쓰, 일본)",
      "Akamatsu Electric Company Limited(이와타, 일본)"
    ],
    aboutAddress:
      "<strong>현 주소:</strong> 일본 시즈오카현 하마마쓰시 시지미즈카, 시즈오카대 아케보노 기숙사 102호",

    educationTitle: "학력",
    educationList: [
      "<strong>박사(전자·전기공학)</strong><br>시즈오카대학교(하마마쓰)<br><em>예정:</em> 2028년 9월<br><em>주제:</em> 사회·경제 성장, 경제성 최적화, 복원력을 통합한 적응형 하이브리드 재생에너지 마이크로그리드 동적 프레임워크",
      "<strong>석사(전자·전기공학)</strong><br>시즈오카대학교 — 2025년 9월, GPA 2.9<br><em>주제:</em> 부하 변동성과 기후대 전반을 고려한 농촌 전력화 최적 용량·계획(하이브리드 MG)<br>ABP 전액 장학생(2023–2025)",
      "산업안전 고급 디플로마 — Regional Labour Institute, 콜카타(2022년 6월, 수석)",
      "전기공학 학사 — KIIT University(2020년 7월, CGPA 7.77)",
      "12학년 — SPS 교육센터(2016년 5월, 70%)",
      "10학년 — PVN(2014년 5월, CGPA 6.8)"
    ],

    experienceTitle: "경력",
    experienceList: [
      "<strong>연구조교(RA)</strong> — 시즈오카대학교(<em>재직</em>)<br>HOMER 기반 PV/BESS/DG 용량 산정, GHI/부하 데이터 분석, 회귀모델, 원고/피겨/리뷰 대응. 지도: Hitoshi Haga 교수.",
      "<strong>강의조교(TA)</strong> — 시즈오카대학교(2023.08–2025.09)<br>학부 대상 글로우/아크 방전 강의 보조. 지도: Hironobu Matsuo 부교수.",
      "연구 인턴 — 난화대학교(2019.09–2020.02)",
      "연구 인턴 — 아시아대학교(2019.11–2019.12)",
      "하계 인턴 — TATA POWER(2018.05–2018.06)",
      "연구 인턴 — KIIT University(2017.06–2018.08)"
    ],

    skillsTitle: "보유 기술",
    skillsLanguagesTitle: "언어",
    skillsLanguagesList: ["영어", "일본어(기초)", "힌디어", "보즈푸리어", "벵골어", "오리아어"],
    skillsCoursesTitle: "이수 과정",
    skillsCoursesList: [
      "TCS iON — 임팩트 있는 프레젠테이션",
      "TCS iON — 기업 에티켓",
      "TCS iON — 효과적인 이메일 작성",
      "TCS iON — 그룹 토론 대비",
      "TCS iON — 산업 수요형 소프트스킬",
      "IIT 칸푸르 — 플라이애시 활용·폴리머 유사 구조"
    ],
    skillsCertificationsTitle: "자격/인증",
    skillsCertificationsList: [
      "VV Giri 국립노동연구소 — 산업안전/근로환경",
      "— 이주/인신매매/아동·채무노동 취약성",
      "— 아동/채무노동 예방 온라인",
      "DGFASLI — 하우스키핑·청결 교육",
      "— 노동감사 기반 거버넌스",
      "TATA-POWER 하계 인턴 수료",
      "KITT FEST 2017",
      "IIT 칸푸르 — 플라이애시",
      "Texas Instruments IICDC-2019",
      "난화대 학기 과정 수료",
      "ITRI 대만 — 인터페이스",
      "중정대 윈터스쿨 수료",
      "난화대 연구 인턴 수료",
      "NHU 대만 고등학교 강의",
      "난화대 라이프에듀케이션 수상",
      "난화대 New Southbound 라이프에듀케이션",
      "IEEE — IoT/Graduate Member",
      "인도 CVC — 청렴 서약",
      "인도 노동고용부 — 아동노동 금지 서약"
    ],

    researchTitle: "연구 및 출판",
    researchPapersTitle: "연구 논문",
    researchPublishedTitle: "게재됨",
    researchPublishedList: [
      "지속가능 에너지의 진전 — Wiley",
      "농촌 MG의 PV·BESS 추정 모델 — Elsevier e-Prime",
      "PV–BESS 통합 추정 프레임워크 — IEEE Xplore(게재 예정)"
    ],
    researchUpcomingTitle: "심사 중/예정",
    researchUpcomingList: [
      "에너지 하베스팅용 압전 메타물질(심사 중)",
      "재생에너지 전환 가속 전략(확장 초록)"
    ],
    researchConferencesTitle: "학회/컨퍼런스",
    researchConferencesList: [
      "난화대: Green Tech & Sustainability",
      "KOSMOS: AR/VR(가오슝)",
      "JSES 2024(삿포로 시립대)",
      "Arsenic in the Environment(KIIT, 인도)"
    ],

    volunteerTitle: "봉사 활동",
    volunteerText:
      "ATTAC NGO: 웹 콘텐츠 제작, 캠페인 코디네이션, SNS 운영",

    referencesTitle: "추천인",
    referencesList: [
      "Prof. Hitoshi Haga — Shizuoka University",
      "Assoc. Prof. Hironobu Matsuo — Shizuoka University",
      "Dr. Sushil Yadav Yamamoto — MAFF",
      "Prof. Satyendra Patnaik — KIIT & KISS",
      "Prof. Jyoti Prakash Maity — NCCU / KIIT",
      "Prof. Byomkesh Nayak — KIIT",
      "Prof. Congo Tak Shing CHING — NCHU",
      "Mr. Sanatan — Government of India"
    ],

    contactTitle: "연락처",
    contactEmail: "이메일: yashpdelhi@gmail.com, yashpjapan@yahoo.com",
    contactInstitutionalEmail: "기관 이메일: pandey.yash.23@shizuoka.ac.jp",
    contactPhone: "전화: +81-7090976618, +91-9455918918"
  }
};

/* ===============================
   APPLY CONTENT TO DOM
   =============================== */
function changeLanguage(lang) {
  const data = content[lang] || content.en;

  // Document language
  setDocumentLang(data.docLang || "en");

  // NAV labels
  if (data.nav) {
    setText("nav-about", data.nav.about);
    setText("nav-education", data.nav.education);
    setText("nav-experience", data.nav.experience);
    setText("nav-skills", data.nav.skills);
    setText("nav-research", data.nav.research);
    setText("nav-volunteer", data.nav.volunteer);
    setText("nav-references", data.nav.references);
    setText("nav-contact", data.nav.contact);
  }

  // Hero
  setHTML("hero-title", data.heroTitle);
  setHTML("hero-subtitle", data.heroSubtitle);
  setText("hero-cta", data.heroCta || "Explore");

  // About
  setHTML("about-title", data.aboutTitle);
  setHTML("about-text", data.aboutText);
  setHTML("about-hobbies", data.aboutHobbies);
  setHTML("about-affiliations", data.aboutAffiliations);
  setList("about-affiliations-list", data.aboutAffiliationsList);
  setHTML("about-freelance", data.aboutFreelance);
  setList("about-freelance-list", data.aboutFreelanceList);
  setHTML("about-address", data.aboutAddress);

  // Education
  setHTML("education-title", data.educationTitle);
  setList("education-list", data.educationList);

  // Experience
  setHTML("experience-title", data.experienceTitle);
  setList("experience-list", data.experienceList);

  // Skills
  setHTML("skills-title", data.skillsTitle);
  setHTML("skills-languages-title", data.skillsLanguagesTitle);
  setList("skills-languages-list", data.skillsLanguagesList);
  setHTML("skills-courses-title", data.skillsCoursesTitle);
  setList("skills-courses-list", data.skillsCoursesList);
  setHTML("skills-certifications-title", data.skillsCertificationsTitle);
  setList("skills-certifications-list", data.skillsCertificationsList);

  // Research
  setHTML("research-title", data.researchTitle);
  setHTML("research-papers-title", data.researchPapersTitle);
  setHTML("research-published-title", data.researchPublishedTitle);
  setList("research-published-list", data.researchPublishedList);
  setHTML("research-upcoming-title", data.researchUpcomingTitle);
  setList("research-upcoming-list", data.researchUpcomingList);
  setHTML("research-conferences-title", data.researchConferencesTitle);
  setList("research-conferences-list", data.researchConferencesList);

  // Volunteer
  setHTML("volunteer-title", data.volunteerTitle);
  setHTML("volunteer-text", data.volunteerText);

  // References
  setHTML("references-title", data.referencesTitle);
  setList("references-list", data.referencesList);

  // Contact
  setHTML("contact-title", data.contactTitle);
  setHTML("contact-email", data.contactEmail);
  setHTML("contact-institutional-email", data.contactInstitutionalEmail);
  setHTML("contact-phone", data.contactPhone);

  // Save preference
  try {
    localStorage.setItem("yp_lang", lang);
  } catch (e) {}
}

/* ===============================
   LANGUAGE SWITCHER WIRING
   =============================== */
function setActiveChip(lang) {
  const wrap = document.getElementById("lang-switcher");
  if (!wrap) return;
  [...wrap.querySelectorAll(".chip")].forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", isActive);
  });
}
function setDocumentLang(lang) {
  const html = document.documentElement;
  if (html) html.setAttribute("lang", lang || "en");
}
function initLanguageSwitcher() {
  const wrap = document.getElementById("lang-switcher");
  if (!wrap) return;

  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    const lang = btn.getAttribute("data-lang");
    if (!lang) return;
    changeLanguage(lang);
    setActiveChip(lang);
  });

  // Initial language: saved -> English default
  let lang = "en";
  try {
    lang = localStorage.getItem("yp_lang") || "en";
  } catch (e) {}

  changeLanguage(lang);
  setActiveChip(lang);
}

/* ===============================
   BOOT
   =============================== */
document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitcher();
});
