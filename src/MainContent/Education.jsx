import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { education } from '../data';

const useStyles = makeStyles(() => ({
  schoolSection: {
    display: 'flex',
    paddingBottom: '1rem',
  },
  schoolSectionLeft: {
    flexGrow: '1',
  },
  schoolSectionRight: {
    textAlign: 'right',
  },
}));

function Education() {
  const classes = useStyles();
  return (
    <>
      {education.map((data) => (
        <div className={classes.schoolSection}>
          <div className={classes.schoolSectionLeft}>
            <Typography variant="body1" className="main_content__item_title">{data.institution}</Typography>
            {data.degrees.map((degree) => (
              <Typography variant="body2" key={degree}>{degree}</Typography>
            ))}
          </div>
          <div className={classes.schoolSectionRight}>
            <Typography variant="body2">{data.location}</Typography>
            <Typography variant="body2">{`${data.startDate} - ${data.endDate}`}</Typography>
          </div>
        </div>
      ))}
    </>
  );
}

export default Education;
