import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Group from './Group';
import { skills } from './data';

const useStyles = makeStyles(() => ({
  skills: {
    margin: '0rem',
    paddingLeft: '1rem',
  },
}));

function Skills() {
  const classes = useStyles();
  return (
    <Group title="Skills">
      <ul className={classes.skills}>
        {skills.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Group>
  );
}

export default Skills;
