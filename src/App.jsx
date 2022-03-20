import React from 'react';
import { CssBaseline, ThemeProvider, StyledEngineProvider } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

import theme from './theme';
import Resume from './Resume';
import DownloadButton from './DownloadButton';

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
  ['@media only screen and (max-height: 11in)']: { // eslint-disable-line no-useless-computed-key
    appContaineVerticalCenter: {
      display: 'block',
    }
  },
  ['@media only screen and (max-width: 8.5in)']: { // eslint-disable-line no-useless-computed-key
    appContainerHorizontalCenter: {
      display: 'block',
    }
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
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <div className={!formatToPrint && classes.appContaineVerticalCenter}>
          <div className={!formatToPrint && classes.appContainerHorizontalCenter}>
            <Resume />
          </div>
          {!formatToPrint && (
            <div class={classes.downloadButtonContainer}>
              <DownloadButton />
            </div>
          )}
        </div>
        
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
