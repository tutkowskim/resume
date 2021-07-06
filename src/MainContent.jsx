import React from 'react';
import { makeStyles, Divider, Typography } from '@material-ui/core';

import Group from './Group';
import Experience from './Experience';
import Education from './Education';

import { summary } from './data';
import Skills from './Skills';

const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2rem',
    marginRight: '2rem',
    overflow: 'hidden',
  },
}));

function MainContent() {
  const classes = useStyles();
  return (
    <section className={classes.content}>
      <Group title="Summary">
        <Typography variant="body2">{summary}</Typography>
      </Group>
      <Divider />
      <Group title="Skills">
        <Skills />
      </Group>
      <Divider />
      <Group title="Experience">
        <Experience />
      </Group>
      <Divider />
      <Group title="Eduction">
        <Education />
      </Group>
    </section>
  );
}

export default MainContent;
