import React from 'react';
import CredentialGroup from './CredentialGroup';
import { education } from './data';

function Eduction() {
  const credentials = education.map((ed) => ({
    primary: `${ed.degree} from ${ed.institution}`,
    secondary: (
      <>
        <span>{ed.startDate}</span>
        <span>{' - '}</span>
        <span>{ed.endDate}</span>
      </>
    ),
    details: ed.details,
  }));
  return (
    <CredentialGroup name="Education" credentials={credentials} />
  );
}

export default Eduction;
