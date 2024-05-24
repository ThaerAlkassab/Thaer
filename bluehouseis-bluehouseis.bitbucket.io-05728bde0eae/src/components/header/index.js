import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { WithTransLate } from "../../translating/index";
import SideNavbar from "../SideNavbar";
import Search from "./search";

import IconButton from "@material-ui/core/IconButton";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "../../images/MenuIcon_Header.png";
import logo from "../../images/logoBlue.png";
import menu from "../../images/Header_icons/Menu_header_mobileview.svg";  

const headerStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    zIndex: 3,
    backgroundColor: "white",
  },

  atag: {
    padding: "27px 30px",
  },

  atag2: {
    padding: "27px 16px",
  },
  BookingButtonsWrapper: {
    display: "flex",
  },
  BookingButtons: {
    border: "1px solid #14202B",
    width: "243px",
    textTransform: "uppercase",
    cursor: "pointer",
    fontFamily: "Josefin Sans",
    fontSize: "20px",
    lineHeight: "20px",
    textAlign: "center",
    display: "block",
    height: "67px",
    padding: "24px 0",
    "&:hover": {
      background: "#04376F",
    },
    [theme.breakpoints.down("md")]: {
      width: "220px",
      height: "60px",
      marginLeft: "60px",
    },
  },

  bookingRoom: {
    backgroundColor: "#fff",
    marginRight: "52px",
    color: "#14202B",
    "&:hover": {
      color: "#fff",
    },
    [theme.breakpoints.down("md")]: {
      marginRight: "-22px",
    },
  },

  bookingTour: {
    background: "#fff",
    color: "#14202B",
    "&:hover": {
      color: "#fff",
    },
    [theme.breakpoints.down("md")]: {
      marginRight: "-82px",
    },
  },

  button3: {
    background: "transparent",
    border: "none",
    width: "31px",
    height: "31px",
    "@media(max-width:426px)": {
      width: "10vw",
    },
  },

  button5: {
    background: "transparent",
    border: "none",
    outline: "0",
  },

  button4: {
    background: "transparent",
    border: "none",
    outline: "0",
  },

  button6: {
    background: "transparent",
    border: "none",
    outline: "0",
  },

  column4: {
    position: "fixed",
    backgroundColor: "#fff",
    top: "0px",
    maxWidth: "100%",
    display: "flex",
    alignItems: "center",
    height: "65px",
    flexBasis: "100%",
    padding: "0 25px",
    zIndex: 3,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    justifyContent: "space-between",
  },

  leftNav: {
    display: "flex",
    gap: "20px",
  },

  MenuIcon: {
    marginRight: "10px",
    "&:focus": {
      outline: "none",
    },
  },

  logo: {
    marginLeft: "1.3vw",
    width: "0px",
    height: "0px",
    marginTop: "-70px",
  },
  imgLogo: {
    width: "11rem",
  },

  "@media (max-width:600px)": {
    root: {
      display: "none",
    },
    BookingButtonsWrapper: {
      display: "none",
    },
    column3: {
      display: "none",
    },
    logo: {
      display: "none",
    },
  },

  "@media (min-width:600px)": {
    column4: {
      display: "none",
    },
  },
  [theme.breakpoints.down("sm")]: {
    BookingButtons: {
      fontSize: "14px",
      padding: "16px 0",
      width: "164px",
    },
    SearchIcon: {
      marginRight: "15px",
      "& img": {
        width: "20px",
      },
      "&:hover": {
        "& div": {
          right: "30px",
          width: "250px",
        },
      },
    },

    MenuIcon: {
      marginRight: "5px",
      "& img": {
        width: "30px",
      },
    },
    searchBar: {
      height: "50px",
      "& input": {
        fontSize: "14px",
      },
    },
  },
}));

export default function Header({ right, setRight }) {
  const classes = headerStyles();
  const handleOpenAndCloseSideNavbar = (rightValue) => {
    setRight(rightValue);
  };

  return (
    <>
      <SideNavbar
        handleOpenAndCloseSideNavbar={handleOpenAndCloseSideNavbar}
        right={right}
      />
      <Grid container>
        <Grid item xs={1} sm={12} className={classes.root}>
          <Link
            disableRipple
            to="/"
            className={classes.logo}
            color="inherit"
            aria-label="logo"
          >
            <img src={logo} alt="logo" className={classes.imgLogo} />
          </Link>
          <div className={classes.BookingButtonsWrapper}>
            {/*<Link
              className={clsx(classes.bookingRoom, classes.BookingButtons)}
              to="/beds24"
            >
              <WithTransLate text="book your room" />
            </Link> */}

            <a
              className={clsx(classes.bookingRoom, classes.BookingButtons)}
              href="https://beds24.com/booking2.php?propid=3578&layout=1"
              target="_blank"
              rel="noreferrer"
            >
              <WithTransLate text="book your room" />
            </a>
            <a
              className={clsx(classes.bookingTour, classes.BookingButtons)}
              href="https://bluehouse.tourdesk.is/Tour"
              target="_blank"
              rel="noreferrer"
            >
              <WithTransLate text="book day tours" />
            </a>
          </div>
          <div className={classes.column3}>
            <Search classes={classes} />
            <IconButton
              disableRipple
              focusVisibleClassName={classes.ST}
              className={classes.MenuIcon}
              onClick={() => handleOpenAndCloseSideNavbar(0, "hidden")}
              color="inherit"
              aria-label="menu"
            >
              <img src={MenuIcon} alt="MenuIcon" />
            </IconButton>
          </div>
        </Grid>

        <Grid
          container
          xs={10}
          sm={1}
          item
          className={classes.column4}
          justifyContent="space-between"
        >
          <button
            className={classes.button3}
            onClick={() => handleOpenAndCloseSideNavbar(0, "hidden")}
            color="inherit"
            aria-label="menu"
          >
            <img src={menu} alt="side nav bar " />
          </button>
          {/*  <Link to="/beds24">
            <button className={classes.button5}>
              <img src={room} alt="Book a room" />
            </button>
          </Link>*/}

          <div className={classes.leftNav}>
            <Grid to="Map" rel="noreferrer">
              <button className={classes.button5}>
                <img src="./Vector.svg" alt="Book a room" />
              </button>
            </Grid>

            <a
              href="https://gnl.ladesk.com/submit_ticket"
              target="_blank"
              rel="noreferrer"
            >
              <button className={classes.button4}>
                <img src="./whatsapp-icon.svg" alt="Book a tour" />
              </button>
            </a>
            <a href="tel:+3547756480" className={classes.button6}>
              <img src={"./phone-icon.svg"} alt="home page" />
            </a>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
