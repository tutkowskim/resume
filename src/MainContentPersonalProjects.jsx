import React from 'react';

function PersonalProjects(props) {
  const { projects } = props;
  return (
    <div className="projects_list">
      {projects.map((project) => (
        <div className="projects_list__project">
          <div className="main_content__item_title">{project.title}</div>
          <div>{project.description}</div>
          <div>
            <a target="_blank" href={project.url} rel="noreferrer">
              <i className="fa fa-github" />
              {' '}
              {project.url}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PersonalProjects;
