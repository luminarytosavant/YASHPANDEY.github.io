/* =========================
   Multi-language + Effects
   ========================= */

/* ---- Language content ---- */
const content = {
  en: {
    heroTitle: "Welcome to Yash Pandey's Portfolio",
    heroSubtitle: "Exploring Sustainable Energy and Beyond",

    aboutTitle: "About Me",
    aboutText:
      "I am Yash Pandey, a Ph.D student in Electrical & Electronic Engineering at National Shizuoka University, Japan, specializing in sustainable energy solutions for rural electrification. With a passion for renewable energy and a track record of research and internships in the field, I am dedicated to advancing green technologies and making a positive impact on society.",
    aboutHobbies:
      "<strong>Hobbies:</strong> Playing Football, Poetry Writing, Guitar Playing, Novel Reading, Travelling, Photography, Cooking",
    aboutAffiliations: "<strong>Affiliations:</strong>",
    aboutAffiliationsList: [
      "IAAM: International Association of Advanced Materials, Sweden."
      // IIDL removed
    ],
    aboutFreelance: "<strong>Freelance Consulting:</strong>",
    aboutFreelanceList: [
      "Japan Development Private Limited, Lucknow, India.",
      "SALA Energy Corporation, Hamamatsu, Japan.",
      "Akamatsu Electric Company Limited, Iwata, Japan."
    ],
    aboutAddress:
      "<strong>Current Address:</strong> Room 102, Akebono Ryō (Dorm), Shijimizuka, Hamamatsu City, Shizuoka Prefecture, Japan.",

    educationTitle: "Education",
    educationList: [
      "Ph.D. degree (Expected Graduation: September 2028)<br>National Shizuoka University, School of Engineering, Department of Electrical & Electronic Engineering<br>Research Topic: A Dynamic Framework for Adaptive Hybrid Renewable Energy Microgrids: Integrating Socio-Economic Growth, Techno-Economic Optimization, and Resilience in Rural Electrification.",
      "Master's degree in Electronic & Electrical Engineering<br>National Shizuoka University, August 2025<br>Research Topic: A Study of Optimal Capacity and Planning for Rural Electrification using Hybrid Microgrid Across Load Variability and Climatic Zones<br>Recipient of ABP Full Scholarship 2023–2025. GPA: 2.9",
      "Advance Diploma in Industrial Safety<br>Regional Labour Institute, Kolkata, West Bengal, India, June 2022",
      "Bachelor of Technology in Electrical Engineering<br>Kalinga Institute of Industrial Technology, Bhubaneswar, Odisha, India, July 2020 (CGPA: 7.77)",
      "12th Standard<br>Sir Padampat Singhania Education Centre, Kanpur, Uttar Pradesh, India, May 2016 (70%)",
      "10th Standard<br>Puranchandra Vidya Niketan, Kanpur, Uttar Pradesh, India, May 2014 (CGPA: 6.8)"
    ],

    experienceTitle: "Experience",
    experienceList: [
      "Research Assistant (R.A.)<br>National Shizuoka University, Current<br>Focus: Hybrid renewable energy microgrids, PV/BESS/DG sizing (HOMER Pro), GHI & load analytics, regression-based planning, figures & manuscripts, reviewer responses, and research coordination.<br>School of Electronics & Electrical Engineering — Reporting Supervisor: Hitoshi Haga.",
      "Teaching Assistant<br>National Shizuoka University, August 2023 – September 2025<br>Teaching Subject: Glow Discharge and Arc Discharge to bachelor's degree students.<br>Reporting Supervisor: Hironobu Matsuo.",
      "Research Intern<br>Nanhua University, September 2019 - February 2020<br>School of Electrical Engineering and Computer Science under Prof. Shin Chi Lai.",
      "Research Intern<br>Asia University, November 2019 - December 2019<br>School of Computer Science and Information Engineering under Prof. T. Chen.",
      "Summer Intern<br>TATA POWER, May 2018 - June 2018",
      "Research Intern<br>KIIT University, June 2017 - August 2018<br>School of Applied Sciences under Professor Dr. B.B Kar."
    ],

    skillsTitle: "Skills",
    skillsLanguagesTitle: "Languages",
    skillsLanguagesList: [
      "English",
      "Japanese (Basics)",
      "Hindi",
      "Bhojpuri",
      "Bengali",
      "Odia"
    ],
    skillsCoursesTitle: "Courses",
    skillsCoursesList: [
      "TCS ion course on making impactful presentations.",
      "TCS ion course on learning Corporate Etiquette.",
      "TCS ion course on writing an Effective Email.",
      "TCS ion course on Being Prepared for Group Discussions.",
      "TCS ion course on Developing Soft Skills that Industry Needs and Demands.",
      "Potential Utility of Fly Ash and developing it into near whitened polymer like structures- IIT Kanpur."
    ],
    skillsCertificationsTitle: "Certifications",
    skillsCertificationsList: [
      "Certificate from VV Giri National Labour Institute for Code on Occupational Safety and Working Conditions.",
      "Certificate from VV Giri National Labour Institute for Addressing Source State Vulnerability of Workers to Distress Migration, Trafficking, Child Labour and Bonded Labour.",
      "Certificate from VV Giri National Labour Institute for Online Sensitization Programme on Prevention and Elimination of Bonded Labour and Child Bonded Labour.",
      "Certificate from Directorate General of Factory Advice Services and Labour Institutes for Half Day Training Program on House Keeping and Cleanliness.",
      "Certificate from VV Giri National Labour Institute for a training programme on Good Governance Through Labour Inspection.",
      "TATA-POWER Summer Internship Certificate.",
      "KITT FEST 2017 Certificate.",
      "IIT Kanpur Potential Utility of Fly Ash Certificate.",
      "Texas Instruments USA IICDC-2019 Business Test Certificate.",
      "Nanhua University Semester Course Completion Certificate.",
      "Industry Interface Certificate-Industrial Technology Research Institute Taiwan.",
      "Chung Cheng University Winter School Certificate.",
      "Nanhua University Research Internship Certificate.",
      "Certificate for Teaching High School Students in Taiwan from NHU",
      "Award for Outstanding Life Education Personnel and National Life, Nanhua University.",
      "Certificate for New South Bound Life Education Program, Nanhua University.",
      "Certificate from IEEE for the Scope and Benefits of IOT.",
      "Certificate from IEEE for Being a Graduate Member.",
      "Certificate from the Central Vigilance Commission of India for commitment & upholding the highest Integrity.",
      "Certificate from the Ministry of Labour and Employment for commitment and pledge to the No Child Labour policy."
    ],

    researchTitle: "Research and Publications",
    researchPapersTitle: "Research Papers",
    researchPublishedTitle: "Published",
    researchPublishedList: [
      'Book Chapter: Importance of perovskite solar cells in sustainable energy solutions — <a href="https://doi.org/10.1515/9783111726847-012" target="_blank" rel="noopener">De Gruyter (DOI)</a>. Authors: Pravin Kumar Singh, Yash Pandey, Upendra Kulshrestha.',
      '"Advancing Sustainable Energy: Exploring New Frontiers and Opportunities in Green Transition", Wiley Publications.',
      '"Impact of Load Profile Variability on Optimal PV and BESS Capacities of Diesel Generator based Microgrid", JSES.'
    ],
    researchUpcomingTitle: "Upcoming",
    researchUpcomingList: [
      '"Piezoelectric metamaterials for energy harvesting." (Under peer review — Elsevier)',
      '"Bridging Complexity and Accessibility: A Novel Model for PV and BESS Capacity Estimation in Rural Microgrids Near the Equatorial Region" (e-Prime, Elsevier Publications)',
      '"Accelerating the Global Shift to Renewable Energy: Strategic Pathways for Achieving Net-Zero Emissions", Book of Abstracts — Arsenic and other Pollutants, Water Security and One Health under Global Climate Change Scenario (Extended Abstract)',
      '"A Unified PV–BESS Capacity Estimation Framework for Rural Microgrids: From Equatorial Roots to Global Regions." (IEEE Xplore — Under Review)'
    ],
    researchConferencesTitle: "Conferences",
    researchConferencesList: [
      "International conference on green technology and sustainability at Nanhua University, Taiwan.",
      "KOSMOS — How AR/VR can benefit human life & industrial usability, Kaohsiung Convention Centre, Taiwan.",
      "JSES 2024 — Paper presented on Load Variability and its effects on component capacity & NPC, Sapporo City University, Sapporo, Hokkaido, Japan.",
      "9th International Congress & Exhibition on Arsenic in the Environment — KIIT University, Bhubaneswar City, India."
    ],

    volunteerTitle: "Volunteer Work",
    volunteerText:
      "ATTAC NGO: Build Web Site Content and worked as a Campaign Coordinator and Social Media Manager.",

    referencesTitle: "References",
    referencesList: [
      "Dr. Sushil Yadav Yamamoto, Registered Consultant, Ministry of Agriculture, Forestry and Fisheries of Japan.",
      "Prof. Satyendra Patnaik, Advisor to Founder, KIIT & KISS.",
      "Prof. Dr. Jyoti Prakash Maity, Department of Earth and Environmental Science, National Chung Cheng University; School of Applied Sciences, KIIT University.",
      "Prof. Byomkesh Nayak, Dean of the School of Electrical Engineering, KIIT University.",
      "Dr. Congo Tak Shing CHING, Professor, Graduate Institute of Biomedical Engineering, National Chung Hsing University.",
      "Assoc. Professor Hironobu Matsuo, Department of Electronics & Electrical Engineering, National Shizuoka University.",
      "Mr. Sanatan, Deputy Secretary, Ministry of Skill Development and Entrepreneurship, Government of India."
    ],

    contactTitle: "Contact",
    contactEmail: "Email: yashpdelhi@gmail.com, yashpjapan@yahoo.com",
    contactInstitutionalEmail: "Institutional Email: pandey.yash.23@shizuoka.ac.jp",
    contactPhone: "Mobile: +81-7090976618, +91-9455918918",
    contactWebsite:
      'Website: <a href="https://luminarytosavant.github.io/YASHPANDEY.github.io/" target="_blank" rel="noopener" style="color:#ffffff">luminarytosavant.github.io/YASHPANDEY.github.io</a><br><span style="color:#ffffff">© All rights reserved — Matsuo Labs &amp; Shizuoka University</span>'
  },

  /* ---- Japanese ---- */
  ja: {
    heroTitle: "ヤシュ・パンディのポートフォリオへようこそ",
    heroSubtitle: "持続可能なエネルギーとその先を探求する",

    aboutTitle: "私について",
    aboutText:
      "私はヤシュ・パンディです。日本の静岡大学・電気電子工学専攻の博士課程に在籍し、農村電化のための持続可能なエネルギーソリューションに取り組んでいます。再生可能エネルギーへの情熱と、この分野での研究・インターンの実績を活かし、グリーンテクノロジーの進展と社会への貢献を目指しています。",
    aboutHobbies:
      "<strong>趣味:</strong> サッカー、詩の執筆、ギター、読書、旅行、写真、料理",
    aboutAffiliations: "<strong>所属:</strong>",
    aboutAffiliationsList: [
      "IAAM: 国際先端材料協会（スウェーデン）"
      // IIDL removed
    ],
    aboutFreelance: "<strong>フリーランスコンサルティング:</strong>",
    aboutFreelanceList: [
      "Japan Development Private Limited（ラクナウ、インド）",
      "SALA Energy Corporation（浜松、日本）",
      "Akamatsu Electric Company Limited（磐田、日本）"
    ],
    aboutAddress:
      "<strong>現住所:</strong> Room 102, Akebono Ryō（寮）, Shijimizuka, 浜松市, 静岡県, 日本。",

    educationTitle: "学歴",
    educationList: [
      "博士課程（2028年9月 修了予定）<br>静岡大学 工学部 電気電子工学専攻<br>研究テーマ：ハイブリッド再生可能エネルギー・マイクログリッドの動的フレームワーク（社会経済成長・テクノエコノミクス・レジリエンスの統合）。",
      "電子電気工学 修士<br>静岡大学、2025年8月 修了<br>研究テーマ：負荷変動および気候帯を跨ぐ農村電化に向けたハイブリッド・マイクログリッドの最適容量・計画<br>ABP全額奨学金（2023–2025）、GPA：2.9",
      "産業安全 上級ディプロマ（2022年6月）<br>地域労働研究所（コルカタ、インド）",
      "電気工学 学士（2020年7月、CGPA：7.77）<br>カリンガ工科大学（ブバネーシュワル、インド）",
      "12年生（2016年5月、70%）<br>Sir Padampat Singhania Education Centre（カンプル、インド）",
      "10年生（2014年5月、CGPA：6.8）<br>Puranchandra Vidya Niketan（カンプル、インド）"
    ],

    experienceTitle: "経験",
    experienceList: [
      "リサーチアシスタント（R.A.）<br>静岡大学、Current（在籍中）<br>業務：ハイブリッド再エネマイクログリッド、PV/BESS/DG容量設計（HOMER Pro）、GHI・負荷解析、回帰に基づく計画、図表・原稿作成、査読対応、研究調整。<br>所属：電子・電気工学系／上司：芳賀 仁志",
      "ティーチングアシスタント<br>静岡大学、2023年8月 – 2025年9月<br>担当：学部生向け グロー放電・アーク放電。<br>上司：松尾 弘信",
      "研究インターン<br>南華大学、2019年9月 – 2020年2月（指導：Shin Chi Lai 教授）",
      "研究インターン<br>亜洲大学、2019年11月 – 2019年12月（指導：T. Chen 教授）",
      "サマーインターン<br>TATA POWER、2018年5月 – 2018年6月",
      "研究インターン<br>KIIT大学、2017年6月 – 2018年8月（指導：B.B Kar 教授）"
    ],

    skillsTitle: "スキル",
    skillsLanguagesTitle: "言語",
    skillsLanguagesList: ["英語", "日本語（基礎）", "ヒンディー語", "ボージュプリー語", "ベンガル語", "オディア語"],
    skillsCoursesTitle: "コース",
    skillsCoursesList: [
      "TCS ion：印象的なプレゼンテーションの作成",
      "TCS ion：コーポレート・エチケット",
      "TCS ion：効果的なメールの書き方",
      "TCS ion：グループディスカッションの準備",
      "TCS ion：産業が求めるソフトスキルの開発",
      "IITカンプール：フライアッシュの有効利用（白色ポリマー様構造の開発）"
    ],
    skillsCertificationsTitle: "認定・証明",
    skillsCertificationsList: [
      "VV Giri 国立労働研究所：労働安全衛生・労働条件に関する証明",
      "同：移住・人身取引・児童／債務労働に関する脆弱性対策の証明",
      "同：債務労働・児童労働防止のオンライン啓発プログラム証明",
      "労働研究所：ハウスキーピング／清掃に関する半日研修証明",
      "VV Giri：労働監査によるガバナンス向上研修証明",
      "TATA-POWER サマーインターン証明",
      "KITT FEST 2017 証明",
      "IITカンプール フライアッシュ有用性 証明",
      "Texas Instruments USA IICDC-2019 ビジネステスト証明",
      "南華大学 セメスターコース修了証明",
      "台湾 工業技術研究院 インダストリー・インターフェース証明",
      "中正大学 ウィンタースクール証明",
      "南華大学 研究インターン証明",
      "NHU：台湾高校生向け指導証明",
      "南華大学：優秀ライフエデュケーション人材・ナショナルライフ賞",
      "南華大学：ニューサウスバウンド・ライフエデュケーション証明",
      "IEEE：IoTの範囲と利点に関する証明",
      "IEEE：グラデュエートメンバー証明",
      "インド中央監察委員会：最高の誠実性維持の誓約証明",
      "インド労働雇用省：児童労働禁止方針の誓約証明"
    ],

    researchTitle: "研究と出版物",
    researchPapersTitle: "研究論文",
    researchPublishedTitle: "出版済み",
    researchPublishedList: [
      '書籍章：Importance of perovskite solar cells in sustainable energy solutions — <a href="https://doi.org/10.1515/9783111726847-012" target="_blank" rel="noopener">De Gruyter（DOI）</a>。著者：Pravin Kumar Singh, Yash Pandey, Upendra Kulshrestha。',
      "『持続可能エネルギーの推進：グリーントランジションの新たなフロンティアと機会』Wiley Publications",
      "『負荷プロファイル変動がディーゼル発電機ベースのマイクログリッドにおけるPV/BESS最適容量に与える影響』JSES"
    ],
    researchUpcomingTitle: "今後の予定",
    researchUpcomingList: [
      "『エネルギー収集のための圧電メタマテリアル』（Elsevier 査読中）",
      "『赤道域近傍の農村マイクログリッドにおけるPV・BESS容量推定モデル』（Elsevier e-Prime）",
      "『再生可能エネルギーへの世界的転換を加速する戦略』（抄録集：ヒ素・水資源・One Health・気候変動）",
      "『農村マイクログリッドのための統合PV–BESS容量推定フレームワーク：赤道から世界へ』（IEEE Xplore 査読中）"
    ],
    researchConferencesTitle: "学会・会議",
    researchConferencesList: [
      "南華大学（台湾）：グリーンテクノロジーとサステナビリティ国際会議",
      "KOSMOS：AR/VRの人間生活・産業応用（高雄コンベンションセンター、台湾）",
      "JSES 2024：札幌市立大学（北海道）— 変動負荷が容量・NPCに与える影響",
      "第9回 Arsenic in the Environment（KIIT大学、ブバネーシュワル、インド）"
    ],

    volunteerTitle: "ボランティア活動",
    volunteerText:
      "ATTAC NGO：ウェブサイトコンテンツ作成、キャンペーン運営、SNSマネジメント。",

    referencesTitle: "推薦者",
    referencesList: [
      "Dr. Sushil Yadav Yamamoto（日本 農林水産省 登録コンサルタント）",
      "Prof. Satyendra Patnaik（KIIT & KISS 創設者顧問）",
      "Prof. Jyoti Prakash Maity（国立中正大学／KIIT大学）",
      "Prof. Byomkesh Nayak（KIIT 大学院 電気工学部長）",
      "Dr. Congo Tak Shing CHING（国立中興大学 生体医工学 教授）",
      "Assoc. Prof. Hironobu Matsuo（静岡大学 電子・電気工学）",
      "Mr. Sanatan（インド政府 技能開発・起業省 次官）"
    ],

    contactTitle: "連絡先",
    contactEmail: "メール: yashpdelhi@gmail.com, yashpjapan@yahoo.com",
    contactInstitutionalEmail: "所属メール: pandey.yash.23@shizuoka.ac.jp",
    contactPhone: "電話: +81-7090976618, +91-9455918918",
    contactWebsite:
      'ウェブサイト: <a href="https://luminarytosavant.github.io/YASHPANDEY.github.io/" target="_blank" rel="noopener" style="color:#ffffff">luminarytosavant.github.io/YASHPANDEY.github.io</a><br><span style="color:#ffffff">© All rights reserved — Matsuo Labs &amp; Shizuoka University</span>'
  },

  /* ---- Chinese ---- */
  zh: {
    heroTitle: "欢迎来到 Yash Pandey 的作品集",
    heroSubtitle: "探索可持续能源及更多",

    aboutTitle: "关于我",
    aboutText:
      "我是 Yash Pandey，就读于日本静冈大学电气与电子工程博士项目，研究面向农村电气化的可持续能源解决方案。热爱可再生能源，拥有相关研究与实习经历，致力于推进绿色技术并产生积极社会影响。",
    aboutHobbies:
      "<strong>爱好:</strong> 踢足球、写诗、弹吉他、读小说、旅行、摄影、烹饪",
    aboutAffiliations: "<strong>隶属关系:</strong>",
    aboutAffiliationsList: [
      "IAAM：国际先进材料协会（瑞典）"
      // IIDL removed
    ],
    aboutFreelance: "<strong>自由职业咨询:</strong>",
    aboutFreelanceList: [
      "Japan Development Private Limited（勒克瑙，印度）",
      "SALA Energy Corporation（滨松，日本）",
      "Akamatsu Electric Company Limited（磐田，日本）"
    ],
    aboutAddress:
      "<strong>现住址:</strong> Room 102, Akebono Ryō（宿舍），Shijimizuka，滨松市，静冈县，日本。",

    educationTitle: "教育背景",
    educationList: [
      "博士（预计 2028 年 9 月毕业）<br>静冈大学 工学部 电气与电子工程系<br>研究课题：面向农村电气化的混合可再生能源微电网动态框架（社会经济增长、技术经济优化与韧性一体化）。",
      "电子与电气工程硕士<br>静冈大学，2025 年 8 月毕业<br>研究主题：跨负荷波动与气候带的农村电气化混合微电网最优容量与规划研究<br>ABP 全额奖学金（2023–2025），GPA：2.9",
      "工业安全高级文凭（2022 年 6 月）<br>地区劳动研究所（加尔各答，印度）",
      "电气工程学士（2020 年 7 月，CGPA：7.77）<br>卡林加工业技术学院（布巴内斯瓦尔，印度）",
      "高中 12 年级（2016 年 5 月，70%）<br>Sir Padampat Singhania Education Centre（坎普尔，印度）",
      "高中 10 年级（2014 年 5 月，CGPA：6.8）<br>Puranchandra Vidya Niketan（坎普尔，印度）"
    ],

    experienceTitle: "经历",
    experienceList: [
      "研究助理（R.A.）<br>静冈大学，Current（在职）<br>方向：混合可再生能源微电网，PV/BESS/DG 容量配置（HOMER Pro），GHI 与负荷分析，基于回归的规划，图表与论文撰写，审稿回复与研究协调。<br>学院：电气与电子工程；导师：Hitoshi Haga。",
      "助教（Teaching Assistant）<br>静冈大学，2023 年 8 月 – 2025 年 9 月<br>授课：辉光放电与电弧放电（本科生）。<br>导师：Hironobu Matsuo。",
      "研究实习生<br>南华大学，2019 年 9 月 – 2020 年 2 月（指导：Shin Chi Lai 教授）",
      "研究实习生<br>亚洲大学，2019 年 11 月 – 2019 年 12 月（指导：T. Chen 教授）",
      "暑期实习<br>TATA POWER，2018 年 5 月 – 2018 年 6 月",
      "研究实习生<br>KIIT 大学，2017 年 6 月 – 2018 年 8 月（指导：B.B Kar 教授）"
    ],

    skillsTitle: "技能",
    skillsLanguagesTitle: "语言",
    skillsLanguagesList: ["英语", "日语（基础）", "印地语", "博杰普尔语", "孟加拉语", "奥里亚语"],
    skillsCoursesTitle: "课程",
    skillsCoursesList: [
      "TCS ion：有影响力的演示制作",
      "TCS ion：企业礼仪",
      "TCS ion：高效邮件写作",
      "TCS ion：小组讨论准备",
      "TCS ion：行业所需软技能",
      "IIT 坎普尔：粉煤灰的潜在用途（近白聚合物结构开发）"
    ],
    skillsCertificationsTitle: "认证",
    skillsCertificationsList: [
      "VV Giri 国家劳动研究所：职业安全与工作条件相关认证",
      "关于移民脆弱性、人贩、童工与债务劳动的项目认证",
      "在线防止与消除童工/债务劳动的培训认证",
      "劳动研究所：家务管理与清洁半日培训认证",
      "通过劳动检查实现良治的培训认证",
      "TATA-POWER 暑期实习证书",
      "KITT FEST 2017 证书",
      "IIT 坎普尔 粉煤灰应用证书",
      "Texas Instruments USA IICDC-2019 商业测试证书",
      "南华大学 学期课程结业证书",
      "台湾 工业技术研究院 行业接口证书",
      "中正大学 冬季学校证书",
      "南华大学 研究实习证书",
      "NHU 台湾高中教学证书",
      "南华大学：杰出生活教育人员与国家生活奖",
      "南华大学：新南向生活教育计划证书",
      "IEEE：物联网范围与益处证书",
      "IEEE：毕业生会员证书",
      "印度中央监察委员会：诚信承诺证书",
      "印度劳动与就业部：反童工政策承诺证书"
    ],

    researchTitle: "研究与出版物",
    researchPapersTitle: "研究论文",
    researchPublishedTitle: "已发表",
    researchPublishedList: [
      '书籍章节：Importance of perovskite solar cells in sustainable energy solutions — <a href="https://doi.org/10.1515/9783111726847-012" target="_blank" rel="noopener">De Gruyter（DOI）</a>。作者：Pravin Kumar Singh, Yash Pandey, Upendra Kulshrestha。',
      "《推进可持续能源：探索绿色转型的新前沿与机遇》Wiley Publications",
      "《负荷曲线变异性对柴油机微电网中 PV 与 BESS 最优容量的影响》JSES"
    ],
    researchUpcomingTitle: "即将发表",
    researchUpcomingList: [
      "《用于能量采集的压电超材料》（Elsevier 审稿中）",
      "《赤道区域农村微电网 PV/BESS 容量估算新模型》（Elsevier e-Prime）",
      "《加速全球向可再生能源转型的战略路径》（摘要集：砷、水安全、One Health、气候变化）",
      "《统一的 PV–BESS 容量估算框架：从赤道到全球》（IEEE Xplore 审稿中）"
    ],
    researchConferencesTitle: "会议",
    researchConferencesList: [
      "南华大学（台湾）：绿色技术与可持续性国际会议",
      "KOSMOS：AR/VR 与产业可用性（高雄会议中心，台湾）",
      "JSES 2024：札幌市立大学（北海道）— 负荷变动对容量与 NPC 的影响",
      "第九届“环境中的砷”国际大会与展览（KIIT 大学，布巴内斯瓦尔，印度）"
    ],

    volunteerTitle: "志愿者工作",
    volunteerText:
      "ATTAC NGO：建设网站内容，并担任活动协调员与社交媒体管理员。",

    referencesTitle: "参考人",
    referencesList: [
      "Dr. Sushil Yadav Yamamoto（日本农林水产省 注册顾问）",
      "Prof. Satyendra Patnaik（KIIT & KISS 创始人顾问）",
      "Prof. Jyoti Prakash Maity（国立中正大学／KIIT 大学）",
      "Prof. Byomkesh Nayak（KIIT 大学 电气工程学院院长）",
      "Dr. Congo Tak Shing CHING（国立中兴大学 生物医学工程研究所 教授）",
      "Assoc. Prof. Hironobu Matsuo（静冈大学 电子与电气工程）",
      "Mr. Sanatan（印度政府 技能发展与创业部 副秘书）"
    ],

    contactTitle: "联系方式",
    contactEmail: "电子邮件: yashpdelhi@gmail.com, yashpjapan@yahoo.com",
    contactInstitutionalEmail: "机构邮箱: pandey.yash.23@shizuoka.ac.jp",
    contactPhone: "电话: +81-7090976618, +91-9455918918",
    contactWebsite:
      '网站: <a href="https://luminarytosavant.github.io/YASHPANDEY.github.io/" target="_blank" rel="noopener" style="color:#ffffff">luminarytosavant.github.io/YASHPANDEY.github.io</a><br><span style="color:#ffffff">© All rights reserved — Matsuo Labs &amp; Shizuoka University</span>'
  },

  /* ---- Hindi ---- */
  hi: {
    heroTitle: "यश पांडे के पोर्टफोलियो में आपका स्वागत है",
    heroSubtitle: "सतत ऊर्जा और उससे आगे की खोज",

    aboutTitle: "मेरे बारे में",
    aboutText:
      "मैं यश पांडे हूँ। जापान के नेशनल शिज़ुओका यूनिवर्सिटी में इलेक्ट्रिकल एवं इलेक्ट्रॉनिक इंजीनियरिंग के पीएच.डी. छात्र हूँ। मेरा शोध ग्रामीण विद्युतीकरण हेतु सतत ऊर्जा समाधान और हाइब्रिड माइक्रोग्रिड पर केंद्रित है। नवीकरणीय ऊर्जा के प्रति गहरी रुचि और शोध/इंटर्नशिप के अनुभव के साथ, मैं हरित प्रौद्योगिकियों को आगे बढ़ाने और समाज पर सकारात्मक प्रभाव डालने के लिए प्रतिबद्ध हूँ।",
    aboutHobbies:
      "<strong>शौक:</strong> फुटबॉल, कविता-लेखन, गिटार, उपन्यास-पठन, यात्रा, फोटोग्राफी, खाना बनाना",
    aboutAffiliations: "<strong>संबद्धताएँ:</strong>",
    aboutAffiliationsList: [
      "IAAM: इंटरनेशनल एसोसिएशन ऑफ़ एडवांस्ड मटीरियल्स (स्वीडन)"
      // IIDL removed
    ],
    aboutFreelance: "<strong>फ्रीलांस कंसल्टिंग:</strong>",
    aboutFreelanceList: [
      "Japan Development Private Limited, लखनऊ (भारत)",
      "SALA Energy Corporation, हमामात्सु (जापान)",
      "Akamatsu Electric Company Limited, इवाता (जापान)"
    ],
    aboutAddress:
      "<strong>वर्तमान पता:</strong> Room 102, Akebono Ryō (Dorm), Shijimizuka, Hamamatsu City, Shizuoka Prefecture, Japan.",

    educationTitle: "शिक्षा",
    educationList: [
      "पीएच.डी. (अनुमानित समापन: सितंबर 2028)<br>नेशनल शिज़ुओका यूनिवर्सिटी, स्कूल ऑफ़ इंजीनियरिंग, इलेक्ट्रिकल एवं इलेक्ट्रॉनिक इंजीनियरिंग विभाग<br>अनुसंधान विषय: सामाजिक-आर्थिक विकास, टेक्नो-इकोनॉमिक ऑप्टिमाइज़ेशन और रेज़िलिएंस के एकीकरण के साथ हाइब्रिड नवीकरणीय ऊर्जा माइक्रोग्रिड हेतु गतिशील ढाँचा।",
      "इलेक्ट्रॉनिक एवं इलेक्ट्रिकल इंजीनियरिंग में मास्टर डिग्री<br>नेशनल शिज़ुओका यूनिवर्सिटी, अगस्त 2025<br>अनुसंधान विषय: लोड परिवर्तनशीलता और जलवायवीय क्षेत्रों में ग्रामीण विद्युतीकरण हेतु हाइब्रिड माइक्रोग्रिड का इष्टतम क्षमता/योजना अध्ययन<br>ABP पूर्ण छात्रवृत्ति (2023–2025), GPA: 2.9",
      "इंडस्ट्रियल सेफ़्टी में एडवांस डिप्लोमा (जून 2022) — रीजनल लेबर इंस्टीट्यूट, कोलकाता",
      "इलेक्ट्रिकल इंजीनियरिंग में बी.टेक (जुलाई 2020, CGPA: 7.77) — KIIT यूनिवर्सिटी, भुवनेश्वर",
      "12वीं (मई 2016, 70%) — Sir Padampat Singhania Education Centre, कानपुर",
      "10वीं (मई 2014, CGPA: 6.8) — Puranchandra Vidya Niketan, कानपुर"
    ],

    experienceTitle: "अनुभव",
    experienceList: [
      "रिसर्च असिस्टेंट (R.A.)<br>नेशनल शिज़ुओका यूनिवर्सिटी, Current (वर्तमान)<br>कार्य क्षेत्र: हाइब्रिड नवीकरणीय ऊर्जा माइक्रोग्रिड, PV/BESS/DG साइज़िंग (HOMER Pro), GHI एवं लोड एनालिटिक्स, रिग्रेशन-आधारित योजना, फ़िगर्स/पांडुलिपि, रिव्यूअर जवाब और शोध समन्वय।<br>स्कूल ऑफ़ इलेक्ट्रॉनिक्स एवं इलेक्ट्रिकल इंजीनियरिंग — सुपरवाइज़र: हितोशी हागा।",
      "टीचिंग असिस्टेंट<br>नेशनल शिज़ुओका यूनिवर्सिटी, अगस्त 2023 – सितंबर 2025<br>विषय: अंडरग्रेजुएट छात्रों को ग्लो डिस्चार्ज एवं आर्क डिस्चार्ज पढ़ाना।<br>सुपरवाइज़र: हिरोनोबु मात्सुओ।",
      "रिसर्च इंटर्न — नानहुआ यूनिवर्सिटी (सितंबर 2019 – फ़रवरी 2020) — प्रो. शिन ची लाई के अंतर्गत",
      "रिसर्च इंटर्न — एशिया यूनिवर्सिटी (नवंबर 2019 – दिसंबर 2019) — प्रो. टी. चेन के अंतर्गत",
      "समर इंटर्न — TATA POWER (मई 2018 – जून 2018)",
      "रिसर्च इंटर्न — KIIT यूनिवर्सिटी (जून 2017 – अगस्त 2018) — प्रो. बी.बी. कर के अंतर्गत"
    ],

    skillsTitle: "कौशल",
    skillsLanguagesTitle: "भाषाएँ",
    skillsLanguagesList: ["अंग्रेज़ी", "जापानी (मूल)", "हिंदी", "भोजपुरी", "बंगाली", "ओड़िया"],
    skillsCoursesTitle: "पाठ्यक्रम",
    skillsCoursesList: [
      "TCS आयन: प्रभावशाली प्रस्तुति बनाना",
      "TCS आयन: कॉर्पोरेट शिष्टाचार",
      "TCS आयन: प्रभावी ईमेल लेखन",
      "TCS आयन: समूह चर्चा की तैयारी",
      "TCS आयन: उद्योगोन्मुख सॉफ्ट-स्किल विकास",
      "IIT कानपुर: फ़्लाई ऐश की संभावित उपयोगिता (सफ़ेद पॉलिमर-जैसी संरचना का विकास)"
    ],
    skillsCertificationsTitle: "प्रमाणपत्र",
    skillsCertificationsList: [
      "VV Giri राष्ट्रीय श्रम संस्थान: व्यावसायिक सुरक्षा एवं कार्य परिस्थितियाँ",
      "श्रमिकों की भेद्यताओं (प्रवासन/ट्रैफिकिंग/बाल एवं बंधुआ मज़दूरी) पर संवेदनशीलता कार्यक्रम",
      "बंधुआ/बाल मज़दूरी की रोकथाम हेतु ऑनलाइन कार्यक्रम",
      "डायरेक्टोरेट जनरल ऑफ़ फ़ैक्टरी एडवाइस सर्विसेज: हाउसकीपिंग एवं स्वच्छता प्रशिक्षण",
      "श्रम निरीक्षण के माध्यम से सुशासन प्रशिक्षण",
      "TATA-POWER समर इंटर्नशिप प्रमाणपत्र",
      "KITT FEST 2017 प्रमाणपत्र",
      "IIT कानपुर फ़्लाई ऐश प्रमाणपत्र",
      "Texas Instruments USA IICDC-2019 बिज़नेस टेस्ट प्रमाणपत्र",
      "नानहुआ यूनिवर्सिटी सेमेस्टर कोर्स पूर्णता प्रमाणपत्र",
      "Industrial Technology Research Institute Taiwan: इंडस्ट्री इंटरफेस प्रमाणपत्र",
      "चुंग चेंग यूनिवर्सिटी विंटर स्कूल प्रमाणपत्र",
      "नानहुआ यूनिवर्सिटी रिसर्च इंटर्नशिप प्रमाणपत्र",
      "NHU: ताइवान हाई-स्कूल शिक्षण प्रमाणपत्र",
      "नानहुआ यूनिवर्सिटी: उत्कृष्ट लाइफ़-एजुकेशन पर्सनेल एवं नेशनल लाइफ़ अवार्ड",
      "न्यू साउथ बाउंड लाइफ़ एजुकेशन प्रोग्राम प्रमाणपत्र",
      "IEEE: IoT के दायरे और लाभ प्रमाणपत्र",
      "IEEE: ग्रेजेजुएट मेंबरशिप प्रमाणपत्र",
      "भारत का केंद्रीय सतर्कता आयोग: उच्चतम सत्यनिष्ठा प्रतिज्ञा",
      "श्रम एवं रोजगार मंत्रालय: नो-चाइल्ड लेबर पॉलिसी प्रतिज्ञा"
    ],

    researchTitle: "अनुसंधान और प्रकाशन",
    researchPapersTitle: "अनुसंधान पत्र",
    researchPublishedTitle: "प्रकाशित",
    researchPublishedList: [
      'पुस्तक अध्याय: Importance of perovskite solar cells in sustainable energy solutions — <a href="https://doi.org/10.1515/9783111726847-012" target="_blank" rel="noopener">De Gruyter (DOI)</a>. लेखक: Pravin Kumar Singh, Yash Pandey, Upendra Kulshrestha.',
      "“सतत ऊर्जा का संवर्द्धन: ग्रीन ट्रांज़िशन में नए अवसर और सीमाएँ” — Wiley Publications",
      "“डीजी-बेस्ड माइक्रोग्रिड में PV और BESS की इष्टतम क्षमता पर लोड प्रोफ़ाइल परिवर्तनशीलता का प्रभाव” — JSES"
    ],
    researchUpcomingTitle: "आगामी",
    researchUpcomingList: [
      "“ऊर्जा संचयन के लिए पायज़ोइलेक्ट्रिक मेटामटेरियल्स” (Elsevier, समीक्षाधीन)",
      "“ग्रामीण माइक्रोग्रिड हेतु PV/BESS क्षमता अनुमान का नया मॉडल” (Elsevier e-Prime)",
      "“नवीकरणीय ऊर्जा की ओर वैश्विक परिवर्तन को तेज़ करने की रणनीतियाँ” (अर्सेनिक, जल सुरक्षा, One Health, जलवायु परिवर्तन — सार-संग्रह)",
      "“ग्रामीण माइक्रोग्रिड के लिए एकीकृत PV–BESS क्षमता अनुमान फ्रेमवर्क: भूमध्यरेखीय जड़ों से वैश्विक संदर्भ तक” (IEEE Xplore, समीक्षाधीन)"
    ],
    researchConferencesTitle: "सम्मेलन",
    researchConferencesList: [
      "नानहुआ विश्वविद्यालय (ताइवान): ग्रीन टेक्नोलॉजी और सस्टेनेबिलिटी अंतर्राष्ट्रीय सम्मेलन",
      "KOSMOS: AR/VR के मानव/औद्योगिक अनुप्रयोग (काऊशुंग कन्वेंशन सेंटर, ताइवान)",
      "JSES 2024: सप्पोरो सिटी यूनिवर्सिटी (होक्काइदो) — लोड वैरिएबिलिटी का क्षमता एवं NPC पर प्रभाव",
      "9वाँ अंतर्राष्ट्रीय कांग्रेस एवं प्रदर्शनी: ‘आर्सेनिक इन द एनवायरनमेंट’ (KIIT विश्वविद्यालय, भुवनेश्वर, भारत)"
    ],

    volunteerTitle: "स्वयंसेवी कार्य",
    volunteerText:
      "ATTAC NGO: वेबसाइट सामग्री निर्माण, अभियान समन्वयन और सोशल मीडिया प्रबंधन।",

    referencesTitle: "संदर्भ",
    referencesList: [
      "Dr. Sushil Yadav Yamamoto (जापान, कृषि-वन-मत्स्य मंत्रालय — पंजीकृत सलाहकार)",
      "Prof. Satyendra Patnaik (KIIT & KISS — संस्थापक सलाहकार)",
      "Prof. Jyoti Prakash Maity (National Chung Cheng University / KIIT University)",
      "Prof. Byomkesh Nayak (Dean, School of Electrical Engineering, KIIT University)",
      "Dr. Congo Tak Shing CHING (Professor, Graduate Institute of Biomedical Engineering, National Chung Hsing University)",
      "Assoc. Prof. Hironobu Matsuo (Department of Electronics & Electrical Engineering, National Shizuoka University)",
      "Mr. Sanatan (Deputy Secretary, Ministry of Skill Development and Entrepreneurship, Government of India)"
    ],

    contactTitle: "संपर्क",
    contactEmail: "ईमेल: yashpdelhi@gmail.com, yashpjapan@yahoo.com",
    contactInstitutionalEmail: "संस्थागत ईमेल: pandey.yash.23@shizuoka.ac.jp",
    contactPhone: "मोबाइल: +81-7090976618, +91-9455918918",
    contactWebsite:
      'वेबसाइट: <a href="https://luminarytosavant.github.io/YASHPANDEY.github.io/" target="_blank" rel="noopener" style="color:#ffffff">luminarytosavant.github.io/YASHPANDEY.github.io</a><br><span style="color:#ffffff">© All rights reserved — Matsuo Labs &amp; Shizuoka University</span>'
  },

  /* ---- Korean ---- */
  ko: {
    heroTitle: "야시 판데이의 포트폴리오에 오신 것을 환영합니다",
    heroSubtitle: "지속가능 에너지와 그 너머를 탐구하다",

    aboutTitle: "소개",
    aboutText:
      "저는 일본 시즈오카 국립대 전기전자공학 박사과정의 야시 판데이(Yash Pandey)입니다. 농촌 전력화(전기보급)를 위한 지속가능 에너지 솔루션을 연구하고 있으며, 재생에너지에 대한 열정과 다양한 연구/인턴 경험을 바탕으로 친환경 기술 발전과 사회적 기여를 목표로 하고 있습니다.",
    aboutHobbies:
      "<strong>취미:</strong> 축구, 시 쓰기, 기타 연주, 소설 읽기, 여행, 사진, 요리",
    aboutAffiliations: "<strong>소속/회원:</strong>",
    aboutAffiliationsList: [
      "IAAM: 국제신소재학회(스웨덴)"
      // IIDL removed
    ],
    aboutFreelance: "<strong>프리랜스 컨설팅:</strong>",
    aboutFreelanceList: [
      "Japan Development Private Limited(럭나우, 인도)",
      "SALA Energy Corporation(하마마쓰, 일본)",
      "Akamatsu Electric Company Limited(이와타, 일본)"
    ],
    aboutAddress:
      "<strong>현 주소:</strong> 일본 시즈오카현 하마마쓰시 시지미즈카, 아케보노 료(기숙사) 102호.",

    educationTitle: "학력",
    educationList: [
      "박사 (예정: 2028년 9월)<br>시즈오카대학교 공학부 전기전자공학전공<br>연구주제: 하이브리드 재생에너지 마이크로그리드의 동적 프레임워크 — 사회경제 성장, 기술경제 최적화, 회복탄력성의 통합.",
      "전자·전기공학 석사<br>시즈오카대학교, 2025년 8월 졸업<br>연구주제: 부하 변동/기후대 전반의 농촌 전력화를 위한 하이브리드 마이크로그리드 최적 용량 및 계획 연구<br>ABP 전액 장학생(2023–2025), GPA 2.9",
      "산업안전 고급 디플로마 (2022년 6월) — Regional Labour Institute(콜카타, 인도)",
      "전기공학 학사 (2020년 7월, CGPA 7.77) — KIIT University(부바네스와르, 인도)",
      "고등학교 12학년 (2016년 5월, 70%) — Sir Padampat Singhania Education Centre(칸푸르, 인도)",
      "고등학교 10학년 (2014년 5월, CGPA 6.8) — Puranchandra Vidya Niketan(칸푸르, 인도)"
    ],

    experienceTitle: "경력",
    experienceList: [
      "연구조교(R.A.)<br>시즈오카대학교, Current(재직)<br>업무: 하이브리드 재생에너지 마이크로그리드, PV/BESS/DG 용량 산정(HOMER Pro), GHI/부하 분석, 회귀 기반 계획, 도표/원고, 심사응답, 연구 조정.<br>소속: 전자·전기공학 — 지도교수: 히토시 하가",
      "강의조교(TA)<br>시즈오카대학교, 2023년 8월 – 2025년 9월<br>담당: 학부생 대상 글로우 방전 및 아크 방전.<br>지도교수: 히로노부 마츠오",
      "연구 인턴 — 난화대학교(2019년 9월 – 2020년 2월, 지도: Shin Chi Lai 교수)",
      "연구 인턴 — 아시아대학교(2019년 11월 – 2019년 12월, 지도: T. Chen 교수)",
      "하계 인턴 — TATA POWER(2018년 5월 – 2018년 6월)",
      "연구 인턴 — KIIT University(2017년 6월 – 2018년 8월, 지도: B.B Kar 교수)"
    ],

    skillsTitle: "보유 기술",
    skillsLanguagesTitle: "언어",
    skillsLanguagesList: ["영어", "일본어(기초)", "힌디어", "보즈푸리어", "벵골어", "오디아어"],
    skillsCoursesTitle: "이수 과정",
    skillsCoursesList: [
      "TCS ion: 임팩트 있는 프레젠테이션",
      "TCS ion: 기업 에티켓",
      "TCS ion: 효과적인 이메일 작성",
      "TCS ion: 그룹토론 준비",
      "TCS ion: 산업 수요 기반 소프트스킬 개발",
      "IIT 칸푸르: 플라이애시의 활용 및 백색 폴리머 유사 구조 개발"
    ],
    skillsCertificationsTitle: "자격/인증",
    skillsCertificationsList: [
      "VV Giri 국립노동연구소: 산업안전·근로환경 관련 인증",
      "출신주 취약성(이주, 인신매매, 아동/채무노동) 대응 인증",
      "아동/채무노동 예방·근절 온라인 교육 인증",
      "공장자문·노동연구소: 하우스키핑/청결 반일 과정 인증",
      "노동감사를 통한 거버넌스 개선 과정 인증",
      "TATA-POWER 하계 인턴 수료증",
      "KITT FEST 2017 수료증",
      "IIT 칸푸르 플라이애시 활용 인증",
      "Texas Instruments USA IICDC-2019 비즈니스 테스트 인증",
      "난화대학교 학기 과정 수료증",
      "대만 산업기술연구원(ITRI) 인터페이스 인증",
      "충정대학교 윈터스쿨 수료증",
      "난화대학교 연구 인턴 수료증",
      "NHU 대만 고등학교 강의 인증",
      "난화대학교 우수 라이프에듀케이션 인재/국가 라이프상",
      "난화대학교 New Southbound 라이프 에듀케이션 인증",
      "IEEE: IoT 범위/이점 인증",
      "IEEE: Graduate Member 인증",
      "인도 중앙감찰위원회: 최고 수준의 청렴 서약",
      "인도 노동고용부: 아동노동 금지 정책 서약"
    ],

    researchTitle: "연구 및 출판",
    researchPapersTitle: "연구 논문",
    researchPublishedTitle: "게재됨",
    researchPublishedList: [
      '도서 챕터: Importance of perovskite solar cells in sustainable energy solutions — <a href="https://doi.org/10.1515/9783111726847-012" target="_blank" rel="noopener">De Gruyter (DOI)</a>. 저자: Pravin Kumar Singh, Yash Pandey, Upendra Kulshrestha.',
      "“지속가능 에너지의 진전: 그린 트랜지션의 새로운 프런티어와 기회” — Wiley Publications",
      "“부하 변동성이 디젤 발전기 기반 마이크로그리드의 PV/BESS 최적 용량에 미치는 영향” — JSES"
    ],
    researchUpcomingTitle: "투고/예정",
    researchUpcomingList: [
      "“에너지 하베스팅을 위한 압전 메타물질” (Elsevier 심사중)",
      "“적도 인근 농촌 마이크로그리드의 PV/BESS 용량 추정 모델” (Elsevier e-Prime)",
      "“재생에너지로의 전환 가속화를 위한 전략” (초록집: 비소·수자원·One Health·기후변화)",
      "“농촌 마이크로그리드를 위한 통합 PV–BESS 용량 추정 프레임워크: 적도에서 세계로” (IEEE Xplore 심사중)"
    ],
    researchConferencesTitle: "학회/컨퍼런스",
    researchConferencesList: [
      "난화대학교(대만): 그린테크놀로지 & 지속가능성 국제회의",
      "KOSMOS: AR/VR의 생활·산업 적용 (가오슝 컨벤션센터, 대만)",
      "JSES 2024: 삿포로 시립대(홋카이도) — 부하 변동이 용량·NPC에 미치는 영향",
      "제9회 Arsenic in the Environment (KIIT University, 부바네스와르, 인도)"
    ],

    volunteerTitle: "봉사 활동",
    volunteerText:
      "ATTAC NGO: 웹사이트 콘텐츠 제작, 캠페인 코디네이션 및 소셜미디어 관리.",

    referencesTitle: "추천인",
    referencesList: [
      "Dr. Sushil Yadav Yamamoto (일본 농림수산성 등록 컨설턴트)",
      "Prof. Satyendra Patnaik (KIIT & KISS 창립자 고문)",
      "Prof. Jyoti Prakash Maity (National Chung Cheng University / KIIT University)",
      "Prof. Byomkesh Nayak (KIIT University 전기공학부 학장)",
      "Dr. Congo Tak Shing CHING (National Chung Hsing University 생의공학 연구소 교수)",
      "Assoc. Prof. Hironobu Matsuo (Shizuoka University 전자·전기공학)",
      "Mr. Sanatan (인도 정부 기술개발·창업부 차관)"
    ],

    contactTitle: "연락처",
    contactEmail: "이메일: yashpdelhi@gmail.com, yashpjapan@yahoo.com",
    contactInstitutionalEmail: "소속 이메일: pandey.yash.23@shizuoka.ac.jp",
    contactPhone: "전화: +81-7090976618, +91-9455918918",
    contactWebsite:
      '웹사이트: <a href="https://luminarytosavant.github.io/YASHPANDEY.github.io/" target="_blank" rel="noopener" style="color:#ffffff">luminarytosavant.github.io/YASHPANDEY.github.io</a><br><span style="color:#ffffff">© All rights reserved — Matsuo Labs &amp; Shizuoka University</span>'
  }
};

/* ---- Language switcher ---- */
function changeLanguage(lang) {
  const data = content[lang] || content.en;

  const map = [
    ["hero-title", "heroTitle"],
    ["hero-subtitle", "heroSubtitle"],

    ["about-title", "aboutTitle"],
    ["about-text", "aboutText"],
    ["about-hobbies", "aboutHobbies"],
    ["about-affiliations", "aboutAffiliations"],
    ["about-freelance", "aboutFreelance"],
    ["about-address", "aboutAddress"],

    ["education-title", "educationTitle"],
    ["experience-title", "experienceTitle"],
    ["skills-title", "skillsTitle"],
    ["skills-languages-title", "skillsLanguagesTitle"],
    ["skills-courses-title", "skillsCoursesTitle"],
    ["skills-certifications-title", "skillsCertificationsTitle"],

    ["research-title", "researchTitle"],
    ["research-papers-title", "researchPapersTitle"],
    ["research-published-title", "researchPublishedTitle"],
    ["research-upcoming-title", "researchUpcomingTitle"],
    ["research-conferences-title", "researchConferencesTitle"],

    ["volunteer-title", "volunteerTitle"],
    ["volunteer-text", "volunteerText"],

    ["references-title", "referencesTitle"],

    ["contact-title", "contactTitle"],
    ["contact-email", "contactEmail"],
    ["contact-institutional-email", "contactInstitutionalEmail"],
    ["contact-phone", "contactPhone"],
    ["contact-website", "contactWebsite"]
  ];

  map.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el && data[key]) el.innerHTML = data[key];
  });

  const lists = [
    ["about-affiliations-list", "aboutAffiliationsList"],
    ["about-freelance-list", "aboutFreelanceList"],
    ["education-list", "educationList"],
    ["experience-list", "experienceList"],
    ["skills-languages-list", "skillsLanguagesList"],
    ["skills-courses-list", "skillsCoursesList"],
    ["skills-certifications-list", "skillsCertificationsList"],
    ["research-published-list", "researchPublishedList"],
    ["research-upcoming-list", "researchUpcomingList"],
    ["research-conferences-list", "researchConferencesList"],
    ["references-list", "referencesList"]
  ];

  lists.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el && Array.isArray(data[key])) {
      el.innerHTML = data[key].map(item => `<li>${item}</li>`).join("");
    }
  });

  // Persist choice
  document.documentElement.lang = lang;
  try { localStorage.setItem("lang", lang); } catch(e) {}
}

/* ---- Motion / UI polish ---- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const href = a.getAttribute("href");
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
}

/* Safe reveal-on-scroll: visible by default; JS adds .reveal to animate in */
function initRevealOnScroll() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nodes = Array.from(document.querySelectorAll("[data-animate]"));

  // Add animation class only after JS is running
  nodes.forEach(el => el.classList.add("reveal"));

  if (prefersReduced || !("IntersectionObserver" in window)) {
    nodes.forEach(el => el.classList.add("in"));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  nodes.forEach(el => observer.observe(el));

  // Failsafe: ensure content shows even if IO never fires
  setTimeout(() => nodes.forEach(el => el.classList.add("in")), 1500);
}

function initParallaxHero() {
  const hero = document.getElementById("hero");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!hero || prefersReduced) return;

  window.addEventListener("scroll", () => {
    const sc = window.pageYOffset;
    hero.style.setProperty("--hero-shift", Math.min(sc * 0.2, 100) + "px");
  }, { passive: true });
}

function initTilt() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const tiltEls = document.querySelectorAll(".card3d[data-tilt]");
  tiltEls.forEach(el => {
    el.addEventListener("mousemove", e => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateZ(0)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "rotateY(0) rotateX(0) translateZ(0)";
    });
  });
}

/* ---- Init ---- */
document.addEventListener("DOMContentLoaded", () => {
  try {
    const saved = localStorage.getItem("lang") || "en";
    changeLanguage(saved);
  } catch(e){
    console.error(e);
    changeLanguage("en");
  }

  initSmoothScroll();
  initRevealOnScroll();
  initParallaxHero();
  initTilt();

  // Optional non-blocking starfield
  (function initStarfield(){
    const field = document.querySelector(".starfield");
    if (!field) return;
    const count = 90;
    for (let i = 0; i < count; i++) {
      const s = document.createElement("span");
      s.className = "star";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.width = s.style.height = (Math.random() * 2 + 1) + "px";
      s.style.opacity = (Math.random() * 0.8 + 0.2).toFixed(2);
      s.style.animationDuration = (Math.random() * 3 + 2).toFixed(2) + "s";
      field.appendChild(s);
    }
  })();
});
