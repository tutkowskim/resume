import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

import SideBarGroup from './SideBarGroup';
import ContactInformation from './ContactInformation';

import {
  personalInformation,
  languagesProficient,
  languagesFamiliar,
  developmentTools,
} from '../data';

const useStyles = makeStyles((theme) => ({
  side_content: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '2.5in',
    overflow: 'hidden',
    background: '#2d2f33',
    color: theme.palette.primary.contrastText,
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
    },
    '& a:visited': {
      textDecoration: 'none',
      color: 'inherit',
    },
    '& a:hover': {
      color: '#5b5d63',
    },
  },
  name: {
    padding: '0.75rem 0.75rem 0rem 0.75rem',
  },
  title: {
    padding: '0rem 0.75rem 0.75rem 0.75rem',
  },
}));

function SideBar() {
  const classes = useStyles();
  return (
    <section className={classes.side_content}>
      <Typography className={classes.name} variant="h4">{personalInformation.name}</Typography>
      <Typography className={classes.title} variant="h6">{personalInformation.title}</Typography>
      <ContactInformation {...personalInformation} />
      <SideBarGroup title="Programming Languages (Proficient)" items={languagesProficient} />
      <SideBarGroup title="Programming Languages (Familiar)" items={languagesFamiliar} />
      <SideBarGroup title="Development Tools" items={developmentTools} />
    </section>
  );
}

export default SideBar;
