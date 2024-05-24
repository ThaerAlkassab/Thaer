import DateFnsUtils from "@date-io/date-fns";
import {
  Typography,
  withStyles, 
  makeStyles
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

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    borderRadius: "4px",
    "& input": {
      height: "45px",
    },
    "& .MuiInputBase-input": {
      width: "50%",
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

const BookingSearch = ({ setSearchClicked, setFirstDay, setSecondDay,setDayDifference, checkIn, checkOut}) => {


  const [checkIns, setCheckIns] = useState(moment(checkIn).format('YYYY-MM-DD'));
  const [checkOuts, setCheckOuts] = useState(moment(checkOut).format('YYYY-MM-DD'));;

  const newCheckIn = new Date(checkIns)
  const newCheckOut = new Date(checkOuts)

  let timeDifference = newCheckOut.getTime() - newCheckIn.getTime();
  let oldDayDifference = timeDifference / (1000 * 3600 * 24);
  let dayDifference = Math.round(oldDayDifference)
  
  const NewCheckIn = moment(checkIns).format('YYYYMMDD')
  const NewCheckOut = moment(checkOuts).format('YYYYMMDD')

  const classes = useStyles();

  const handleCLick = () => {
    if (dayDifference !== 0) { 
      setSearchClicked(true);
      setFirstDay(NewCheckIn);
      setSecondDay(NewCheckOut);
      setDayDifference(dayDifference);
    }
  }
  
const TextTypography = withStyles({
  root: {
    fontSize: "24px",
    fontWeight: "bold",
    lineHeight: "50px",
    fontFamily: "Oblik",
    color: "#14202B",
    width: "50px"
  }
})(Typography);

  return (
    <div className="search_container">
      <div className="sidebar">
        <TextTypography variant="h6">BEST PRICE GUARANTEED</TextTypography>
      </div>
      <div className="booking" >
        <h3 className="mobile_title">BEST PRICE GUARANTEED</h3>
        <div className="reservation">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <div className="search-fields">
                <label className="labels" >Check In</label>
                <KeyboardDatePicker
                  format="dd/MM/yyyy"
                  autoOk
                  value={checkIns}
                  disablePast
                  InputAdornmentProps={{ position: "start" }}
                  onChange={setCheckIns}
                  className={classes.root}
                />
              </div>
              <div className="search-fields">
                <label className="labels" >Check Out</label>
                <KeyboardDatePicker
                  autoOk
                  disablePast
                  variant="inline"
                  format="dd/MM/yyyy"
                  value={checkOuts}
                  InputAdornmentProps={{ position: "start" }}
                  onChange={setCheckOuts}
                  className={classes.root}
                />
              </div>
            </MuiPickersUtilsProvider>
          <div className="search-fields">
            <label className="labels">Nights</label>
            <input
              value={dayDifference}
              type="text"
              readOnly
              className="nights"
            />
          </div>
          <button
            className="search-button"
            onClick={handleCLick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};


const mapDispatchToProps = dispatch => ({
  setSearchClicked: click => dispatch(setSearchClicked(click)),
  setFirstDay: date1 => dispatch(setFirstDay(date1)),
  setSecondDay: date2 => dispatch(setSecondDay(date2)),
  setDayDifference: dif =>  dispatch(setDayDifference(dif))
  
});
const mapStateToProps = state => ({
  checkIn: state.checkIn.firstDay,
  checkOut: state.checkOut.secondDay
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingSearch);