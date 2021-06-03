import React from 'react';
import SideBarGroup from './SideBarGroup';
import ContactInformation from './ContactInformation';

import {
  personalInformation,
  languagesProficient,
  languagesFamiliar,
  developmentTools,
  softSkills,
  hardSkills,
} from '../data';

function SideBar() {
  return (
    <section className="side_content">
      <div className="side_content__item side_content_title">{personalInformation.name}</div>
      <div className="side_content__item side_content_subtitle">{personalInformation.title}</div>
      <ContactInformation {...personalInformation} />
      <SideBarGroup title="Programming Languages (Proficient)" items={languagesProficient} />
      <SideBarGroup title="Programming Languages (Familiar)" items={languagesFamiliar} />
      <SideBarGroup title="Development Tools" items={developmentTools} />
      <SideBarGroup title="Hard Skills" items={softSkills} />
      <SideBarGroup title="Soft Skills" items={hardSkills} />
    </section>
  );
}

export default SideBar;
