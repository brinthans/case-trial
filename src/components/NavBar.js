import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles(theme => ({
  navBar: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: '1rem',
    color: '#000',
    fontWeight: '600',
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.navBar}>
      <AppBar className="bg-white">
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            Ipro @Trial
          </Typography>
          <Button color="primary" size="small" variant="outlined">CREATE CASE</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
