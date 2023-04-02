import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo } from "../../assets/index.js";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Visit my portfolio and keep your feedback"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectCard
          title="Project Title1"
          des="Ridiculus conubia tristique quam.
          Lorem, urna ornare magnis pharetra vestibulum
           condimentum. Lectus dignissim litora dis;
         ."
          src={projectOne}
        />
        <ProjectCard
          title="Project Title2"
          des="Ridiculus conubia tristique quam.
        Lorem, urna ornare magnis pharetra vestibulum
         condimentum. Lectus dignissim litora dis;
       ."
          src={projectTwo}
        />
        <ProjectCard
          title="Project Title3"
          des="Ridiculus conubia tristique quam.
         Lorem, urna ornare magnis pharetra vestibulum
          condimentum. Lectus dignissim litora dis;
        ."
          src={projectOne}
        />
        <ProjectCard
          title="Project Title4"
          des="Ridiculus conubia tristique quam.
         Lorem, urna ornare magnis pharetra vestibulum
          condimentum. Lectus dignissim litora dis;
        ."
          src={projectOne}
        />
        <ProjectCard
          title="Project Title5"
          des="Ridiculus conubia tristique quam.
         Lorem, urna ornare magnis pharetra vestibulum
          condimentum. Lectus dignissim litora dis;
        ."
          src={projectOne}
        />
        <ProjectCard
          title="Project Title6"
          des="Ridiculus conubia tristique quam.
         Lorem, urna ornare magnis pharetra vestibulum
          condimentum. Lectus dignissim litora dis;
        ."
          src={projectOne}
        />
      </div>
    </section>
  );
}

export default Projects;
