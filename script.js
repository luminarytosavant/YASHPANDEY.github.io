// ==========================
// script.js (drop-in)
// ==========================

// Language content
const content = {
  en: {
    heroTitle: "Welcome to Yash Pandey's Portfolio",
    heroSubtitle: "Exploring Sustainable Energy and Beyond",
    aboutTitle: "About Me",
    aboutText:
      `I am <strong>Yash Pandey</strong>, a Ph.D. student in the <em>Department of Environment and Energy Systems</em> at National Shizuoka University, Japan.<br><br>
       <strong>Ph.D. Research Topic:</strong> Adaptive Hybrid Renewable Energy Microgrids — Integrating techno-economic optimization and socio-economic growth for rural electrification.<br>
       <strong>Master’s Research Topic:</strong> Optimal capacity and planning for rural electrification using hybrid microgrids across load variability and climatic zones.<br><br>
       I specialize in sustainable energy solutions for rural electrification. With a passion for renewable energy and hands-on experience through research and internships, I’m dedicated to advancing green technologies and creating positive impact.`,
    aboutHobbies: "<strong>Hobbies:</strong> Playing Football, Poetry Writing, Guitar Playing, Novel Reading, Travelling, Photography, Cooking",
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
    educationTitle: "Education",
    educationList: [
      "Ph.D. (Environment & Energy Systems)<br>National Shizuoka University, Japan (Ongoing)",
      "Master's in Electrical & Electronics Engineering<br>National Shizuoka University, Japan, October 2025 (expected)<br>Research Topic: Optimal capacity and planning for rural electrification using hybrid microgrids across load variability and climatic zones.",
      "Advance Diploma in Industrial Safety<br>Regional Labour Institute, Kolkata, West Bengal, India, June 2022",
      "Bachelor of Technology in Electrical and Electronics Engineering<br>Kalinga Institute of Industrial Technology, Bhubaneswar, Odisha, India, July 2020",
      "12th Standard<br>Sir Padampat Singhania Education Centre, Kanpur, Uttar Pradesh, India, May 2016",
      "10th Standard<br>Puranchandra Vidya Niketan, Kanpur, Uttar Pradesh, India, May 2014"
    ],
    experienceTitle: "Experience",
    experienceList: [
      "Teaching Assistant<br>National Shizuoka University, August 2023 – Current<br>Course: Glow Discharge and Arc Discharge (Undergraduate).<br>Supervisor: Hironobu Matsuo.",
      "Research Intern<br>Nanhua University, September 2019 – February 2020<br>School of Electrical Engineering and Computer Science under Prof. Shin Chi Lai.",
      "Research Intern<br>Asia University, November 2019 – December 2019<br>School of Computer Science and Information Engineering under Prof. T. Chen.",
      "Summer Intern<br>TATA POWER, May 2018 – June 2018",
      "Research Intern<br>KIIT University, June 2017 – August 2018<br>School of Applied Sciences under Prof. B.B. Kar."
    ],
    skillsTitle: "Skills",
    skillsLanguagesTitle: "Languages",
    skillsLanguagesList: ["English", "Japanese (Basics)", "Hindi", "Bhojpuri"],
    skillsCoursesTitle: "Courses",
    skillsCoursesList: [
      "TCS iON: Making Impactful Presentations",
      "TCS iON: Corporate Etiquette",
      "TCS iON: Writing an Effective Email",
      "TCS iON: Being Prepared for Group Discussions",
      "TCS iON: Developing Industry-Relevant Soft Skills",
      "IIT Kanpur: Potential Utility of Fly Ash and Near-Whitened Polymer-like Structures"
    ],
    skillsCertificationsTitle: "Certifications",
    skillsCertificationsList: [
      "VV Giri National Labour Institute: Code on Occupational Safety & Working Conditions",
      "VV Giri National Labour Institute: Addressing Source-State Vulnerability of Workers",
      "VV Giri National Labour Institute: Prevention & Elimination of Bonded/Child Labour (Online)",
      "DGFASLI: Housekeeping & Cleanliness (Half-day Training)",
      "VV Giri National Labour Institute: Good Governance Through Labour Inspection",
      "TATA-POWER Summer Internship Certificate",
      "KITT FEST 2017 Certificate",
      "IIT Kanpur: Potential Utility of Fly Ash Certificate",
      "Texas Instruments USA IICDC-2019 Business Test Certificate",
      "Nanhua University Semester Course Completion Certificate",
      "ITRI Taiwan: Industry Interface Certificate",
      "National Chung Cheng University Winter School Certificate",
      "Nanhua University Research Internship Certificate",
      "NHU: Teaching High School Students in Taiwan Certificate",
      "Nanhua University: Outstanding Life Education Personnel & National Life Award",
      "Nanhua University: New Southbound Life Education Program Certificate",
      "IEEE: Scope and Benefits of IoT",
      "IEEE: Graduate Member Certificate",
      "Central Vigilance Commission of India: Integrity Pledge Certificate",
      "Ministry of Labour & Employment (India): No Child Labour Pledge Certificate"
    ],
    researchTitle: "Research and Publications",
    researchPapersTitle: "Research Papers",
    researchPublishedTitle: "Published",
    researchPublishedList: [
      "\"Advancing Sustainable Energy: Exploring New Frontiers and Opportunities in Green Transition\", Wiley Publications.",
      "\"Impact of Load Profile Variability on Optimal PV and BESS Capacities of Diesel Generator-based Microgrid\", JSES."
    ],
    researchUpcomingTitle: "Upcoming",
    researchUpcomingList: [
      "\"Piezoelectric Metamaterials for Energy Harvesting.\"",
      "\"Bridging Complexity and Accessibility: A Novel Model for PV and BESS Capacity Estimation in Rural Microgrids\"",
      "\"Accelerating the Global Shift to Renewable Energy: Strategic Pathways for Achieving Net-Zero Emissions\" (Extended Abstract)"
    ],
    researchConferencesTitle: "Conferences",
    researchConferencesList: [
      "International Conference on Green Technology and Sustainability — Nanhua University, Taiwan.",
      "KOSMOS Conference on AR/VR — Kaohsiung Convention Centre, Taiwan.",
      "JSES 2024 — Paper on Load Variability & its effects on component capacity & NPC — Sapporo City University, Hokkaido, Japan.",
      "9th International Congress & Exhibition on Arsenic in the Environment — KIIT University, Bhubaneswar, India."
    ],
    volunteerTitle: "Volunteer Work",
    volunteerText:
      "ATTAC NGO: Built website content and served as Campaign Coordinator and Social Media Manager.",
    referencesTitle: "References",
    referencesList: [
      "Prof. Satyendra Patnaik, Advisor to Founder, KIIT & KISS.",
      "Dr. Jyoti Prakash Maity, MSc, PhD — National Chung Cheng University / School of Applied Sciences, KIIT University.",
      "Prof. Byamakesh Nayak, Dean — School of Electrical Engineering, KIIT University.",
      "Dr. Congo Tak Shing CHING, Professor — Graduate Institute of Biomedical Engineering, National Chung Hsing University.",
      "Assoc. Professor Hironobu Matuso, Department of Electronics & Electrical Engineering, National Shizuoka University.",
      "Dr. Sushil Yadav Yamamoto, Registered Consultant — MAFF, Japan.",
      "Mr. Sanatan, Deputy Secretary — Ministry of Skill Development and Entrepreneurship, Government of India."
    ],
    contactTitle: "Contact",
    contactEmail: "Email: yashpdelhi@gmail.com, yashpjapan@yahoo.com",
    contactInstitutionalEmail: "Institutional Email: pandey.yash.23@shizuoka.ac.jp"
  },

  ja: {
    heroTitle: "ヤシュ・パンディのポートフォリオへようこそ",
    heroSubtitle: "持続可能なエネルギーとその先を探求する",
    aboutTitle: "私について",
    aboutText:
      `私は<strong>ヤシュ・パンディ</strong>です。日本の静岡大学・<em>環境・エネルギーシステム専攻</em>の博士課程に在籍しています。<br><br>
       <strong>博士研究テーマ：</strong> 適応型ハイブリッド再生可能エネルギー・マイクログリッド — 農村電化のためのテクノエコノミクス最適化と社会経済発展の統合。<br>
       <strong>修士研究テーマ：</strong> 負荷変動と気候帯を横断したハイブリッド・マイクログリッドにおける最適容量と計画。<br><br>
       農村電化に向けた持続可能エネルギーソリューションを専門とし、再生可能エネルギーへの情熱と研究・インターンの経験を活かして、グリーンテクノロジーの発展と社会への貢献に取り組んでいます。`,
    aboutHobbies: "<strong>趣味:</strong> サッカー、詩の執筆、ギター演奏、小説読書、旅行、写真、料理",
    aboutAffiliations: "<strong>所属:</strong>",
    aboutAffiliationsList: [
      "IAAM: 国際先端材料協会（スウェーデン）。"
    ],
    aboutFreelance: "<strong>フリーランスコンサルティング:</strong>",
    aboutFreelanceList: [
      "Japan Development Private Limited（ラクナウ、インド）",
      "SALA Energy Corporation（浜松、日本）",
      "Akamatsu Electric Company Limited（磐田、日本）"
    ],
    educationTitle: "学歴",
    educationList: [
      "博士（環境・エネルギーシステム）<br>静岡大学（在学中）",
      "修士（電気電子工学）<br>静岡大学、2025年10月（予定）<br>研究テーマ：負荷変動と気候帯を横断したハイブリッド・マイクログリッドにおける最適容量と計画。",
      "産業安全 上級ディプロマ<br>地域労働研究所（コルカタ、インド）、2022年6月",
      "電気電子工学 学士<br>カリンガ工科大学（ブバネーシュワル、インド）、2020年7月",
      "12年生<br>Sir Padampat Singhania Education Centre（カンプル、インド）、2016年5月",
      "10年生<br>Puranchandra Vidya Niketan（カンプル、インド）、2014年5月"
    ],
    experienceTitle: "経験",
    experienceList: [
      "ティーチングアシスタント<br>静岡大学、2023年8月 – 現在<br>担当：学部生向けグロー放電・アーク放電<br>指導教員：松尾弘信",
      "研究インターン<br>南華大学、2019年9月 – 2020年2月（Shin Chi Lai教授）",
      "研究インターン<br>亜洲大学、2019年11月 – 2019年12月（T. Chen教授）",
      "サマーインターン<br>TATA POWER、2018年5月 – 2018年6月",
      "研究インターン<br>KIIT大学、2017年6月 – 2018年8月（B.B. Kar教授）"
    ],
    skillsTitle: "スキル",
    skillsLanguagesTitle: "言語",
    skillsLanguagesList: ["英語", "日本語（基礎）", "ヒンディー語", "ボージュプリー語"],
    skillsCoursesTitle: "コース",
    skillsCoursesList: [
      "TCS iON：インパクトのあるプレゼンテーション",
      "TCS iON：コーポレート・エチケット",
      "TCS iON：効果的なメールの書き方",
      "TCS iON：グループディスカッション対策",
      "TCS iON：業界が求めるソフトスキル",
      "IITカンプール：フライアッシュの活用と白色ポリマー様構造"
    ],
    skillsCertificationsTitle: "認定/資格",
    skillsCertificationsList: [
      "VV Giri国立労働研究所：労働安全衛生関連",
      "VV Giri国立労働研究所：移住・人身取引・児童/負債労働の脆弱性対応",
      "VV Giri国立労働研究所：児童/負債労働の予防オンライン講座",
      "DGFASLI：ハウスキーピングと清潔（半日研修）",
      "労働検査によるガバナンス向上 研修",
      "TATA-POWER サマーインターン修了証",
      "KITT FEST 2017 修了証",
      "IITカンプール：フライアッシュ活用認定",
      "Texas Instruments IICDC-2019 ビジネステスト認定",
      "南華大学 セメスター科目修了証",
      "ITRI台湾：インダストリー・インターフェース認定",
      "中正大学 ウィンタースクール修了証",
      "南華大学 研究インターン修了証",
      "NHU：台湾高校での指導認定",
      "南華大学：優秀ライフエデュケーション表彰",
      "南華大学：ニューサウスバウンド・ライフエデュケーション認定",
      "IEEE：IoTの範囲と利点",
      "IEEE：Graduate Member 認定",
      "インド中央監察委員会：インテグリティ誓約",
      "インド労働雇用省：児童労働禁止の誓約"
    ],
    researchTitle: "研究と出版物",
    researchPapersTitle: "研究論文",
    researchPublishedTitle: "出版済み",
    researchPublishedList: [
      "「持続可能なエネルギーの推進：グリーントランジションの新たなフロンティアと機会」Wiley Publications。",
      "「負荷プロファイルの変動がディーゼル発電機ベースのマイクログリッドにおけるPV・BESSの最適容量に与える影響」JSES。"
    ],
    researchUpcomingTitle: "今後の予定",
    researchUpcomingList: [
      "「エネルギーハーベスティングのための圧電メタマテリアル」",
      "「複雑さとアクセシビリティの橋渡し：農村マイクログリッドのPV・BESS容量推定の新モデル」",
      "「再生可能エネルギーへの世界的シフトの加速：ネットゼロ達成の戦略」（拡張要旨）"
    ],
    researchConferencesTitle: "会議",
    researchConferencesList: [
      "南華大学（台湾）：グリーンテクノロジーとサステナビリティ国際会議",
      "KOSMOS（AR/VR）— 高雄コンベンションセンター（台湾）",
      "JSES 2024 — 札幌市立大学（北海道）",
      "第9回 Arsenic in the Environment — KIIT University（インド）"
    ],
    volunteerTitle: "ボランティア",
    volunteerText: "ATTAC NGO：ウェブサイト制作、キャンペーン調整、SNS運営を担当。",
    referencesTitle: "参考/推薦",
    referencesList: [
      "Prof. Satyendra Patnaik（KIIT & KISS 創設者顧問）",
      "Dr. Jyoti Prakash Maity（国立中正大学 / KIIT University）",
      "Prof. Byamakesh Nayak（KIIT 大学 電気工学部 学部長）",
      "Dr. Congo Tak Shing CHING（国立中興大学 生体医工学 教授）",
      "Assoc. Prof. Hironobu Matuso（静岡大学 電子電気工学）",
      "Dr. Sushil Yadav Yamamoto（農林水産省 登録コンサルタント）",
      "Mr. Sanatan（インド政府 技能開発・起業家精神省 副長官）"
    ],
    contactTitle: "連絡先",
    contactEmail: "メール: yashpdelhi@gmail.com, yashpjapan@yahoo.com",
    contactInstitutionalEmail: "学内メール: pandey.yash.23@shizuoka.ac.jp"
  },

  zh: {
    heroTitle: "欢迎来到 Yash Pandey 的作品集",
    heroSubtitle: "探索可持续能源及更多",
    aboutTitle: "关于我",
    aboutText:
      `我是一名就读于日本静冈大学 <em>环境与能源系统</em> 专业的<strong>博士生</strong>。<br><br>
       <strong>博士课题：</strong> 自适应混合可再生能源微电网——将技术经济优化与社会经济发展相融合以促进农村电气化。<br>
       <strong>硕士课题：</strong> 跨负荷波动与气候分区的混合微电网最优容量与规划。<br><br>
       我专注于农村电气化的可持续能源方案，热爱可再生能源，并通过研究与实习积累了实践经验，致力于推动绿色技术并产生积极社会影响。`,
    aboutHobbies: "<strong>爱好：</strong> 踢足球、写诗、弹吉他、读小说、旅行、摄影、烹饪",
    aboutAffiliations: "<strong>隶属：</strong>",
    aboutAffiliationsList: [
      "IAAM：国际先进材料协会（瑞典）。"
    ],
    aboutFreelance: "<strong>自由职业咨询：</strong>",
    aboutFreelanceList: [
      "Japan Development Private Limited（印度勒克瑙）",
      "SALA Energy Corporation（日本滨松）",
      "Akamatsu Electric Company Limited（日本磐田）"
    ],
    educationTitle: "教育",
    educationList: [
      "博士（环境与能源系统）<br>日本静冈大学（在读）",
      "硕士（电气与电子工程）<br>日本静冈大学，2025年10月（预计）<br>课题：跨负荷波动与气候分区的混合微电网最优容量与规划。",
      "工业安全高级文凭<br>地区劳动研究所（加尔各答，印度），2022年6月",
      "电气与电子工程学士<br>卡林加工业技术学院（布巴内斯瓦尔，印度），2020年7月",
      "12年级<br>Sir Padampat Singhania 教育中心（坎普尔，印度），2016年5月",
      "10年级<br>Puranchandra Vidya Niketan（坎普尔，印度），2014年5月"
    ],
    experienceTitle: "经验",
    experienceList: [
      "助教<br>静冈大学，2023年8月–至今<br>课程：辉光放电与电弧放电（本科）<br>导师：Hironobu Matsuo",
      "研究实习生<br>南华大学，2019年9月–2020年2月（Shin Chi Lai 教授）",
      "研究实习生<br>亚洲大学，2019年11月–2019年12月（T. Chen 教授）",
      "暑期实习生<br>TATA POWER，2018年5月–2018年6月",
      "研究实习生<br>KIIT 大学，2017年6月–2018年8月（B.B. Kar 教授）"
    ],
    skillsTitle: "技能",
    skillsLanguagesTitle: "语言",
    skillsLanguagesList: ["英语", "日语（基础）", "印地语", "博杰普尔语"],
    skillsCoursesTitle: "课程",
    skillsCoursesList: [
      "TCS iON：高效演示制作",
      "TCS iON：企业礼仪",
      "TCS iON：有效邮件写作",
      "TCS iON：小组讨论准备",
      "TCS iON：行业所需软技能",
      "IIT 坎普尔：粉煤灰的潜在用途与近白色聚合物结构"
    ],
    skillsCertificationsTitle: "认证",
    skillsCertificationsList: [
      "VV Giri 国家劳动研究所：职业安全与工作条件法规",
      "VV Giri 国家劳动研究所：应对工人脆弱性",
      "VV Giri 国家劳动研究所：消除童工/债务劳动在线课程",
      "DGFASLI：清洁与保洁（半日培训）",
      "通过劳动监察提升治理 培训认证",
      "TATA-POWER 暑期实习证书",
      "KITT FEST 2017 证书",
      "IIT 坎普尔：粉煤灰应用证书",
      "TI USA IICDC-2019 商业测试证书",
      "南华大学 学期课程结业证书",
      "台湾工研院（ITRI）行业接口证书",
      "国立中正大学 冬季学校证书",
      "南华大学 研究实习证书",
      "NHU 台湾高中教学证书",
      "南华大学 优秀生活教育人员/国家生活奖",
      "南华大学 新南向生活教育项目证书",
      "IEEE：IoT 范围与益处证书",
      "IEEE：研究生会员证书",
      "印度中央监察委员会：诚信承诺证书",
      "印度劳工与就业部：禁止童工承诺证书"
    ],
    researchTitle: "研究与出版物",
    researchPapersTitle: "研究论文",
    researchPublishedTitle: "已发表",
    researchPublishedList: [
      "《推进可持续能源：探索绿色转型的新前沿与机遇》Wiley Publications。",
      "《负荷剖面变异性对柴油发电机型微电网中光伏与储能最优容量的影响》JSES。"
    ],
    researchUpcomingTitle: "即将发表",
    researchUpcomingList: [
      "《用于能量采集的压电超材料》",
      "《连接复杂性与可及性：农村微电网中光伏与储能容量估算的新模型》",
      "《加速向可再生能源转型：实现净零排放的战略路径》（扩展摘要）"
    ],
    researchConferencesTitle: "会议",
    researchConferencesList: [
      "南华大学：绿色技术与可持续性国际会议",
      "KOSMOS（AR/VR）高雄会议中心",
      "JSES 2024 札幌市立大学（日本北海道）",
      "第九届环境砷国际会议 KIIT University（印度）"
    ],
    volunteerTitle: "志愿者工作",
    volunteerText: "ATTAC NGO：网站内容建设、活动统筹与社交媒体管理。",
    referencesTitle: "参考",
    referencesList: [
      "Prof. Satyendra Patnaik（KIIT & KISS 创始人顾问）",
      "Dr. Jyoti Prakash Maity（国立中正大学 / KIIT University）",
      "Prof. Byamakesh Nayak（KIIT 大学电气工程学院院长）",
      "Dr. Congo Tak Shing CHING（国立中兴大学生物医学工程研究所教授）",
      "Assoc. Prof. Hironobu Matuso（静冈大学 电子电气工程）",
      "Dr. Sushil Yadav Yamamoto（日本农林水产省注册顾问）",
      "Mr. Sanatan（印度技能发展与创业部 副秘书）"
    ],
    contactTitle: "联系方式",
    contactEmail: "电子邮件: yashpdelhi@gmail.com, yashpjapan@yahoo.com",
    contactInstitutionalEmail: "机构邮箱: pandey.yash.23@shizuoka.ac.jp"
  },

  hi: {
    heroTitle: "यश पांडे के पोर्टफोलियो में आपका स्वागत है",
    heroSubtitle: "सतत ऊर्जा और उससे आगे की खोज",
    aboutTitle: "मेरे बारे में",
    aboutText:
      `मैं <strong>यश पांडे</strong> जापान के नेशनल शिज़ुओका विश्वविद्यालय के <em>पर्यावरण एवं ऊर्जा प्रणालियाँ</em> विभाग में <strong>पीएच.डी. शोधार्थी</strong> हूँ।<br><br>
       <strong>पीएच.डी. शोध विषय:</strong> अनुकूलनीय हाइब्रिड नवीकरणीय ऊर्जा माइक्रोग्रिड — ग्रामीण विद्युतीकरण हेतु टेक्नो-इकोनॉमिक अनुकूलन और सामाजिक-आर्थिक विकास का एकीकरण।<br>
       <strong>मास्टर का शोध विषय:</strong> लोड परिवर्तनशीलता और जलवायु क्षेत्रों के पार हाइब्रिड माइक्रोग्रिड में क्षमता का इष्टतमीकरण और योजना।<br><br>
       मैं ग्रामीण विद्युतीकरण के लिए सतत ऊर्जा समाधान विकसित करने में विशेषज्ञ हूँ और हरित तकनीकों को आगे बढ़ाने के लिए प्रतिबद्ध हूँ।`,
    aboutHobbies: "<strong>शौक:</strong> फ़ुटबॉल, कविता लेखन, गिटार, उपन्यास, यात्रा, फ़ोटोग्राफ़ी, खाना बनाना",
    aboutAffiliations: "<strong>संबद्धता:</strong>",
    aboutAffiliationsList: [
      "IAAM: इंटरनेशनल एसोसिएशन ऑफ़ एडवांस्ड मैटेरियल्स, स्वीडन।"
    ],
    aboutFreelance: "<strong>फ्रीलांस परामर्श:</strong>",
    aboutFreelanceList: [
      "Japan Development Private Limited, लखनऊ, भारत",
      "SALA Energy Corporation, हमामात्सु, जापान",
      "Akamatsu Electric Company Limited, इवाता, जापान"
    ],
    educationTitle: "शिक्षा",
    educationList: [
      "पीएच.डी. (पर्यावरण एवं ऊर्जा प्रणालियाँ)<br>नेशनल शिज़ुओका विश्वविद्यालय, जापान (प्रगति पर)",
      "एम.ई./एम.टेक (इलेक्ट्रिकल एवं इलेक्ट्रॉनिक्स इंजीनियरिंग)<br>नेशनल शिज़ुओका विश्वविद्यालय, अक्टूबर 2025 (अपेक्षित)<br>विषय: लोड परिवर्तनशीलता व जलवायु क्षेत्रों के पार हाइब्रिड माइक्रोग्रिड में इष्टतम क्षमता और योजना।",
      "इंडस्ट्रियल सेफ़्टी में एडवांस डिप्लोमा<br>रीजनल लेबर इंस्टिट्यूट, कोलकाता, भारत, जून 2022",
      "बी.टेक — इलेक्ट्रिकल एवं इलेक्ट्रॉनिक्स इंजीनियरिंग<br>केआईआईटी विश्वविद्यालय, भुवनेश्वर, भारत, जुलाई 2020",
      "12वीं — Sir Padampat Singhania Education Centre, कानपुर, भारत, मई 2016",
      "10वीं — Puranchandra Vidya Niketan, कानपुर, भारत, मई 2014"
    ],
    experienceTitle: "अनुभव",
    experienceList: [
      "टीचिंग असिस्टेंट<br>नेशनल शिज़ुओका विश्वविद्यालय, अगस्त 2023 – वर्तमान<br>विषय: ग्लो डिस्चार्ज और आर्क डिस्चार्ज (स्नातक)<br>पर्यवेक्षक: हिरोनोबु मात्सुओ",
      "रिसर्च इंटर्न<br>नानहुआ विश्वविद्यालय, सितम्बर 2019 – फ़रवरी 2020 (Prof. Shin Chi Lai)",
      "रिसर्च इंटर्न<br>एशिया विश्वविद्यालय, नवम्बर 2019 – दिसम्बर 2019 (Prof. T. Chen)",
      "समर इंटर्न<br>TATA POWER, मई 2018 – जून 2018",
      "रिसर्च इंटर्न<br>केआईआईटी विश्वविद्यालय, जून 2017 – अगस्त 2018 (Prof. B.B. Kar)"
    ],
    skillsTitle: "कौशल",
    skillsLanguagesTitle: "भाषाएँ",
    skillsLanguagesList: ["अंग्रेज़ी", "जापानी (मूलभूत)", "हिंदी", "भोजपुरी"],
    skillsCoursesTitle: "पाठ्यक्रम",
    skillsCoursesList: [
      "TCS iON: प्रभावशाली प्रेज़ेंटेशन",
      "TCS iON: कॉर्पोरेट शिष्टाचार",
      "TCS iON: प्रभावी ईमेल लेखन",
      "TCS iON: समूह चर्चा तैयारी",
      "TCS iON: उद्योग-उन्मुख सॉफ्ट-स्किल्स",
      "IIT कानपुर: फ्लाई ऐश की उपयोगिता व पॉलीमर-सम संरचनाएँ"
    ],
    skillsCertificationsTitle: "प्रमाणपत्र",
    skillsCertificationsList: [
      "VV Giri राष्ट्रीय श्रम संस्थान: व्यावसायिक सुरक्षा व कार्य स्थिति",
      "VV Giri: प्रवासन/मानव तस्करी/बाल-बंधुआ श्रम संवेदनशीलता",
      "VV Giri: बाल-बंधुआ श्रम उन्मूलन ऑनलाइन पाठ्यक्रम",
      "DGFASLI: हाउसकीपिंग व स्वच्छता (अर्ध-दिवसीय)",
      "श्रम निरीक्षण द्वारा सुशासन प्रशिक्षण",
      "TATA-POWER समर इंटर्नशिप प्रमाणपत्र",
      "KITT FEST 2017 प्रमाणपत्र",
      "IIT कानपुर: फ्लाई ऐश प्रमाणपत्र",
      "TI USA IICDC-2019 बिज़नेस टेस्ट प्रमाणपत्र",
      "नानहुआ विश्वविद्यालय सेमेस्टर पाठ्यक्रम प्रमाणपत्र",
      "ITRI ताइवान: इंडस्ट्री इंटरफ़ेस प्रमाणपत्र",
      "चुंग चेंग विश्वविद्यालय विंटर स्कूल प्रमाणपत्र",
      "नानहुआ विश्वविद्यालय रिसर्च इंटर्नशिप प्रमाणपत्र",
      "NHU: ताइवान हाई-स्कूल शिक्षण प्रमाणपत्र",
      "नानहुआ: उत्कृष्ट जीवन शिक्षा/राष्ट्रीय जीवन पुरस्कार",
      "न्यू साउथबाउंड लाइफ़-एजुकेशन प्रमाणपत्र",
      "IEEE: IoT का दायरा व लाभ",
      "IEEE: ग्रैजुएट मेम्बर",
      "भारत का सेंट्रल विजिलेंस कमीशन: इंटीग्रिटी प्रतिज्ञा",
      "श्रम एवं रोजगार मंत्रालय: नो-चाइल्ड-लेबर प्रतिज्ञा"
    ],
    researchTitle: "अनुसंधान और प्रकाशन",
    researchPapersTitle: "अनुसंधान पत्र",
    researchPublishedTitle: "प्रकाशित",
    researchPublishedList: [
      "“सतत ऊर्जा की प्रगति: हरित संक्रमण के नए आयाम व अवसर” — Wiley Publications।",
      "“डीजल जनरेटर आधारित माइक्रोग्रिड में PV-BESS की इष्टतम क्षमता पर लोड वैरिएबिलिटी का प्रभाव” — JSES।"
    ],
    researchUpcomingTitle: "आगामी",
    researchUpcomingList: [
      "“ऊर्जा संग्रहण हेतु पाईजोइलेक्ट्रिक मेटामटेरियल्स”",
      "“जटिलता और पहुंच के बीच सेतु: ग्रामीण माइक्रोग्रिड में PV-BESS क्षमता अनुमान का नया मॉडल”",
      "“नवीकरणीय ऊर्जा की ओर वैश्विक परिवर्तन में तेजी: नेट-ज़ीरो की रणनीतियाँ” (विस्तारित सार)"
    ],
    researchConferencesTitle: "सम्मेलन",
    researchConferencesList: [
      "नानहुआ विश्वविद्यालय (ताइवान): ग्रीन टेक्नोलॉजी एवं सस्टेनेबिलिटी",
      "KOSMOS (AR/VR) — काऊशुंग कन्वेंशन सेंटर, ताइवान",
      "JSES 2024 — सप्पोरो सिटी यूनिवर्सिटी, होक्काइडो, जापान",
      "9वां Arsenic in the Environment — KIIT University, भारत"
    ],
    volunteerTitle: "स्वयंसेवा",
    volunteerText: "ATTAC NGO: वेबसाइट सामग्री निर्माण, अभियान समन्वय और सोशल मीडिया प्रबंधन।",
    referencesTitle: "संदर्भ",
    referencesList: [
      "Prof. Satyendra Patnaik — KIIT & KISS",
      "Dr. Jyoti Prakash Maity — National Chung Cheng University / KIIT",
      "Prof. Byamakesh Nayak — Dean, School of Electrical Engineering, KIIT",
      "Dr. Congo Tak Shing CHING — National Chung Hsing University",
      "Assoc. Prof. Hironobu Matuso — Shizuoka University",
      "Dr. Sushil Yadav Yamamoto — MAFF Japan",
      "Mr. Sanatan — Govt. of India (MSDE)"
    ],
    contactTitle: "संपर्क",
    contactEmail: "ईमेल: yashpdelhi@gmail.com, yashpjapan@yahoo.com",
    contactInstitutionalEmail: "संस्थागत ईमेल: pandey.yash.23@shizuoka.ac.jp"
  },

  ko: {
    heroTitle: "야시 판데이의 포트폴리오에 오신 것을 환영합니다",
    heroSubtitle: "지속가능 에너지와 그 너머를 탐구하다",
    aboutTitle: "소개",
    aboutText:
      `저는 일본 시즈오카대학교 <em>환경-에너지 시스템</em> 전공의 <strong>박사과정</strong> 연구원 <strong>Yash Pandey</strong>입니다.<br><br>
       <strong>박사 연구 주제:</strong> 적응형 하이브리드 재생에너지 마이크로그리드 — 농촌 전력화를 위한 기술-경제 최적화와 사회-경제 성장의 통합.<br>
       <strong>석사 연구 주제:</strong> 부하 변동성과 기후대 전반을 고려한 하이브리드 마이크로그리드의 최적 용량 및 계획.<br><br>
       재생에너지 기반의 농촌 전력화 솔루션을 연구하며, 연구·인턴 경험을 바탕으로 친환경 기술 발전과 사회적 기여를 목표로 하고 있습니다.`,
    aboutHobbies: "<strong>취미:</strong> 축구, 시 쓰기, 기타 연주, 소설 읽기, 여행, 사진, 요리",
    aboutAffiliations: "<strong>소속:</strong>",
    aboutAffiliationsList: [
      "IAAM: 국제선진재료협회(스웨덴)."
    ],
    aboutFreelance: "<strong>프리랜스 컨설팅:</strong>",
    aboutFreelanceList: [
      "Japan Development Private Limited(럭나우, 인도)",
      "SALA Energy Corporation(하마마쓰, 일본)",
      "Akamatsu Electric Company Limited(이와타, 일본)"
    ],
    educationTitle: "학력",
    educationList: [
      "박사 (환경-에너지 시스템)<br>시즈오카대학교 (재학 중)",
      "석사 (전기·전자공학)<br>시즈오카대학교, 2025년 10월 예정<br>주제: 부하 변동/기후대 전반을 고려한 하이브리드 마이크로그리드 최적 용량 및 계획",
      "산업안전 고급 디플로마<br>Regional Labour Institute, 콜카타(인도), 2022년 6월",
      "학사 (전기·전자공학)<br>KIIT University, 부바네스와르(인도), 2020년 7월",
      "고교 12학년 — Sir Padampat Singhania Education Centre(칸푸르, 인도), 2016년 5월",
      "고교 10학년 — Puranchandra Vidya Niketan(칸푸르, 인도), 2014년 5월"
    ],
    experienceTitle: "경력",
    experienceList: [
      "강의조교(TA)<br>시즈오카대학교, 2023년 8월 – 현재<br>과목: 글로우 방전·아크 방전(학부)<br>지도: 히로노부 마츠오",
      "연구 인턴<br>난화대학교, 2019년 9월 – 2020년 2월 (Shin Chi Lai 교수)",
      "연구 인턴<br>아시아대학교, 2019년 11월 – 2019년 12월 (T. Chen 교수)",
      "하계 인턴<br>TATA POWER, 2018년 5월 – 2018년 6월",
      "연구 인턴<br>KIIT University, 2017년 6월 – 2018년 8월 (B.B. Kar 교수)"
    ],
    skillsTitle: "보유 기술",
    skillsLanguagesTitle: "언어",
    skillsLanguagesList: ["영어", "일본어(기초)", "힌디어", "보즈푸리어"],
    skillsCoursesTitle: "이수 과정",
    skillsCoursesList: [
      "TCS iON: 임팩트 있는 발표",
      "TCS iON: 기업 에티켓",
      "TCS iON: 효과적인 이메일 작성",
      "TCS iON: 그룹 토론 대비",
      "TCS iON: 산업 수요형 소프트스킬",
      "IIT 칸푸르: 플라이애시 활용 및 백색 폴리머 유사 구조"
    ],
    skillsCertificationsTitle: "자격/인증",
    skillsCertificationsList: [
      "VV Giri 국립노동연구소: 산업안전·근로환경",
      "VV Giri: 이주/인신매매/아동·채무노동 취약성 대응",
      "VV Giri: 아동·채무노동 예방 온라인 교육",
      "DGFASLI: 하우스키핑/청결(반일 교육)",
      "노동검사 기반 거버넌스 향상 교육",
      "TATA-POWER 하계 인턴 수료증",
      "KITT FEST 2017 수료증",
      "IIT 칸푸르 플라이애시 인증",
      "TI USA IICDC-2019 비즈니스 테스트 인증",
      "난화대학교 학기과정 수료증",
      "ITRI 대만 인터페이스 인증",
      "중정대학교 윈터스쿨 수료증",
      "난화대학교 연구 인턴 수료증",
      "NHU 고등학교 강의 인증",
      "난화대 우수 라이프에듀케이션/국가 라이프상",
      "뉴 사우스바운드 라이프 에듀케이션 인증",
      "IEEE: IoT 범위·이점",
      "IEEE: Graduate Member",
      "인도 중앙감찰위원회: 청렴 서약",
      "인도 노동고용부: 아동노동 금지 서약"
    ],
    researchTitle: "연구 및 출판",
    researchPapersTitle: "연구 논문",
    researchPublishedTitle: "게재됨",
    researchPublishedList: [
      "“지속가능 에너지의 진전: 그린 전환의 새로운 프런티어와 기회” — Wiley Publications",
      "“부하 변동이 디젤 발전기 기반 마이크로그리드의 PV·BESS 최적 용량에 미치는 영향” — JSES"
    ],
    researchUpcomingTitle: "투고/예정",
    researchUpcomingList: [
      "“에너지 하베스팅을 위한 압전 메타물질”",
      "“복잡성과 접근성의 연결: 농촌 마이크로그리드의 PV·BESS 용량 추정 새 모델”",
      "“재생에너지로의 글로벌 전환 가속: 넷제로 전략”(확장 초록)"
    ],
    researchConferencesTitle: "학회/컨퍼런스",
    researchConferencesList: [
      "난화대학교(대만) — 그린 테크놀로지 & 지속가능성",
      "KOSMOS (AR/VR) — 가오슝 컨벤션센터",
      "JSES 2024 — 삿포로 시립대(홋카이도)",
      "Arsenic in the Environment — KIIT University(인도)"
    ],
    volunteerTitle: "봉사 활동",
    volunteerText: "ATTAC NGO: 웹사이트 콘텐츠 제작, 캠페인 코디네이션, SNS 운영.",
    referencesTitle: "추천인",
    referencesList: [
      "Prof. Satyendra Patnaik (KIIT & KISS 창립자 고문)",
      "Dr. Jyoti Prakash Maity (National Chung Cheng University / KIIT)",
      "Prof. Byamakesh Nayak (KIIT 전기공학부 학장)",
      "Dr. Congo Tak Shing CHING (National Chung Hsing University)",
      "Assoc. Prof. Hironobu Matuso (Shizuoka University)",
      "Dr. Sushil Yadav Yamamoto (MAFF Japan)",
      "Mr. Sanatan (Govt. of India, MSDE)"
    ],
    contactTitle: "연락처",
    contactEmail: "이메일: yashpdelhi@gmail.com, yashpjapan@yahoo.com",
    contactInstitutionalEmail: "기관 이메일: pandey.yash.23@shizuoka.ac.jp"
  }
};

// Helper setters
function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el && typeof html === "string") el.innerHTML = html;
}
function setList(id, items) {
  const el = document.getElementById(id);
  if (el && Array.isArray(items)) el.innerHTML = items.map(item => `<li>${item}</li>`).join("");
}

// Change language
function changeLanguage(lang) {
  const data = content[lang] || content.en;

  setHTML("hero-title", data.heroTitle);
  setHTML("hero-subtitle", data.heroSubtitle);

  setHTML("about-title", data.aboutTitle);
  setHTML("about-text", data.aboutText);
  setHTML("about-hobbies", data.aboutHobbies);
  setHTML("about-affiliations", data.aboutAffiliations);
  setList("about-affiliations-list", data.aboutAffiliationsList);
  setHTML("about-freelance", data.aboutFreelance);
  setList("about-freelance-list", data.aboutFreelanceList);

  setHTML("education-title", data.educationTitle);
  setList("education-list", data.educationList);

  setHTML("experience-title", data.experienceTitle);
  setList("experience-list", data.experienceList);

  setHTML("skills-title", data.skillsTitle);
  setHTML("skills-languages-title", data.skillsLanguagesTitle);
  setList("skills-languages-list", data.skillsLanguagesList);
  setHTML("skills-courses-title", data.skillsCoursesTitle);
  setList("skills-courses-list", data.skillsCoursesList);
  setHTML("skills-certifications-title", data.skillsCertificationsTitle);
  setList("skills-certifications-list", data.skillsCertificationsList);

  setHTML("research-title", data.researchTitle);
  setHTML("research-papers-title", data.researchPapersTitle);
  setHTML("research-published-title", data.researchPublishedTitle);
  setList("research-published-list", data.researchPublishedList);
  setHTML("research-upcoming-title", data.researchUpcomingTitle);
  setList("research-upcoming-list", data.researchUpcomingList);
  setHTML("research-conferences-title", data.researchConferencesTitle);
  setList("research-conferences-list", data.researchConferencesList);

  setHTML("volunteer-title", data.volunteerTitle);
  setHTML("volunteer-text", data.volunteerText);

  setHTML("references-title", data.referencesTitle);
  setList("references-list", data.referencesList);

  setHTML("contact-title", data.contactTitle);
  setHTML("contact-email", data.contactEmail);
  setHTML("contact-institutional-email", data.contactInstitutionalEmail);
}

// Ensure DOM is ready, then set default language
document.addEventListener("DOMContentLoaded", () => {
  changeLanguage("en");
});
