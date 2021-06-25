import React from 'react';
import { CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';

import theme from './theme';
import MainContent from './MainContent';
import SideBar from './SideBar';

const useStyles = makeStyles(() => ({
  resume: {
    width: '8.5in',
    height: '11in',
    overflow: 'hidden',
    display: 'flex',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <article className={classes.resume}>
        <SideBar />
        <MainContent />
      </article>
    </ThemeProvider>
  );
}

export default App;
