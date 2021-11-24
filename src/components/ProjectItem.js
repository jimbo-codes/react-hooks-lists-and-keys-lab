import React from "react";

function ProjectItem({ name, about, technologies, id }) {
  console.log(id);
  return (
    <div key={id}className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((tech)=>{
          console.log(tech);
          return <span key={tech}>{tech}</span>
        })}
      </div>
    </div>
  );
}

export default ProjectItem;
