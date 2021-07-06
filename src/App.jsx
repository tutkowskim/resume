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
  content: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: '1',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <nav className={classes.resume}>
        <Header />
        <article className={classes.content}>
          <SideBar />
          <MainContent />
        </article>
      </nav>
    </ThemeProvider>
  );
}

export default App;
