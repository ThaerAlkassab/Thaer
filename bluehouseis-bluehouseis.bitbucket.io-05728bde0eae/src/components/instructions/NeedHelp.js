import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import logo from "../../images/logo2.png";
import CloseIcon from "@material-ui/icons/Close";
import WhatsAppIcon from "../../images/whats.svg";
import callus from "../../images/callus.svg";
import mail from "../../images/footer/mail.svg";
import { WithTransLate } from "../../translating/index";

const useStyles = makeStyles((theme) => ({
  "@keyframes showup": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    height: "fit-content",
    backgroundColor: theme.palette.background.paper,
    padding: "50px 30px",
    position: "absolute",
    width: "80vw",
    maxWidth: "800px",
    maxHeight: "550px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    gap: "38px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "9px",
    animation: "$showup 1s",
  },

  logoClass: {
    width: "250px",
    display: "flex",
    justifySelf: "center",
  },
  title: {
    fontFamily: "Josefin Sans",
    fontWeight: "300",
    fontSize: "20px",
    lineHeight: "20px",
  },
  header: {
    display: "flex",
    width: "100%",
    padding: theme.spacing(2, 4, 3),
    marginTop: "100px",
    justifyContent: "flex-end",
  },
  btn: {
    width: 50,
    height: 50,
    background: "none",
    border: "none",
    position: "fixed",
    right: "45px",
    top: "44px",
    [theme.breakpoints.down("sm")]: {
      right: "0",
      top: "0",
    },
  },
  headerPosition: {
    display: "flex",
    flexDirection: "row",
    width: "56%",
    justifyContent: "space-between",
  },
  bodyContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: "30px",
  },
  btnContainer: {
    width: "200px",
    height: "30px",
    backgroundColor: "#04376F",
    display: "flex",
    padding: "12px 30px",
    alignItems: "center",
    color: theme.palette.primary.light,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyle: {
    fontWeight: "300",
    fontSize: "20px",
    lineHeight: " 18px",
  },
  iconStyle: {
    color: "white",
    width: "24px",
    height: "50px ",
    marginLeft: "-28px",
    decorations: "none",
  },
  link: {
    color: theme.palette.warning.contrastText,
    display: "flex",
    gap: "12px",
    "& img": {
      width: "28px",
    },
  },
}));

const Contact = ({ Icon, content, url }) => {
  const { btnContainer, iconStyle, textStyle } = useStyles();
  return (
    <a className={btnContainer} href={url}>
      {Icon && <img alt="icon" src={Icon} className={iconStyle} />}
      <Typography className={textStyle}>
        <WithTransLate text={content} />
      </Typography>
    </a>
  );
};
export default function NeedHelp({ onClose }) {
  const { root, logoClass, title, btn, bodyContainer, link } = useStyles();
  return (
    <Box className={root}>
      <button className={btn} type="button" onClick={onClose}>
        <CloseIcon />
      </button>
      <img src={logo} className={logoClass} alt="logo" />
      <Typography className={title}>
        <WithTransLate text="You can communicate with us via the followings for instant reply." />
      </Typography>
      <Box className={bodyContainer}>
        <Contact
          content="WHATSAPP"
          Icon={WhatsAppIcon}
          url="https://web.whatsapp.com"
        />
        <Contact
          content="+354 775 6480"
          Icon={callus}
          url="tel:+354 775 6480"
        />
      </Box>
      <Typography className={title}>
        <WithTransLate text="Or you can send us an email. We will reply in a few hours." />
      </Typography>
      <a
        href="mailto:info@bluehouse.is"
        target="_blank"
        rel="noreferrer"
        className={link}
      >
        {" "}
        <img alt="email" src={mail} />{" "}
        <Typography style={{ fontSize: "18px" }} className={title}>
          {" "}
          <u>info@bluehouse.is</u>
        </Typography>
      </a>
    </Box>
  );
}
