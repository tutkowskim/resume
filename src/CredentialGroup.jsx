import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
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
  details: {
    margin: '0rem',
    paddingLeft: '1rem',
  },
}));

function CredentialGroup({ name, credentials }) {
  const classes = useStyles();
  return (
    <Group title={name}>
      {credentials.map((credential) => (
        <div className={classes.container} key={credential.date}>
          <Typography className={classes.date} variant="caption">
            {credential.date}
          </Typography>
          <div className={classes.credential}>
            <Typography variant="body1">{credential.name}</Typography>
            <Typography variant="body2">{credential.from}</Typography>
            {credential.details && credential.details.length > 0 && (
              <ul className={classes.details}>
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
