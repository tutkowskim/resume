import React from 'react';
import Resume from './Resume';
import DownloadButton from './DownloadButton';

function App() {
  const params = (new URL(document.location)).searchParams;
  const formatToPrint = params.get('formatToPrint');

  // Redirect mobile users to the pdf
  if (window.screen.width <= 699) {
    document.location = "/mark_tutkowski.pdf";
  }
  
  return (
    <div className={!formatToPrint ? "appContainerVerticalCenter" : undefined}>
      <div className={!formatToPrint ? "appContainerHorizontalCenter" : undefined}>
        <Resume />
      </div>
      {!formatToPrint && (
        <div className="downloadButtonContainer">
          <DownloadButton />
        </div>
      )}
    </div>
  );
}

export default App;
