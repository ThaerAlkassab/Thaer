import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import NavBarMobile from "../NavBar/NavBar_Mobile";
import logo from "../../../images/Logo-blue.png";
import logoMobile from "../../../images/logoMobile.svg";
import menu from "../../../images/menuMobile.svg";
import escape from "../../../images/escape.svg";
import "./Header.css";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#fff",
    textAlign: "center",
  },
  logo: {
    margin: "20px",
    height: "86px",
    width: "236px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100vw",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "-40px",
    },
  },
  button: {
    background: "white",
    border: "none",
    width: "30px",
    zIndex: "99",
    marginRight: "50px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  menu: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    zIndex: "999",
  },
  escape: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    width: "30px",
    zIndex: "9",
    marginRight: "50px",
  },
  logoMobile: {
    width: "236px",
    height: "86px",
    marginLeft: "10px",
    marginRight: "auto",
    zIndex: "9999",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobileDiv: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    [theme.breakpoints.down("321")]: {
      marginRight: "0px",
      marginLeft: "20px",
    },
  },
}));

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const classes = useStyles();
  const handleClick = () => {
    setMobile(!mobile);
  };
  return (
    <div className={classes.container}>
      <Link to="/" style={{ display: "flex", justifyContent: "center" }}>
        <img className={classes.logo} alt="blue-house logo" src={logo} />
      </Link>
      <NavBar />
      <div className={classes.mobileDiv}>
        <button className={classes.button} onClick={handleClick}>
          {mobile ? (
            <img className="" alt="" src={escape} />
          ) : (
            <img src={menu} alt="" className="" />
          )}
        </button>
        <a
          href="https://bluehouse.is/"
          target="_blank"
          rel="noreferrer"
          style={{ zIndex: "999" }}
        >
          <img
            className={classes.logoMobile}
            alt="blue-house logo"
            src={logoMobile}
          />
        </a>
        {mobile && <NavBarMobile />}
      </div>
    </div>
  );
};

export default Header;
