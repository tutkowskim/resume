import React from 'react';
import {
  Container,
  makeStyles,
  Typography,
  Link,
} from '@material-ui/core';
import {
  Phone,
  Web,
  MailOutline,
  LinkedIn,
} from '@material-ui/icons';

import { personalInformation } from './data';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    paddingTop: '1.625rem;',
    paddingBottom: '1.625rem;',
    paddingLeft: '2rem',
    paddingRight: '2rem',
  },
  nameInformation: {
    flexGrow: '1',
  },
  contactInformation: {
  },
  link: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    height: '16px',
    paddingRight: '0.5rem;',
  },
}));

function Header() {
  const classes = useStyles();
  const personalWebsiteDisplayValue = (new URL(personalInformation.website)).hostname;
  const linkedInURL = new URL(personalInformation.linkedIn);
  const linkedInDisplayValue = linkedInURL.hostname + linkedInURL.pathname;
  return (
    <Container className={classes.header}>
      <div className={classes.nameInformation}>
        <Typography variant="h4">{personalInformation.name}</Typography>
        <Typography variant="h6">{personalInformation.title}</Typography>
      </div>
      <div className={classes.contactInformation}>
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
          <Link className={classes.link} target="_blank" href={personalInformation.website} rel="noreferrer" color="inherit" variant="body2">
            <Web className={classes.icon} />
            <span>{personalWebsiteDisplayValue}</span>
          </Link>
        </Typography>
        <Typography variant="subtitle2">
          <Link className={classes.link} target="_blank" href={personalInformation.linkedIn} rel="noreferrer" color="inherit" variant="body2">
            <LinkedIn className={classes.icon} />
            <span>{linkedInDisplayValue}</span>
          </Link>
        </Typography>
      </div>
    </Container>
  );
}

export default Header;
