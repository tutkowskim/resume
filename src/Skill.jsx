import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { Star } from '@material-ui/icons';

/* eslint-disable react/no-array-index-key */

const useStyles = makeStyles(() => ({
  skill: {
    display: 'flex',
  },
  name: {
    display: 'flex',
    width: '5rem',
    height: '100%',
    alignItems: 'center',
  },
  ranking: {
    display: 'flex',
    width: '100px',
    alignItems: 'center',
  },
  icon: {
    fontSize: '20px',
  },
}));

function Skill({ name, ranking }) {
  const classes = useStyles();
  return (
    <div className={classes.skill}>
      <div>
        <Typography className={classes.name} variant="body2">{name}</Typography>
      </div>
      <div className={classes.ranking}>
        {[...Array(ranking)].map((_el, index) => <Star className={classes.icon} key={index} />)}
      </div>
    </div>
  );
}

export default Skill;
