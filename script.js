/* ==========================================
   Yash Pandey Portfolio — Enhanced v3
   7 Publications · Social Links · Particles
   ========================================== */

/* ---------- DOM Helpers ---------- */
function setHTML(id,h){const e=document.getElementById(id);if(e&&typeof h==="string")e.innerHTML=h}
function setText(id,t){const e=document.getElementById(id);if(e&&typeof t==="string")e.textContent=t}
function setList(id,items){const e=document.getElementById(id);if(e&&Array.isArray(items))e.innerHTML=items.map(i=>`<li>${i}</li>`).join("")}
function setDocLang(l){document.documentElement.setAttribute("lang",l||"en")}

/* ================================================
   PUBLICATIONS DATA (from Google Scholar / ResearchGate)
   ================================================ */
const publications = [
  {
    type:"chapter", year:"2026",
    title:"Revolutionizing Consumer Experience With Digital Twins and the Metaverse",
    authors:"Y. Pandey, D.S. Simatupang, A.M. Widodo, P. Setiawati, R. Isad",
    venue:"IGI Global — Book Chapter",
    doi:""
  },
  {
    type:"conference", year:"2025",
    title:"A Unified PV–BESS Capacity Estimation Framework for Rural Microgrids: From Equatorial Roots to Global Regions",
    authors:"H. Matsuo, Y. Pandey",
    venue:"IEEE Xplore — Conference Paper",
    doi:""
  },
  {
    type:"journal", year:"2025",
    title:"Bridging Complexity and Accessibility: A Novel Model for PV and BESS Capacity Estimation in Rural Microgrids Near the Equatorial Region",
    authors:"H. Matsuo, Y. Pandey, Md I. Kabir, S. Chattopadhyay",
    venue:"Elsevier, e-Prime — Advances in Electrical Engineering, Electronics and Energy",
    doi:"https://doi.org/10.1016/j.prime.2025.100890"
  },
  {
    type:"chapter", year:"2025",
    title:"Importance of Perovskite Solar Cells in Sustainable Energy Solutions",
    authors:"P.K. Singh, Y. Pandey, U. Kulshrestha",
    venue:"De Gruyter — Book Chapter",
    doi:""
  },
  {
    type:"conference", year:"2025",
    title:"Impact of Load Profile Variability on Optimal PV and BESS Capacities of Diesel Generator based Microgrid",
    authors:"Y. Pandey, H. Matsuo",
    venue:"JSES 2024 — Sapporo City University, Japan",
    doi:""
  },
  {
    type:"conference", year:"2025",
    title:"Accelerating the Global Shift to Renewable Energy: Strategic Pathways for Achieving Net-Zero Emissions",
    authors:"Y. Pandey, H. Matsuo, S. Chattopadhyay",
    venue:"Conference Paper — Book of Abstracts (extended)",
    doi:""
  },
  {
    type:"journal", year:"2024",
    title:"Advancing Sustainable Energy: Exploring New Frontiers and Opportunities in the Green Transition",
    authors:"N. Soni, P.K. Singh, S. Mallick, Y. Pandey, S. Tiwari, A. Mishra, A. Tiwari",
    venue:"Wiley — Advanced Sustainable Systems",
    doi:"https://doi.org/10.1002/adsu.202400160"
  }
];

function renderPublications(){
  const el=document.getElementById("publications-list");
  if(!el) return;
  el.innerHTML=publications.map(p=>{
    const tagClass=p.type==="journal"?"journal":p.type==="conference"?"conference":"chapter";
    const tagLabel=p.type==="journal"?"Journal":p.type==="conference"?"Conference":"Book Chapter";
    const doiLink=p.doi?` · <a href="${p.doi}" target="_blank" rel="noopener">DOI ↗</a>`:"";
    return `<div class="pub-item">
      <div class="pub-title">${p.title}</div>
      <div class="pub-meta">
        <span class="pub-tag ${tagClass}">${tagLabel}</span>
        ${p.authors} · <em>${p.venue}</em> · ${p.year}${doiLink}
      </div>
    </div>`;
  }).join("");
}

/* ================================================
   CONTENT — 5 LANGUAGES
   (publications section is rendered separately)
   ================================================ */
const content = {
  en: {
    docLang:"en",
    nav:{about:"About",education:"Education",experience:"Experience",skills:"Skills",research:"Research",volunteer:"Volunteer",references:"References",contact:"Contact"},
    heroEyebrow:"Ph.D. Researcher · Shizuoka University, Japan",
    heroTitle:"Yash Pandey",
    heroSubtitle:"Engineering sustainable energy solutions through hybrid renewable microgrids, AI-driven optimization, and data-driven rural electrification",
    heroCta:"Explore My Work",heroCtaScholar:"Google Scholar",
    stats:{pubs:"7",pubsL:"Publications",citations:"47",citationsL:"Citations",countries:"4",countriesL:"Countries",years:"6+",yearsL:"Years Research"},
    aboutTitle:"About Me",
    aboutText:"I am Yash Pandey, a Ph.D. student (Electrical & Electronic Engineering) at National Shizuoka University, Japan. My work focuses on hybrid renewable energy microgrids and sustainable rural electrification. I combine HOMER Pro simulations, MATLAB analysis, and regression-based modeling to deliver practical, scalable solutions for underserved communities.",
    aboutHobbies:"<strong>Hobbies:</strong> Playing Football, Poetry Writing, Guitar Playing, Novel Reading, Travelling, Photography, Cooking",
    aboutAffiliations:"<strong>Affiliations:</strong>",
    aboutAffiliationsList:["IAAM: International Association of Advanced Materials, Sweden."],
    aboutFreelance:"<strong>Freelance Consulting:</strong>",
    aboutFreelanceList:["Japan Development Private Limited, Lucknow, India.","SALA Energy Corporation, Hamamatsu, Japan.","Akamatsu Electric Company Limited, Iwata, Japan."],
    aboutAddress:"<strong>Current Address:</strong> Room No. 102, Akebono Ryo, Shizuoka University Dormitory, Shijimizuka, Hamamatsu, Shizuoka, Japan.",
    educationTitle:"Education",
    educationList:[
      "<strong>Ph.D. in Electrical & Electronic Engineering</strong><br>National University Corporation Shizuoka University, Hamamatsu, Japan<br><em>Expected Graduation:</em> September 2028<br><em>Research Topic:</em> A Dynamic Framework for Adaptive Hybrid Renewable Energy Microgrids: Integrating Socio-Economic Growth, Techno-Economic Optimization, and Resilience in Rural Electrification.",
      "<strong>Master's degree in Electrical & Electronic Engineering</strong><br>National University Corporation Shizuoka University, Hamamatsu, Japan<br><em>Graduation:</em> September 2025<br><em>Research Topic:</em> A Study of Optimal Capacity and Planning for Rural Electrification using Hybrid Microgrid Across Load Variability and Climatic Zones.<br><em>Remarks:</em> Recipient of ABP Full Scholarship (2023–2025), GPA: 2.9.",
      "<strong>Advance Diploma in Industrial Safety (ADIS)</strong><br>Regional Labour Institute, Kolkata, India — June 2022 (1st Class).",
      "<strong>B.Tech. in Electrical Engineering</strong><br>Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar, India — July 2020 (CGPA: 7.77).",
      "<strong>12th Standard (SSCE)</strong><br>Sir Padampat Singhania Education Centre, Kanpur, India — May 2016 (70%).",
      "<strong>10th Standard (SSE)</strong><br>Puranchandra Vidya Niketan, Kanpur, India — May 2014 (CGPA: 6.8)."
    ],
    experienceTitle:"Experience",
    experienceList:[
      "<strong>Research Assistant (RA)</strong><br>National Shizuoka University — <em>Current</em><br>Hybrid renewable energy microgrids research: HOMER Pro simulations for PV/BESS/DG sizing, analysis of GHI & load datasets, regression models; figures, manuscript drafting, reviewer responses. Reporting Supervisor: Prof. Hitoshi Haga.",
      "<strong>Teaching Assistant (TA)</strong><br>National Shizuoka University — Aug 2023 – Sep 2025<br>Taught Glow Discharge and Arc Discharge to bachelor's students. Reporting Supervisor: Assoc. Prof. Hironobu Matsuo.",
      "<strong>Research Intern</strong><br>Nanhua University, Taiwan — Sep 2019 – Feb 2020 (Prof. Shin Chi Lai).",
      "<strong>Research Intern</strong><br>Asia University, Taiwan — Nov 2019 – Dec 2019 (Prof. T. Chen).",
      "<strong>Summer Intern</strong><br>TATA POWER, Odisha, India — May 2018 – Jun 2018.",
      "<strong>Research Intern</strong><br>KIIT University, India — Jun 2017 – Aug 2018 (Prof. B. B. Kar)."
    ],
    skillsTitle:"Skills",
    skillsLanguagesTitle:"Languages",skillsLanguagesList:["English","Japanese (Basic)","Hindi","Bhojpuri","Bengali","Odia"],
    skillsCoursesTitle:"Courses",skillsCoursesList:["TCS iON — Making Impactful Presentations","TCS iON — Corporate Etiquette","TCS iON — Writing an Effective Email","TCS iON — Being Prepared for Group Discussions","TCS iON — Developing Soft Skills Industry Needs","IIT Kanpur — Potential Utility of Fly Ash and development into near-whitened polymer-like structures"],
    skillsCertificationsTitle:"Certifications",skillsCertificationsList:["VV Giri National Labour Institute — Code on Occupational Safety and Working Conditions","VV Giri National Labour Institute — Addressing Source State Vulnerability to Distress Migration, Trafficking, Child & Bonded Labour","VV Giri National Labour Institute — Online Sensitization: Prevention/Elimination of Bonded & Child Bonded Labour","DGFASLI — Half-Day Training on Housekeeping & Cleanliness","VV Giri National Labour Institute — Good Governance Through Labour Inspection","TATA-POWER Summer Internship Certificate","KITT FEST 2017 Certificate","IIT Kanpur — Potential Utility of Fly Ash Certificate","Texas Instruments USA IICDC-2019 Business Test Certificate","Nanhua University Semester Course Completion","ITRI Taiwan — Industry Interface Certificate","Chung Cheng University Winter School Certificate","Nanhua University Research Internship Certificate","NHU — Teaching High School Students (Taiwan)","Nanhua University — Award for Outstanding Life Education Personnel & National Life","Nanhua University — New Southbound Life Education Program","IEEE — Scope & Benefits of IoT; Graduate Member","Central Vigilance Commission of India — Integrity Pledge","Ministry of Labour & Employment (India) — No Child Labour Pledge"],
    researchTitle:"Research & Publications",
    researchAreasTitle:"Research Areas",
    conferencesTitle:"Conferences",
    conferencesList:[
      "International Conference on Green Technology & Sustainability — Nanhua University, Taiwan.",
      "KOSMOS — AR/VR for Industry, Kaohsiung Convention Centre, Taiwan.",
      "JSES 2024 — Load Variability impacts on capacity & NPC, Sapporo City University, Japan.",
      "9th International Congress & Exhibition on Arsenic in the Environment — KIIT University, India."
    ],
    volunteerTitle:"Volunteer Work",volunteerText:"ATTAC NGO: Built website content and worked as Campaign Coordinator & Social Media Manager.",
    referencesTitle:"References",referencesList:[
      "Prof. Hitoshi Haga — College of Engineering, Division of Electrical & Electronic Engineering, Shizuoka University.",
      "Assoc. Prof. Hironobu Matsuo — Department of Electrical & Electronic Engineering, National Shizuoka University.",
      "Dr. Sushil Yadav Yamamoto — Registered Consultant, Ministry of Agriculture, Forestry and Fisheries (Japan).",
      "Prof. Satyendra Patnaik — Advisor to Founder, KIIT & KISS.",
      "Prof. (Dr.) Jyoti Prakash Maity — National Chung Cheng University / KIIT University.",
      "Prof. Byomkesh Nayak — Dean, School of Electrical Engineering, KIIT University.",
      "Prof. Congo Tak Shing CHING — Graduate Institute of Biomedical Engineering, National Chung Hsing University.",
      "Mr. Sanatan — Deputy Secretary, Ministry of Skill Development & Entrepreneurship, Government of India."
    ],
    contactTitle:"Contact",
    contactEmail:"Email: yashpdelhi@gmail.com, yashpjapan@yahoo.com",
    contactInstitutionalEmail:"Institutional Email: pandey.yash.23@shizuoka.ac.jp",
    contactPhone:"Mobile: +81-7090976618, +91-9455918918"
  },

  ja:{
    docLang:"ja",
    nav:{about:"私について",education:"学歴",experience:"経験",skills:"スキル",research:"研究",volunteer:"ボランティア",references:"参考",contact:"連絡先"},
    heroEyebrow:"博士課程研究者 · 静岡大学（日本）",
    heroTitle:"ヤシュ・パンディ",
    heroSubtitle:"ハイブリッド再生可能エネルギーマイクログリッド、AI最適化、データ駆動型農村電化で持続可能なエネルギーソリューションを設計",
    heroCta:"もっと見る",heroCtaScholar:"Google Scholar",
    stats:{pubs:"7",pubsL:"出版物",citations:"47",citationsL:"引用",countries:"4",countriesL:"国",years:"6+",yearsL:"年の研究"},
    aboutTitle:"私について",aboutText:"静岡大学 工学部 電気電子工学専攻 博士課程在籍。ハイブリッド再エネによる農村電化を研究し、HOMER/MATLABと回帰モデルで実装可能な計画を提案。",
    aboutHobbies:"<strong>趣味:</strong> サッカー、詩、ギター、読書、旅行、写真、料理",
    aboutAffiliations:"<strong>所属:</strong>",aboutAffiliationsList:["IAAM（国際先端材料協会・スウェーデン）"],
    aboutFreelance:"<strong>フリーランス:</strong>",aboutFreelanceList:["Japan Development Private Limited","SALA Energy Corporation","Akamatsu Electric Company Limited"],
    aboutAddress:"<strong>現住所:</strong> 静岡大学 曙寮 102号室（浜松市蜆塚）",
    educationTitle:"学歴",educationList:["<strong>博士（電気電子工学）</strong><br>静岡大学 — <em>修了見込:</em> 2028年9月","<strong>修士（電気電子工学）</strong><br>静岡大学 — 2025年9月 (GPA 2.9) · ABP全額奨学生","<strong>ADIS</strong> — コルカタ（2022年6月・首席）","<strong>学士（電気工学）</strong> — KIIT大学（CGPA 7.77）","12年生 — SPS教育センター（70%）","10年生 — PVN（CGPA 6.8）"],
    experienceTitle:"経験",experienceList:["<strong>RA</strong> — 静岡大学（在籍中）","<strong>TA</strong> — 静岡大学（2023–2025）","研究インターン — 南華大学","研究インターン — 亜洲大学","サマーインターン — TATA POWER","研究インターン — KIIT大学"],
    skillsTitle:"スキル",skillsLanguagesTitle:"言語",skillsLanguagesList:["英語","日本語（基礎）","ヒンディー語","ボージュプリー語","ベンガル語","オディア語"],
    skillsCoursesTitle:"コース",skillsCoursesList:["TCS iON 各種","IITカンプール：フライアッシュ"],
    skillsCertificationsTitle:"認定",skillsCertificationsList:["VV Giri — 労働安全","IEEE — IoT Graduate Member","TATA-POWER インターン"],
    researchTitle:"研究と出版物",researchAreasTitle:"研究分野",
    conferencesTitle:"学会",conferencesList:["南華大学：Green Tech","KOSMOS：AR/VR","JSES 2024","Arsenic in the Environment"],
    volunteerTitle:"ボランティア",volunteerText:"ATTAC NGO：Web・SNS運用",
    referencesTitle:"参考（推薦者）",referencesList:["芳賀仁志 教授","松尾弘信 准教授","Dr. Sushil Yadav Yamamoto","Prof. Satyendra Patnaik","Prof. J.P. Maity","Prof. Byomkesh Nayak","Prof. C.T.S. Ching","Mr. Sanatan"],
    contactTitle:"連絡先",contactEmail:"メール: yashpdelhi@gmail.com",contactInstitutionalEmail:"学内: pandey.yash.23@shizuoka.ac.jp",contactPhone:"携帯: +81-7090976618"
  },

  zh:{
    docLang:"zh",
    nav:{about:"关于",education:"教育",experience:"经历",skills:"技能",research:"研究",volunteer:"志愿",references:"推荐人",contact:"联系"},
    heroEyebrow:"博士研究员 · 静冈大学（日本）",heroTitle:"Yash Pandey",
    heroSubtitle:"通过混合可再生能源微电网、AI优化和数据驱动农村电气化，构建可持续能源解决方案",
    heroCta:"了解更多",heroCtaScholar:"Google Scholar",
    stats:{pubs:"7",pubsL:"出版物",citations:"47",citationsL:"引用",countries:"4",countriesL:"国家",years:"6+",yearsL:"年研究"},
    aboutTitle:"关于我",aboutText:"日本静冈大学电气与电子工程博士生，研究混合可再生能源微电网与农村电气化。",
    aboutHobbies:"<strong>爱好:</strong> 足球、写诗、吉他、小说、旅行、摄影、烹饪",
    aboutAffiliations:"<strong>隶属:</strong>",aboutAffiliationsList:["IAAM（瑞典）"],
    aboutFreelance:"<strong>自由咨询:</strong>",aboutFreelanceList:["Japan Development","SALA Energy","Akamatsu Electric"],
    aboutAddress:"<strong>地址:</strong> 静冈大学曙宿舍102室",
    educationTitle:"教育",educationList:["<strong>博士</strong> — 静冈大学（2028年预计）","<strong>硕士</strong> — 静冈大学（2025年·GPA 2.9）","<strong>ADIS</strong> — 加尔各答","<strong>学士</strong> — KIIT（CGPA 7.77）","12年级（70%）","10年级（CGPA 6.8）"],
    experienceTitle:"经历",experienceList:["<strong>RA</strong> — 静冈大学","<strong>TA</strong> — 静冈大学","南华大学实习","亚洲大学实习","TATA POWER实习","KIIT实习"],
    skillsTitle:"技能",skillsLanguagesTitle:"语言",skillsLanguagesList:["英语","日语","印地语","博杰普尔语","孟加拉语","奥里亚语"],
    skillsCoursesTitle:"课程",skillsCoursesList:["TCS iON 系列","IIT坎普尔"],
    skillsCertificationsTitle:"认证",skillsCertificationsList:["VV Giri","IEEE","TATA-POWER"],
    researchTitle:"研究与出版",researchAreasTitle:"研究领域",
    conferencesTitle:"会议",conferencesList:["南华大学","KOSMOS","JSES 2024","KIIT"],
    volunteerTitle:"志愿",volunteerText:"ATTAC NGO",
    referencesTitle:"推荐人",referencesList:["Hitoshi Haga教授","Hironobu Matsuo副教授","Dr. S.Y. Yamamoto","Prof. S. Patnaik","Prof. J.P. Maity","Prof. B. Nayak","Prof. C.T.S. Ching","Mr. Sanatan"],
    contactTitle:"联系",contactEmail:"邮箱: yashpdelhi@gmail.com",contactInstitutionalEmail:"机构: pandey.yash.23@shizuoka.ac.jp",contactPhone:"电话: +81-7090976618"
  },

  hi:{
    docLang:"hi",
    nav:{about:"मेरे बारे में",education:"शिक्षा",experience:"अनुभव",skills:"कौशल",research:"अनुसंधान",volunteer:"स्वयंसेवा",references:"संदर्भ",contact:"संपर्क"},
    heroEyebrow:"पीएचडी शोधकर्ता · शिज़ुओका विश्वविद्यालय, जापान",heroTitle:"यश पांडे",
    heroSubtitle:"हाइब्रिड नवीकरणीय माइक्रोग्रिड, AI अनुकूलन और डेटा-संचालित ग्रामीण विद्युतीकरण द्वारा सतत ऊर्जा समाधान",
    heroCta:"देखें",heroCtaScholar:"Google Scholar",
    stats:{pubs:"7",pubsL:"प्रकाशन",citations:"47",citationsL:"उद्धरण",countries:"4",countriesL:"देश",years:"6+",yearsL:"वर्ष अनुसंधान"},
    aboutTitle:"मेरे बारे में",aboutText:"मैं यश पांडे, शिज़ुओका विश्वविद्यालय में इलेक्ट्रिकल इंजीनियरिंग का पीएचडी छात्र हूँ।",
    aboutHobbies:"<strong>शौक:</strong> फ़ुटबॉल, कविता, गिटार, उपन्यास, यात्रा, फ़ोटोग्राफ़ी, कुकिंग",
    aboutAffiliations:"<strong>संबद्धताएँ:</strong>",aboutAffiliationsList:["IAAM (स्वीडन)"],
    aboutFreelance:"<strong>फ्रीलांस:</strong>",aboutFreelanceList:["Japan Development","SALA Energy","Akamatsu Electric"],
    aboutAddress:"<strong>पता:</strong> अकेबोनो र्यो, 102",
    educationTitle:"शिक्षा",educationList:["<strong>पीएचडी</strong> — शिज़ुओका (2028)","<strong>मास्टर</strong> — शिज़ुओका (2025·GPA 2.9)","<strong>ADIS</strong> — कोलकाता","<strong>B.Tech</strong> — KIIT (7.77)","12वीं (70%)","10वीं (6.8)"],
    experienceTitle:"अनुभव",experienceList:["<strong>RA</strong> — शिज़ुओका","<strong>TA</strong> — शिज़ुओका","नानहुआ इंटर्न","एशिया यूनिवर्सिटी","TATA POWER","KIIT"],
    skillsTitle:"कौशल",skillsLanguagesTitle:"भाषाएँ",skillsLanguagesList:["अंग्रेज़ी","जापानी","हिंदी","भोजपुरी","बंगाली","ओड़िया"],
    skillsCoursesTitle:"पाठ्यक्रम",skillsCoursesList:["TCS iON","IIT कानपुर"],
    skillsCertificationsTitle:"प्रमाणपत्र",skillsCertificationsList:["VV Giri","IEEE","TATA-POWER"],
    researchTitle:"अनुसंधान व प्रकाशन",researchAreasTitle:"अनुसंधान क्षेत्र",
    conferencesTitle:"सम्मेलन",conferencesList:["नानहुआ","KOSMOS","JSES 2024","KIIT"],
    volunteerTitle:"स्वयंसेवा",volunteerText:"ATTAC NGO",
    referencesTitle:"संदर्भ",referencesList:["Prof. Hitoshi Haga","Assoc. Prof. Hironobu Matsuo","Dr. S.Y. Yamamoto","Prof. S. Patnaik","Prof. J.P. Maity","Prof. B. Nayak","Prof. C.T.S. Ching","Mr. Sanatan"],
    contactTitle:"संपर्क",contactEmail:"Email: yashpdelhi@gmail.com",contactInstitutionalEmail:"pandey.yash.23@shizuoka.ac.jp",contactPhone:"+81-7090976618"
  },

  ko:{
    docLang:"ko",
    nav:{about:"소개",education:"학력",experience:"경력",skills:"기술",research:"연구",volunteer:"봉사",references:"추천인",contact:"연락처"},
    heroEyebrow:"박사과정 연구원 · 시즈오카대학교 (일본)",heroTitle:"야시 판데이",
    heroSubtitle:"하이브리드 재생에너지 마이크로그리드, AI 최적화, 데이터 기반 농촌 전력화로 지속가능 에너지 솔루션 구축",
    heroCta:"보러가기",heroCtaScholar:"Google Scholar",
    stats:{pubs:"7",pubsL:"출판물",citations:"47",citationsL:"인용",countries:"4",countriesL:"국가",years:"6+",yearsL:"연구 경력"},
    aboutTitle:"소개",aboutText:"시즈오카대학교 전기·전자공학 박사과정생으로 하이브리드 재생에너지 마이크로그리드를 연구합니다.",
    aboutHobbies:"<strong>취미:</strong> 축구, 시, 기타, 소설, 여행, 사진, 요리",
    aboutAffiliations:"<strong>소속:</strong>",aboutAffiliationsList:["IAAM (스웨덴)"],
    aboutFreelance:"<strong>프리랜스:</strong>",aboutFreelanceList:["Japan Development","SALA Energy","Akamatsu Electric"],
    aboutAddress:"<strong>주소:</strong> 아케보노 기숙사 102호",
    educationTitle:"학력",educationList:["<strong>박사</strong> — 시즈오카대 (2028)","<strong>석사</strong> — 시즈오카대 (2025·GPA 2.9)","<strong>ADIS</strong> — 콜카타","<strong>학사</strong> — KIIT (7.77)","12학년 (70%)","10학년 (6.8)"],
    experienceTitle:"경력",experienceList:["<strong>RA</strong> — 시즈오카대","<strong>TA</strong> — 시즈오카대","난화대 인턴","아시아대 인턴","TATA POWER","KIIT"],
    skillsTitle:"기술",skillsLanguagesTitle:"언어",skillsLanguagesList:["영어","일본어","힌디어","보즈푸리어","벵골어","오리아어"],
    skillsCoursesTitle:"과정",skillsCoursesList:["TCS iON","IIT 칸푸르"],
    skillsCertificationsTitle:"자격",skillsCertificationsList:["VV Giri","IEEE","TATA-POWER"],
    researchTitle:"연구 및 출판",researchAreasTitle:"연구 분야",
    conferencesTitle:"학회",conferencesList:["난화대","KOSMOS","JSES 2024","KIIT"],
    volunteerTitle:"봉사",volunteerText:"ATTAC NGO",
    referencesTitle:"추천인",referencesList:["Prof. Hitoshi Haga","Assoc. Prof. Hironobu Matsuo","Dr. S.Y. Yamamoto","Prof. S. Patnaik","Prof. J.P. Maity","Prof. B. Nayak","Prof. C.T.S. Ching","Mr. Sanatan"],
    contactTitle:"연락처",contactEmail:"이메일: yashpdelhi@gmail.com",contactInstitutionalEmail:"pandey.yash.23@shizuoka.ac.jp",contactPhone:"+81-7090976618"
  }
};

/* ================================================
   APPLY CONTENT
   ================================================ */
function applyContent(d){
  setDocLang(d.docLang||"en");
  if(d.nav){setText("nav-about",d.nav.about);setText("nav-education",d.nav.education);setText("nav-experience",d.nav.experience);setText("nav-skills",d.nav.skills);setText("nav-research",d.nav.research);setText("nav-volunteer",d.nav.volunteer);setText("nav-references",d.nav.references);setText("nav-contact",d.nav.contact)}
  setText("hero-eyebrow",d.heroEyebrow);setHTML("hero-title",d.heroTitle);setHTML("hero-subtitle",d.heroSubtitle);setText("hero-cta",d.heroCta);setText("hero-cta-scholar",d.heroCtaScholar);
  if(d.stats){setText("stat-pubs",d.stats.pubs);setText("stat-pubs-l",d.stats.pubsL);setText("stat-citations",d.stats.citations);setText("stat-citations-l",d.stats.citationsL);setText("stat-countries",d.stats.countries);setText("stat-countries-l",d.stats.countriesL);setText("stat-years",d.stats.years);setText("stat-years-l",d.stats.yearsL)}
  setHTML("about-title",d.aboutTitle);setHTML("about-text",d.aboutText);setHTML("about-hobbies",d.aboutHobbies);setHTML("about-affiliations",d.aboutAffiliations);setList("about-affiliations-list",d.aboutAffiliationsList);setHTML("about-freelance",d.aboutFreelance);setList("about-freelance-list",d.aboutFreelanceList);setHTML("about-address",d.aboutAddress);
  setHTML("education-title",d.educationTitle);setList("education-list",d.educationList);
  setHTML("experience-title",d.experienceTitle);setList("experience-list",d.experienceList);
  setHTML("skills-title",d.skillsTitle);setHTML("skills-languages-title",d.skillsLanguagesTitle);setList("skills-languages-list",d.skillsLanguagesList);setHTML("skills-courses-title",d.skillsCoursesTitle);setList("skills-courses-list",d.skillsCoursesList);setHTML("skills-certifications-title",d.skillsCertificationsTitle);setList("skills-certifications-list",d.skillsCertificationsList);
  setHTML("research-title",d.researchTitle);setHTML("research-areas-title",d.researchAreasTitle);setHTML("conferences-title",d.conferencesTitle);setList("conferences-list",d.conferencesList);
  setHTML("volunteer-title",d.volunteerTitle);setHTML("volunteer-text",d.volunteerText);
  setHTML("references-title",d.referencesTitle);setList("references-list",d.referencesList);
  setHTML("contact-title",d.contactTitle);setHTML("contact-email",d.contactEmail);setHTML("contact-institutional-email",d.contactInstitutionalEmail);setHTML("contact-phone",d.contactPhone);
}

/* ================================================
   LANGUAGE SWITCHER
   ================================================ */
function setActiveChip(lang){const w=document.getElementById("lang-switcher");if(!w)return;[...w.querySelectorAll(".chip")].forEach(b=>{const a=b.getAttribute("data-lang")===lang;b.classList.toggle("is-active",a);b.setAttribute("aria-pressed",a?"true":"false")})}
function changeLanguage(lang){const k=content[lang]?lang:"en";applyContent(content[k]);setActiveChip(k);try{history.replaceState(null,"","#"+k)}catch(e){}}
function initLanguageSwitcher(){const w=document.getElementById("lang-switcher");if(!w)return;w.addEventListener("click",e=>{const b=e.target.closest(".chip");if(b)changeLanguage(b.getAttribute("data-lang"))})}

/* ================================================
   PARTICLE SYSTEM
   ================================================ */
function initParticles(){
  const c=document.getElementById("particles-canvas");if(!c)return;
  const ctx=c.getContext("2d");let w,h,particles=[],mouse={x:-999,y:-999};
  const N=60,DIST=150;
  if(window.matchMedia("(prefers-reduced-motion:reduce)").matches)return;
  function resize(){w=c.width=window.innerWidth;h=c.height=window.innerHeight}
  resize();window.addEventListener("resize",resize);
  document.addEventListener("mousemove",e=>{mouse.x=e.clientX;mouse.y=e.clientY});
  for(let i=0;i<N;i++)particles.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*1.8+.8,c:Math.random()>.6?"16,185,129":"56,189,248"});
  function draw(){
    ctx.clearRect(0,0,w,h);
    for(let i=0;i<particles.length;i++){
      const p=particles[i];p.x+=p.vx;p.y+=p.vy;
      if(p.x<0)p.x=w;if(p.x>w)p.x=0;if(p.y<0)p.y=h;if(p.y>h)p.y=0;
      const dx=mouse.x-p.x,dy=mouse.y-p.y,d=Math.sqrt(dx*dx+dy*dy);
      if(d<200){p.vx+=dx*.00006;p.vy+=dy*.00006}
      p.vx*=.999;p.vy*=.999;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(${p.c},.5)`;ctx.fill();
      for(let j=i+1;j<particles.length;j++){
        const q=particles[j],ddx=p.x-q.x,ddy=p.y-q.y,dd=Math.sqrt(ddx*ddx+ddy*ddy);
        if(dd<DIST){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=`rgba(${p.c},${(1-dd/DIST)*.12})`;ctx.lineWidth=.5;ctx.stroke()}
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

/* ================================================
   SCROLL UTILITIES
   ================================================ */
function initScrollReveal(){
  if(window.matchMedia("(prefers-reduced-motion:reduce)").matches){document.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(e=>e.classList.add("visible"));return}
  const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")})},{threshold:.1,rootMargin:"0px 0px -30px 0px"});
  document.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(e=>obs.observe(e));
}
function initScrollProgress(){const b=document.getElementById("scroll-progress");if(!b)return;window.addEventListener("scroll",()=>{b.style.width=(window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*100)+"%"},{passive:true})}
function initBackToTop(){const b=document.getElementById("back-to-top");if(!b)return;window.addEventListener("scroll",()=>{b.classList.toggle("show",window.scrollY>500)},{passive:true});b.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}))}
function initMobileNav(){const t=document.getElementById("nav-toggle"),m=document.getElementById("nav-menu");if(!t||!m)return;t.addEventListener("click",()=>m.classList.toggle("open"));m.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>m.classList.remove("open")))}
function initNavHighlight(){const secs=document.querySelectorAll("section[id]"),links=document.querySelectorAll("nav a[href^='#']");window.addEventListener("scroll",()=>{let c="";secs.forEach(s=>{if(window.scrollY>=s.offsetTop-120)c=s.id});links.forEach(a=>{a.style.color=a.getAttribute("href")==="#"+c?"var(--accent)":""})},{passive:true})}

/* ================================================
   BOOTSTRAP
   ================================================ */
document.addEventListener("DOMContentLoaded",()=>{
  const hash=(location.hash||"").replace("#","").toLowerCase();
  const initial=content[hash]?hash:"en";
  applyContent(content[initial]);
  setActiveChip(initial);
  renderPublications();
  initLanguageSwitcher();
  initParticles();
  initScrollReveal();
  initScrollProgress();
  initBackToTop();
  initMobileNav();
  initNavHighlight();
});
