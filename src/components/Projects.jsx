import { Styles } from "../utils/Style";
import { projects } from "../constants";
import Tilt from "react-parallax-tilt";
import {  SiNetlify } from "react-icons/si";

function Projects() {
  return (
    <div className="bg-black text-white py-8 ">
      <div className="container mx-auto">
        <div className="pt-3 mt-4" id="Projects">
          <span className={`${Styles.sectionHeadText} text-violet-400`}>
            Projects
          </span>
          <hr className="w-[35%] border-violet-400"></hr>
          <div className={`${Styles.sectionText} text-gray-300`}>
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly p-8 items-center relative z-0 -mt-10">
          {" "}
          {/* Added relative and negative margin */}
          {projects.map((project) => (
            <Tilt
              key={project.name}
              className="w-[300px] h-[500px] flex flex-col justify-evenly shadow-2xl m-10 items-center hover:shadow-2xl hover:shadow-violet-400 border-2 border-violet-900 shadow-pink-300 p-3 rounded-xl bg-gray-900"
            >
              <div className="">
                <div className="flex justify-center items-center mb-3">
                  <div className="h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center  ">
                    {" "}
                    <a href={project.source_deploy_link} target="blank">
                      {" "}
                      <SiNetlify className=" text-3xl font-bold  text-violet-600"></SiNetlify>{" "}
                    </a>{" "}
                  </div>
                  {/* <div className="h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-orange-500 flex justify-center items-center  ">
                    {" "}
                    <a href={project.source_code_link} target="blank">
                      {" "}
                      <SiGithub className=" text-3xl font-bold  text-violet-600"></SiGithub>{" "}
                    </a>{" "}
                  </div> */}
                </div>
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-[200px] w-[250px] self-center border-2 border-pink-200 rounded-2xl"
                />
                <div className="text-2xl text-center m-3 text-violet-400 font-extrabold">
                  {project.name}
                </div>
                <div className="text-center">
                  <span className="text-orange-400 text-xs">
                    {project.description}
                  </span>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
