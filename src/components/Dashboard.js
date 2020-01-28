import React from 'react';
import './Dashboard.css';
import App from './App.js';
import NavBar from './NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import grey from '@material-ui/core/colors/grey';
import WorkIcon from '@material-ui/icons/Work';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
  textOne: {
    marginTop: '1rem',
    fontSize: '0.85rem',
    color: '#000',
    fontWeight: '600'
  },
  textTwo: {
    margin: '1rem',
    fontSize: '0.70rem',
    color: '#bdbdbd',
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  return (
      <React.Fragment>
        <CssBaseline />
        <NavBar />
        <div className="dash-container">
          <WorkIcon className="work-icon" style={{ fontSize: '5rem', color: '#bdbdbd' }}  />
            <Typography variant="h4" className={classes.textOne}>
              No cases have been created yet.
            </Typography>
            <Typography variant="h6" className={classes.textTwo}>
              To get started. create a case.
            </Typography>
            <Button color="primary" size="small" variant="contained" onClick={handleClickOpen}>CREATE CASE</Button>
            <Dialog open={open} maxWidth="lg" onClose={handleClose}>
              <DialogContent>
                <DialogContentText>
                  <App />
                </DialogContentText>
              </DialogContent>
            </Dialog>
        </div>
      </React.Fragment>
  )
}

export default Dashboard;
