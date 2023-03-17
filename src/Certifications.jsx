import React from 'react';
import CredentialGroup from './CredentialGroup';
import { certifications } from './data';

function Certifications() {
  const credentials = certifications.map(certification => ({
    primary: certification.name,
    secondary: certification.date,
  }));
  return (
    <CredentialGroup name="Certifications" credentials={credentials} />
  );
}

export default Certifications;
