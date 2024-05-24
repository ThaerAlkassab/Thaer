import DateFnsUtils from "@date-io/date-fns";
import {
  Button,
  Grid,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import React, { useState} from "react";
import "./BookingSearch.css";
import { connect } from 'react-redux';
import { setSearchClicked } from '../../../redux/search/search.action'
import { setFirstDay } from '../../../redux/dates/dates.action'
import { setSecondDay } from '../../../redux/dates/dates.action'
import { setDayDifference } from '../../../redux/dates/dates.action'
import * as moment from 'moment'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    position: "relative",
    left: "10px",
    "& label": {
      position: "relative",
      top: "-50px",
      color: "white",
      fontSize: "25px",
    },
    "& input": {
      height: "10px",
    },
    "& .MuiInputBase-input": {
      width: "50%",
      padding: "3px",
    },
    "& .MuiInput-underline:before": {
      borderBottom: "none",
      content: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none",
      content: "none",
    },
    "& .MuiInput-formControl": {
      marginTop: "0px",
      display: "flex",
      justifyContent: "center",
    },
  },
});

const BookingSearch = ({ setSearchClicked, setFirstDay, setSecondDay,setDayDifference}) => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  let timeDifference = checkOutDate.getTime() - checkInDate.getTime();
  let oldDayDifference = timeDifference / (1000 * 3600 * 24);
  let dayDifference = Math.round(oldDayDifference)
  const NewCheckIn = moment(checkInDate).format('YYYYMMDD')
  const NewCheckOut = moment(checkOutDate).format('YYYYMMDD')
  const classes = useStyles();

  const handleCLick = () => {
      setSearchClicked(true);
      setFirstDay(NewCheckIn);
      setSecondDay(NewCheckOut);
      setDayDifference(dayDifference);
      console.log("dayDifference", dayDifference)
  }



  return (
    <Grid container direction="row" item xs={11}>
      <Grid item xs={1} />
      <Grid item container xs={12}>
        <Grid item className="sidebar" xs={1}>
          <Typography variant="h6">BEST PRICE GUARANTEED</Typography>
        </Grid>
        <Grid item container className="booking" alignItems="center" xs={11}>
          <Grid item className="reservation">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <div className="search-fields">
                <KeyboardDatePicker
                  autoOk
                  variant="inline"
                  // inputVariant="outlined"
                  label="Check-In"
                  format="dd/MM/yyyy"
                  className={classes.root}
                  value={checkInDate}
                  InputAdornmentProps={{ position: "start" }}
                  onChange={setCheckInDate}
                />
              </div>
              <div className="search-fields">
                <KeyboardDatePicker
                  autoOk
                  variant="inline"
                  // inputVariant="outlined"
                  className={classes.root}
                  label="Check-Out"
                  format="dd/MM/yyyy"
                  value={checkOutDate}
                  InputAdornmentProps={{ position: "start" }}
                  onChange={setCheckOutDate}
                />
              </div>
            </MuiPickersUtilsProvider>
            <div className="search-fields">
              <TextField
                id="outlined-basic"
                // variant="outlined"
                className={classes.root}
                value={dayDifference}
                label="Nights"
              />
            </div>

            <div className="search-button">
              <Button
                variant="contained"
                style={{
                  background: "#0A2C70",
                  color: "#fff",
                  height: "65px",
                  width: "160px",
                }}
                onClick={handleCLick}
              >
                Search
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapDispatchToProps = dispatch => ({
  setSearchClicked: click => dispatch(setSearchClicked(click)),
  setFirstDay: date1 => dispatch(setFirstDay(date1)),
  setSecondDay: date2 => dispatch(setSecondDay(date2)),
  setDayDifference: dif =>  dispatch(setDayDifference(dif))
  
});

export default connect(
  null,
  mapDispatchToProps
)(BookingSearch);