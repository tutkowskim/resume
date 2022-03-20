import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import ContactInformation from './ContactInformation';
import Education from './Education';
import Skills from './Skills';

const useStyles = makeStyles((theme) => ({
  contactInformation: {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    flex: '0 0 auto',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2rem',
    marginRight: '2rem',
    overflow: 'hidden',
  },
}));

function SideBar() {
  const classes = useStyles();
  return (
    <div className={classes.contactInformation}>
      <section className={classes.content}>
        <ContactInformation />
        <Education />
        <Skills />
      </section>
    </div>
  );
}

export default SideBar;
