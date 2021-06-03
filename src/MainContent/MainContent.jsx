import React from 'react';
import Group from './Group';
import Experience from './Experience';
import Education from './Education';
import Projects from './PersonalProjects';

import {
  summary,
  experience,
  education,
  projects,
} from '../data';

function MainContent() {
  return (
    <section className="main_content">
      <Group title="Summary">
        {summary}
      </Group>
      <Group title="Experience">
        {experience.map((exp) => <Experience key={exp.company} {...exp} />)}
      </Group>
      <Group title="Eduction">
        {education.map((ed) => <Education key={ed.institution} {...ed} />)}
      </Group>
      <Group title="Personal Projects">
        <Projects projects={projects} />
      </Group>
    </section>
  );
}

export default MainContent;