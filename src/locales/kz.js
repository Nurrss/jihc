import axios from "axios";

export default {
  // DocumentPage Texts
  DocumentPage: {
    title: "Лицензиялар және аккредиттеу",
    podtitle: "Басты бет / Лицензиялар және аккредиттеу",
  },
  // BoardPage Texts
  BoardPage: {
    title: "Қамқоршылар кеңесі",
    podtitle: "Басты бет / Қамқоршылар кеңесі",
  },
  BoardH1: "Қамқоршылар кеңесі",
  // ComandPage Texts
  ComandPage: {
    title: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621feac2f005d7bd8f96f50')).data.kz_text,
    podtitle: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621ff81ae188541bf27fdd2')).data.kz_text,
  },
  
  ComandH1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662200012f005d7bd8f9706b')).data.kz_text,

  NewsH: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66220130ae188541bf27ff4a')).data.kz_text,
  // AsocPage Texts
  LifePage: {
    title: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662201d22f005d7bd8f97260')).data.kz_text,
    podtitle: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66220262c87807c7c70d38a4')).data.kz_text,
  },
  LifeP1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66220309ad6599d9ba5887b5')).data.kz_text,
  LifeP2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6622038ead6599d9ba588871')).data.kz_text,
  LifeP3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662204b9c87807c7c70d3b78')).data.kz_text,
  LifeP4: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662206b4d244c5da9558b434')).data.kz_text,

  LifeH1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662207222f005d7bd8f97822')).data.kz_text,
  LifeH2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662207a9ae188541bf280696')).data.kz_text,
  LifeH3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6622086ec87807c7c70d3f5d')).data.kz_text,

  // AsocPage Texts
  AssocPage: {
    title: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662209322f005d7bd8f97a4c')).data.kz_text,
    podtitle: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662209a7c87807c7c70d40b7')).data.kz_text,
  },
  AssocP1: "",
  AssocP2:
    "Колледжде бұрынғы студенттер арасындағы байланысты қолдау мен нығайтуда маңызды рөл атқаратын түлектер қауымдастығы бар. Түлектер қауымдастығы мен колледж арасындағы бұл өзара байланыс білім беру ортасын дамытуға және табысты болашақ мамандарды қалыптастыруға ықпал етеді.",
  AssocP3:
    "Түлектер патреон жүйесі арқылы ай сайын колледжге қаржылық көмек көрсете алады.",
  AssocP4: "Әртүрлі қалалардағы MeetUps",
  AssocP5: "Қауымдастық ұйымдастыратын іс-шаралар",
  AssocP6: "Түлектер подкасттары",
  AssocP7: "Jameco Store",
  AssocP8: "30 жылдық",
  AssocP9:
    "Қауымдастық әр түрлі қалаларда түлектермен үнемі іс-шаралар мен кездесулер өткізеді, бұл түлектер арасында байланыс орнатуға және тәжірибе алмасуға ықпал етеді.",
  AssocP10:
    "Қауымдастық үнемі түрлі іс-шаралар ұйымдастырады. Бұл іс-шаралар кездесулер, ерлер арасындағы футбол, және тәжірибе алмасуды ғана емес, сонымен қатар достық пен кәсіби байланыстар желісін қолдайтын жарыстарды да мақсат етеді.",
  AssocP11:
    "Жақында Колледж өзінің 30 жылдық мерейтойын атап өтіп, барлық түлектерге кездесу ұйымдастырды. Жылы және достық жағдайда түлектер студенттік жылдарды еске алып, естеліктерімен алмасып, көңіл көтеріп, оқу орнымен және бір-бірімен байланыстарын нығайтты.",
  AsoocH1: "Jameco Alumni қауымдастығы",
  AsoocH2: "MeetUps",
  AsoocH3: "Мероприятие",
  AsoocH4: "30-летний юбилей",
  // LabaratoryPage Texts
  LabPage: {
    title: "Лабораториялар",
    podtitle: "Басты бет / Лабораториялар",
  },
  LabH: "Лабораториялар",
  LabP: "Біздің оқу орнымыздың зертханасы студенттерге теориялық білімді практикалық тәжірибеге енгізудің бірегей мүмкіндігін ұсынады. Студенттер біздің инновациялық зертханада жұмыс істей отырып, академиялық тәжірибелерін кеңейте алады, өз жобаларын жасай алады және ғылым принциптерін тереңірек түсіне алады.",
  // CorpusPage Texts
  CorpusPage: {
    title: "Корпус",
    podtitle: "Басты бет / Корпус",
  },
  CorpusH: "Корпус",
  CorpusP:
    "Біздің корпус – студенттер білім мен әлеуметтік белсенділіктің тамаша үйлесімін табатын шабыттандыратын орын. Біздің корпус пен аудиториямызда заманауи білім беру тәжірибесіне ықпал ететін инновациялық дизайн бар.",
  // CanteenPage Texts
  CantennPage: {
    title: "Асхана",
    podtitle: "Басты бет / Асхана",
  },
  CanteenH: "Асхана",
  CanteenP:
    "Біздің университеттің асханасы студенттерге әртүрлі және дәмді тағамдар ұсынады. Мұнда Сіз дұрыс тамақтану мен жайлы ортаның тепе-теңдігін тамашалай аласыз, бұл түскі ас пен әлеуметтену үшін тамаша орын жасайды.",
  // LabaratoryPage Texts
  DorPage: {
    title: "Жатақхана",
    podtitle: "Басты бет / Жатақхана",
  },
  DorH: "Жатақхана",
  DorP: "Колледж жатақханасы студенттерге оқу үй-жайларына жақын жерде ыңғайлы және қауіпсіз баспана беріп, толыққанды оқу және әлеуметтік белсенділік үшін қолайлы жағдай жасайды. Университеттің жатақханасында студенттердің демалуына және қарым-қатынасына қолайлы жағдай жасай отырып, жайлы шай бөлмелері де бар.",
  // LabaratoryPage Texts
  SportPage: {
    title: "Спортзал + алаң",
    podtitle: "Басты бет / Спортзал + алаң",
  },
  SportH: "Спортзал + алаң",
  SportP:
    "Біздің кампуста жаттығулар мен матчтарға өте ыңғайлы заманауи футбол алаңы бар. Сондай-ақ бізде студенттер физикалық белсенділік пен денсаулықты сақтау үшін әртүрлі спорт түрлерімен айналыса алатын технологиямен жабдықталған кең спорт залы бар.",

  // FactPage Texts
  FactPage: {
    title: "Маңызды фактілер",
    podtitle: "Басты бет / Маңызды фактілер",
  },
  Fact1H: "41",
  Fact1P: "оқытушы JIHC-де жұмыс істейді ",
  Fact2H: "7.0",
  Fact2P: "IELTS оқытушыларының орташа балы",
  Fact3H: "3",
  Fact3P: "колледжде оқу мерзімі",
  Fact4H: "100",
  Fact4P: "колледжде тегін оқу гранттары жыл сайын бөлінеді",
  Fact5H: "2094",
  Fact5P:
    "түлектер біздің колледжді бітіріп, әлемнің түкпір-түкпірінде жұмыс істейді",
  Fact6H: "47",
  Fact6P: "түлектер әлемнің үздік 200 оқу орнында оқыды ",
  Fact7H: "37%",
  Fact7P: "түлектер бірден жұмысқа орналасады",
  Fact8H: "63%",
  Fact8P: "түлектер бірден жоғары оқу орындарына түседі ",
  Fact9H: "394",
  Fact9P: "студенттер колледжде оқиды",
  Fact10H: "270",
  Fact10P: "студенттер үйіндегі орындар ",
  Fact11H: "3",
  Fact11P: "оқытудың негізгі бағыттары: Pedagogy, IT, Accounting",

  // HistoryPage Texts
  HistoryPage: {
    title: "Колледж тарихы",
    podtitle: "Басты бет / Колледж тарихы",
  },

  HistoryP1:
    "Жамбыл облысы әкімдігі білім басқармасының 'Жамбыл Инновациялық Жоғары колледжі' коммуналдық мемлекеттік қазыналық кәсіпорны 1993 жылы құрылды. Колледж бұрынғы қазақ-түрік колледжі ретінде көпшілікке танымал.",
  HistoryP2:
    "Колледжде Қазақстан Республикасы Білім және ғылым министрлігі бекіткен бағдарлама бойынша заманауи кәсіптік-техникалық білім беріледі.",
  HistoryP3:
    "Колледж 'Білім Инновация' МОФ білім беру және тәрбие процестерінің сапа стандарттарына сәйкес жұмыс істейді (Білім Инновация лицейлер желісінің операторы) және' SDU University 'қамқорлығымен жұмыс істейді.",
  HistoryP4:
    "Жаратылыстану-математикалық және кәсіби бағыттағы барлық пәндер ағылшын тілінде оқытылады. Құндылыққа бағытталған білімге ерекше назар аударылады.",
  HistoryP5:
    "Колледж экономикалық және педагогикалық бейіндегі мамандарды, сондай-ақ ақпараттық технологиялар саласындағы мамандарды дайындайды.",

  // ProfessionPage Texts
  ProfessionPage: {
    title: "Мамандықтар",
    podtitle: "Басты бет / Мамандықтар",
  },
  ProfessionH1: "Бағдарламалық қамтамасыз ету",
  ProfessionH2: "Оқыту тілдері:",
  ProfessionH3: "Есеп және аудит",
  ProfessionH4: "Оқыту тілдері:",
  ProfessionP1:
    "Оқу орнында сіз ақпараттық технологиялардың әртүрлі аспектілерін, соның ішінде бағдарламалауды, желілік технологияларды және дерекқорларды зерттеу арқылы ат дәрежесін ала аласыз. Оқыту бағдарламалық жасақтаманы әзірлеу, жүйелерді басқару және ақпараттық технологиялар жобаларын басқару сияқты көптеген тақырыптарды қамтиды.",
  ProfessionP2: "Бұл мамандыққа талапкерлер тек грантқа түседі.",
  ProfessionP3: "Оқу мерзімі 2 жыл 10 ай",
  ProfessionP4:
    "Колледж бухгалтерлік есеп пен аудитті үйретеді. Мамандық ACCA халықаралық бағдарламасы бойынша оқытылады, бұл ACCA сертификатын алудың бірегей мүмкіндігін ашады. Бұл бағдарлама студенттерге бухгалтерлік есеп бойынша теориялық білім беріп қана қоймайды, сонымен қатар оларды қаржы және бизнес саласындағы табысты мансап үшін маңызды актив болып табылатын ACCA халықаралық стандарттарына сәйкестендіруге дайындайды.",
  ProfessionP5:
    "Талапкерлер осы мамандық бойынша тек ақылы негізде оқи алады. Оқу құны ... тг",
  ProfessionP6: "Оқу мерзімі 2 жыл 10 ай",
  ProfessionLi1: "қазақша",
  ProfessionLi2: "ағылшын",
  ProfessionLi3: "орыс",
  ProfessionLi4: "түрік",
  ProfessionBtn1: "Толығырақ",
  // Translate Texts
  TranslatePage: {
    title: "Ауысу",
    podtitle: "Басты бет / Колледжден ауысу",
  },
  TranslateH1: "Колледжден ауысу ережелері",
  TranslateP1:
    "Қазақстан Республикасы Білім және ғылым министрінің 2015 жылғы 20 қаңтардағы № 19 бұйрығы. Техникалық және кәсіптік, орта білімнен кейінгі білім беру саласындағы мемлекеттік қызмет көрсету қағидаларын бекіту туралы",
  TranslateP2:
    "Білім алушыларды бір оқу орнынан басқасына, оның ішінде мемлекеттік білім беру тапсырысынан мемлекеттік білім беру тапсырысына, бір мамандықтан басқасына, ақылы негізден мемлекеттік білім беру тапсырысы бойынша оқуға немесе оқытудың бір нысанынан басқасына ауыстыру оқу жұмыс жоспарларының пәндері/модульдері бойынша оқыту нәтижелерінің академиялық айырмашылықтарын тапсырған кезде жүзеге асырылады.",
  TranslateP3:
    "Ақылы негізден мемлекеттік білім беру тапсырысы бойынша ауыстыру осы оқу орнында орындардың босауына қарай оқу жылы ішінде жүзеге асырылады.",
  TranslateP4:
    "Кәмелетке толмаған білім алушының ата-анасы немесе заңды өкілдері басқа жерге көшкен жағдайда, растайтын құжаттарды ұсынған кезде оны каникул кезеңінен тыс ауыстыруға жол беріледі.",

  TranslateP5:
    "Қалған жағдайларда білім алушыларды ауыстыру жазғы және қысқы демалыс кезеңінде жүзеге асырылады.",

  TranslateP6:
    "Ақылы негізден мемлекеттік білім беру тапсырысы бойынша оқуға ауыстыру үшін техникалық және кәсіптік, орта білімнен кейінгі білімнің білім беру бағдарламаларын іске асыратын білім беру ұйымы мемлекеттік білім беру тапсырысы бойынша бос орындар туралы ақпаратты білім беру ұйымының ақпараттық стендтерінде, ресми интернет-сайттарында орналастырады.",

  TranslateP7:
    "      Білім алушыларды ақылы оқудан мемлекеттік білім беру тапсырысы бойынша оқуға ауыстыру үшін білім беру ұйымында педагогтердің және студенттік өзін-өзі басқару органдары өкілдерінің қатысуымен алқалы орган құрылады. Білім алушыны ауыстыру туралы шешімді оның үлгерімін ескере отырып алқалы орган қабылдайды.",

  // JumbotronElem Texts
  JumbotronElemPage: {
    title: "Құжаттарды тапсыру",
    podtitle: "Басты бет / Құжаттарды тапсыру",
  },
  JumbotronElemH1: "Басты бет / Құжаттарды тапсыру",
  JumbotronElemH2: "Оқуға түсу үшін қажетті құжаттар:",
  JumbotronElemP1:
    "Техникалық және кәсіптік, орта білімнен кейінгі білімнің білім беру бағдарламаларын іске асыратын білім беру ұйымдарына оқуға қабылдаудың үлгілік қағидаларын бекіту туралы Қазақстан Республикасы Білім және ғылым министрінің 2018 жылғы 18 қазандағы № 578 бұйрығы.",
  JumbotronElemP2:
    "Тұлғалардың колледге оқуға өтініштерін қабылдау:  оқудың күндізгі нысанына: мемлекеттік тапсырыс бойынша 9 сынып бойынша күнтізбелік жылдың 25 маусымы мен 18 тамызы аралығында,  ақылы негізде 25 маусымы мен 25 тамыз аралығында жүргізіледі.",
  JumbotronElemP3:
    "Мемлекеттік көрсетілетін қызметті алу үшін көрсетілетін қызметті алушы ТжКОББ-ның білім беру ұйымына (бұдан әрі - көрсетілетін қызметті беруші) не 'электрондық үкімет' www.egov.kz  веб-порталына (бұдан әрі - портал) жүгіне алады.",
  JumbotronElemP4:
    "Оқуға түсу үшін құжаттарды кәмелетке толған адамдар жеке өзі, кәмелетке толмағандар – заңды өкілінің қатысуымен ұсынады.",
  JumbotronElemLI1: "құжаттарды қабылдау туралы өтініш;",
  JumbotronElemLI2: "білімі туралы құжаттың түпнұсқасы;",
  JumbotronElemLI3: "3x4 см көлеміндегі 4 дана фотосурет;",
  JumbotronElemLI4:
    "'Денсаулық сақтау саласындағы есепке алу құжаттамасының нысандарын бекіту туралы' Қазақстан Республикасы Денсаулық сақтау министрінің міндетін атқарушының 2020 жылғы 30 қазандағы № ҚР ДСМ-175/2020 бұйрығымен (Нормативтік құқықтық актілерді мемлекеттік тіркеу тізілімінде № 21759 болып тіркелген) бекітілген № 075-У нысаны",

  // Hero Texts
  HeroH1P1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621595b9491387b6ae48f9a')).data.kz_text,
  HeroH1P2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662159f49491387b6ae48fbe')).data.kz_text,
  // Column,
  ColumnD1P1: "Құндылыққа бағытталған білім беру",
  ColumnD1P2: "білім",
  ColumnD2P1: "4 тілде оқыту",
  ColumnD2P2: "тәрбие",
  ColumnD3P1: "4 тілде",
  ColumnD3P2: "оқыту",
  ColumnD4P1: "Тәжірибелі",
  ColumnD4P2: "мұғалімдер",


  // Jumbotron,
  JumbotronH1P1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66215be469264e6a142b3fc3')).data.kz_text,
  JumbotronH1P2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66215c5d12bdf7b811b7917b')).data.kz_text,
  JumbotronH1P3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66215c9812bdf7b811b79181')).data.kz_text,
  JumbotronP1P1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66215d7eb4d8f21398684e50')).data.kz_text,
  JumbotronP1P2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66215e3fb4d8f21398684e7e')).data.kz_text,
  JumbotronP1P3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66215ed469264e6a142b406c')).data.kz_text,
  JumbotronP1P4: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66215f1e12bdf7b811b79228')).data.kz_text,
  JumbotronP1P5: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66215f5312bdf7b811b7924b')).data.kz_text,
  // Column2,
  Column2H1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66215fca12bdf7b811b7927c')).data.kz_text,
  Column2P1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662160a0b4d8f21398684f58')).data.kz_text,
  Column2P2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662160cdb4d8f21398684f73')).data.kz_text,
  Column2P3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621612c69264e6a142b4165')).data.kz_text,
  Column2P4: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216186b4d8f21398684fee')).data.kz_text,
  Column2P5: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662161ba12bdf7b811b7933e')).data.kz_text,
  Column2P6: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662161f269264e6a142b41d6')).data.kz_text,
  

  // Column3,
  Column3H1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216263b4d8f21398685067')).data.kz_text,
  Column3P1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621629f12bdf7b811b793c3')).data.kz_text,
  Column3P2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662162ddc1d336237231ae37')).data.kz_text,
  Column3P3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621634d12bdf7b811b79426')).data.kz_text,
  Column3P4: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216383b4d8f21398685147')).data.kz_text,
  //   Footer Texts
  FooterH1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662163d7c1d336237231aef1')).data.kz_text,
  FooterH2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621641a69264e6a142b4328')).data.kz_text,
  FooterL1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621645dc1d336237231af78')).data.kz_text,
  //   SecondNav Texts
  SecondNavP1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662164a112bdf7b811b79556')).data.kz_text,
  SecondNavP2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662164e0c1d336237231affc')).data.kz_text,
  //   Navbar Texts
  NavbarP1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621659512bdf7b811b79618')).data.kz_text,
  //   ThirdNav Texts
  ThirdNavNavItem1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621664a12bdf7b811b79674')).data.kz_text,
  ThirdNavNavItem2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621668fb4d8f2139868539d')).data.kz_text,
  ThirdNavNavItem3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662166d369264e6a142b4568')).data.kz_text,
  ThirdNavNavItem4: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621670e12bdf7b811b79749')).data.kz_text,
  ThirdNavNavItem5: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621676312bdf7b811b79793')).data.kz_text,
  ThirdNavNavItem6: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662167a8c1d336237231b20a')).data.kz_text,
  ThirdNavNavItem7: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662167fe12bdf7b811b79863')).data.kz_text,
  ThirdNavNavItem8: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662168dc69264e6a142b46f4')).data.kz_text,
  ThirdNavNavItem9: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621692669264e6a142b4744')).data.kz_text,
  //   ThirdNav drop-down item text
  ThirdNavNavItem1Li1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662169ddb4d8f213986855c6')).data.kz_text,
  ThirdNavNavItem1Li2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216a4cc1d336237231b380')).data.kz_text,
  ThirdNavNavItem1Li3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216a95b4d8f21398685678')).data.kz_text,
  ThirdNavNavItem1Li4: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216adcb4d8f213986856b7')).data.kz_text,
  ThirdNavNavItem1Li5: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216b2369264e6a142b48b8')).data.kz_text,
  ThirdNavNavItem1Li6: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216b67c1d336237231b4a2')).data.kz_text,
  ThirdNavNavItem1Li7: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6620c41a13a1f3713e5a4b2e')).data.kz_text,
  
  ThirdNavNavItem2Li1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216bb869264e6a142b4943')).data.kz_text,
  ThirdNavNavItem2Li2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216bfec1d336237231b55f')).data.kz_text,
  ThirdNavNavItem2Li3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216c4312bdf7b811b79bbb')).data.kz_text,
  
  ThirdNavNavItem3Li1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216c81c1d336237231b5f0')).data.kz_text,
  ThirdNavNavItem3Li2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216ccfb4d8f2139868587e')).data.kz_text,
  ThirdNavNavItem3Li3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216d18c1d336237231b681')).data.kz_text,
  
  ThirdNavNavItem4Li1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216d5b12bdf7b811b79ce8')).data.kz_text,
  ThirdNavNavItem4Li2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216daec1d336237231b711')).data.kz_text,
  ThirdNavNavItem4Li3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216dfbb4d8f213986859b4')).data.kz_text,
  ThirdNavNavItem4Li4: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216e4469264e6a142b4c08')).data.kz_text,
  ThirdNavNavItem4Li5: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216e8b12bdf7b811b79e4e')).data.kz_text,

  ThirdNavNavItem5Li1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216ff7b4d8f21398685af4')).data.kz_text,
  ThirdNavNavItem5Li2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621705c12bdf7b811b79f23')).data.kz_text,
  ThirdNavNavItem5Li3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662170b0c1d336237231b90f')).data.kz_text,
  ThirdNavNavItem5Li6: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662172cec1d336237231ba98')).data.kz_text,
  ThirdNavNavItem5Li7: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621731f12bdf7b811b7a193')).data.kz_text,
  ThirdNavNavItem5Li8: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621737069264e6a142b4ef9')).data.kz_text,

  ThirdNavNavItem6Li1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662173bfc1d336237231bbaf')).data.kz_text,
  ThirdNavNavItem6Li2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621746912bdf7b811b7a2c3')).data.kz_text,
  ThirdNavNavItem6Li3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662174b969264e6a142b5000')).data.kz_text,

  ThirdNavNavItem7Li1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621750e69264e6a142b5067')).data.kz_text,
  ThirdNavNavItem7Li2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66217564c1d336237231bce8')).data.kz_text,

  ThirdNavNavItem8Li1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621764ab4d8f21398685fa2')).data.kz_text,
  ThirdNavNavItem8Li2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662176a0c1d336237231bdb9')).data.kz_text,
  
  ThirdNavNavItem9Li1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662176eec1d336237231be2f')).data.kz_text,
  // AcademicCalendar Texts
  AcademicCalendarInfoText: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662178db69264e6a142b51e7')).data.kz_text,
  AcdemicCalendarP1: "kzГрафик 2022-2023 учебного года будет следующим:",
  AcdemicCalendarP2:
    "Просмотреть наш годовой календарь на 2023-2024 учебный год можно здесь",
  AcdemicCalendarLi1:
    "1-ая четверть: с 21 августа 2023 г. по 13 октября 2023 г. (8 недель)",
  AcdemicCalendarLi2:
    "2-ая четверть: с 23 октября 2023 г. по 22 декабря 2023 г. (9 недель)",
  AcdemicCalendarLi3:
    "3-яя четверть: с 8 января 2024 г. по 15 марта 2024 г. (10 недель)",
  AcdemicCalendarLi4:
    "4-ая четверть: с 25 марта 2024 г. по 31 мая 2024 г. (10 недель)",

  // Accounting Texts
  accountingPage: {
    title: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216ccfb4d8f2139868587e')).data.kz_text,
    podtitle: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621bd0a077963c43cf74b9d')).data.kz_text,
  },

  AccountingInfoH1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216ccfb4d8f2139868587e')).data.kz_text,
  AccountingInfoH2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621bd9b077963c43cf74c85')).data.kz_text,
  AccountingInfoP2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621bdff077963c43cf74d07')).data.kz_text,
  
  AccountingInfoLi1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621be749d882d4f1cc41df6')).data.kz_text,
  AccountingInfoLi2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621bef3fe97af7e5d085cec')).data.kz_text,
  AccountingInfoLi3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621bf669d882d4f1cc41f0e')).data.kz_text,
  AccountingInfoLi4: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621bfeb9d882d4f1cc41f77')).data.kz_text,
  AccountingInfoLi5: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621c0489d882d4f1cc41ff6')).data.kz_text,
  AccountingInfoLi6: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621c0a7bca47732adf82443')).data.kz_text,

  AccountingInfoCard1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621c1a4077963c43cf7508b')).data.kz_text,
  AccountingInfoCard2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621c22c9d882d4f1cc42121')).data.kz_text,
  AccountingInfoCard3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621f34e401a5f8b3d47855f')).data.kz_text,
  AccountingInfoCard4: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621f3a7d244c5da9558a576')).data.kz_text,
  // IT Texts
  ItPage: {
    title: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621f4d0ff19b702c9609820')).data.kz_text,
    podtitle: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621f5398fa730a74f2316c9')).data.kz_text,
  },

  ItH1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621f4d0ff19b702c9609820')).data.kz_text,
  ItH2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621f77eff19b702c9609907')).data.kz_text,
  ItP1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621f7dc33ae1fd1526aab4e')).data.kz_text,
  ItLi1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621f890ff19b702c9609a8f')).data.kz_text,
  ItLi2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621f98bfec79da67c0d9ab2')).data.kz_text,
  ItLi3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621fb48d244c5da9558a8d5')).data.kz_text,
  ItLi4: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621fbaeff19b702c9609be9')).data.kz_text,
  ItLi5: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621fc182f005d7bd8f96c4a')).data.kz_text,
  ItLi6: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621fc7ec87807c7c70d32d2')).data.kz_text,

  ItCard1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621fcf72f005d7bd8f96d54')).data.kz_text,
  ItCard2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621fd6a2f005d7bd8f96de1')).data.kz_text,
  ItCard3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621fdcbc87807c7c70d346e')).data.kz_text,
  ItCard4: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621fe34d244c5da9558ac2e')).data.kz_text,
};
