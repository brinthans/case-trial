import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Select from '@material-ui/core/Select';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
    display: 'block',
  },
  formControlFooter: {
    position: 'absolute',
    margin: theme.spacing(3),
    display: 'block',
    right: theme.spacing(2),
  },
  select: {
    width: 200
  },
  timeInput: {
    width: '30%',
    margin: theme.spacing(1)
  },
  formLabel: {
    fontWeight: 600,
    color: '#333',
    fontSize: '0.85rem'
  },
  formLabelSub: {
    color: '#333',
    fontSize: '0.85rem',
  },
  radioLabel: {
    margin: 0
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className="position-relative">
        <Typography variant="h2" className="head">
          Create New Case
        </Typography>
        <form noValidate>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend" className={classes.formLabel}>Case Name</FormLabel>
            <TextField
              size="small"
              variant="outlined"
            />
          </FormControl>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend" className={classes.formLabel}>Case Type</FormLabel>
            <RadioGroup aria-label="case-type" name="case-type">
              <FormControlLabel
                value="civil"
                control={<Radio />}
                label="Civil"
                className={classes.radioLabel}
              />
              <FormControlLabel
                value="criminal"
                control={<Radio />}
                label="Criminal"
                className={classes.radioLabel}
              />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend" className={classes.formLabel}>Parties</FormLabel>
            <FormLabel component="legend" id="plaintiff-label" className={classes.formLabelSub}>Plaintiff <Select labelId="plaintiff-label" /></FormLabel>
            <FormLabel component="legend" id="Defense-label" className={classes.formLabelSub}>Defense <Select labelId="Defense-label" /></FormLabel>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              startIcon={<AddIcon />}
            >
              ADD DEFENSE
            </Button>
          </FormControl>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend" className={classes.formLabel}>Time Allotment</FormLabel>
            <TextField
              size="small"
              variant="outlined"
              helperText="Plaintiff"
              className={classes.timeInput}
            />
            <TextField
              size="small"
              variant="outlined"
              helperText="Defence"
              className={classes.timeInput}
            />
            <TextField
              size="small"
              variant="outlined"
              helperText="Total Time"
              className={classes.timeInput}
            />
          </FormControl>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend" className={classes.formLabel}>List of Objections</FormLabel>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className="px-4"
            >
              VIEW/EDIT
              </Button>
          </FormControl>
          <FormControl component="fieldset" className={classes.formControlFooter}>
            <Button
              color="primary"
              size="small"
              className="px-4"
            >
              CANCEL
              </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className="px-4"
            >
              SAVE
              </Button>
          </FormControl>
        </form>
      </Container>
    </React.Fragment>
  );
}
console.log(App);
export default App;
