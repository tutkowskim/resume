import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Group from './Group';
import { education } from './data';

const useStyles = makeStyles(() => ({
  education: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
}));

function Eduction() {
  const classes = useStyles();
  return (
    <Group title="Education">
      <div className={classes.education}>
        {education.map((educationInfo) => (
          <div>
            <Typography variant="subtitle2">{educationInfo.degree}</Typography>
            <Typography variant="subtitle2">
              <span>{educationInfo.startDate}</span>
              <span>{' - '}</span>
              <span>{educationInfo.endDate}</span>
            </Typography>
            <Typography variant="subtitle2">{educationInfo.institution}</Typography>
          </div>
        ))}
      </div>
    </Group>
  );
}

export default Eduction;
