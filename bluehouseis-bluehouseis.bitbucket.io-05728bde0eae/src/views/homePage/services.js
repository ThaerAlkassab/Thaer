import { Box, makeStyles, Modal } from "@material-ui/core";
import "../../css/Services.css";
import React, { useState } from "react";
import moneyIcon from "../../images/services/money.png";
import clockIcon from "../../images/services/clock.png";
import houseIcon from "../../images/services/house.png";
import DifferentLocations from "../../components/popUpVariations/DifferentLocations";
import SelfCheckIn from "../../components/popUpVariations/selfCheckIn";
import BookOnOurWebsite from "../../components/popUpVariations/bookOnOurSite";
import CheapestPrice from "../../components/popUpVariations/CheapestPrice";
import Cookies from "js-cookie";
import clsx from "clsx";
import { WithTransLate } from "../../translating/index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "41px 41px 0px 88px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-evenly",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0",
    },
    [theme.breakpoints.down("xs")]: {
      flexWrap: "nowrap",
      overflow: "auto",
      justifyContent: "start",
      margin: "0px 0 0 30px",
    },
  },
  "@media only screen and (min-device-width: 768px) and (max-device-width: 800px)":{
    root: {
    display: "flex",
    justifyContent: "space-around",
    width: "115vw",
    paddingLeft:"10px",
    },
  },
  aService: {
    display: "grid",
    justifyItems: "center",
    gap: "20px",
    paddingTop: "40px",
    maxWidth: "300px",
    minWidth: "200px",
    cursor: "pointer",
    marginBottom: "75px",
    transition: "0.1s ease-in-out",
    "&:hover": {
      // backgroundColor: "red",
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0px",
      gap: "13px",
      "& img": {
        height: "25px",
      },
    },
  },
  serviceDescription: {
    "font-size": "18px",
    "font-weight": 300,
    "line-height": "18px",
    "letter-spacing": "0em",
    "text-align": "center",
    fontFamily: "Josefin Sans",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      fontWeight: 300,
      lineHeight: "16px",
    },
  },
}));

export default function Services() {
  const isFirstTime = Cookies.get("showPopUp") ? false : true;
  const { root, aService, serviceDescription } = useStyles();
  const [openDifferentLocations, setOpenDifferentLocations] = useState(false);
  const [openSelfCheckIn, setOpenSelfCheckIn] = useState(false);
  const [openBookOnOurWebsite, setOpenBookOnOurWebsite] = useState(isFirstTime);
  const [openCheapestPrice, setOpenCheapestPrice] = useState(false);
  const handleClose = () => {
    Cookies.set("showPopUp", true);
    setOpenDifferentLocations(false);
    setOpenSelfCheckIn(false);
    setOpenBookOnOurWebsite(false);
    setOpenCheapestPrice(false);
  };

  const services = (
    <>
      <div
        onClick={() => setOpenCheapestPrice(true)}
        className={clsx("clickable", aService)}
        id="hover-effect"
      >
        <img alt="money" src={moneyIcon} />
        <p className={serviceDescription}>
          <WithTransLate
            text={"CHEAPEST PRICE GUARANTEED IF BOOKED DIRECTLY"}
          />
        </p>
      </div>
      <div
        onClick={() => setOpenSelfCheckIn(true)}
        className={clsx("clickable", aService)}
        id="hover-effect"
      >
        <img alt="clock" src={clockIcon} />
        <p className={serviceDescription}>
          <WithTransLate
            text={"SELF-CHECK-IN & SELF-SERVICE BREAKFAST TO OFFER GREATEST FLEXIBILITY"}
          />
        </p>
      </div>
      <div
        onClick={() => setOpenDifferentLocations(true)}
        className={clsx("clickable", aService)}
        id="hover-effect"
      >
        <img alt="house" src={houseIcon} />
        <p className={serviceDescription}>
          <WithTransLate
            text={
              "3 DIFFERENT LOCATIONS ON A SCENIC PENINSULA 10 MINUTES FROM DOWNTOWN"
            }
          />
        </p>
      </div>
    </>
  );

  return (
    <Box className={root}>
      {services}
      <Modal
        open={openDifferentLocations}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <DifferentLocations handleClose={handleClose} />
      </Modal>
      <Modal
        open={openSelfCheckIn}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <SelfCheckIn handleClose={handleClose} />
      </Modal>
      <Modal
        open={openBookOnOurWebsite}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <BookOnOurWebsite handleClose={handleClose} />
      </Modal>
      <Modal
        open={openCheapestPrice}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <CheapestPrice handleClose={handleClose} />
      </Modal>
    </Box>
  );
}
