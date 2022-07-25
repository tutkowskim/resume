import React from 'react';
import Group from './Group';
import Chip from './Chip';
import { skills } from './data';

function Skills() {
  return (
    <>
     {skills.map((skillsGroup) => (
        <Group key={skillsGroup.groupName} title={`Skills (${skillsGroup.groupName})`}>
          <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '0.25rem' }}>
          {[...skillsGroup.skills].sort().map((item) => (
            <Chip key={item} label={item} />
          ))}
          </div>
        </Group>
      ))}
    </>
  );
}

export default Skills;
