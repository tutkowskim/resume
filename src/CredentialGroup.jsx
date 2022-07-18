import React from 'react';
import Group from './Group';

function CredentialGroup({ name, credentials, predicate }) {
  return (
    <Group title={name}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {credentials.map((credential) => (
          <div key={credential.date}>
            <div style={{ display: 'flex' }}>
              <label style={{ flexGrow: '1' }}>
                <span>{credential.name}</span>
                { predicate && <span>{' '}</span>}
                { predicate && <span>{predicate}</span>}
                { predicate && <span>{' '}</span>}
                { predicate && <span>{credential.from}</span>}
              </label>
              <label>{credential.date}</label>
            </div>
            {credential.details && credential.details.length > 0 && (
              <ul>
                {credential.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Group>
  );
}

export default CredentialGroup;
