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
} from '@material-ui/icons';

import { personalInformation } from './data';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: '1.625rem',
  },
  contactInformation: {
    display: 'flex',
    gap: '0.5rem',
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
  const personalWebsiteUrl = new URL(personalInformation.website);
  const personalWebsiteDisplayValue = personalWebsiteUrl.hostname;
  return (
    <Container className={classes.header}>
      <Typography variant="h4">{personalInformation.name}</Typography>
      <Typography variant="h6">{personalInformation.title}</Typography>
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
      </div>
    </Container>
  );
}

export default Header;
