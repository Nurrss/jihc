import { createRouter, createWebHistory } from "vue-router";

/* Pages */
import Home from "../pages/Home.vue";
import Contact from "../pages/Contact.vue";
import AcademCalendar from "../pages/AcademCalendar.vue";
import Accounting from "../pages/Accounting.vue";
import AllContacts from "../pages/AllContacts.vue";
import Association from "../pages/Association.vue";
import Board from "../pages/Board.vue";
import Canteen from "../pages/Canteen.vue";
import CareerGuidance from "../pages/CareerGuidance.vue";
import Career from "../pages/Career.vue";
import Comand from "../pages/Comand.vue";
import Comit from "../pages/Comit.vue";
import ConnectionTeachers from "../pages/ConnectionTeachers.vue";
import Corpus from "../pages/Corpus.vue";
import Documents from "../pages/Documents.vue";
import Dormitory from "../pages/Dormitory.vue";
import Edupage from "../pages/Edupage.vue";
import Facts from "../pages/Facts.vue";
import GoogleCalendar from "../pages/GoogleCalendar.vue";
import History from "../pages/History.vue";
import IT from "../pages/IT.vue";
import Labaratory from "../pages/Labaratory.vue";
import ParentComit from "../pages/ParentComit.vue";
import Partner from "../pages/Partner.vue";
import Pedogogika from "../pages/Pedogogika.vue";
import Practica from "../pages/Practica.vue";
import PreperatoinProf from "../pages/PreperatoinProf.vue";
import Profession from "../pages/Profession.vue";
import Sponsorship from "../pages/Sponsorship.vue";
import Sporthall from "../pages/Sporthall.vue";
import StudentLife from "../pages/StudentLife.vue";
import SupplyDocuments from "../pages/SupplyDocuments.vue";
import Translate from "../pages/Translate.vue";
import StudentHouse from "../pages/StudentHouse.vue";
import PageNotFound from "../pages/PageNotFound.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/dormitoryrools",
    component: StudentHouse,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/academcalendar",
    component: AcademCalendar,
  },
  {
    path: "/accounting",
    component: Accounting,
  },
  {
    path: "/parentcomit",
    component: ParentComit,
  },
  {
    path: "/association",
    component: Association,
  },
  {
    path: "/board",
    component: Board,
  },
  {
    path: "/canteen",
    component: Canteen,
  },
  {
    path: "/careerguidance",
    component: CareerGuidance,
  },
  {
    path: "/career",
    component: Career,
  },
  {
    path: "/comand",
    component: Comand,
  },
  {
    path: "/comit",
    component: Comit,
  },
  {
    path: "/connectionteachers",
    component: ConnectionTeachers,
  },
  {
    path: "/corpus",
    component: Corpus,
  },
  {
    path: "/documents",
    component: Documents,
  },
  {
    path: "/dormitory",
    component: Dormitory,
  },
  {
    path: "/edupage",
    component: Edupage,
  },
  {
    path: "/facts",
    component: Facts,
  },
  {
    path: "/googlecalendar",
    component: GoogleCalendar,
  },
  {
    path: "/history",
    component: History,
  },
  {
    path: "/it",
    component: IT,
  },
  {
    path: "/labaratory",
    component: Labaratory,
  },
  {
    path: "/partner",
    component: Partner,
  },
  {
    path: "/allcontacts",
    component: AllContacts,
  },
  {
    path: "/pedogogika",
    component: Pedogogika,
  },
  {
    path: "/practica",
    component: Practica,
  },
  {
    path: "/preperationprof",
    component: PreperatoinProf,
  },
  {
    path: "/profession",
    component: Profession,
  },
  {
    path: "/sponsorship",
    component: Sponsorship,
  },
  {
    path: "/sporthall",
    component: Sporthall,
  },

  {
    path: "/studentlife",
    component: StudentLife,
  },
  {
    path: "/supplydocuments",
    component: SupplyDocuments,
  },
  {
    path: "/translate",
    component: Translate,
  },
  {
    path: "/:pathMatch(.*)*", // catch all 404 - make sure this is at the end
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
