import React from 'react';
import { CssBaseline, makeStyles, ThemeProvider, IconButton } from '@material-ui/core';
import {
  ArrowDownward
} from '@material-ui/icons';

import theme from './theme';
import Resume from './Resume';

const useStyles = makeStyles(() => ({
  appContaineVerticalCenter: {
    display: 'flex',
    height: '100vh', 
    width: '100vw',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'auto',
    backgroundColor: '#7d7c79',
  },
  appContainerHorizontalCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  downloadButtonContainer: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
  }
}));

function App() {
  const classes = useStyles();
  const params = (new URL(document.location)).searchParams;
  const formatToPrint = params.get('formatToPrint');

  // Redirect mobile users to the pdf
  if (window.screen.width <= 699) {
    document.location = "/mark_tutkowski.pdf";
  }
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={!formatToPrint && classes.appContaineVerticalCenter}>
        <div className={!formatToPrint && classes.appContainerHorizontalCenter}>
          <Resume />
        </div>
        {!formatToPrint && (
          <div class={classes.downloadButtonContainer}>
          <a href="/mark_tutkowski.pdf" download>
            <IconButton color="secondary" variant="outlined" aria-label="Download Resume" component="span">
              <ArrowDownward />
            </IconButton>
          </a>
        </div>
        )}
      </div>
      
    </ThemeProvider>
  );
}

export default App;
