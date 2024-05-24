import { makeStyles } from "@material-ui/core";
import React from "react";
import "./Selector.css";
import arrow from "../../../images/arrow.svg"

const useStyles = makeStyles((theme) => ({

  formControl: {
   display: "flex"
  },
  select:{
    width: "112px",
    height: "40px",
    display: "flex",
    cursor: "pointer",
    justifyContent: "center",
    WebkitAppearance: "none",
    fontFamily: "Josefin Sans",
    fontWeight: "300",
    fontSize: "18px",
    lineHeight: "24px",
    textAlign: "center",
    padding: "8px 12px",
    border: "1px solid #073865",
    background: `url(${arrow})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "90%",
    backgroundPositionY: "50%"
  },

}));

const Selector = ({ quantity, handleQuantityChange, name, maxQuantity }) => {
  const classes = useStyles();

  var items = [];

  for (let i = 1; i <= maxQuantity; i++) {
    items.push(<option key={i} value={i}>{i}</option>)
  }


  return (
    <form className={classes.formControl}>
      <select
        className={classes.select}
        onChange={(e) => handleQuantityChange(e.target.value)}
        defaultValue={name}
      >
      <option value=""  defaultValue className={classes.options}>{name} </option>
      {items}
      </select>
    </form>
  );
};

export default Selector;
