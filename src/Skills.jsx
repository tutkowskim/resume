import Group from './Group';
import { skills } from './data';

function Skills() {
  return (
    <Group title='Skills'>
      {skills.map(group => (
        <p key={group.groupName}>{`${group.groupName}: ${group.skills.join(', ')}`}</p>
      ))}
    </Group>
  );
}

export default Skills;
