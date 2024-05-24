import React from "react";
import { makeStyles } from "@material-ui/core";
import notFound from "../images/notFound.jpg";
import logo from "../images/notFoundBlueHouseLogo.svg";
import { Link } from "react-router-dom";
import { WithTransLate } from "../translating/index";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${notFound})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    position: "fixed",
    top: "100px",
    bottom: "0",
    left: "0",
    right: "0",
    padding: "60px 30px 100px",
    zIndex: 1,
    [theme.breakpoints.down("xs")]: {
      padding: "30px 15px 50px",
    },
    "& *": {
      color: "#fff !important",
      textAlign: "center",
    },
  },
  logoStyle: {
    // maxHeight: "133px",
    width: "30vw",
    marginBottom: "1.5rem",
  },

  font404: {
    fontSize: "96px",
  },

  smallFont: {
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "34px",
  },
  largFont: {
    fontFamily: "Oblik",
    fontSize: "36px",
    letterSpacing: "0px",
  },
}));

function Notfound() {
  const { root, logoStyle, font404, smallFont, largFont } = useStyles();
  return (
    <div className={root}>
      <img src={logo} alt="logo" className={logoStyle} />
      <div>
        <p className={smallFont}>
          <WithTransLate text="Hi, this page is on vacation." />
        </p>
        <p className={largFont}>
          <WithTransLate text="You should be too." />
        </p>
        <p className={smallFont}>
          <WithTransLate text="Find the best price now on" />{" "}
          <Link to="/">
            <u>bluehouse.</u>
          </Link>
        </p>
      </div>
      <div>
        <h1 className={font404}>404</h1>
        <p className={smallFont}>
          <WithTransLate text="page not found" />
        </p>
      </div>
    </div>
  );
}

export default Notfound;
