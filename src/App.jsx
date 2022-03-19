import React from 'react';
import { CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';

import theme from './theme';
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

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <article className={classes.resume}>
        <Header />
        <div className={classes.resumeContent}>
          <SideBar />
          <MainContent />
        </div>
      </article>
    </ThemeProvider>
  );
}

export default App;
