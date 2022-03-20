import React from 'react';
import { Divider } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

import Experience from './Experience';
import Summary from './Summary';

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
      <Summary />
      <Divider />
      <Experience />
    </section>
  );
}

export default MainContent;
