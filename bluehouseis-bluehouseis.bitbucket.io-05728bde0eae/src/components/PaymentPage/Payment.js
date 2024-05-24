import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import * as moment from "moment";
import Paypal from "./PayPal";
import StripeCheckout from "../StripeCheckout/StripeCheckout";

function Payment({ price, userInfo, checkIn, checkOut, name, quantity }) {
  const {
    firstName,
    Surname,
    Email,
    Mobile,
    Address,
    Postcode,
    City,
    Country,
    Arrival,
    Comments,
  } = userInfo;
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [checkout, setCheckout] = useState(false);

  const day1 = moment(checkIn).format("dddd,DD MMMM, YYYY ");
  const day2 = moment(checkOut).format("dddd,DD MMMM, YYYY ");

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      padding: "50px 100px",
      [theme.breakpoints.down("xs")]: {
        padding: "20px",
      },
    },
    subContainer: {
      display: "flex",
      justifyContent: "space-between",
      [theme.breakpoints.down("1030")]: {
        flexDirection: "column",
      },
    },
    subTitles: {
      fontSize: "16px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "12px",
        marginRight: "10px",
      },
    },
    button: {
      backgroundColor: "#c31d10",
      border: "none",
      color: "white",
      height: "30px",
      fontWeight: "600",
      borderRadius: "5px",
      "&:hover": {
        backgroundColor: "#ec291a",
      },
    },
    col1: {
      display: "flex",
      flexDirection: "column",
      width: "500px",
      [theme.breakpoints.down("xs")]: {
        width: "auto",
      },
    },
    paymentType: {
      background: "rgba(50,90,90,.1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      border: "1px solid rgba(90,90,90,.2)",
      height: "34px",
      cursor: "pointer",
      padding: "5px 20px",
      marginBottom: "5px",
    },
    border: {
      border: "1px solid rgba(10,10,10,.2)",
      padding: "10px",
    },
    secondaryTitle: {
      color: "#00366E",
      fontWeight: "700",
      fontFamily: "Raleway, sans-serif",
      margin: "10px 0",
      fontSize: "15px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "12px",
      },
    },
    titleStyle: {
      color: "#00366E",
      marginBottom: "20px",
      fontSize: "17px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
    textStyle: {
      width: "90%",
      margin: "5px 0",
      height: "30px",
    },
    desc: {
      display: "flex",
      flexDirection: "column",
      color: "#00366E",
      width: "600px",
      [theme.breakpoints.down("1030")]: {
        marginTop: "40px",
        width: "auto",
      },
    },
    paymentTitle: {
      fontFamily: " Raleway, sans-serif",
      fontWeight: "500",
      fontSize: "15px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "12px",
      },
    },

    bDates: {
      color: "00366E",
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("700")]: {},
    },
    bankStyle: {
      margin: "10px 0",
      color: "#00366E",
      fontSize: "15px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "12px",
      },
    },
    notes: {
      color: "#00366E",
      marginBottom: "20px",
      fontSize: "15px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "12px",
      },
    },
    infoSection: {
      lineHeight: "30px",
      display: "flex",
      justifyContent: "space-between",
    },
    infoSection2: {
      lineHeight: "30px",
      display: "flex",
      justifyContent: "space-between",
      width: "80%",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    descTitle: {
      display: "flex",
      justifyContent: "space-between",
    },
    descInfo: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    descInfo2: {
      width: "350px",
    },
    descInfo3: {
      fontSize: "15px",
      margin: "10px 0",
      [theme.breakpoints.down("xs")]: {
        fontSize: "12px",
      },
    },
    descInfo4: {
      fontSize: "15px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "12px",
        marginRight: "10px",
      },
    },
    infoStyle: {
      width: "250px",
      fontSize: "15px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "12px",
      },
    },
    link: {
      backgroundColor: "#c31d10",
      border: "none",
      color: "white",
      alignSelf: "flex-end",
      borderRadius: "5px",
      margin: "70px 0",
      height: "30px",
      fontSize: "18px",
      fontWeight: "600",
      "&:hover": {
        backgroundColor: "#ec291a",
      },
      [theme.breakpoints.down("xs")]: {
        margin: "10px 0",
        fontSize: "12px",
      },
    },
  }));
  const classes = useStyles();
  console.log("userInfo", userInfo);
  const handleClick = (item) => {
    if (item === "show1") {
      setShow1(!show1);
    } else if (item === "show2") {
      setShow2(!show2);
    } else if (item === "show3") {
      setShow3(!show3);
    } else if (item === "show4") {
      setShow4(!show4);
    }
  };
  let priceForOne = price / quantity;

  const camel = (a) => {
    let STR = a
      .toLowerCase()
      .split(" ")
      .map((word) => word.replace(word[0], word[0].toString().toUpperCase()))
      .join("");

    return STR;
  };

  const newName = camel(name);
  return (
    <div className={classes.container}>
      <p className={classes.notes}>
        Depending on your type of booking you can leave your credit card details
        as an deposit or you will be charged immediately (Non-refundable) .
      </p>
      <button className={classes.link}>
        <Link to="/beds24"> Cancel Booking </Link>
      </button>

      <div className={classes.subContainer}>
        <div className={classes.col1}>
          <h3 className={classes.titleStyle}>Payment Required</h3>
          <p className={classes.notes}>
            Blue House B&B Iceland requires a payment of <b>EUR {price}</b>
          </p>
          <div
            className={classes.paymentType}
            onClick={() => handleClick("show1")}
          >
            <p className={classes.paymentTitle}>Pay with your Credit Card</p>
            <p>{">"}</p>
          </div>
          {show1 && (
            <div className={classes.border} style={{ height: "200px" }}>
              <p className={classes.secondaryTitle}>
                Press this link below to pay directly with your credit card.
              </p>
              <StripeCheckout />
            </div>
          )}
          <div
            className={classes.paymentType}
            onClick={() => handleClick("show2")}
          >
            <p className={classes.paymentTitle}>Pay through PayPal</p>

            <p>{">"}</p>
          </div>
          {show2 && (
            <div
              className={classes.border}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p className={classes.secondaryTitle}>
                {" "}
                Pay your reservation through Paypal{" "}
              </p>
              {checkout === true ? (
                <div className="">
                  <Paypal price={price} />
                </div>
              ) : (
                <div>
                  <button
                    onClick={() => {
                      setCheckout(true);
                    }}
                    className={classes.button}
                  >
                    Pay Now
                  </button>
                </div>
              )}
            </div>
          )}
          <div
            className={classes.paymentType}
            onClick={() => handleClick("show3")}
          >
            <p className={classes.paymentTitle}>Bitcoin Payment</p>
            <p>{">"}</p>
          </div>
          {show3 && (
            <div className={classes.border}>
              <p className={classes.secondaryTitle}>
                Pay your reservation through Bitcoin
              </p>
              <button className={classes.button}>Pay Now</button>{" "}
            </div>
          )}
          <div
            className={classes.paymentType}
            onClick={() => handleClick("show4")}
          >
            <p className={classes.paymentTitle}>Bank Transfer</p>
            <p>{">"}</p>
          </div>
          {show4 && (
            <div className={classes.border}>
              <p className={classes.secondaryTitle}>
                Please pay your booking towards the following Account:
              </p>
              <div>
                <p className={classes.bankStyle}>
                  IBAN: DE32700519950010344612
                </p>
                <p className={classes.bankStyle}>Swift: BYLADEM1ERD</p>
                <p className={classes.bankStyle}>Bank: Sparkasse Erding</p>
                <p className={classes.bankStyle}>Name: Blue House</p>
                <p className={classes.bankStyle}>Reference: Booking Number</p>
              </div>
              <button className={classes.button}>Pay Now</button>{" "}
            </div>
          )}
        </div>
        <div className={classes.desc}>
          <div className={classes.descTitle}>
            <div className={classes.descInfo2}>
              <h4 className={classes.subTitles}>Description </h4>
              <p className={classes.descInfo3}>
                {newName} {day1} - {day2}
              </p>
            </div>
            <div className={classes.descInfo}>
              <h4 className={classes.subTitles}>Quantity</h4>
              <p className={classes.descInfo3}>{quantity}</p>
            </div>
            <div className={classes.descInfo}>
              <h4 className={classes.subTitles}>Price</h4>
              <p className={classes.descInfo3}>€{priceForOne}</p>
            </div>
            <div className={classes.descInfo}>
              <h4 className={classes.subTitles}>Total</h4>
              <p className={classes.descInfo3}>€{price}</p>
            </div>
          </div>
          <div></div>
          <div className={classes.infoSection}>
            <h4 className={classes.subTitles}>Grand Total</h4>
            <b className={classes.descInfo4}>€{price}</b>
          </div>
          <div className={classes.infoSection2}>
            <p className={classes.subTitles}> Check In </p>
            <p className={classes.infoStyle}> {day1} </p>
          </div>
          <div className={classes.infoSection2}>
            <p className={classes.subTitles}> Check Out </p>
            <p className={classes.infoStyle}> {day2}</p>
          </div>
          <div className={classes.infoSection2}>
            <p className={classes.subTitles}> First Name </p>
            <p className={classes.infoStyle}>
              {" "}
              {firstName} {Surname}
            </p>
          </div>
          <div className={classes.infoSection2}>
            <p className={classes.subTitles}> Email </p>
            <p className={classes.infoStyle}> {Email}</p>
          </div>
          <div className={classes.infoSection2}>
            <p className={classes.subTitles}> Mobile</p>
            <p className={classes.infoStyle}> {Mobile}</p>
          </div>
          <div className={classes.infoSection2}>
            <p className={classes.subTitles}> Address </p>
            <p className={classes.infoStyle}> {Address}</p>
          </div>
          <div className={classes.infoSection2}>
            <p className={classes.subTitles}> Postcode </p>
            <p className={classes.infoStyle}> {Postcode}</p>
          </div>
          <div className={classes.infoSection2}>
            <p className={classes.subTitles}> City </p>
            <p className={classes.infoStyle}> {City}</p>
          </div>
          <div className={classes.infoSection2}>
            <p className={classes.subTitles}> Country </p>
            <p className={classes.infoStyle}> {Country}</p>
          </div>
          <div className={classes.infoSection2}>
            <p className={classes.subTitles}> Arrival Time </p>
            <p className={classes.infoStyle}> {Arrival}</p>
          </div>
          <div className={classes.infoSection2}>
            <p className={classes.subTitles}> Comments </p>
            <p className={classes.infoStyle}> {Comments}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  price: state.price.booking_price,
  userInfo: state.userInfo.userInfo,
  quantity: state.quantity.quantity,
  checkIn: state.checkIn.firstDay,
  checkOut: state.checkOut.secondDay,
  name: state.name.roomName,
});

export default connect(mapStateToProps)(Payment);
