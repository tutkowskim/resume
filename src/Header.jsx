import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';

import { personalInformation } from './data';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: '1.625rem',
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <Container className={classes.header}>
      <Typography className={classes.name} variant="h4">{personalInformation.name}</Typography>
      <Typography className={classes.title} variant="h6">{personalInformation.title}</Typography>
    </Container>
  );
}

export default Header;
