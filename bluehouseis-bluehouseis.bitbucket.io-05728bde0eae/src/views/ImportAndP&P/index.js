import React from "react";
import Privacy from "./Privacy.js";
import Instructions from "../../components/instructions";
import Support from "../../components/support.js";
import { makeStyles } from "@material-ui/core/styles";
import Imagemobile from "../../images/privacy_mobile.png";
import Image from "../../images/privacy.jpg";
import { WithTransLate } from "../../translating/index";
//import HomeHeader from "../../components/Header.js"

const useStyles = makeStyles((theme) => ({
  imageStyle: {
    width: "95%",
    height: "auto",
    marginLeft: "65px",
    marginBottom: "100px",
  },
  header: {
    display: "flex",
    justifyContent: "flex-end",
  },
  title: {
    transform: "rotate(-90deg)",
    height: "24px",
    width: "24px",
    margin: "386px -25px -227px -171px",
    fontFamily: "Oblik",
    fontSize: "24px",
    lineHeight: "50px",
    letterSpacing: "0.1em",
    color: "#14202B",
    //marginRight: "auto",
    whiteSpace: "nowrap",
    "@media (max-width: 900px)": {
      display: "none",
    },
  },
  title2: {
    transform: "rotate(-90deg)",
    height: "fit-content",
    width: "fit-content",
    fontFamily: "Oblik",
    fontSize: "18px",
    lineHeight: "50px",
    letterSpacing: "0.1em",
    color: "#14202B",
    whiteSpace: "nowrap",
    margin: "135px -64px 0 0",
    "@media (min-width: 900px)": {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      transform: "rotate(0)",
      margin: "16px 0 0",
    },
  },
  imageStyle2: {
    flexGrow: 1,
    width: "100%",
    marginTop: "50%",
  },
  houseRules: {
    margin: "0 10px 0 65px",
    maxWidth: "1150px",
  },

  [theme.breakpoints.up("sm")]: {
    imageStyle2: {
      display: "none",
    },
  },
  [theme.breakpoints.down("xs")]: {
    header: {
      flexDirection: "column-reverse",
      alignItems: "center",
    },
    imageStyle: {
      display: "none",
    },
    houseRules: {
      marginTop: "22px",
    },
  },
}));

function PrivacyPolicy() {
  const {
    imageStyle,
    title,
    title2,
    imageStyle2,
    houseRules,
    header,
    support,
    root,
  } = useStyles();
  return (
    <div className={root}>
      <div className={header}>
        <p className={title}>
          <WithTransLate text="IMPRINT AND PRIVACY POLICY" />
        </p>
        <p className={title2}>
          <WithTransLate text="PRIVACY POLICIES" />
        </p>
        <img src={Imagemobile} alt="" className={imageStyle2} />
        <img src={Image} alt="" className={imageStyle} />
      </div>
      <div className={houseRules}>
        <Privacy />
        <Instructions />
      </div>
      <div className={support}>
        <Support />
      </div>
    </div>
  );
}

export default PrivacyPolicy;
