import YourMeals from "@/assets/projects/YourMeals .webp";
import BeedeGo from "@/assets/projects/beedego.webp";
import KataKita from "@/assets/projects/kataKita.webp";
import Caseths from "@/assets/projects/caseth-la-magasin_web.jpg";
import TodoApp from "@/assets/projects/To-Do List App.webp";
import Equran from "@/assets/projects/e-quran-project.webp";
import BangbaraPOS from "@/assets/projects/BangbaraPos-project.jpg";
import BlogApp from "@/assets/projects/blog-app.jpg";

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
    category: "Frontend",
  },
  {
    id: 2,
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
    id: 3,
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
    id: 6,
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
    id: 7,
    image: BangbaraPOS,
    title: "BangbaraPOS",
    description:
      "A project that I worked on with my team to create an ordering system for UMKM",
    tags: ["Laravel", "TailwindCSS", "Midtrans"],
    link: "#",
    github: "https://github.com/fallennsyahid/bangbaraPOS",
    cta: "View github",
    isLinked: false,
    category: "Backend",
  },
  {
    id: 8,
    image: BlogApp,
    title: "Blogs App",
    description:
      "A website created using Laravel, which contains a collection of blogs, also has search and pagination",
    tags: ["Laravel", "TailwindCSS"],
    link: "#",
    github: "https://github.com/jongkodingabi/Blog-Web-damy-",
    cta: "View github",
    isLinked: false,
    category: "Backend",
  },
];

export default itemsProjects;
