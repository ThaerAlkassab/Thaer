import { makeStyles } from "@material-ui/core";
import React from "react";
import { WithTransLate } from "../../translating/index";

const useStyles = makeStyles((theme) => ({
  rule: {
    display: "flex",
    flexDirection: "row",
    textAlign: "left",
    marginBottom: "30px,",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
    },
  },
  ruleText: {
    marginLeft: "50px",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "24px",
    lineHeight: "25px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      marginLeft: 0,
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 20px",
      fontSize: "14px",
    },
  },
  iconStyle: {
    maxWidth: "30px",
  },
}));

function Rule({ Icon, text }) {
  const { rule, ruleText, iconStyle } = useStyles();
  return (
    <div className={rule}>
      {Icon && <img src={Icon} className={iconStyle} alt="icon" />}
      <p className={ruleText}>
        <WithTransLate text={text} />
      </p>
    </div>
  );
}

export default Rule;
