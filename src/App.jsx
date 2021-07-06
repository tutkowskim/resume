import React from 'react';
import { CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';

import theme from './theme';
import Header from './Header';
import MainContent from './MainContent';

const useStyles = makeStyles(() => ({
  resume: {
    width: '8.5in',
    height: '11in',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <article className={classes.resume}>
        <Header />
        <MainContent />
      </article>
    </ThemeProvider>
  );
}

export default App;
