import React from 'react';
import { makeStyles, Divider, Typography } from '@material-ui/core';

import Group from './Group';
import Experience from './Experience';
import Education from './Education';

import { summary } from '../data';

const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '5.5in',
    marginLeft: '1.625rem',
    marginRight: '1.625rem',
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
