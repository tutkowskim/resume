import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  group: {
    '& p': {
      padding: '0.635rem',
    },
  },
  header: {
    background: '#191a1c',
  },
}));

function SideBarGroup(props) {
  const { title, children } = props;
  const classes = useStyles();
  return (
    <div className={classes.group}>
      <div className={classes.header}>
        <Typography variant="body2">{title}</Typography>
      </div>
      {children}
    </div>
  );
}

export default SideBarGroup;
