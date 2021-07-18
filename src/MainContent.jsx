import React from 'react';
import { makeStyles, Divider } from '@material-ui/core';

import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Summary from './Summary';
import Certifications from './Certifications';

const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2rem',
    marginRight: '2rem',
    overflow: 'hidden',
    gap: '0.25rem',
  },
}));

function MainContent() {
  const classes = useStyles();
  return (
    <section className={classes.content}>
      <Summary />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
      <Divider />
      <Education />
      <Divider />
      <Certifications />
    </section>
  );
}

export default MainContent;
