import React from 'react';
import { Divider } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

import Certifications from './Certifications';
import Experience from './Experience';
import Eduction from './Education';

const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    overflow: 'hidden',
    gap: '0.25rem',
    background: 'white',
  },
}));

function MainContent() {
  const classes = useStyles();
  return (
    <section className={classes.content}>
      <Experience />
      <Divider />
      <Eduction />
      <Divider />
      <Certifications />
    </section>
  );
}

export default MainContent;
