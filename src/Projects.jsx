import React from 'react';
import CredentialGroup from './CredentialGroup';
import { projects } from './data';

function Projects() {
  const credentials = projects.map((project) => ({
    primary: project.name,
    secondary: <a href={project.url}>{project.url.replace(/(^\w+:|^)\/\//, '')}</a>,
    details: project.details,
  }));
  return (
    <CredentialGroup name="Projects" credentials={credentials} />
  );
}

export default Projects;
