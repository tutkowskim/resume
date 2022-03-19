import React from 'react';
import { makeStyles, Typography, Link } from '@material-ui/core';

import {
  Phone,
  Web,
  MailOutline,
  LinkedIn,
  GitHub,
} from '@material-ui/icons';

import Group from './Group';
import { personalInformation } from './data';

const useStyles = makeStyles(() => ({
  link: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    height: '16px',
    paddingRight: '0.5rem;',
  },
}));

function ContactInformation() {
  const classes = useStyles();

  return (
    <Group title="Contact Info">
      <Typography variant="subtitle2">
        <Link className={classes.link} href={`tel:${personalInformation.phoneNumber}`} color="inherit" variant="body2">
          <Phone className={classes.icon} />
          <span>{personalInformation.phoneNumber}</span>
        </Link>
      </Typography>
      <Typography variant="subtitle2">
        <Link className={classes.link} target="_blank" href={`mailto:${personalInformation.email}`} rel="noreferrer" color="inherit" variant="body2">
          <MailOutline className={classes.icon} />
          <span>{personalInformation.email}</span>
        </Link>
      </Typography>
      <Typography variant="subtitle2">
        <Link className={classes.link} target="_blank" href={personalInformation.website.url} rel="noreferrer" color="inherit" variant="body2">
          <Web className={classes.icon} />
          <span>{personalInformation.website.display}</span>
        </Link>
      </Typography>
      <Typography variant="subtitle2">
        <Link className={classes.link} target="_blank" href={personalInformation.linkedIn.display} rel="noreferrer" color="inherit" variant="body2">
          <LinkedIn className={classes.icon} />
          <span>{personalInformation.linkedIn.display}</span>
        </Link>
      </Typography>
      <Typography variant="subtitle2">
        <Link className={classes.link} target="_blank" href={personalInformation.github.display} rel="noreferrer" color="inherit" variant="body2">
          <GitHub className={classes.icon} />
          <span>{personalInformation.github.display}</span>
        </Link>
      </Typography>
    </Group>
  );
}

export default ContactInformation;
