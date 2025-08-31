import Group from './Group';

function CredentialGroup({ name, credentials }) {
  return (
    <Group title={name}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {credentials.map((credential) => (
          <div key={credential.primary}>
            <div style={{ display: 'flex' }}>
              <label style={{ flexGrow: '1' }}>{credential.primary}</label>
              <label>{credential.secondary}</label>
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
