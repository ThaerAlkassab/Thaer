import React from "react";
import "./Services.css";
import {  makeStyles } from "@material-ui/core";
import bus from "../../../images/bus.svg"
import view from "../../../images/view.svg"
import car from "../../../images/car.svg"
import airplane from "../../../images/airplane.svg"
import wifi from "../../../images/wifi.svg"
import clock from "../../../images/clock.svg"

const useStyles = makeStyles(theme=> ({
  "MuiSvgIcon-root": {
    fontSize: "2.7rem",
    paddingBottom: "5px",
  },
  container:{
    display: "flex",
    justifyContent: "space-between",    
    margin: "80px 0 80px 30px",
    width: "80vw",
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      marginTop: "50px",
      width: "90%",
    },
    [theme.breakpoints.down("321")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "90px"
    },
  },
  iconsDesc:{
    fontSize: "18px",
    lineHeight: "30px",
    textAlign: "center",
    color: "#14202B",
    marginTop: "20px",
    width: "135px",
    fontWeight: "400",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      lineHeight: "20px",
      width: "135px",
      marginBottom: "60px"
    },
  }
}));

const Services = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className="service">
        <img src={view} className={classes.icons} alt=""/>
        <span className={classes.iconsDesc}>Popular Spot for Northern Lights</span>
      </div>
      <div className="service">
      <img src={wifi} className={classes.icons} alt=""/>
        <span className={classes.iconsDesc}>Free WIFI</span>
      </div>
      <div className="service">
        <img src={bus} className={classes.icons} alt=""/>
        <span className={classes.iconsDesc}>3 Min Walk to Bus Stop</span>
      </div>
      <div className="service">
        <img src={car} className={classes.icons} alt=""/>
        <span className={classes.iconsDesc}>5 Min Drive from Town</span>
      </div>
      <div className="service">
        <img src={airplane} className={classes.icons} alt=""/> 
        <span className={classes.iconsDesc}>45 Min Drive from Airport</span>
      </div>
      <div className="service">
        <img src={clock} className={classes.icons} alt=""/>
        <span className={classes.iconsDesc}>Late Night Self Check-In</span>
      </div>
    </div>
  );
};

export default Services;
