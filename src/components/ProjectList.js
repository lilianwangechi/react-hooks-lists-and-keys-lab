import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
//const projectDisplayed= projects.map(project => project)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list" key={projects.id}>
    { projects.map((project) => {
    return <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies}/>
    })}
      </div>
    </div>
  
  );
}

export default ProjectList;
