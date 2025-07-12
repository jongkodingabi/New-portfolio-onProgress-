import YourMeals from "@/assets/projects/YourMeals .webp";
import BeedeGo from "@/assets/projects/beedego.webp";
import KataKita from "@/assets/projects/kataKita.webp";
import Caseths from "@/assets/projects/caseth-la-magasin_web.webp";
import TodoApp from "@/assets/projects/To-Do List App.webp";
import Equran from "@/assets/projects/e-quran-project.webp";
import BangbaraPOS from "@/assets/projects/BangbaraPos-project.webp";
import Drawnic from "@/assets/projects/drawnic.webp";
import Savora from "@/assets/projects/savora-mock.webp";

const itemsProjects = [
  {
    id: 1,
    image: Drawnic,
    title: "DrawNic",
    description:
      "The lottery or player drawing system for your mini soccer game.",
    tags: ["React", "Typescript", "Laravel API"],
    link: "https://drawnic.pplgsmkn1ciomas.my.id/",
    github: "https://github.com/jongkodingabi/Drawnic-FE",
    cta: "View site",
    isLinked: true,
    category: "Frontend",
  },
  {
    id: 2,
    image: Savora,
    title: "Savora",
    description:
      "Savora is a personal finance app I built to help users manage their income, expenses, and financial goals through an intuitive and interactive interface.",
    tags: ["Next.JS", "Typescript", "Supabase"],
    link: "https://savora-finance-app.vercel.app",
    github: "https://github.com/jongkodingabi/Savora-finance-app",
    cta: "View site",
    isLinked: true,
    category: "Frontend",
  },
  {
    id: 3,
    image: BangbaraPOS,
    title: "BangbaraPOS",
    description:
      "A project that I worked on with my team to create an ordering system for UMKM",
    tags: ["Laravel", "TailwindCSS", "Midtrans"],
    link: "https://bangbarapos.my.id/",
    github: "https://github.com/fallennsyahid/bangbaraPOS",
    cta: "View site",
    isLinked: true,
    category: "Backend",
  },

  {
    id: 4,
    image: KataKita,
    title: "KataKita",
    description:
      "An Indonesian dictionary application made with Flutter and Firebase",
    tags: ["Flutter", "Firebase"],
    link: "#",
    github: "https://github.com/jongkodingabi/KataKita",
    cta: "View github",
    isLinked: false,
    category: "Mobile",
  },
  {
    id: 5,
    image: Equran,
    title: "E-Quran web",
    description:
      "E-Quran Web is an online platform that allows users to read, search, and listen to the Quran.",
    tags: ["React", "Typescript", "E-quran API"],
    link: "https://e-qur-an-web.vercel.app/",
    github: "https://github.com/jongkodingabi/E-Qur-an",
    cta: "View site",
    isLinked: true,
    category: "Frontend",
  },
  {
    id: 6,
    image: Caseths,
    title: "Caseths",
    description:
      "Website that contains product information in the form of accessories, payment gatheway",
    tags: ["Laravel", "Tailwind CSS", "MySQL"],
    link: "#",
    github: "https://github.com/jongkodingabi/KataKita",
    cta: "View github",
    isLinked: false,
    category: "Backend",
  },
  {
    id: 7,
    image: TodoApp,
    title: "To-Do App",
    description:
      "A to do list app that can save your work notes, I did this project to practice my vue skills",
    tags: ["Vue.js", "CSS3"],
    link: "https://github.com/jongkodingabi/KataKita",
    github: "https://github.com/jongkodingabi/TODO-List-App",
    cta: "View github",
    isLinked: true,
    category: "Frontend",
  },
  {
    id: 8,
    image: BeedeGo,
    title: "BeedeGo",
    description:
      "A simple landing page for a design service, showcasing their projects and services.",
    tags: ["Vue.js", "Tailwind CSS"],
    link: "https://beedego-abisam-hazims-projects.vercel.app/",
    github: "https://github.com/jongkodingabi/BeeDeGo",
    cta: "View site",
    isLinked: true,
    category: "Frontend",
  },

  {
    id: 9,
    image: YourMeals,
    title: "Your Meals",
    description:
      "A web application that allows users to search for recipes and save their favorite meals.",
    tags: ["Vue.js", "Tailwind CSS", "MealDB API"],
    link: "https://your-meals-app.netlify.app/",
    github: "https://github.com/jongkodingabi/Meals-App",
    cta: "View site",
    isLinked: true,
    category: "Frontend",
  },
];

export default itemsProjects;
