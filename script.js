// Language content
const content = {
    en: {
        heroTitle: "Welcome to Yash Pandey's Portfolio",
        heroSubtitle: "Exploring Sustainable Energy and Beyond",
        aboutTitle: "About Me",
        aboutText: "I am Yash Pandey, a Ph.D student in Electrical & Electronic Engineering at National Shizuoka University, Japan, specializing in sustainable energy solutions for rural electrification. With a passion for renewable energy and a track record of research and internships in the field, I am dedicated to advancing green technologies and making a positive impact on society.",
        aboutHobbies: "<strong>Hobbies:</strong> Playing Football, Poetry Writing, Guitar Playing, Novel Reading, Travelling, Photography, Cooking",
        aboutAffiliations: "<strong>Affiliations:</strong>",
        aboutAffiliationsList: [
            "IAAM: International Association of Advanced Materials, Sweden.",
            "IIDL: Indian Institute of Democratic Leadership, India."
        ],
        aboutFreelance: "<strong>Freelance Consulting:</strong>",
        aboutFreelanceList: [
            "Japan Development Private Limited, Lucknow, India.",
            "SALA Energy Corporation, Hamamatsu, Japan.",
            "Akamatsu Electric Company Limited, Iwata, Japan."
        ],
        // NEW: address line in About section
        aboutAddress: "<strong>Current Address:</strong> Room 102, Akebono Ryō (Dorm), Shijimizuka, Hamamatsu City, Shizuoka Prefecture, Japan.",
        educationTitle: "Education",
        educationList: [
            // NEW: PhD entry
            "Ph.D. degree (Expected Graduation: September 2028)<br>National Shizuoka University, School of Engineering, Department of Electrical & Electronic Engineering<br>Research Topic: A Dynamic Framework for Adaptive Hybrid Renewable Energy Microgrids: Integrating Socio-Economic Growth, Techno-Economic Optimization, and Resilience in Rural Electrification.",
            // UPDATED: Master's entry + date + GPA
            "Master's degree in Electronic & Electrical Engineering<br>National Shizuoka University, <strong>September 2025 (expected)</strong><br>Research Topic: A Study of Optimal Capacity and Planning for Rural Electrification using Hybrid Microgrid Across Load Variability and Climatic Zones<br>Recipient of ABP Full Scholarship 2023–2025. GPA: 2.9",
            "Advance Diploma in Industrial Safety<br>Regional Labour Institute, Kolkata, West Bengal, India, June 2022",
            "Bachelor of Technology in Electrical Engineering<br>Kalinga Institute of Industrial Technology, Bhubaneswar, Odisha, India, July 2020 (CGPA: 7.77)",
            "12th Standard<br>Sir Padampat Singhania Education Centre, Kanpur, Uttar Pradesh, India, May 2016 (70%)",
            "10th Standard<br>Puranchandra Vidya Niketan, Kanpur, Uttar Pradesh, India, May 2014 (CGPA: 6.8)"
        ],
        experienceTitle: "Experience",
        experienceList: [
            // NEW: RA role
            "Research Assistant (R.A.)<br>National Shizuoka University, <strong>Current</strong><br>Focus: Hybrid renewable energy microgrids, PV/BESS/DG sizing (HOMER Pro), GHI & load analytics, regression-based planning, figures & manuscripts, reviewer responses, and research coordination.<br>School of Electronics & Electrical Engineering — Reporting Supervisor: Hitoshi Haga.",
            // UPDATED: TA end date
            "Teaching Assistant<br>National Shizuoka University, <strong>August 2023 – September 2025</strong><br>Teaching Subject: Glow Discharge and Arc Discharge to bachelor's degree students.<br>Reporting Supervisor: Hironobu Matsuo.",
            "Research Intern<br>Nanhua University, September 2019 - February 2020<br>School of Electrical Engineering and Computer Science under Prof. Shin Chi Lai.",
            "Research Intern<br>Asia University, November 2019 - December 2019<br>School of Computer Science and Information Engineering under Prof. T. Chen.",
            "Summer Intern<br>TATA POWER, May 2018 - June 2018",
            "Research Intern<br>KIIT University, June 2017 - August 2018<br>School of Applied Sciences under Professor Dr. B.B Kar."
        ],
        skillsTitle: "Skills",
        skillsLanguagesTitle: "Languages",
        // UPDATED: added Bengali & Odia
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
            "\"Advancing Sustainable Energy: Exploring New Frontiers and Opportunities in Green Transition\", Wiley Publications.",
            "\"Impact of Load Profile Variability on Optimal PV and BESS Capacities of Diesel Generator based Microgrid\", JSES."
        ],
        researchUpcomingTitle: "Upcoming",
        // UPDATED: matches your latest HTML list
        researchUpcomingList: [
            "\"Piezoelectric metamaterials for energy harvesting.\" (Under peer review — Elsevier)",
            "\"Bridging Complexity and Accessibility: A Novel Model for PV and BESS Capacity Estimation in Rural Microgrids Near the Equatorial Region\" (e-Prime, Elsevier Publications)",
            "\"Accelerating the Global Shift to Renewable Energy: Strategic Pathways for Achieving Net-Zero Emissions\", Book of Abstracts — Arsenic and other Pollutants, Water Security and One Health under Global Climate Change Scenario (Extended Abstract)",
            "\"A Unified PV–BESS Capacity Estimation Framework for Rural Microgrids: From Equatorial Roots to Global Regions.\" (IEEE Xplore — Under Review)"
        ],
        researchConferencesTitle: "Conferences",
        researchConferencesList: [
            "International conference on green technology and sustainability at Nanhua University, Taiwan.",
            "KOSMOS — How AR/VR can benefit human life & industrial usability, Kaohsiung Convention Centre, Taiwan.",
            "JSES 2024 — Paper presented on Load Variability and its effects on component capacity & NPC, Sapporo City University, Sapporo, Hokkaido, Japan.",
            "9th International Congress & Exhibition on Arsenic in the Environment — KIIT University, Bhubaneswar City, India."
        ],
        volunteerTitle: "Volunteer Work",
        volunteerText: "ATTAC NGO: Build Web Site Content and worked as a Campaign Coordinator and Social Media Manager.",
        referencesTitle: "References",
        // UPDATED: references to match your HTML (emails included)
        referencesList: [
            "Dr. Sushil Yadav Yamamoto, Registered Consultant, Ministry of Agriculture, Forestry and Fisheries of Japan.",
            "Prof. Satyendra Patnaik, Advisor to Founder, KIIT & KISS — satyendrapatnaik@kiit.ac.in; satyendra.patnaik@gmail.com",
            "Prof. Dr. Jyoti Prakash Maity, Department of Earth and Environmental Science, National Chung Cheng University; School of Applied Sciences, KIIT University — jyoti_maity@yahoo.com; jpmaity@rediffmail.com",
            "Prof. Byomkesh Nayak, Dean of the School of Electrical Engineering, KIIT University — dean.electrical@kiit.ac.in",
            "Dr. Congo Tak Shing CHING, Professor, Graduate Institute of Biomedical Engineering, National Chung Hsing University — tsching@nchu.edu.tw",
            "Assoc. Professor Hironobu Matsuo, Department of Electronics & Electrical Engineering, National Shizuoka University — matsuo.hironobu@shizuoka.ac.jp",
            "Mr. Sanatan, Deputy Secretary, Ministry of Skill Development and Entrepreneurship, Government of India."
        ],
        contactTitle: "Contact",
        contactEmail: "Email: yashpdelhi@gmail.com, yashpjapan@yahoo.com",
        contactInstitutionalEmail: "Institutional Email: pandey.yash.23@shizuoka.ac.jp",
        // NEW: phone & website to match HTML
        contactPhone: "Mobile: +81-7090976618, +91-9455918918",
        contactWebsite: 'Website: <a href="https://luminarytosavant.github.io/YASHPANDEY.github.io/" target="_blank" rel="noopener">luminarytosavant.github.io/YASHPANDEY.github.io</a>'
    },

    /* ——— Updated non-English to reflect Ph.D. & new fields; lists kept concise ——— */
    ja: {
        heroTitle: "ヤシュ・パンディのポートフォリオへようこそ",
        heroSubtitle: "持続可能なエネルギーとその先を探求する",
        aboutTitle: "私について",
        aboutText: "私は静岡大学・電気電子工学の博士課程の学生で、農村電化のための持続可能なエネルギーソリューションを研究しています。",
        aboutHobbies: "<strong>趣味:</strong> サッカー、詩の執筆、ギター、読書、旅行、写真、料理",
        aboutAffiliations: "<strong>所属:</strong>",
        aboutAffiliationsList: ["IAAM: 国際先端材料協会、スウェーデン。","IIDL: インド民主リーダーシップ研究所、インド。"],
        aboutFreelance: "<strong>フリーランスコンサルティング:</strong>",
        aboutFreelanceList: ["Japan Development Private Limited、ラクナウ、インド。","SALA Energy Corporation、浜松、日本。","Akamatsu Electric Company Limited、磐田、日本。"],
        aboutAddress: "現住所：Room 102, Akebono Ryō (Dorm), Shijimizuka, Hamamatsu, Shizuoka, Japan.",
        educationTitle: "学歴",
        educationList: [
            "博士課程（2028年9月 修了予定）<br>静岡大学 工学部 電気電子工学専攻<br>研究テーマ：ハイブリッド再生可能エネルギー・マイクログリッドの動的最適化フレームワーク。",
            "電子電気工学 修士（2025年9月 予定）<br>研究テーマ：負荷変動・気候帯を跨ぐ農村電化のためのハイブリッド・マイクログリッド最適計画（ABP全額奨学金、GPA 2.9）",
            "産業安全 上級ディプロマ（2022年6月）",
            "電気工学 学士（2020年7月、CGPA 7.77）",
            "12年生（2016年5月、70%）",
            "10年生（2014年5月、CGPA 6.8）"
        ],
        experienceTitle: "経験",
        experienceList: [
            "リサーチアシスタント（R.A.）<br>静岡大学（現在）<br>PV/BESS/DG設計、HOMER Pro、GHI/負荷解析、回帰計画、図表・原稿作成、査読対応、研究調整。",
            "ティーチングアシスタント<br>静岡大学（2023年8月–2025年9月）<br>学部向け：グロー放電・アーク放電。",
            "研究インターン（南華大学、2019年9月–2020年2月）",
            "研究インターン（亜洲大学、2019年11月–2019年12月）",
            "サマーインターン（TATA POWER、2018年5月–6月）",
            "研究インターン（KIIT大学、2017年6月–2018年8月）"
        ],
        skillsTitle: "スキル",
        skillsLanguagesTitle: "言語",
        skillsLanguagesList: ["英語","日本語（基礎）","ヒンディー語","ボージュプリー語","ベンガル語","オディア語"],
        skillsCoursesTitle: "コース",
        skillsCoursesList: [
            "TCS ion：印象的なプレゼンの作成","TCS ion：コーポレート・エチケット","TCS ion：効果的なメール","TCS ion：GD準備",
            "TCS ion：産業が求めるソフトスキル","IITカンプール：フライアッシュの活用"
        ],
        skillsCertificationsTitle: "認定",
        skillsCertificationsList: [
            "VV Giri国立労働研究所：労働安全衛生法 ほか各種認定","TATA-POWERサマーインターン証明","IITカンプール認定","IEEE関連認定 など"
        ],
        researchTitle: "研究と出版物",
        researchPapersTitle: "研究論文",
        researchPublishedTitle: "出版済み",
        researchPublishedList: [
            "持続可能エネルギーの推進（Wiley）",
            "負荷プロファイル変動とPV/BESS最適容量（JSES）"
        ],
        researchUpcomingTitle: "今後の予定",
        researchUpcomingList: [
            "エネルギー収集のための圧電メタマテリアル（査読中）",
            "PV・BESS容量推定の新モデル（Elsevier e-Prime）",
            "再生可能エネルギーへの移行戦略（抄録集）",
            "PV–BESS容量推定の統合フレームワーク（IEEE Xplore 査読中）"
        ],
        researchConferencesTitle: "会議",
        researchConferencesList: [
            "南華大学：グリーンテクノロジーとサステナビリティ国際会議",
            "KOSMOS：AR/VRと産業応用（高雄）",
            "JSES 2024：札幌市立大学",
            "第9回Arsenic in the Environment：KIIT大学"
        ],
        volunteerTitle: "ボランティア活動",
        volunteerText: "ATTAC NGO：ウェブサイト作成、キャンペーン運営、SNS運用。",
        referencesTitle: "推薦者",
        referencesList: [
            "Dr. Sushil Yadav Yamamoto（MAFF, Japan）",
            "Prof. Satyendra Patnaik（KIIT & KISS）",
            "Prof. Jyoti Prakash Maity（NCCU／KIIT）",
            "Prof. Byomkesh Nayak（KIIT）",
            "Dr. Congo Tak Shing CHING（NCHU）",
            "Assoc. Prof. Hironobu Matsuo（Shizuoka Univ.）",
            "Mr. Sanatan（GoI, MSDE）"
        ],
        contactTitle: "連絡先",
        contactEmail: "メール: yashpdelhi@gmail.com, yashpjapan@yahoo.com",
        contactInstitutionalEmail: "所属メール: pandey.yash.23@shizuoka.ac.jp",
        contactPhone: "電話: +81-7090976618, +91-9455918918",
        contactWebsite: 'ウェブサイト: <a href="https://luminarytosavant.github.io/YASHPANDEY.github.io/" target="_blank" rel="noopener">luminarytosavant.github.io/YASHPANDEY.github.io</a>'
    },

    zh: {
        heroTitle: "欢迎来到Yash Pandey的作品集",
        heroSubtitle: "探索可持续能源及更多",
        aboutTitle: "关于我",
        aboutText: "我是在日本静冈大学攻读电气与电子工程博士的研究生，专注于面向乡村电气化的可持续能源方案。",
        aboutHobbies: "<strong>爱好:</strong> 踢足球、写诗、弹吉他、读小说、旅行、摄影、烹饪",
        aboutAffiliations: "<strong>隶属关系:</strong>",
        aboutAffiliationsList: ["IAAM: 国际先进材料协会，瑞典。","IIDL: 印度民主领导力研究所，印度。"],
        aboutFreelance: "<strong>自由职业咨询:</strong>",
        aboutFreelanceList: ["Japan Development Private Limited，勒克瑙，印度。","SALA Energy Corporation，滨松，日本。","Akamatsu Electric Company Limited，磐田，日本。"],
        aboutAddress: "现住址：Room 102, Akebono Ryō (Dorm), Shijimizuka, Hamamatsu, Shizuoka, Japan.",
        educationTitle: "教育",
        educationList: [
            "博士（预计 2028年9月）<br>静冈大学 工学部 电气与电子工程系<br>研究课题：混合可再生能源微电网的动态优化框架。",
            "电子与电气工程硕士（预计 2025年9月，GPA 2.9）",
            "工业安全高级文凭（2022年6月）",
            "电气工程学士（2020年7月，CGPA 7.77）",
            "12年级（2016年5月，70%）",
            "10年级（2014年5月，CGPA 6.8）"
        ],
        experienceTitle: "经历",
        experienceList: [
            "研究助理（R.A.）— 静冈大学（目前）",
            "助教 — 静冈大学（2023年8月–2025年9月）",
            "研究实习生 — 南华大学（2019年9月–2020年2月）",
            "研究实习生 — 亚洲大学（2019年11月–2019年12月）",
            "暑期实习 — TATA POWER（2018年5月–6月）",
            "研究实习生 — KIIT大学（2017年6月–2018年8月）"
        ],
        skillsTitle: "技能",
        skillsLanguagesTitle: "语言",
        skillsLanguagesList: ["英语","日语（基础）","印地语","博杰普尔语","孟加拉语","奥里亚语"],
        skillsCoursesTitle: "课程",
        skillsCoursesList: [
            "TCS ion 课程：有影响力的演示","企业礼仪","高效邮件","小组讨论准备","软技能开发","IIT坎普尔：粉煤灰的潜在用途"
        ],
        skillsCertificationsTitle: "认证",
        skillsCertificationsList: [
            "VV Giri 国家劳动研究所等多项认证","TATA-POWER 实习证书","IIT 坎普尔证书","IEEE 相关认证 等"
        ],
        researchTitle: "研究与出版物",
        researchPapersTitle: "研究论文",
        researchPublishedTitle: "已发表",
        researchPublishedList: [
            "推进可持续能源（Wiley）",
            "负荷曲线变异性与PV/BESS容量（JSES）"
        ],
        researchUpcomingTitle: "即将发表",
        researchUpcomingList: [
            "用于能量采集的压电超材料（审稿中）",
            "PV/BESS 容量估算新模型（Elsevier e-Prime）",
            "可再生能源转型策略（摘要集）",
            "统一的PV–BESS容量估算框架（IEEE Xplore 审稿中）"
        ],
        researchConferencesTitle: "会议",
        researchConferencesList: [
            "南华大学：绿色技术与可持续性国际会议",
            "KOSMOS：AR/VR 与工业应用（高雄）",
            "JSES 2024：札幌市立大学",
            "第九届 环境中的砷：KIIT大学"
        ],
        volunteerTitle: "志愿者工作",
        volunteerText: "ATTAC NGO：网站内容、活动统筹与社媒管理。",
        referencesTitle: "参考资料",
        referencesList: [
            "Dr. Sushil Yadav Yamamoto（日本农林水产省）",
            "Prof. Satyendra Patnaik（KIIT & KISS）",
            "Prof. Jyoti Prakash Maity（NCCU／KIIT）",
            "Prof. Byomkesh Nayak（KIIT）",
            "Dr. Congo Tak Shing CHING（NCHU）",
            "Assoc. Prof. Hironobu Matsuo（静冈大学）",
            "Mr. Sanatan（印度技能发展与创业部）"
        ],
        contactTitle: "联系方式",
        contactEmail: "电子邮件: yashpdelhi@gmail.com, yashpjapan@yahoo.com",
        contactInstitutionalEmail: "机构电子邮件: pandey.yash.23@shizuoka.ac.jp",
        contactPhone: "电话: +81-7090976618, +91-9455918918",
        contactWebsite: '网站: <a href="https://luminarytosavant.github.io/YASHPANDEY.github.io/" target="_blank" rel="noopener">luminarytosavant.github.io/YASHPANDEY.github.io</a>'
    },

    hi: {
        heroTitle: "यश पांडे के पोर्टफोलियो में आपका स्वागत है",
        heroSubtitle: "सतत ऊर्जा और उससे आगे की खोज",
        aboutTitle: "मेरे बारे में",
        aboutText: "मैं जापान के नेशनल शिज़ुओका विश्वविद्यालय में इलेक्ट्रिकल एवं इलेक्ट्रॉनिक इंजीनियरिंग के पीएच.डी. कार्यक्रम का छात्र हूँ, और ग्रामीण विद्युतीकरण हेतु सतत ऊर्जा समाधान पर कार्य करता हूँ।",
        aboutHobbies: "<strong>शौक:</strong> फुटबॉल, कविता लेखन, गिटार, उपन्यास, यात्रा, फोटोग्राफी, खाना बनाना",
        aboutAffiliations: "<strong>संबद्धता:</strong>",
        aboutAffiliationsList: ["IAAM (स्वीडन)","IIDL (भारत)"],
        aboutFreelance: "<strong>फ्रीलांस परामर्श:</strong>",
        aboutFreelanceList: ["Japan Development Pvt. Ltd., लखनऊ","SALA Energy, हमामात्सु","Akamatsu Electric, इवाता"],
        aboutAddress: "वर्तमान पता: Room 102, Akebono Ryō (Dorm), Shijimizuka, Hamamatsu, Shizuoka, Japan.",
        educationTitle: "शिक्षा",
        educationList: [
            "पीएच.डी. (अनुमानित समापन: सितंबर 2028)<br>नेशनल शिज़ुओका यूनिवर्सिटी — इलेक्ट्रिकल एवं इलेक्ट्रॉनिक इंजीनियरिंग",
            "मास्टर — इलेक्ट्रॉनिक एवं इलेक्ट्रिकल इंजीनियरिंग (सितंबर 2025 अपेक्षित, GPA 2.9)",
            "औद्योगिक सुरक्षा में उन्नत डिप्लोमा (जून 2022)",
            "इलेक्ट्रिकल इंजीनियरिंग में बी.टेक (जुलाई 2020, CGPA 7.77)",
            "12वीं (मई 2016, 70%)",
            "10वीं (मई 2014, CGPA 6.8)"
        ],
        experienceTitle: "अनुभव",
        experienceList: [
            "रिसर्च असिस्टेंट (R.A.) — शिज़ुओका विश्वविद्यालय (वर्तमान)",
            "टीचिंग असिस्टेंट — शिज़ुओका विश्वविद्यालय (अगस्त 2023–सितंबर 2025)",
            "रिसर्च इंटर्न — नानहुआ विश्वविद्यालय (2019–2020)",
            "रिसर्च इंटर्न — एशिया विश्वविद्यालय (2019)",
            "समर इंटर्न — TATA POWER (2018)",
            "रिसर्च इंटर्न — KIIT विश्वविद्यालय (2017–2018)"
        ],
        skillsTitle: "कौशल",
        skillsLanguagesTitle: "भाषाएँ",
        skillsLanguagesList: ["अंग्रेज़ी","जापानी (मूल)","हिंदी","भोजपुरी","बंगाली","ओड़िया"],
        skillsCoursesTitle: "पाठ्यक्रम",
        skillsCoursesList: [
            "TCS आयन: प्रभावशाली प्रस्तुति","कॉर्पोरेट शिष्टाचार","प्रभावी ईमेल","ग्रुप डिस्कशन तैयारी","सॉफ्ट-स्किल विकास","IIT कानपुर: फ्लाई ऐश उपयोग"
        ],
        skillsCertificationsTitle: "प्रमाणपत्र",
        skillsCertificationsList: [
            "VV Giri NLI व अन्य प्रमाणपत्र","TATA-POWER इंटर्नशिप","IIT कानपुर प्रमाणपत्र","IEEE संबद्ध प्रमाणपत्र आदि"
        ],
        researchTitle: "अनुसंधान और प्रकाशन",
        researchPapersTitle: "अनुसंधान पत्र",
        researchPublishedTitle: "प्रकाशित",
        researchPublishedList: [
            "सतत ऊर्जा (Wiley)","लोड प्रोफाइल परिवर्तनशीलता और PV/BESS क्षमता (JSES)"
        ],
        researchUpcomingTitle: "आगामी",
        researchUpcomingList: [
            "ऊर्जा संचयन हेतु पाईज़ोइलेक्ट्रिक मेटामटेरियल (समीक्षा में)",
            "PV–BESS क्षमता अनुमान का नया मॉडल (Elsevier e-Prime)",
            "नेट-ज़ीरो हेतु रणनीतियाँ (सार-संग्रह)",
            "एकीकृत PV–BESS क्षमता फ्रेमवर्क (IEEE Xplore समीक्षाधीन)"
        ],
        researchConferencesTitle: "सम्मेलन",
        researchConferencesList: [
            "नानहुआ विश्वविद्यालय: ग्रीन टेक्नोलॉजी एवं सस्टेनेबिलिटी",
            "KOSMOS: AR/VR (काउशुंग)",
            "JSES 2024: सप्पोरो सिटी यूनिवर्सिटी",
            "Arsenic in the Environment: KIIT विश्वविद्यालय"
        ],
        volunteerTitle: "स्वयंसेवा कार्य",
        volunteerText: "ATTAC NGO: वेबसाइट सामग्री, कैंपेन समन्वय, सोशल मीडिया प्रबंधन।",
        referencesTitle: "संदर्भ",
        referencesList: [
            "Dr. Sushil Yadav Yamamoto (MAFF, Japan)",
            "Prof. Satyendra Patnaik (KIIT & KISS)",
            "Prof. Jyoti Prakash Maity (NCCU/KIIT)",
            "Prof. Byomkesh Nayak (KIIT)",
            "Dr. Congo Tak Shing CHING (NCHU)",
            "Assoc. Prof. Hironobu Matsuo (Shizuoka Univ.)",
            "Mr. Sanatan (MSDE, GoI)"
        ],
        contactTitle: "संपर्क",
        contactEmail: "ईमेल: yashpdelhi@gmail.com, yashpjapan@yahoo.com",
        contactInstitutionalEmail: "संस्थागत ईमेल: pandey.yash.23@shizuoka.ac.jp",
        contactPhone: "मोबाइल: +81-7090976618, +91-9455918918",
        contactWebsite: 'वेबसाइट: <a href="https://luminarytosavant.github.io/YASHPANDEY.github.io/" target="_blank" rel="noopener">luminarytosavant.github.io/YASHPANDEY.github.io</a>'
    }
};

// Function to change language
function changeLanguage(lang) {
    const data = content[lang] || content['en']; // Fallback to English if lang is invalid

    // Use innerHTML consistently to preserve HTML tags
    document.getElementById("hero-title").innerHTML = data.heroTitle;
    document.getElementById("hero-subtitle").innerHTML = data.heroSubtitle;

    document.getElementById("about-title").innerHTML = data.aboutTitle;
    document.getElementById("about-text").innerHTML = data.aboutText;
    document.getElementById("about-hobbies").innerHTML = data.aboutHobbies;
    document.getElementById("about-affiliations").innerHTML = data.aboutAffiliations;
    document.getElementById("about-affiliations-list").innerHTML = data.aboutAffiliationsList.map(item => `<li>${item}</li>`).join("");
    document.getElementById("about-freelance").innerHTML = data.aboutFreelance;
    document.getElementById("about-freelance-list").innerHTML = data.aboutFreelanceList.map(item => `<li>${item}</li>`).join("");
    // NEW: About address
    if (document.getElementById("about-address") && data.aboutAddress) {
        document.getElementById("about-address").innerHTML = data.aboutAddress;
    }

    document.getElementById("education-title").innerHTML = data.educationTitle;
    document.getElementById("education-list").innerHTML = data.educationList.map(item => `<li>${item}</li>`).join("");

    document.getElementById("experience-title").innerHTML = data.experienceTitle;
    document.getElementById("experience-list").innerHTML = data.experienceList.map(item => `<li>${item}</li>`).join("");

    document.getElementById("skills-title").innerHTML = data.skillsTitle;
    document.getElementById("skills-languages-title").innerHTML = data.skillsLanguagesTitle;
    document.getElementById("skills-languages-list").innerHTML = data.skillsLanguagesList.map(item => `<li>${item}</li>`).join("");
    document.getElementById("skills-courses-title").innerHTML = data.skillsCoursesTitle;
    document.getElementById("skills-courses-list").innerHTML = data.skillsCoursesList.map(item => `<li>${item}</li>`).join("");
    document.getElementById("skills-certifications-title").innerHTML = data.skillsCertificationsTitle;
    document.getElementById("skills-certifications-list").innerHTML = data.skillsCertificationsList.map(item => `<li>${item}</li>`).join("");

    document.getElementById("research-title").innerHTML = data.researchTitle;
    document.getElementById("research-papers-title").innerHTML = data.researchPapersTitle;
    document.getElementById("research-published-title").innerHTML = data.researchPublishedTitle;
    document.getElementById("research-published-list").innerHTML = data.researchPublishedList.map(item => `<li>${item}</li>`).join("");
    document.getElementById("research-upcoming-title").innerHTML = data.researchUpcomingTitle;
    document.getElementById("research-upcoming-list").innerHTML = data.researchUpcomingList.map(item => `<li>${item}</li>`).join("");
    document.getElementById("research-conferences-title").innerHTML = data.researchConferencesTitle;
    document.getElementById("research-conferences-list").innerHTML = data.researchConferencesList.map(item => `<li>${item}</li>`).join("");

    document.getElementById("volunteer-title").innerHTML = data.volunteerTitle;
    document.getElementById("volunteer-text").innerHTML = data.volunteerText;

    document.getElementById("references-title").innerHTML = data.referencesTitle;
    document.getElementById("references-list").innerHTML = data.referencesList.map(item => `<li>${item}</li>`).join("");

    document.getElementById("contact-title").innerHTML = data.contactTitle;
    document.getElementById("contact-email").innerHTML = data.contactEmail;
    document.getElementById("contact-institutional-email").innerHTML = data.contactInstitutionalEmail;
    // NEW: phone + website (only if present)
    if (document.getElementById("contact-phone") && data.contactPhone) {
        document.getElementById("contact-phone").innerHTML = data.contactPhone;
    }
    if (document.getElementById("contact-website") && data.contactWebsite) {
        document.getElementById("contact-website").innerHTML = data.contactWebsite;
    }
}

// Set default language to English
changeLanguage('en');
