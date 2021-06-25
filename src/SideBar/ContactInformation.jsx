import React from 'react';

import { makeStyles } from '@material-ui/core';

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

  const items = [
    <a className={classes.link} href={`tel:${phoneNumber}`}>
      <Phone className={classes.icon} />
      <span>{phoneNumber}</span>
    </a>,
    <a className={classes.link} target="_blank" href={website} rel="noreferrer">
      <Web className={classes.icon} />
      <span>{personalWebsiteDisplayValue}</span>
    </a>,
    <a className={classes.link} target="_blank" href={`mailto:${email}`} rel="noreferrer">
      <MailOutline className={classes.icon} />
      <span>{email}</span>
    </a>,
    <a className={classes.link} target="_blank" href={linkedIn} rel="noreferrer">
      <LinkedIn className={classes.icon} />
      <span>{linkedinDisplayValue}</span>
    </a>,
  ];
  return <SideBarGroup title="Contact Information" items={items} />;
}

export default ContactInformation;
