import React from 'react';
import { Typography } from '@mui/material';
import Group from './Group';
import { summary } from './data';

function Summary() {
  return (
    <Group title="Summary">
      <Typography variant="body2">{summary}</Typography>
    </Group>
  );
}

export default Summary;
