import React from 'react';
import CredentialGroup from './CredentialGroup';
import { education } from './data';

function Eduction() {
  const credentials = education.map((educationInfo) => ({
    name: educationInfo.degree,
    from: educationInfo.institution,
    date: (
      <>
        <span>{educationInfo.startDate}</span>
        <span>{' - '}</span>
        <br />
        <span>{educationInfo.endDate}</span>
      </>
    ),
  }));
  return (
    <CredentialGroup name="Eduction" credentials={credentials} />
  );
}

export default Eduction;
