import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import Skill from './Skill';

import {
  programmingLanguages,
  developmentTools,
  frameworks,
} from './data';

const useStyles = makeStyles(() => ({
  skillsGroups: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  skillGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
}));

function Skills() {
  const classes = useStyles();
  return (
    <div className={classes.skillsGroups}>
      <div className={classes.skillGroup}>
        <Typography>Frameworks</Typography>
        {frameworks.map((item) => (
          <Skill key={item.name} name={item.name} ranking={item.ranking} />
        ))}
      </div>
      <div className={classes.skillGroup}>
        <Typography>Programing Languages</Typography>
        {programmingLanguages.map((item) => (
          <Skill key={item} name={item.name} ranking={item.ranking} />
        ))}
      </div>
      <div className={classes.skillGroup}>
        <Typography>Development Tools</Typography>
        {developmentTools.map((item) => (
          <Skill key={item} name={item.name} ranking={item.ranking} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
