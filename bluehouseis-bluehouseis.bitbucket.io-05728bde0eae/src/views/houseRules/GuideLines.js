import { makeStyles } from "@material-ui/core";
import React from "react";
import Rule from "./Rule.js";
import { WithTransLate } from "../../translating/index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "38px",
    marginLeft: "62px",
  },
  info: {
    letterSpacing: "0em",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "60px",
    margin: "80px auto",
    "& p": {
      fontSize: "24px",
      fontWeight: 300,
      lineHeight: "25px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
        textAlign: "cener",
      },
    },
    "& h1": {
      fontFamily: "Oblik",
      fontSize: "36px",
      fontWeight: 700,
      lineHeight: "25px",
      letterSpacing: "0em",
      textAlign: "center",
      [theme.breakpoints.down("xs")]: {
        fontSize: "24px",
        textAlign: "center",
      },
    },
  },
  [theme.breakpoints.down("xs")]: {
    root: {
      margin: "auto",
      gap: "50px",
      marginBottom: "-50px",
    },
    info: {
      margin: "0px 25px",
      "& p": {
        fontSize: "16px",
        textAlign: "center",
      },
      "& h1": {
        fontSize: "24px",
        textAlign: "center",
      },
    },
  },
}));

function GuideLines() {
  const { root, info } = useStyles();
  return (
    <div className={root}>
      <Rule
        Icon={"./1.svg"}
        text="Do not smoke inside the room and the house. 
        It is not allowed by the icelandic law and there is a penalty for people who do not adhere to the these rules."
      />
      <Rule
        Icon={"./2.svg"}
        text="Respect the quiet house. 
        As we have a lot of guests of different age groups, we ask you to respect that some people are going to bed early as they are waking up early. 
        Please try to keep it down between 10pm and 7am."
      />
      <Rule
        Icon={"./3.svg"}
        text="Do not leave the bathroom dirty after using it. 
        Please keep the toilet in the way you found it. We all benefit from it and it will feel more like home when we all play our role in it."
      />
      <Rule
        Icon={"./4.svg"}
        text="Do not throw anything into the toilet other than toilet paper. 
        We do not want the toilet to clog. In all bathrooms we provide rubbish bins where you can throw in all other kinds of trash."
      />
      <Rule
        Icon={"./5.svg"}
        text="Be sure to have breakfast included before taking it from the kitchen or the fridge.
                                                Breakfast time is between 8 and 10:30 am. For direct bookers we offer breakfast for free.
                                                Depending on the room you book, you will receive self-service cereal or continental
                                                breakfast. For all channel bookers breakfast is 10€ per person per night. Just tell us that
                                                you wish to add it to your booking and we will send you the pay link."
      />
      <Rule
        Icon={"./6.svg"}
        text="Do not make a big mess in the kitchen when you use it since you are not alone in the house. Always keep in mind how you would like to find the kitchen when entering the room. This is how we would like you to leave it too."
      />
      <Rule
        Icon={"./windows.svg"}
        text="Do not make a big mess in the kitchen when you use it since you are not alone in the house. Always keep in mind how you would like to find the kitchen when entering the room. This is how we would like you to leave it too."
      />
      <Rule
        Icon={"./8.svg"}
        text="Please do not leave the lights and the heater on when it is not necessary - we are an eco-friendly house."
      />
      <Rule
        Icon={"./9.svg"}
        text="Check-out is until 11am and please leave the key on the door of your room before you depart. 
        If you wish to check out later, please contact info@bluehouse.is as we can help you further. 
        You are also always welcome to stay a couple of more hours in our common areas if needed."
      />
      {/* <div>
        <h3>Cancellation Policy</h3>
      </div>
      <Rule
        Icon={"./Money.svg"}
        text="Standard: The amount will be charged within 14 days prior to the arrival day. Guests can cancel their booking for free up to 14 days before their arrival day. If guests cancel within 14 days before the arrival date, no refund will be issued."
      />
      <Rule
        Icon={"./Nomoney.svg"}
        text="Non-refundable: The amount will be charged immediately. If guests cancel at any time, no refund will be issued."
      />
      <div className={info}>
        <h1>
          <WithTransLate text="The Blue House Team" />
        </h1>
      </div> */}
    </div>
  );
}

export default GuideLines;
