import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { Star } from '@material-ui/icons';

/* eslint-disable react/no-array-index-key */

const useStyles = makeStyles(() => ({
  skill: {
    display: 'flex',
  },
  name: {
    width: '5rem',
  },
  ranking: {
    display: 'flex',
    width: '9rem',
    alignItems: 'center',
  },
}));

function Skill({ name, ranking }) {
  const classes = useStyles();
  return (
    <div className={classes.skill}>
      <Typography className={classes.name} variant="body2">{name}</Typography>
      <div className={classes.ranking}>
        {[...Array(ranking)].map((_el, index) => <Star className={classes.icon} key={index} />)}
      </div>
    </div>
  );
}

export default Skill;
