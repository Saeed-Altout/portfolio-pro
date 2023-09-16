import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TitleSection, Text, TextImportant } from "../components/index";
import { dataProjects } from "../data/dummy";
const Projects = () => {
  return (
    <section className="hero flex-center container mx-auto px-3 sm:px-0">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TitleSection
          bTitle="Best My"
          spTitle="Projects"
          titleStyles="text-center"
        />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-gray-400 text-sm md:text-lg text-center mt-5 w-[80%] mx-auto"
        >
          <TextImportant>Hands-on projects </TextImportant> are the most
          practical way to learn a programming language and build your
          portfolio. If you're tired of
          <TextImportant>
            {" "}
            building "to-do" apps and learning theory, My Portfolio{" "}
          </TextImportant>{" "}
          can help you solidify your knowledge and start taking on meaningful
          projects that will set the tone for your career
        </motion.p>
        <div className="grid-section mt-10">
          {dataProjects.map((project) => (
            <div className="bg-[#11151f] rounded-xl" key={project.title}>
              <img
                src={project.imgUrl}
                alt={`Project ${project.title}`}
                className="cursor-pointer h-[250px] w-full object-cover"
              />
              <div className="p-5">
                <h1 className="text-gray-200 font-semibold text-2xl">
                  {project.title}
                </h1>
                <Text>{project.description}</Text>
                <span className="text-yellow-500 mt-5 flex justify-end items-center gap-1">
                  <a
                    href={project.linkUrl}
                    className="text-gray-200 mr-auto hover:text-purple-500"
                    onClick={() => {}}
                  >
                    View Domien
                  </a>
                  {project.rate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
