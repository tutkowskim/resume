import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@material-ui/lab';

import { experience } from '../data';

const useStyles = makeStyles(() => ({
  companyName: {
    marginBottom: '0rem',
    paddingBottom: '0rem',
  },
  timeline: {
    margin: '0rem',
    padding: '0rem',
  },
  roleLine: {
    display: 'flex',
  },
  role: {
    flexGrow: '1',
  },
}));

function Experience() {
  const classes = useStyles();
  return (
    <>
      {experience.map((companyData) => (
        <div>
          <Typography className={classes.companyName} variant="h6">{companyData.company}</Typography>
          <Timeline align="left" className={classes.timeline}>
            {companyData.roles.map(((role, index, roles) => (
              <TimelineItem>
                <TimelineOppositeContent style={{ display: 'none' }} />
                <TimelineSeparator>
                  <TimelineDot />
                  {(index !== roles.length - 1) && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent style={{ flex: 1 }}>
                  <div>
                    <div className={classes.roleLine}>
                      <Typography variant="body1" className={classes.role}>{role.title}</Typography>
                      <Typography variant="body1">{`${role.startDate} - ${role.endDate}`}</Typography>
                    </div>
                    <ul>
                      {role.roleDetails.map((detail) => (
                        <Typography variant="body2"><li>{detail}</li></Typography>
                      ))}
                    </ul>
                  </div>
                </TimelineContent>
              </TimelineItem>
            )))}
          </Timeline>
        </div>
      ))}
    </>
  );
}

export default Experience;
