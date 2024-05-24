import React from "react";
import Phone from "../images/footer/phone.png";
import Home from "../images/footer/home.png";
import Mail from "../images/footer/mail.png";
import Map from "../images/footer/map.png";
import Whatsapp from "../images/footer/whatsapp.png";
import { useFormik } from "formik";
import * as yup from "yup";
import { makeStyles, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { WithTransLate } from "../../translating/index";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "black",
    display: "flex",
    gap: "calc( 50px + 5vw)",
    justifyContent: "space-around",
    padding: "0 10.5vw 30px",
    marginTop: "-60px",
    fontFamily: "Myriad Pro",
    position: "relative",
    paddingBottom: "150px",
    "& img": {
      marginRight: "0vw",
      marginTop: "-1.8rem",
    },
    [theme.breakpoints.down("xs")]: {
      rowGap: "50px",
      padding: "0 10.5vw 50px",
      marginTop: "0px",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  signNLetter: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: 300,
    fontFamily: "Josefin Sans",
    lineHeight: "20px",
    letterSpacing: "0em",
    color: "black",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px !important",
      lineHeight: "14px !important",
      textAlign: "left",
      width: "105px",
    },
  },
  newsLetter: {
    textAlign: "center",
    fontFamily: "Oblik",
    fontSize: "26px",
    fontWeight: 700,
    lineHeight: "31px",
    letterSpacing: "0em",
    maxWidth: "345px",
    display: "flex",
    flexDirection: "column",
    "& p": {
      margin: "30px 0 20px",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      width: "240px",
      fontSize: "16px",
      lineHeight: "21px",
      marginBottom: "-5px",
      "& p": {
        margin: "18px 0px 10px",
        textAlign: "center",
        width: "240px",
        fontSize: "12px",
        lineHeight: "12px",
      },
    },
  },

  button: {
    fontWeight: "700",
    fontSize: "20px",
    fontHeight: "24px",
    fontFamily: "Josefin Sans",
    background: " #073762",
    width: "240px",
    height: "57px",
    left: "187px",
    color: "#FFFFFF",
    borderRadius: 0,
    cursor: "pointer",
    borderRadius: "5px",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "240px",
      fontSize: "14px",
      height: "40px",
      padding: "25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  aboutus: {
    fontSize: "20px",
    fontWeight: 300,
    fontFamily: "Josefin Sans",
    lineHeight: "20px",
    letterSpacing: "0em",
    color: "black",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px !important",
      lineHeight: "14px !important",
      textAlign: "left",
      width: "105px",
    },
  },
  title: {
    fontFamily: "Oblik",
    fontSize: "26px",
    fontWeight: 700,
    lineHeight: "31px",
    letterSpacing: "0em",
    height: "35px",
    marginBottom: "17px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
      lineHeight: "21px",
      marginBottom: "-10px",
      textAlign: "center",
    },
  },
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    "& a": {
      display: "flex",
      alignItems: "center",
      fontSize: "20px",
      fontWeight: 300,
      lineHeight: "20px",
      letterSpacing: "0em",
      marginLeft: "-12px",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        textAlign: "center",
        marginTop: "20px",
        "& img": {
          width: "40px",
          marginBottom: "3px",
        },
      },
    },
    "& p": {
      paddingLeft: "5px",
      [theme.breakpoints.down("md")]: {
        paddingLeft: "0",
        marginBottom: "0",
      },
    },
    "& img": { width: "40px", height: "40px" },
    [theme.breakpoints.down("md")]: {
      order: 3,
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0",
      borderTop: "1px solid rgba(0, 0, 0, 0.15)",
      width: "300px",
      paddingTop: "25px",
      paddingBottom: "25px",
      "& img": {
        width: "15px",
      },
      "& a": {
        fontSize: "14px !important",
        lineHeight: "14px !important",
        marginLeft: "-7px",
      },
      "& p": {
        paddingLeft: "5px",
      },
    },
  },
  aboutUs: {
    display: "flex",
    flexDirection: "column",
    width: "14vw",
    fontFamily: "Josefin Sans",
    gap: "26px",
    [theme.breakpoints.down("md")]: {
      order: 1,
      alignItems: "center",
      borderTop: "1px solid rgba(0, 0, 0, 0.15)",
      width: "300px",
      paddingTop: "25px",
      "& a": {
        width: "fit-content",
        textAlign: "center",
      },
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "280px",
    },
  },

  textField: {
    fontSize: "20px",
    fontWeight: 300,
    marginBottom: "20px",
    width: "240px",
    height: "57px",
    fontFamily: "Josefin Sans",
    lineHeight: "24px",
    textAlign: "center",
    "& .MuiOutlinedInput-input": {
      fontSize: "20px",
      fontWeight: 300,
      lineHeight: "20px",
      letterSpacing: "1px",
      wordSpacing: "2px",
      textAlign: "left",
      borderRadius: 0,
      padding: "14.5px",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "240px",
      fontSize: "14px",
      lineHeight: "14px",
      "& .MuiOutlinedInput-input": {
        padding: "13px 17px",
        fontSize: "14px",
        lineHeight: "14px",
      },
    },
  },
  highlightedColor: {
    color: "black",
  },
  signUp: {
    maxWidth: "300px",
    display: "flex",
    flexDirection: "column",
    "& p": {
      margin: "30px 0 20px",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      width: "240px",
      "& p": {
        margin: "18px 0px 10px",
        textAlign: "center",
        width: "240px",
        fontSize: "14px",
        lineHeight: "14px",
      },
    },
  },
  followUs: {
    order: "5",
    display: "flex",
    flexDirection: "column",
    width: "300px",
    fontFamily: "Josefin Sans",
    gap: "30px",
    alignItems: "center",
    "& ul": {
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
      padding: "20px 0 48px",
      "& a": {
        cursor: "pointer",
        transition: ".2s",
        "&:hover": {
          transform: "scale(1.1)",
        },
      },
    },
  },
  blueHouse: {
    position: "absolute",
    bottom: "40px",
    borderTop: "1px solid #C4C4C4",
    marginTop: "100px",
    paddingTop: "10px",
    width: "90%",
    textAlign: "center",
    fontWeight: "300",
    [theme.breakpoints.down("xs")]: {
      borderTop: "0px solid",
    },
  },
}));

function Footer() {
  const {
    textField,
    signUp,
    root,
    form,
    signNLetter,
    newsLetter,
    button,
    aboutus,
    title,
    contactInfo,
    aboutUs,
    highlightedColor,
    followUs,
    blueHouse,
  } = useStyles();

  const validationSchema = yup.object({
    name: yup
      .string("Enter your full name")
      .min(4, "Too short!")
      .max(100, "Too Long!")
      .required("Your full name is required"),
    email: yup
      .string("Enter your email")
      .max(255, "Too Long!")
      .email("Enter a valid email")
      .required("Email is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div data-aos="fade-up" id="footer" className={root}>
      <div className={contactInfo}>
        <h1 className={title}>
          <WithTransLate text="CONTACT US" />{" "}
        </h1>
        <a href="tel:+3547756480" className={highlightedColor}>
          <img src={Phone} alt="phone" />
          <p> +354 775 6480</p>
        </a>
        <a
          href="mailto:info@bluehouse.is"
          target="_blank"
          rel="noreferrer"
          className={highlightedColor}
        >
          <img src={Mail} alt="mail" />
          <p>info@bluehouse.is</p>
        </a>
        <a
          href="https://www.google.com/maps?cid=1655029609091171155"
          className={highlightedColor}
        >
          <img src={Map} alt="map" />
          <WithTransLate text="Valhúsabraut 19" /> <br />
          <WithTransLate text="Seltjarnarnes, 170, Iceland" />
        </a>
        <a
          href="https://www.grottanorthernlights.com/"
          target="_blank"
          className={highlightedColor}
          rel="noreferrer"
        >
          <img src={Home} alt="home" />
          <WithTransLate text="Grótta Nothern" /> <br />
          <WithTransLate text="Lights Apartment" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=3547756480&text=&source=&data="
          target="_blank"
          className={highlightedColor}
          rel="noreferrer"
        >
          <img src={Whatsapp} alt="whats" />
          <p> Whatsapp</p>
        </a>
      </div>
      <div className={signUp}>
        <h1 className={newsLetter}>
          <WithTransLate text="OUR NEWSLETTER" />
        </h1>
        <p className={signNLetter}>
          <WithTransLate text="Sign up for our newsletter!" />
        </p>
        <form className={form} onSubmit={formik.handleSubmit}>
          <TextField
            placeholder={WithTransLate({
              text: "Your full name",
              isFunction: true,
            })}
            fullWidth
            id="filled-full-width"
            margin="normal"
            name="name"
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
            // error={formik.touched.name && Boolean(formik.errors.name)}
            // helperText={formik.touched.name && formik.errors.name}
            className={textField}
          />
          {formik.errors.name ? (
            <div
              className="error"
              style={{ width: 200, height: 20, color: "red" }}
              helperText={formik.touched.name && formik.errors.name}
            >
              {formik.errors.name}
            </div>
          ) : null}
          <TextField
            placeholder={WithTransLate({
              text: "Your email address",
              isFunction: true,
            })}
            style={{ borderRadius: 0 }}
            fullWidth
            id="email"
            name="email"
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            // error={formik.touched.email && Boolean(formik.errors.email)}
            // helperText={formik.touched.email && formik.errors.email}
            className={textField}
          />
          {formik.errors.email ? (
            <div
              className="error"
              style={{ width: 200, height: 20, color: "red" }}
              helperText={formik.touched.email && formik.errors.email}
            >
              {formik.errors.email}
            </div>
          ) : null}
          <button className={button} type="submit">
            <WithTransLate text="Sign up" />
          </button>
        </form>
      </div>
      <div className={aboutUs}>
        <h1 className={title}>
          <WithTransLate text="ABOUT US" />
        </h1>
        <a
          href="/house-rules"
          target="_blank"
          rel="noreferrer"
          className={aboutus}
        >
          <WithTransLate text="House Rules & Cancellation Policy" />
        </a>

        <a
          href="https://blog.bluehouse.is/"
          target="_blank"
          rel="noreferrer"
          className={aboutus}
        >
          <WithTransLate text="Blue House Blog" />
        </a>
        <a
          href="https://bluehouse.tourdesk.is/Tour/Item/18676/1/Northern_lights_-_Minibus"
          target="_blank"
          rel="noreferrer"
          className={aboutus}
        >
          <WithTransLate text="Northern Lights" />
        </a>
        <a
          href="https://bluehouse.tourdesk.is/Transportation"
          target="_blank"
          rel="noreferrer"
          className={aboutus}
        >
          <WithTransLate text="Airport Shuttle" />{" "}
        </a>
        <a
          href="https://gnl.ladesk.com/219394-Feedback"
          target="_blank"
          rel="noreferrer"
          className={aboutus}
        >
          <WithTransLate text="Feedback" />
        </a>
        <Link to="/privacy-and-policy" className={aboutus}>
          <WithTransLate text="Imprint  &amp; Privacy Policy" />
        </Link>
      </div>
      <div className={followUs}>
        <h1 className={title}>
          <WithTransLate text="Follow US" />
        </h1>
        <ul>
          <a>
            <img src="./insta.svg" alt="insta" />
          </a>
          <a>
            <img src="./facebook.svg" alt="facebook" />
          </a>
          <a>
            <img src="./Vector-2.svg" alt="pinterest" />
          </a>
          <a>
            <img src="./Group.svg" alt="youtube" />
          </a>
        </ul>
      </div>
      <span className={blueHouse}>Blue House 2022</span>
    </div>
  );
}

export default Footer;
