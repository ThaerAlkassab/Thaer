import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom'

function Payment({ price }) {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const useStyles = makeStyles((theme) => ({
    container:{
      display:"flex",
      flexDirection: "column"
    },
    subContainer:{
      display: "flex",
      justifyContent: "space-between"
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
    col1:{
      display: "flex",
      flexDirection: "column",
      width: "35vw"
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
      padding: "10px"
    },
    secondaryTitle: {
      color: "#00366E",
      fontWeight: "700",
      fontSize: "14px",
      fontFamily: "Raleway, sans-serif",
      marginBottom: "5px"
    },
    titleStyle: {
      color: "#00366E",
      marginBottom: "20px"
    },
    textStyle: {
      width: "90%",
      margin: "5px 0",
      height: "30px"
    },
    desc: {
      display: "flex",
      flexDirection: "column",
      color: "#00366E",
      width: "40vw"
      // border: "3px solid #73AD21",
    },
    paymentTitle: {
      fontFamily: " Raleway, sans-serif",
      fontWeight: "500",
      fontHeight: "17.6px",
    },

    bDates: {
      color: "00366E",
      [theme.breakpoints.down("md")]: {
      },
      [theme.breakpoints.down("700")]: {
      },
    },
    bankStyle: {
      margin:"10px 0",
      color: "#00366E",
      fontSize: "15px"
    },
    notes: {
      color: "#00366E",
      marginBottom: "20px"
    },
    infoSection: {
      lineHeight: "30px",
      display: "flex",
      justifyContent: "space-between"
    },
    infoSection2:{
      lineHeight: "30px",
      display: "flex",
      justifyContent: "space-between",
      width: "80%"
    },
    descTitle:{
      display: "flex",
      justifyContent: "space-between",
    },
    descInfo:{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      
    },
    descInfo2:{
      width: "25vw"
    },
    descInfo3:{
      fontSize: "15px",
      margin: "10px 0"
    },
    descInfo4:{
      fontSize: "15px",
    },
    infoStyle:{
      width: "250px"
    },
    link:{
      backgroundColor: "#c31d10",
      border: "none",
      color: "white",
      height: "25px",
      alignSelf: "flex-end",
      borderRadius:"5px",
      padding: "5px",
      margin: "20px 0",
      fontSize: "18px",
      fontWeight: "600",
      "&:hover": {
        backgroundColor: "#ec291a",
      },
    }
  }));
  const classes = useStyles();

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
  return (
    <div className={classes.container} >
        <p className={classes.notes}>
          Depending on your type of booking you can leave your credit card details
          as an deposit or you will be charged immediately (Non-refundable) .
        </p>
        <button className={classes.link}> 
          <Link   to="/beds24" > Cancel Booking </Link>
        </button>

      <div className={classes.subContainer}>
        <div className={classes.col1}>
          <h3 className={classes.titleStyle}>Payment Required</h3>
          <p className={classes.notes}>
            Blue House B&B Iceland requires a payment of <b>EUR {price}</b>
          </p>
          <div className={classes.paymentType} onClick={() => handleClick("show1")}>
            <p className={classes.paymentTitle}>Pay with your Credit Card</p>
            <p>{">"}</p>
          </div>
          {show1 && (
            <div className={classes.border}>
              <p className={classes.secondaryTitle}>
                Press the link below to pay directly with your credit card.
              </p>
              <input
                className={classes.textStyle}
                type="text"
                value=""
                placeholder="Name of Card Holder"
              />
              <input
                className={classes.textStyle}
                type="text"
                value=""
                placeholder="Card Number"
              />
              <br />
              <button
                className={classes.button}
              >
                Pay Now
              </button>
            </div>
          )}
          <div className={classes.paymentType} onClick={() => handleClick("show2")}>
            <p className={classes.paymentTitle}>Pay through PayPal</p>
            <p>{">"}</p>
          </div>
          {show2 && (
            <div className={classes.border}>
              <p className={classes.secondaryTitle}>
                Pay your reservation through Paypal
              </p>
              <button
                className={classes.button}
              >
                Pay Now
              </button>{" "}
            </div>
          )}
          <div className={classes.paymentType} onClick={() => handleClick("show3")}>
            <p className={classes.paymentTitle}>Bitcoin Payment</p>
            <p>{">"}</p>
          </div>
          {show3 && (
            <div className={classes.border}>
              <p className={classes.secondaryTitle}>
                Pay your reservation through Bitcoin
              </p>
              <button
                className={classes.button}
              >
                Pay Now
              </button>{" "}
            </div>
          )}
          <div className={classes.paymentType} onClick={() => handleClick("show4")}>
            <p className={classes.paymentTitle}>Bank Transfer</p>
            <p>{">"}</p>
          </div>
          {show4 && (
            <div className={classes.border}>
            <p className={classes.secondaryTitle}>
              Please pay your booking towards the following Account:
            </p>
            <div> 
              <p className={classes.bankStyle}>IBAN: DE32700519950010344612</p>
              <p className={classes.bankStyle}>Swift: BYLADEM1ERD</p>
              <p className={classes.bankStyle}>Bank: Sparkasse Erding</p>
              <p className={classes.bankStyle}>Name: Blue House</p>
              <p className={classes.bankStyle}>Reference: Booking Number</p>
            </div>
              <button
                className={classes.button}
              >
                Pay Now
              </button>{" "}
            </div>
          )}
        </div>
        <div className={classes.desc}>
        <div className={classes.descTitle}>
          <div className={classes.descInfo2}>
            <h4>Description </h4>
            <p className={classes.descInfo3}>Green House 1 - Doubleroom Sunday, 19 September, 2021 - Monday, 20 September, 2021</p>
          </div >
          <div className={classes.descInfo}>
            <h4>Quantity</h4>
            <p className={classes.descInfo3}>1</p>
          </div >
          <div className={classes.descInfo}>
          <h4>Price</h4>
          <p className={classes.descInfo3}>$75</p>
          </div >
          <div className={classes.descInfo}>
          <h4>Total</h4>
          <p className={classes.descInfo3}>$75</p>
          </div >
        </div>
        <div>
        </div>
        <div className={classes.infoSection}>
          <h4>Grand Total</h4>
          <b className={classes.descInfo4}>$87.00</b>
        </div>
        <div className={classes.infoSection2}>
          <p> Check In </p>
          <p className={classes.infoStyle}>  Tuesday, 14 September, 2021 </p>
        </div>
        <div className={classes.infoSection2}>
          <p> Last Night </p>
          <p className={classes.infoStyle}>Tuesday, 14 September, 2021</p>
        </div>
        <div className={classes.infoSection2}>
          <p> Check Out </p>
          <p className={classes.infoStyle}> Wednesday, 15 September, 2021</p>
        </div>
        <div className={classes.infoSection2}>
          <p> First Name </p>
          <p className={classes.infoStyle}> name</p>
        </div>
        <div className={classes.infoSection2}>
          <p> Email </p>
          <p className={classes.infoStyle}> email</p>
        </div>
        <div className={classes.infoSection2}>
          <p> Mobile</p>
          <p className={classes.infoStyle}> Mobile</p>
        </div>
        <div className={classes.infoSection2}>
          <p> Address  </p>
          <p className={classes.infoStyle}> Address</p>
        </div>
        <div className={classes.infoSection2}>
          <p> Postcode  </p>
          <p className={classes.infoStyle}> 000</p>
        </div>
        <div className={classes.infoSection2}>
          <p> City  </p>
          <p className={classes.infoStyle}> paris</p>
        </div>
        <div className={classes.infoSection2}>
          <p> Country  </p>
          <p className={classes.infoStyle}> country</p>
        </div>
        <div className={classes.infoSection2}>
          <p> Arrival Time  </p>
          <p className={classes.infoStyle}>  12 PM</p>
        </div>
        <div className={classes.infoSection2}>
          <p> Comments </p>
          <p className={classes.infoStyle}> bla bla bla bla</p>
        </div>
       
      </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  price: state.price.booking_price,
});

export default connect(mapStateToProps)(Payment);
