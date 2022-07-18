import React from 'react';

import Header from './Header';
import MainContent from './MainContent';
import SideBar from './SideBar';

function Resume() {
  return (
    <article className="resume">
      <Header />
      <div className="resume-content">
        <SideBar />
        <MainContent />
      </div>
    </article>
  )
}

export default Resume;
