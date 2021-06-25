import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  header: {
    width: 'calc(100% - 20px)',
    margin: '10px 10px 10px 10px',
    borderTop: '1px solid #5b5d63',
    borderBottom: '1px solid #5b5d63',
  },
  content: {
    margin: '5px 10px 5px 10px',
  },
}));

function Group({ title, children }) {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.header} variant="h6">
        {title}
      </Typography>
      <div className={classes.content}>
        {children}
      </div>
    </>
  );
}

export default Group;
