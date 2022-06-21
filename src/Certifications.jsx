import React from 'react';
import CredentialGroup from './CredentialGroup';
import { certifications } from './data';

function Certifications() {
  return (
    <CredentialGroup name="Certifications" credentials={certifications} />
  );
}

export default Certifications;
