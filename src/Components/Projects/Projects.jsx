import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Online Camera App"
          main=" Built a Online-Camera with React and JavaScript for click photos, Implemented with Next.JS and vercel."
        />
        <ProjectCard
          title="Data Analytics: Real Estate"
          main="Build a Data Analytics use Real Estate data,Designed with Python.For stores objects use Amazon Web ServicesCreated the database in Snowflake."
        />
        <ProjectCard
          title="Automated Teller Machine"
          main="Built a ATM system by use NetBeans and Java,For storing Data use mysql workbench 8.0 ce."
        />
      </div>
    </div>
  );
};

export default Projects;
