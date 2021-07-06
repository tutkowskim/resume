import React from 'react';
import { Typography, Link, makeStyles } from '@material-ui/core';
import {
  Phone,
  LinkedIn,
  Web,
  MailOutline,
} from '@material-ui/icons';

import SideBarGroup from './SideBarGroup';

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

function ContactInformation({
  phoneNumber,
  email,
  website,
  linkedIn,
}) {
  const classes = useStyles();

  const linkedinUrl = new URL(linkedIn);
  const linkedinDisplayValue = linkedinUrl.hostname + linkedinUrl.pathname;

  const personalWebsiteUrl = new URL(website);
  const personalWebsiteDisplayValue = personalWebsiteUrl.hostname;

  return (
    <SideBarGroup title="Contact Information">
      <Typography variant="body2">
        <Link className={classes.link} href={`tel:${phoneNumber}`} color="inherit" variant="body2">
          <Phone className={classes.icon} />
          <span>{phoneNumber}</span>
        </Link>
      </Typography>
      <Typography variant="body2">
        <Link className={classes.link} target="_blank" href={website} rel="noreferrer" color="inherit" variant="body2">
          <Web className={classes.icon} />
          <span>{personalWebsiteDisplayValue}</span>
        </Link>
      </Typography>
      <Typography variant="body2">
        <Link className={classes.link} target="_blank" href={`mailto:${email}`} rel="noreferrer" color="inherit" variant="body2">
          <MailOutline className={classes.icon} />
          <span>{email}</span>
        </Link>
      </Typography>
      <Typography variant="body2">
        <Link className={classes.link} target="_blank" href={linkedIn} rel="noreferrer" color="inherit" variant="body2">
          <LinkedIn className={classes.icon} />
          <span>{linkedinDisplayValue}</span>
        </Link>
      </Typography>
    </SideBarGroup>
  );
}

export default ContactInformation;
