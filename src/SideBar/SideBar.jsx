import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import SideBarGroup from './SideBarGroup';
import ContactInformation from './ContactInformation';
import Skill from './Skill';

import {
  personalInformation,
  programmingLanguages,
  developmentTools,
  frameworks,
} from '../data';

const useStyles = makeStyles((theme) => ({
  side_content: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '2.6in',
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
    padding: '1.625rem  1.625rem 0 1.625rem',
  },
  title: {
    padding: '0rem 1.625rem 0.75rem 1.625rem',
  },
}));

function SideBar() {
  const classes = useStyles();
  return (
    <section className={classes.side_content}>
      <Typography className={classes.name} variant="h4">{personalInformation.name}</Typography>
      <Typography className={classes.title} variant="h6">{personalInformation.title}</Typography>
      <ContactInformation {...personalInformation} />
      <SideBarGroup title="Frameworks">
        {frameworks.map((item) => (
          <Skill key={item.name} name={item.name} ranking={item.ranking} />
        ))}
      </SideBarGroup>
      <SideBarGroup title="Programming Languages">
        {programmingLanguages.map((item) => (
          <Skill key={item} name={item.name} ranking={item.ranking} />
        ))}
      </SideBarGroup>
      <SideBarGroup title="Development Tools">
        {developmentTools.map((item) => (
          <Skill key={item} name={item.name} ranking={item.ranking} />
        ))}
      </SideBarGroup>
    </section>
  );
}

export default SideBar;
