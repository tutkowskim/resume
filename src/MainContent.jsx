import React from 'react';
import Group from './MainContentGroup';
import Experience from './MainContentExperience';
import Education from './MainContentEducation';
import Projects from './MainContentPersonalProjects';

import {
  summary,
  experience,
  education,
  projects,
} from './data';

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
