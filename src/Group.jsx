import React from 'react';
import { Typography } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(() => ({
  group: {
    marginTop: '0.625rem',
    marginBottom: '0.625rem',
  },
}));

function Group({ title, children }) {
  const classes = useStyles();
  return (
    <div className={classes.group}>
      <Typography className={classes.header} variant="h6">
        {title}
      </Typography>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
}

export default Group;
