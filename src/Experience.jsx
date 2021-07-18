import React from 'react';
import CredentialGroup from './CredentialGroup';
import { experience } from './data';

function Experience() {
  const credentials = experience.map((exp) => ({
    name: exp.title,
    from: exp.company,
    date: (
      <>
        <span>{exp.startDate}</span>
        <span>{' - '}</span>
        <br />
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
