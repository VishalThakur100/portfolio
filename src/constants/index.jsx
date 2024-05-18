import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import nodejs from "../assets/nodejs.png";
import reactjs from "../assets/reactjs.png";
import mongodb from "../assets/mongodb.png";
import javascript from "../assets/javascript.png";
import reacr from "../assets/reacr.png";
import web from "../assets/web.png";
// import ux from "../assets/ux.png";
// import typescript from "../assets/typescript.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import java from "../assets/java.png";
import pro1 from "../assets/pro1.jpg";
import pro2 from "../assets/pro2.jpg";
import pro3 from "../assets/pro3.jpg";

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reacr,
  },
  // {
  //   title: "UI/UX Designer",
  //   icon: ux,
  // },
  {
    title: "Java Developer",
    icon: java,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Javascript",
    icon: javascript,
  },
  // {
  //   name: "Typescript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
];

const projects = [
  {
    name: "foodMood",
    description:
      "foodMood is a cutting-edge food ordering platform designed with the modern epicurean in mind. Crafted using the robust ReactJS framework for dynamic and interactive user interface, styled with the sleek Tailwind CSS which provides a customizable design system that adapts to any device, and managed with the efficient Redux Toolkit that streamlines state management, making your online ordering process smooth and reliable. foodMood isn’t just a website; it’s your passport to a world of culinary delights, all made possible by the synergy of ReactJS, Tailwind CSS, and Redux Toolkit.      ",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "TalwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: pro1,
    source_code_link: "https://github.com/riva211/realestate.github.io",
    source_deploy_link: "https://rivasrealestate.netlify.app ",
  },
  {
    name: "ToDo App",
    description:
      "Web application that enables users to manage their daily task and to manage the time efficiently ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pro2,
    source_code_link: "https://github.com/riva211?tab=repositories",
    source_deploy_link: "https://rivastodolist.netlify.app",
  },
  {
    name: "OxiBook ",
    description:
      "OxiBook is online book buying and selling website with and user freindly UI. It is a MERN stack web application, ",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "pink-text-gradient",
      },
    ],
    image: pro3,
    source_code_link: "https://github.com/riva211?tab=repositories",
    source_deploy_link: "https://gregarious-sorbet-33fff8.netlify.app/",
  },
];
export { services, technologies, projects };
