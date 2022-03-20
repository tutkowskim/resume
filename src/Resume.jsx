import React from 'react';
import makeStyles from '@mui/styles/makeStyles';

import Header from './Header';
import MainContent from './MainContent';
import SideBar from './SideBar';

const useStyles = makeStyles(() => ({
  resume: {
    width: '8.5in',
    height: '11in',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  resumeContent: {
    display: 'flex',
    flexDirection: 'row',
    flex: '1 1 100%',
  },
}));

function Resume() {
  const classes = useStyles();
  return (
    <article className={classes.resume}>
      <Header />
      <div className={classes.resumeContent}>
        <SideBar />
        <MainContent />
      </div>
    </article>
  )
}

export default Resume;
