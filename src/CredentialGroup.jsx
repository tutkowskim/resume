import React from 'react';
import Group from './Group';

function CredentialGroup({ name, credentials }) {
  return (
    <Group title={name}>
      {credentials.map((credential) => (
        <div key={credential.date}>
          <div>
            <div>
              <label><span>{credential.name}</span></label>
              <label>{credential.date}</label>
            </div>
            <label>{credential.from}</label>
            {credential.details && credential.details.length > 0 && (
              <ul>
                {credential.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </Group>
  );
}

export default CredentialGroup;
