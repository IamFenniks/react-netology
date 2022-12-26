import React from "react";
import PropTypes from 'prop-types';

const ProjectList = ({projects}) => {
    return (
        <div className="toolbar-body">
            {projects.map((project, index) => <img key={index} src={project.img} alt={project.category} />)}
        </div>
    );
}

ProjectList.protoTypes = {
    projects:PropTypes.string.isRequired
}

export default ProjectList;
