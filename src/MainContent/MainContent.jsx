import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import Group from './Group';
import Experience from './Experience';
import Education from './Education';

import { summary } from '../data';

const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '5.9in',
    overflow: 'hidden',
  },
}));

function MainContent() {
  const classes = useStyles();
  return (
    <section className={classes.content}>
      <Group title="Summary">
        <Typography variant="body1">{summary}</Typography>
      </Group>
      <Group title="Experience">
        <Experience />
      </Group>
      <Group title="Eduction">
        <Education />
      </Group>
    </section>
  );
}

export default MainContent;
