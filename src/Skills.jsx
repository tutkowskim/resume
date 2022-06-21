import React from 'react';
import { Chip } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Group from './Group';
import { skills } from './data';

const useStyles = makeStyles(() => ({
  skills: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '0.25rem',
  },
}));

function Skills() {
  const classes = useStyles();
  return (
    <>
     {skills.map((skillsGroup) => (
        <Group key={skillsGroup.groupName} title={`Skills (${skillsGroup.groupName})`}>
          <div className={classes.skills} >
          {skillsGroup.skills.map((item) => (
            <Chip key={item} label={item} />
          ))}
          </div>
        </Group>
      ))}`
    </>
  );
}

export default Skills;
