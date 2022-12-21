import React from "react";

const ProjectList = ({projects}) => {
    return (
        <div className="toolbar-body">
            {projects.map((project, index) => <img key={index} src={project.img} alt={project.category} />)}
        </div>
    );
}

export default ProjectList;