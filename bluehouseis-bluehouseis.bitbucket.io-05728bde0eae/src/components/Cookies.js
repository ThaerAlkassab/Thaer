import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { WithTransLate } from "../translating/index";

const useStyles = makeStyles((theme) => ({
  "@keyframes showUp": {
    from: {
      bottom: "-300px",
    },
    to: {
      bottom: 0,
    },
  },
  root: {
    position: "fixed",
    zIndex: 1212,
    left: 0,
    right: 0,
    bottom: 0,
    padding: "60px 12vw",
    backgroundColor: "white",
    overflow: "auto",
    maxHeight: "calc(100vh - 120px)",
    display: (props) => props.display,
    flexDirection: "column",
    gap: "20px",
    animation: "$showUp 2s ",
    [theme.breakpoints.down("sm")]: {
      padding: "30px 6vw",
      maxHeight: "calc(100vh - 60px) !important",
    },
  },
  cookiesDescription: {
    fontSize: "18px",
    fontWeight: "300",
    lineHeight: "18px",
    letterSpacing: "0em",
  },
  coockieTitle: {
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "18px",
    letterSpacing: "0em",
  },
  actions: {
    display: "flex",
    gap: "20px",
    "& *": {
      margin: "0",
    },
  },
  moreInfo: {
    color: "#04376F",
    textDecoration: "underline",
    cursor: "pointer",
  },
}));

function CookiesShowUp() {
  const [showCookies, setShowCookies] = useState(false);
  const showAndHide = () => {
    setShowCookies(!showCookies);
  };
  const isShowable = Cookies.get("cookiesPermation") ? "none" : "flex";
  const [display, setDisplay] = useState(isShowable);
  const handleAcceptingAndDeclineCookies = (choice) => {
    Cookies.set("cookiesPermation", choice);
    setDisplay("none");
  };
  const { root, cookiesDescription, coockieTitle, actions, moreInfo } =
    useStyles({ display });
  return (
    <div className={root}>
      <p className={cookiesDescription}>
        <WithTransLate text="BlueHouse uses cookies on bluehouse.is to analyse usage of the website and to enable content sharing on social media. Cookies may be placed by third parties. By closing this message and continuing to use the site you consent to cookie use by bluehouse.is" />
      </p>
      {!showCookies && (
        <p className={moreInfo} onClick={showAndHide}>
          {" "}
          <WithTransLate text="More Information" />
        </p>
      )}
      {showCookies && (
        <div>
          <p className={coockieTitle}>
            {" "}
            <WithTransLate text="Functional cookies" />
          </p>
          <p className={cookiesDescription}>
            {" "}
            <WithTransLate text="Functional cookies record information about choices that you have made, and they also allow us to tailor the website to suit your needs. For example, We also use cookies to save your language preference." />
          </p>
          <p className={coockieTitle}>
            {" "}
            <WithTransLate text="Analytical cookies" />
          </p>
          <p className={cookiesDescription}>
            {" "}
            <WithTransLate text="Analytical cookies allow us to recognise and to count the number of visitors to our website, to see how visitors move around the website when they are using it and to record which content viewers view and are interested in. This helps us to determine how frequently particular pages and advertisements are visited and to determine the most popular areas of our website. This helps us to improve the service which we offer to you by helping us make sure our users are finding the information they are looking for, by providing anonymised demographic data to third parties in order to target advertising more appropriately to you, and by tracking the success of advertising campaigns on our website." />
          </p>
          <p className={coockieTitle}>
            {" "}
            <WithTransLate text="Advertising cookies" />
          </p>
          <p>
            {" "}
            <WithTransLate text="These cookies track your browsing habits to enable us to show advertising which is more likely to be of interest to you. These cookies use information about your browsing history to group you with other users who have similar interests. Based on that information, and with our permission, third-party advertisers can place cookies to enable them to show adverts which we think will be relevant to your interests while you are on third-party websites. These cookies also store your location, including your latitude, longitude, and GeoIP region ID, which helps us show you locale-specific news and allows our Services to operate more efficiently.  If you choose to remove targeted or advertising cookies, you will still see adverts but they may not be relevant to you." />
          </p>
          <p className={moreInfo} onClick={showAndHide}>
            {" "}
            <WithTransLate text="Less Information" />
          </p>
        </div>
      )}
      <div className={actions}>
        <button
          onClick={() => handleAcceptingAndDeclineCookies(true)}
          className="outLinedButton"
        >
          {" "}
          <WithTransLate text="ACCEPT COOKIES" />
        </button>
        <button
          onClick={() => handleAcceptingAndDeclineCookies(false)}
          className="outLinedButton"
        >
          {" "}
          <WithTransLate text="DECLINE" />
        </button>
      </div>
    </div>
  );
}

export default CookiesShowUp;
