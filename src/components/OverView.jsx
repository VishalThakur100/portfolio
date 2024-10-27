// import React from "react";
import Tilt from "react-parallax-tilt";
import { Styles } from "../utils/Style";
import { technologies, services } from "../constants/index";
import "./style.css";
import { motion } from "framer-motion";

function Overview() {
  return (
    <div className="bg-black">
      <motion.div
        animate={{ x: 100 }}
        transition={{ type: "spring", stiffness: 100 }}
      />
      <div
        className="flex-row items-center pl-5 justify-center pt-3 "
        id="Overview"
      >
        <span className={Styles.sectionHeadText}>Introduction</span>
        <hr className="w-[35%]"></hr>
        <div className={Styles.sectionText}>
          I&apos;m a skilled web developer with experience in JavaScript and
          expertise in frameworks like React, NextJs I&apos;m a quick learner
          and collaborate, scalable and user-friendly solutions that solve
          real-world problems. Let&apos;s work together to bring your ideas to
          Real Life!
        </div>
      </div>
      <div className=" flex flex-wrap justify-center ">
        {services.map((service) => (
          <Tilt
            key={service.icon}
            className="parallax-effect-glare-scale   "
            perspective={500}
            glareColor="#fed7aa"
            glareEnable={true}
            glareMaxOpacity={0.5}
            scale={1.02}
            gyroscope={true}
          >
            <div className="p-3 m-3 flex flex-col justify-evenly items-center">
              <img
                className="h-[100px] w-[100px]"
                src={service.icon}
                alt={service.title}
              />
              <div className="m-5 text-violet-500 ">{service.title} </div>
            </div>
          </Tilt>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center mb-4">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className=" m-4 mt-5  hover:transition hover:delay-75 duration-300 h-[100px] w-[100px] rounded-3xl shadow-2xl border-violet-400 border-[1px] hover:shadow-orange-300  "
          >
            <img className="p-2" src={technology.icon} alt={technology.name} />
            <div className="text-violet-600  justify-center flex  ">
              {technology.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Overview;
