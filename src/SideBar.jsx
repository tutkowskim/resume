import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import ContactInformation from './ContactInformation';
import Skills from './Skills';

const useStyles = makeStyles((theme) => ({
  sideBar: {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    flex: '0 0 auto',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '2in',
    marginLeft: '2rem',
    marginRight: '2rem',
    overflow: 'hidden',
  },
}));

function SideBar() {
  const classes = useStyles();
  return (
    <div className={classes.sideBar}>
      <section className={classes.content}>
        <ContactInformation />
        <Skills />
      </section>
    </div>
  );
}

export default SideBar;
