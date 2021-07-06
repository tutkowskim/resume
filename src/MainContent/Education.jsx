import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import { education } from '../data';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    marginTop: '1rem',
    '&:first-child': {
      marginTop: '0rem',
    },
  },
  date: {
    width: '5.2rem',
    paddingRight: '1rem',
    flexGrow: '0',
    flexShrink: '0',
  },
  degree: {
    flexGrow: '1',
  },
  responsibilities: {
    margin: '0rem',
    paddingLeft: '1rem',
  },
}));

function Experience() {
  const classes = useStyles();
  return (
    <>
      {education.map((educationInfo) => (
        <div className={classes.container}>
          <Typography className={classes.date} variant="caption">
            <span>{educationInfo.startDate}</span>
            <span>{' - '}</span>
            <br />
            <span>{educationInfo.endDate}</span>
          </Typography>
          <div className={classes.degree}>
            <Typography variant="body1">{educationInfo.degree}</Typography>
            <Typography variant="body2">{educationInfo.institution}</Typography>
          </div>
        </div>
      ))}
    </>
  );
}

export default Experience;
