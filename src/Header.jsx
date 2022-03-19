import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import { personalInformation } from './data';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    paddingTop: '1.625rem;',
    paddingBottom: '1.625rem;',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    textAlign: 'center',
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <Container className={classes.header}>
      <Typography variant="h4">{personalInformation.name}</Typography>
      <Typography variant="h6">{personalInformation.title}</Typography>
    </Container>
  );
}

export default Header;
