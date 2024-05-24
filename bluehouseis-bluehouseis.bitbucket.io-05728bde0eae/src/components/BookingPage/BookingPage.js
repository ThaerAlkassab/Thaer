/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import secure from "../images/secure.svg";
import people from "../images/people.svg";
import { connect } from "react-redux";
import * as moment from "moment";
import { Link } from "react-router-dom";
import { setUserInfo } from "../../redux/userInfo/userInfo.action";

const useStyles = makeStyles((theme) => ({
  back: {
    marginRight: "30px",
    background: "#073762",
    color: "white",
    fontSize: "18px",
    lineHeight: "24px",
    width: "112px",
    height: "40px",
    border: "none",
    cursor: "pointer",
    [theme.breakpoints.down("700")]: {
      width: "60px",
      height: "30px",
      fontSize: "14px",
      marginRight: "0",
    },
  },

  roomName: {
    background: "#073762",
    display: "flex",
    color: "#fff",
    padding: "0 56px 0 63px",
    height: "56px",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80vw",
    [theme.breakpoints.down("700")]: {
      width: "90vw",
    },
  },
  rowFlex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "21px",
  },
  subContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    width: "88vw",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  inputs: {
    width: "326px",
    border: "none",
    borderBottom: "1px solid #C6D1DB",
    outline: "none",
    margin: "0 25px 0 35px",
  },
  labels: {
    fontSize: "24px",
    lineHeight: "50px",
    color: "#073762",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("700")]: {
      fontSize: "17px",
      width: "230px",
    },
  },
  labelsInputs: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-start",
    },
  },
  cancellation: {
    marginLeft: "auto",
    fontFamily: "Oblik",
    fontSize: "24px",
    lineHeight: "40px",
    fontWeight: "bold",
    marginRight: "10px",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("700")]: {
      fontSize: "17px",
      marginBottom: "40px",
    },
  },
  Text: {
    fontFamily: "Oblik",
    fontSize: "24px",
    lineHeight: "40px",
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("700")]: {
      fontSize: "17px",
    },
  },
  Text2: {
    fontFamily: "Josefin Sans",
    fontSize: "24px",
    lineHeight: "40px",
    fontWeight: "300 !important",
    width: "82%",
    marginBottom: "63px ",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("700")]: {
      fontSize: "17px",
      width: "100%",
    },
  },
  voucher: {
    fontFamily: "Oblik",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "48px",
    marginRight: "196px",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      marginRight: "20px",
    },
    [theme.breakpoints.down("md")]: {
      marginRight: "0",
      fontSize: "17px",
    },
  },
  voucherContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    margin: "40px 0 39px 88px",
    [theme.breakpoints.down("1290")]: {
      alignSelf: "center",
      margin: "0",
      marginBottom: "20px",
      flexDirection: "column",
    },
  },
  voucherButton: {
    width: "154px",
    height: "40px",
    background: "#073762",
    border: "none",
    color: "white",
    fontFamily: "Josefin Sans",
    fontSize: "18px",
    lineHeight: "24px",
    marginLeft: "21px",
    [theme.breakpoints.down("1290")]: {
      marginTop: "20px",
      fontSize: "20px",
      marginLeft: "0",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "17px",
      width: "120px",
    },
  },
  voucherInput: {
    height: "57px",
    width: "215px",
    border: "1px solid #C6D1DB",
  },
  countryInput: {
    height: "50px",
    width: "326px",
    border: "1px solid #C6D1DB",
    outline: "none",
    margin: "0 25px 0 35px",
    [theme.breakpoints.down("700")]: {
      border: "none",
      borderBottom: "1px solid #C6D1DB",
    },
  },
  bookingButton: {
    width: "276px",
    height: "40px",
    color: "white",
    cursor: "pointer",
    background: "#CD0407",
    fontSize: "18px",
    lineHeight: "24px",
    border: "none",
    fontFamily: "Josefin Sans",
    fontWeight: "400",
    padding: "11px 0 12px 0",
    marginLeft: "15px",
    [theme.breakpoints.down("700")]: {
      width: "176px",
      height: "40px",
      fontSize: "14px",
    },
  },
  Info: {
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "50px",
    fontFamily: "Oblik",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("700")]: {
      fontSize: "14px",
    },
  },
  Info2: {
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "50px",
    fontFamily: "Oblik",
    marginLeft: "176px",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      marginLeft: "70px",
    },
    [theme.breakpoints.down("700")]: {
      display: "none",
    },
  },
  dates: {
    color: "#073762",
    fontSize: "20px",
    lineHeight: "24px",
    marginLeft: "105px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "40px",
      fontSize: "18px",
    },
    [theme.breakpoints.down("700")]: {
      display: "none",
    },
  },
  datesMobile: {
    color: "#073762",
    fontSize: "16px",
    lineHeight: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    margin: "20px",
    [theme.breakpoints.up("700")]: {
      display: "none",
    },
  },
  bDates: {
    color: "black",
    fontWeight: "bold",
    marginRight: "105px",
    marginLeft: "47px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "40px",
      marginRight: "40px",
    },
    [theme.breakpoints.down("700")]: {
      margin: "0",
      marginRight: "20px",
    },
  },
  logo: {
    [theme.breakpoints.down("md")]: {
      width: "100px",
    },
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "32px 103px 52px 75px",
    [theme.breakpoints.down("md")]: {
      padding: "20px",
    },
  },
  secure: {
    height: "76px",
    [theme.breakpoints.down("md")]: {
      height: "56px",
      alignSelf: "center",
    },
  },
  confirmContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "35px",
  },
  form: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  people: {
    height: "43px",
    alignSelf: "center",
    paddingTop: "15px",
    [theme.breakpoints.down("700")]: {
      display: "none",
    },
  },
  textContainer: {
    marginTop: "-30px",
    marginLeft: "77px",
    [theme.breakpoints.down("700")]: {
      marginLeft: "0",
    },
  },
  payment: {
    background: "white",
    display: "flex",
    width: "300px",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const BookingPage = ({
  price,
  checkIn,
  checkOut,
  name,
  index,
  setUserInfo,
  userInfo,
}) => {
  const formItem = [
    "First Name",
    "Surname",
    "Email",
    "Mobile",
    "Address",
    "Postcode",
    "City",
    "Country of Residence",
    "Arrival Time",
    "Comments",
  ];
  const [roomsdesc, setRoomsdesc] = useState([]);
  const [userDetails, setUserDetails] = useState([
    userInfo.firstName,
    userInfo.Surname,
    userInfo.Email,
    userInfo.Mobile,
    userInfo.Address,
    userInfo.Postcode,
    userInfo.City,
    userInfo.Country,
    userInfo.Arrival,
    userInfo.Comments,
  ]);
  const [requiredInfo, setRequiredInfo] = useState(false);

  useEffect(() => {
    fetch("BookinDescription.json")
      .then((res) => res.json())
      .then((data) => setRoomsdesc(data.info))
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);
  useEffect(() => {
    setUserInfo({
      firstName: userDetails[0],
      Surname: userDetails[1],
      Email: userDetails[2],
      Mobile: userDetails[3],
      Address: userDetails[4],
      Postcode: userDetails[5],
      City: userDetails[6],
      Country: userDetails[7],
      Arrival: userDetails[8],
      Comments: userDetails[9],
    });
  }, [userDetails]);
  useEffect(() => {
    if (
      requiredInfo === false &&
      userDetails[0] &&
      userDetails[1] &&
      userDetails[2] &&
      userDetails[3] &&
      userDetails[4] &&
      userDetails[5] &&
      userDetails[6] &&
      userDetails[7] &&
      userDetails[8] 
    ) {
      setRequiredInfo(true);
    } else {
      setRequiredInfo(false);
    }
  }, [userDetails]);
  const desc = roomsdesc[index];

  const handleSubmit = () => {
    if (requiredInfo !== true) {
      alert("Please enter all required* info");
    }
  };

  const handleChange = (index) => (e) => {
    let newArr = [...userDetails];
    newArr[index] = e.target.value;

    setUserDetails(newArr);
  };
  const classes = useStyles();
  const day1 = moment(checkIn).format("dddd,DD MMMM, YYYY ");
  const day2 = moment(checkOut).format("dddd,DD MMMM, YYYY ");
  const day1Mobile = moment(checkIn).format("DD/MM/YYYY");
  const day2Mobile = moment(checkOut).format("DD/MM/YYYY");
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <img src={logo} className={classes.logo} alt="logo" />
        <Link to="/beds24">
          <button className={classes.back}>BACK</button>
        </Link>
      </div>
      <div className={classes.rowFlex}>
        <p className={classes.dates}>
          Check-in <span className={classes.bDates}>{day1}</span>
        </p>
        <p className={classes.dates}>
          Check-out <span className={classes.bDates}>{day2}</span>
        </p>
        <p className={classes.datesMobile}>
          Check-in <span className={classes.bDates}>{day1Mobile}</span>
        </p>
        <p className={classes.datesMobile}>
          Check-out <span className={classes.bDates}>{day2Mobile}</span>
        </p>
      </div>
      <div className={classes.subContainer}>
        <div className={classes.roomName}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p className={classes.Info}>{name}</p>
            <p className={classes.Info2}>Occupancy</p>
            <img src={people} className={classes.people} alt="" />
          </div>
          <p className={classes.Info}>€{price}</p>
        </div>
        <p className={classes.cancellation}>14 Day Cancellation</p>
        <div className={classes.textContainer}>
          {desc && <p className={classes.Text}> www.bluehouse.is</p>}
          <p className={classes.Text2}>{desc}</p>
        </div>
        <div className={classes.roomName}>
          <p className={classes.Info}>GRAND TOTAL</p>
          <p className={classes.Info}>€{price}</p>
        </div>
        <div className={classes.voucherContainer}>
          <p className={classes.voucher}>Voucher Code</p>
          <form className={classes.form}>
            <input className={classes.voucherInput} type="text" />
            <button className={classes.voucherButton}>CHECK</button>
          </form>
        </div>
        <div className={classes.roomName}>
          <p className={classes.Info}>GUEST DETAILS</p>
        </div>
        <Grid item container xs={12} style={{ marginTop: "20px" }}>
          {formItem.map((item, i) => (
            <Grid item xs={12} key={i} lg={6} style={{ marginTop: "30px" }}>
              <form className={classes.labelsInputs}>
                <label className={classes.labels}>
                  {item}
                  <span>{item === "Comments" ? null : "*"}</span>
                </label>
                <input
                  type="text"
                  value={userDetails[i]}
                  onChange={handleChange(i)}
                  className={
                    item === "Country of Residence"
                      ? classes.countryInput
                      : classes.inputs
                  }
                />
              </form>
            </Grid>
          ))}
        </Grid>
        <div className={classes.confirmContainer}>
          {requiredInfo === true ? (
            <Link to="/payment">
              <button className={classes.bookingButton} onClick={handleSubmit}>
                CONFIRM BOOKING
              </button>
            </Link>
          ) : (
            <button className={classes.bookingButton} onClick={handleSubmit}>
              CONFIRM BOOKING
            </button>
          )}
          <img className={classes.secure} src={secure} alt="secure" />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setUserInfo: (info) => dispatch(setUserInfo(info)),
});

const mapStateToProps = (state) => ({
  price: state.price.booking_price,
  checkIn: state.checkIn.firstDay,
  checkOut: state.checkOut.secondDay,
  index: state.index.index,
  name: state.name.roomName,
  userInfo: state.userInfo.userInfo,
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);
