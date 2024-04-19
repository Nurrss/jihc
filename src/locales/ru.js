import axios from "axios";

export default {
  // ComandPage Texts
  ComandPage: {
    title: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621feac2f005d7bd8f96f50')).data.rus_text,
    podtitle: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621ff81ae188541bf27fdd2')).data.rus_text,
  },

  ComandH1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662200012f005d7bd8f9706b')).data.rus_text,
  
  NewsH: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66220130ae188541bf27ff4a')).data.rus_text,
  // AsocPage Texts
  LifePage: {
    title: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662201d22f005d7bd8f97260')).data.rus_text,
    podtitle: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66220262c87807c7c70d38a4')).data.rus_text,
  },
  LifeP1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66220309ad6599d9ba5887b5')).data.rus_text,
  LifeP2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6622038ead6599d9ba588871')).data.rus_text,
  LifeP3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662204b9c87807c7c70d3b78')).data.rus_text,
  LifeP4: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662206b4d244c5da9558b434')).data.rus_text,
  
  LifeH1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662207222f005d7bd8f97822')).data.rus_text,
  LifeH2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662207a9ae188541bf280696')).data.rus_text,
  LifeH3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6622086ec87807c7c70d3f5d')).data.rus_text,

  // AsocPage Texts
  AssocPage: {
    title: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662209322f005d7bd8f97a4c')).data.rus_text,
    podtitle: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662209a7c87807c7c70d40b7')).data.rus_text,
  },
  AssocP1: "",
  AssocP2:
    "Колледж имеет ассоциацию выпускников, которая играет важную роль в поддержке и укреплении связей между бывшими студентами. Эта взаимодействующая связь между ассоциацией выпускников и колледжем способствует развитию образовательной среды и формированию успешных будущих профессионалов.",
  AssocP3:
    "Система поддержки через патреон, где выпускники могут ежемесячно оказывать финансовую помощь колледжу.",
  AssocP4: "MeetUps в разных городах",
  AssocP5: "Мероприятия, организуемые ассоциацией",
  AssocP6: "Подкасты выпускников",
  AssocP7: "Jameco Store",
  AssocP8: "30 years anniversary",
  AssocP9:
    "Ассоциация регулярно проводит мероприятия и встречи с выпускниками в различных городах, способствуя установлению контактов и обмену опытом среди выпускников.",
  AssocP10:
    "Ассоциация регулярно организует разнообразные мероприятия. Они включают в себя встречи, футбол среди мужчин, и соревнования, способствуя не только обмену опытом, но и поддерживая дружбу и сеть профессиональных контактов.",
  AssocP11:
    "Колледж недавно отметил свое 30-летие, организовав встречу для всех выпускников. В теплой и дружественной обстановке выпускники вспоминали студенческие годы, обменивались воспоминаниями и веселились, укрепляя свои связи с учебным заведением и друг с другом.",
  AsoocH1: "Ассоциация Jameco Alumni",
  AsoocH2: "MeetUps",
  AsoocH3: "Мероприятие",
  AsoocH4: "30-летний юбилей",

  // LabaratoryPage Texts
  LabPage: {
    title: "Лаборатории",
    podtitle: "Главная / Лаборатории",
  },
  LabH: "Лаборатории",
  LabP: "Лаборатория нашего учебного заведения предоставляет студентам уникальную возможность воплотить теоретические знания в практический опыт. Студенты могут расширять свой академический опыт, разрабатывать собственные проекты и глубже понимать принципы науки, работая в нашей инновационной лаборатории.",
  // CorpusPage Texts
  CorpusPage: {
    title: "Корпус",
    podtitle: "Главная / Корпус",
  },
  CorpusH: "Корпус",
  CorpusPBold: "КАМПУС JIHC",
  CorpusP2:
    "У нас созданы все условия на территории кампуса для качественного обучения",
  CorpusP3:
    "Корпус с оборудованными кабинетами и лабораториями, современной библиотекой и большим актовым залом.",
  CorpusP4:
    "Общежитие* с раздельными секторами для мальчиком (120 мест) и девочек (180 мест).",
  CorpusP5: "Просторный спортзал и футбольное поле для игр на свежем воздухе.",
  CorpusP6:
    "Столовая предоставляющая 3-х разовое горячее питание* для студентов.",
  CorpusP7: "* оплачивается отдельно и не входит в стоимость обучения",
  CorpusP:
    "находится в экологически чистом районе в центре богатого на историю древнего города Тараз",
  // CanteenPage Texts
  CantennPage: {
    title: "Столовая",
    podtitle: "Главная / Столовая",
  },
  CanteenH: "Столовая",
  CanteenP:
    "Столовая нашего университета предлагает разнообразные и вкусные блюда для студентов. Здесь вы можете насладиться балансом здорового питания и уютной обстановкой, создавая идеальное место для обедов и общения.",
  // LabaratoryPage Texts
  DorPage: {
    title: "Общежитие",
    podtitle: "Главная / Общежитие",
  },
  DorH: "Общежитие",
  DorP: "Общежитие колледжа предоставляет студентам удобное и безопасное жилье в непосредственной близости от учебных помещений, создавая благоприятные условия для полноценной учебы и социальной активности. В общежитии университета доступны, а также уютные чайные комнаты, создавая благоприятные условия для отдыха и общения студентов.",
  // LabaratoryPage Texts
  SportPage: {
    title: "Спортзал + поле",
    podtitle: "Главная / Спортзал + поле",
  },
  SportH: "Спортзал + поле",
  SportP:
    "У нас на кампусе есть современное футбольное поле, идеально подходящее для тренировок и матчей. Также у нас есть просторный спортивный зал, оборудованный технологиями, где студенты могут заниматься различными видами спорта для поддержания физической активности и здоровья.",

  // HistoryPage Texts
  FactPage: {
    title: "Важные факты",
    podtitle: "Главная / Важные факты",
  },
  Fact1H: "41",
  Fact1P: "преподаватель работают в JIHC ",
  Fact2H: "7.0",
  Fact2P: "средний балл IELTS преподавателей",
  Fact3H: "3",
  Fact3P: "срок обучения в колледже",
  Fact4H: "100",
  Fact4P: "грантов на бесплатное обучение в колледже выделяются ежегодно",
  Fact5H: "2094",
  Fact5P: "выпускников окончили наш колледж и работают по всему миру",
  Fact6H: "47",
  Fact7H: "37%",
  Fact7P: "выпускников сразу трудоустраиваются",
  Fact8H: "63%",
  Fact8P: "выпускников сразу поступают в вузы ",
  Fact9H: "394",
  Fact9P: "студентов обучаются в колледже",
  Fact10H: "270",
  Fact10P: "мест в доме студента ",
  Fact11H: "3",
  Fact11P: "основные направления обучения: Pedagogy, IT, Accounting",

  // HistoryPage Texts
  HistoryPage: {
    title: "История колледжа",
    podtitle: "Главная / История колледжа",
  },

  HistoryP1:
    "Коммунальное государственное казенное предприятие “Жамбылский инновационный высший колледж” управления образования акимата Жамбылской области было образовано в 1993 году. Колледж более известен общественности как бывший Казахско-Турецкий колледж.",
  HistoryP2:
    "В колледже дается современное профессионально-техническое образование по программе, утвержденной Министерством образования и науки Республики Казахстан.",
  HistoryP3:
    "Колледж работает в соответствии со стандартами качества образовательного и воспитательного процессов МОФ “Білім Инновация” (оператор сети лицеев Білім Инновация”) и функционирует под патронажем “SDU University”.",
  HistoryP4:
    "Все предметы естественно-математического и профессионального направлений преподаются на английском языке. Особое внимание предоставляется ценностно-ориентированному образованию.",
  HistoryP5:
    "Колледж готовит специалистов экономического и педагогического профиля, а также профессионалов в области информационных технологий.",

  // ProfessionPage Texts
  ProfessionPage: {
    title: "Специальности",
    podtitle: "Главная / Специальности",
  },
  ProfessionH1: "Програмное обеспечение ",
  ProfessionH2: "Языки обучения:",
  ProfessionH3: "Учет и аудит",
  ProfessionH4: "Языки обучения:",
  ProfessionP1:
    "Приказ министра образования и науки Республики Казахстан от 20 января 2015 года № 19. Об утверждении Правил оказания государственной услуги в сфере технического и профессионального, послесреднего образования.",
  ProfessionP2:
    "Перевод обучающихся осуществляется из одного учебного заведения в другое, в том числе с государственного образовательного заказа на государственный образовательный заказ, с одной специальности на другую, с платной основы на обучение по государственному образовательному заказу или с одной формы обучения на другую при сдаче имеющихся академических разниц результатов обучения по дисциплинам/модулям рабочих учебных планов.",
  ProfessionP3:
    "Перевод с платной основы на обучение по государственному образовательному заказу осуществляется в течение учебного года по мере освобождения мест в этом же учебном заведении.",
  ProfessionP4:
    "Колледж обучает бухгалтерскому учету и аудиту. Специальность преподается по международной программе ACCA, что открывает уникальную возможность получить сертификат ACCA. Эта программа не только предоставляет студентам теоретические знания в области бухгалтерии, но также готовит их к соответствию международным стандартам ACCA, что является важным активом для успешной карьеры в сфере финансов и бизнеса.",
  ProfessionP5:
    "Абитуриенты могут обучаться по этой специальности только на платной основе. Стоимость обучения изменяется в зависимости года поступления.",
  ProfessionP6: "Срок обучения 2 года 10 месяцев",
  ProfessionLi1: "казахский",
  ProfessionLi2: "английский",
  ProfessionLi3: "русский",
  ProfessionLi4: "турецкий",
  ProfessionBtn1: "Подробнее",

  // Translate Texts
  TranslatePage: {
    title: "Перевод",
    podtitle: "Главная / Перевод",
  },
  TranslateH1: "Правила как перевестись с другого колледжа",
  TranslateP1:
    "Приказ министра образования и науки Республики Казахстан от 20 января 2015 года № 19. Об утверждении Правил оказания государственной услуги в сфере технического и профессионального, послесреднего образования.",
  TranslateP2:
    "Перевод обучающихся осуществляется из одного учебного заведения в другое, в том числе с государственного образовательного заказа на государственный образовательный заказ, с одной специальности на другую, с платной основы на обучение по государственному образовательному заказу или с одной формы обучения на другую при сдаче имеющихся академических разниц результатов обучения по дисциплинам/модулям рабочих учебных планов.",
  TranslateP3:
    "Перевод с платной основы на обучение по государственному образовательному заказу осуществляется в течение учебного года по мере освобождения мест в этом же учебном заведении.",
  TranslateP4:
    "В случае переезда родителей или законных представителей несовершеннолетнего обучающегося на другое место жительства допускается его перевод не в каникулярный период при представлении подтверждающих документов.",

  TranslateP5:
    "В остальных случаях перевод обучающихся осуществляется в период летних и зимних каникул.",

  TranslateP6:
    "Для перевода с платной основы на обучение по государственному образовательному заказу организация образования, реализующая образовательные программы технического и профессионального, послесреднего образования, размещает информацию о наличии вакантных мест по государственному образовательному заказу на информационных стендах, официальных интернет-сайтах организации образования.",

  TranslateP7:
    "Для перевода, обучающегося с платного обучения на обучение по государственному образовательному заказу в организации образования создается коллегиальный орган с участием педагогов и представителей органов студенческого самоуправления. Решение о переводе обучающегося принимается коллегиальным органом с учетом его успеваемости.",

  // JumbotronElem Texts
  JumbotronElemPage: {
    title: "Подача документов",
    podtitle: "Подача документов",
  },
  JumbotronElemH1: "Правила приема документов",
  JumbotronElemH2: "Документы, необходимые для поступления:",
  JumbotronElemP1:
    "Приказ министра образования и науки Республики Казахстан от 18 октября 2018 года № 578 'Об утверждении Типовых правил приема на обучение в организации образования, реализующие образовательные программы технического и профессионального, послесреднего образования'.",
  JumbotronElemP2:
    "Прием заявлений лиц на обучение в колледж: на очную форму обучения: по государственному заказу в 9 классах с 25 июня по 18 августа календарного года, на платной основе с 25 июня по 25 августа.",
  JumbotronElemP3:
    "Для получения государственной услуги услугополучатель обращается в организацию образования типо (далее-услугодатель) либо в 'электронное правительство' www.egov.kz веб-портал.",
  JumbotronElemP4:
    "Документы для поступления представляются совершеннолетними лицами лично, несовершеннолетними – в присутствии законного представителя.",
  JumbotronElemLI1: "Заявление о приеме документов;",
  JumbotronElemLI2: "Оригинал документа об образовании;;",
  JumbotronElemLI3: "Фото 4шт размером 3х4 см;",
  JumbotronElemLI4:
    "Форма № 075-У, утвержденная приказом исполняющего обязанности министра здравоохранения Республики Казахстан от 30 октября 2020 года № ҚР ДСМ-175/2020' Об утверждении форм учетной документации в области здравоохранения ' (зарегистрирован в Реестре государственной регистрации нормативных правовых актов за № 21759)",
    JumbotronElemLI5: "Справки подтверждающие наличие определенного социального статуса (многодетная семья, получатель АСП и т.п.)",
  // Hero Texts

  HeroH1P1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621595b9491387b6ae48f9a')).data.rus_text,
  HeroH1P2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662159f49491387b6ae48fbe')).data.rus_text,
  
  // Column,
  ColumnD1P1: "Ценностно - ориентированное воспитание",
  ColumnD1P2: "образование",
  ColumnD2P1: "Обучение на 4 языках",
  ColumnD2P2: "Модульно - компетентностный подход",
  ColumnD3P1: "Обучение",
  ColumnD3P2: "на 4 языках",
  ColumnD4P1: "Опытные",
  ColumnD4P2: "учителя",
  
  // Jumbotron,
  JumbotronH1P1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66215be469264e6a142b3fc3')).data.rus_text,
  JumbotronH1P2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66215c5d12bdf7b811b7917b')).data.rus_text,
  JumbotronH1P3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66215c9812bdf7b811b79181')).data.rus_text,
  JumbotronP1P1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66215d7eb4d8f21398684e50')).data.rus_text,
  JumbotronP1P2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66215e3fb4d8f21398684e7e')).data.rus_text,
  JumbotronP1P3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66215ed469264e6a142b406c')).data.rus_text,
  JumbotronP1P4: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66215f1e12bdf7b811b79228')).data.rus_text,
  JumbotronP1P5: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66215f5312bdf7b811b7924b')).data.rus_text,
  // Column2,
  Column2H1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66215fca12bdf7b811b7927c')).data.rus_text,
  Column2P1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662160a0b4d8f21398684f58')).data.rus_text,
  Column2P2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662160cdb4d8f21398684f73')).data.rus_text,
  Column2P3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621612c69264e6a142b4165')).data.rus_text,
  Column2P4: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216186b4d8f21398684fee')).data.rus_text,
  Column2P5: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662161ba12bdf7b811b7933e')).data.rus_text,
  Column2P6: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662161f269264e6a142b41d6')).data.rus_text,
  // Column3,
  Column3H1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216263b4d8f21398685067')).data.rus_text,
  Column3P1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621629f12bdf7b811b793c3')).data.rus_text,
  Column3P2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662162ddc1d336237231ae37')).data.rus_text,
  Column3P3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621634d12bdf7b811b79426')).data.rus_text,
  Column3P4: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216383b4d8f21398685147')).data.rus_text,
  //   Footer Texts
  FooterH1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662163d7c1d336237231aef1')).data.rus_text,
  FooterH2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621641a69264e6a142b4328')).data.rus_text,
  FooterL1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621645dc1d336237231af78')).data.rus_text,
  //   SecondNav Texts
  SecondNavP1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662164a112bdf7b811b79556')).data.rus_text,
  SecondNavP2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662164e0c1d336237231affc')).data.rus_text,
  //   Navbar Texts
  NavbarP1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621659512bdf7b811b79618')).data.rus_text,
  //   ThirdNav Texts
  ThirdNavNavItem1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621664a12bdf7b811b79674')).data.rus_text,
  ThirdNavNavItem2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621668fb4d8f2139868539d')).data.rus_text,
  ThirdNavNavItem3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662166d369264e6a142b4568')).data.rus_text,
  ThirdNavNavItem4: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621670e12bdf7b811b79749')).data.rus_text,
  ThirdNavNavItem5: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621676312bdf7b811b79793')).data.rus_text,
  ThirdNavNavItem6: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662167a8c1d336237231b20a')).data.rus_text,
  ThirdNavNavItem7: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662167fe12bdf7b811b79863')).data.rus_text,
  ThirdNavNavItem8: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662168dc69264e6a142b46f4')).data.rus_text,
  ThirdNavNavItem9: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621692669264e6a142b4744')).data.rus_text,
  //   ThirdNav drop-down item text
  ThirdNavNavItem1Li1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662169ddb4d8f213986855c6')).data.rus_text,
  ThirdNavNavItem1Li2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216a4cc1d336237231b380')).data.rus_text,
  ThirdNavNavItem1Li3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216a95b4d8f21398685678')).data.rus_text,
  ThirdNavNavItem1Li4: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216adcb4d8f213986856b7')).data.rus_text,
  ThirdNavNavItem1Li5: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216b2369264e6a142b48b8')).data.rus_text,
  ThirdNavNavItem1Li6: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216b67c1d336237231b4a2')).data.rus_text,
  ThirdNavNavItem1Li7: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6620c41a13a1f3713e5a4b2e')).data.rus_text,

  ThirdNavNavItem2Li1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216bb869264e6a142b4943')).data.rus_text,
  ThirdNavNavItem2Li2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216bfec1d336237231b55f')).data.rus_text,
  ThirdNavNavItem2Li3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216c4312bdf7b811b79bbb')).data.rus_text,

  ThirdNavNavItem3Li1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216c81c1d336237231b5f0')).data.rus_text,
  ThirdNavNavItem3Li2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216ccfb4d8f2139868587e')).data.rus_text,
  ThirdNavNavItem3Li3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216d18c1d336237231b681')).data.rus_text,

  ThirdNavNavItem4Li1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216d5b12bdf7b811b79ce8')).data.rus_text,
  ThirdNavNavItem4Li2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216daec1d336237231b711')).data.rus_text,
  ThirdNavNavItem4Li3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216dfbb4d8f213986859b4')).data.rus_text,
  ThirdNavNavItem4Li4: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216e4469264e6a142b4c08')).data.rus_text,
  ThirdNavNavItem4Li5: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216e8b12bdf7b811b79e4e')).data.rus_text,
  
  ThirdNavNavItem5Li1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216ff7b4d8f21398685af4')).data.rus_text,
  ThirdNavNavItem5Li2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621705c12bdf7b811b79f23')).data.rus_text,
  ThirdNavNavItem5Li3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662170b0c1d336237231b90f')).data.rus_text,
  ThirdNavNavItem5Li6: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662172cec1d336237231ba98')).data.rus_text,
  ThirdNavNavItem5Li7: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621731f12bdf7b811b7a193')).data.rus_text,
  ThirdNavNavItem5Li8: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621737069264e6a142b4ef9')).data.rus_text,
  
  ThirdNavNavItem6Li1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662173bfc1d336237231bbaf')).data.rus_text,
  ThirdNavNavItem6Li2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621746912bdf7b811b7a2c3')).data.rus_text,
  ThirdNavNavItem6Li3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662174b969264e6a142b5000')).data.rus_text,
  
  ThirdNavNavItem7Li1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621750e69264e6a142b5067')).data.rus_text,
  ThirdNavNavItem7Li2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66217564c1d336237231bce8')).data.rus_text,
  
  ThirdNavNavItem8Li1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621764ab4d8f21398685fa2')).data.rus_text,
  ThirdNavNavItem8Li2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662176a0c1d336237231bdb9')).data.rus_text,

  ThirdNavNavItem9Li1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662176eec1d336237231be2f')).data.rus_text,
  //   AcademicCalendar Texts
  AcademicCalendarInfoText: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/662178db69264e6a142b51e7')).data.rus_text,
  AcdemicCalendarP1: "График 2022-2023 учебного года будет следующим:",
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
    title: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216ccfb4d8f2139868587e')).data.rus_text,
    podtitle: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621bd0a077963c43cf74b9d')).data.rus_text,
  },

  AccountingInfoH1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/66216ccfb4d8f2139868587e')).data.rus_text,
  AccountingInfoH2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621bd9b077963c43cf74c85')).data.rus_text,
  AccountingInfoP1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621bdff077963c43cf74d07')).data.rus_text,

  AccountingInfoLi1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621be749d882d4f1cc41df6')).data.rus_text,
  AccountingInfoLi2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621bef3fe97af7e5d085cec')).data.rus_text,
  AccountingInfoLi3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621bf669d882d4f1cc41f0e')).data.rus_text,
  AccountingInfoLi4: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621bfeb9d882d4f1cc41f77')).data.rus_text,
  AccountingInfoLi5: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621c0489d882d4f1cc41ff6')).data.rus_text,
  AccountingInfoLi6: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621c0a7bca47732adf82443')).data.rus_text,

  AccountingInfoCard1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621c1a4077963c43cf7508b')).data.rus_text,
  AccountingInfoCard2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621c22c9d882d4f1cc42121')).data.rus_text,
  AccountingInfoCard3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621f34e401a5f8b3d47855f')).data.rus_text,
  AccountingInfoCard4: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621f3a7d244c5da9558a576')).data.rus_text,
  // IT Texts
  ItPage: {
    title: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621f4d0ff19b702c9609820')).data.rus_text,
    podtitle: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621f5398fa730a74f2316c9')).data.kz_text,
  },

  ItH1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621f4d0ff19b702c9609820')).data.rus_text,
  ItH2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621f77eff19b702c9609907')).data.rus_text,
  ItP1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621f7dc33ae1fd1526aab4e')).data.rus_text,
  ItLi1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621f890ff19b702c9609a8f')).data.rus_text,
  ItLi2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621f98bfec79da67c0d9ab2')).data.rus_text,
  ItLi3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621fb48d244c5da9558a8d5')).data.rus_text,
  ItLi4: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621fbaeff19b702c9609be9')).data.rus_text,
  ItLi5: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621fc182f005d7bd8f96c4a')).data.rus_text,
  ItLi6: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621fc7ec87807c7c70d32d2')).data.rus_text,
  ItCard1: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621fcf72f005d7bd8f96d54')).data.rus_text,
  ItCard2: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621fd6a2f005d7bd8f96de1')).data.rus_text,
  ItCard3: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621fdcbc87807c7c70d346e')).data.rus_text,
  ItCard4: (await axios.get('https://jihc-backend-vercel.vercel.app/api/admin/text/6621fe34d244c5da9558ac2e')).data.kz_text,
};
