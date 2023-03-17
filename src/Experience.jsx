import React from 'react';
import CredentialGroup from './CredentialGroup';
import { experience } from './data';

function Experience() {
  const credentials = experience.filter((exp) => !exp.hidden).map((exp) => ({
    primary: `${exp.title} at ${exp.company}`,
    secondary: (
      <>
        <span>{exp.startDate}</span>
        <span>{' - '}</span>
        <span>{exp.endDate}</span>
      </>
    ),
    details: exp.roleDetails,
  }));
  return (
    <CredentialGroup name="Experience" credentials={credentials} />
  );
}

export default Experience;
