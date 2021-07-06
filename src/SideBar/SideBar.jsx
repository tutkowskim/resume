import React from 'react';
import { makeStyles } from '@material-ui/core';
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
    flexBasis: '3in',
    overflow: 'hidden',
    background: theme.palette.secondary.light,
    color: theme.palette.primary.contrastText,
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
