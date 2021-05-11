import React from 'react';
import MainContent from './MainContent';
import SideBar from './SideBar';
import './App.css';

function App() {
  return (
    <article className="resume">
      <SideBar />
      <MainContent />
    </article>
  );
}

export default App;
