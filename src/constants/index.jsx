import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import nodejs from "../assets/nodejs.png";
import reactjs from "../assets/reactjs.png";
// import mongodb from "../assets/mongodb.png";
import javascript from "../assets/javascript.png";
import reacr from "../assets/reacr.png";
import web from "../assets/web.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import java from "../assets/java.png";
// import pro2 from "../assets/pro2.jpg";
import foodmood from "../assets/foodmood img.png"
import pro3 from "../assets/password generator.png";

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
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
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
      "foodMood is a cutting-edge food ordering platform designed with the modern epicurean in mind. Crafted using the robust ReactJS framework, styled with the sleek Tailwind CSS, and managed with the efficient Redux Toolkit,",
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
    image: foodmood,
    source_code_link: "https://github.com/VishalThakur100/foodMood",
    source_deploy_link: "https://foodmoodapp.netlify.app/",
  },
  // {
  //   name: "ToDo App",
  //   description:
  //     "Web application that enables users to manage their daily task and to manage the time efficiently ",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Tailwind",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: pro2,
  //   source_code_link: "https://github.com/riva211?tab=repositories",
  //   source_deploy_link: "https://rivastodolist.netlify.app",
  // },
  {
    name: "Password Generator ",
    description:
      "A password generator app built with ReactJS and Tailwind CSS that allows users to create secure and customizable passwords. Users can specify password length, include numbers and special characters, and easily copy the generated password to the clipboard",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "pink-text-gradient",
      },
    ],
    image: pro3,
    source_code_link: "https://github.com/VishalThakur100/portfolio",
    source_deploy_link: "https://thakurportfolio.netlify.app/",
  },
];
export { services, technologies, projects };
