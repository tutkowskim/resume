import React from 'react';
import { Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Group from './Group';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    marginTop: '1rem',
    '&:first-child': {
      marginTop: '0rem',
    },
  },
  date: {
    width: '6rem',
    paddingRight: '1rem',
    flexGrow: '0',
    flexShrink: '0',
  },
  credential: {
    flexGrow: '1',
  },
  credentialHeader: {
    display: 'flex',
  },
  details: {
    margin: '0rem',
    paddingLeft: '1rem',
  },
  endOfLine: {
    flex: '1 1 auto',
    textAlign: 'right',
  },
}));

function CredentialGroup({ name, credentials }) {
  const classes = useStyles();
  return (
    <Group title={name}>
      {credentials.map((credential) => (
        <div className={classes.container} key={credential.date}>
          <div className={classes.credential}>
            <div className={classes.credentialHeader}>
              <Typography variant="body1"><span>{credential.name}</span></Typography>
              <Typography className={classes.endOfLine} variant="body1">{credential.date}</Typography>
            </div>
            <Typography variant="body2">{credential.from}</Typography>
            {credential.details && credential.details.length > 0 && (
              <ul className={classes.details}>
                {credential.details.map((detail) => (
                  <li key={detail}><Typography variant="body2">{detail}</Typography></li>
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
