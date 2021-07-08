import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Group from './Group';
import { experience } from './data';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    marginTop: '1rem',
    '&:first-child': {
      marginTop: '0rem',
    },
  },
  date: {
    width: '6rem',
    paddingRight: '1rem',
    flexGrow: '0',
    flexShrink: '0',
  },
  role: {
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
    <Group title="Experience">
      {experience.map((role) => (
        <div className={classes.container}>
          <Typography className={classes.date} variant="caption">
            <span>{role.startDate}</span>
            <span>{' - '}</span>
            <br />
            <span>{role.endDate}</span>
          </Typography>
          <div className={classes.role}>
            <Typography variant="body1">{role.title}</Typography>
            <Typography variant="body2">{role.company}</Typography>
            <ul className={classes.responsibilities}>
              {role.roleDetails.map((detail) => (
                <li>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </Group>
  );
}

export default Experience;
