import YourMeals from "@/assets/projects/YourMeals.png";
import BeedeGo from "@/assets/projects/beedego.png";
import KataKita from "@/assets/projects/kataKita.png";
import Caseths from "@/assets/projects/caseth-la-magasin_web.jpg";
import TodoApp from "@/assets/projects/To-Do List App.png";

const itemsProjects = [
  {
    id: 1,
    image: YourMeals,
    title: "Your Meals",
    description:
      "A web application that allows users to search for recipes and save their favorite meals.",
    tags: ["Vue.js", "Tailwind CSS", "MealDB API"],
    link: "https://your-meals-app.netlify.app/",
    github: "https://github.com/jongkodingabi/Meals-App",
    cta: "View site",
    isLinked: true,
  },
  {
    id: 2,
    image: BeedeGo,
    title: "BeedeGo",
    description:
      "A simple landing page for a design service, showcasing their projects and services.",
    tags: ["Vue.js", "Tailwind CSS"],
    link: "https://beedego-abisam-hazims-projects.vercel.app/",
    github: "https://github.com/jongkodingabi/BeeDeGo",
    cta: "View site",
    isLinked: true,
  },
  {
    id: 3,
    image: KataKita,
    title: "KataKita",
    description:
      "An Indonesian dictionary application made with Flutter and Firebase",
    tags: ["Flutter", "Firebase"],
    link: "#",
    github: "https://github.com/jongkodingabi/KataKita",
    cta: "View github",
    isLinked: false,
  },
  {
    id: 4,
    image: Caseths,
    title: "Caseths",
    description:
      "Website that contains product information in the form of accessories, and payment gatheway",
    tags: ["Laravel", "Tailwind CSS", "MySQL"],
    link: "#",
    github: "https://github.com/jongkodingabi/KataKita",
    cta: "View github",
    isLinked: false,
  },
  {
    id: 5,
    image: TodoApp,
    title: "To-Do App",
    description:
      "A to do list app that can save your work notes, I did this project to practice my vue skills",
    tags: ["Vue.js", "CSS3"],
    link: "https://github.com/jongkodingabi/KataKita",
    github: "https://github.com/jongkodingabi/TODO-List-App",
    cta: "View github",
    isLinked: true,
  },
];

export default itemsProjects;
