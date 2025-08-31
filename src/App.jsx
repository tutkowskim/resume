import Resume from './Resume';
import DownloadButton from './DownloadButton';

function App() {
  // Redirect mobile users to the pdf
  if (window.screen.width <= 699) {
    document.location = "/mark_tutkowski.pdf";
  }
  
  return (
    <div className="appContainerVerticalCenter">
      <div className="appContainerHorizontalCenter">
        <Resume />
      </div>
      <div className="downloadButtonContainer">
        <DownloadButton />
      </div>
    </div>
  );
}

export default App;
