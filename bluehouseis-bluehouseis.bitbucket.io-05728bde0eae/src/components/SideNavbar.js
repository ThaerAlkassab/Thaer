/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { Button, Divider, Grid, makeStyles } from "@material-ui/core";
import Logo from "../images/Bluehouse.png";
import Bus from "../images/shuttle.svg";
import Escape from "../images/escape.svg";
import Door from "../images/door.svg";
import Tour from "../images/tour.svg";
import Gallery from "../images/gallery.svg";
import supportImage from "../images/support/whiteBackground_support.svg";
import forumImage from "../images/support/whiteBackground_forum.svg";
import feedbackImage from "../images/support/whiteBackground_feedback.svg";
import Car from "../images/car.svg";
import Bag from "../images/bag.svg";
import Info from "../images/info.svg";
import aboutus from "../images/aboutus.svg";
import Location from "../images/location.svg";
import Instagram from "../images/instagram.svg";
import Facebook from "../images/facebook.svg";
import Whatsapp from "../images/whatsApp.svg";
import Email from "../images/email.svg";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import TranslateMe from "../translating";
import { WithTransLate } from "../translating/index";
import { HashLink } from "react-router-hash-link";

const useStyles = makeStyles((theme) => ({
  root: {
    transitionDuration: "0.5s",
    position: "fixed",
    zIndex: "5",
    top: 0,
    right: (props) => props.right,
    bottom: 0,
    color: theme.palette.primary.main,
    padding: "25px 2vw",
    background: theme.palette.secondary.main,
    overflowX: "hidden",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    maxWidth: "22vw",
    gap: "0px",
    [theme.breakpoints.down("md")]: {
      width: "48.9%",
      maxWidth: "none",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    "&::before": {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      backgroundColor: "black",
    },
  },

  bg: {},

  sliderTitle: {
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "2px",
    padding: "10px 0 20px 0",
    marginTop: "5px",
  },
  sliderLink: {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "5px",
    cursor: "pointer",
  },
  sliderTitle2: {
    fontSize: "16px",
    fontWeight: "400",
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",
  },
  horizontalLine: {
    width: "117%",
    margin: "20px 0 20px -35px",
    border: "0px solid rgba(255, 255, 255, 0.17)",
    background: "rgba(255, 255, 255, 0.17)",
    [theme.breakpoints.down("sm")]: {
      margin: "20px 0 10px -35px",
    },
  },
  sliderInfo: {
    fontSize: "15px",
    fontWeight: "400",
    lineHeight: "10px",
    margin: "10px 0",
    color: "white",
  },
  sliderLogo: {
    width: "144px",
    marginBottom: "20px",
  },
  sliderEscape: {
    position: "fixed",
    right: "10px",
    width: "fit-content",
    padding: 0,
    "&:focus": {
      outline: "none",
    },
  },
  groupIcons: {
    display: "flex",
    justifyContent: "space-between",
    width: "170px",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0px",
    },
  },
  sliderIcons: {
    transform: "scale(1.2)",
    marginTop: "-22px",
    marginLeft: "-5px",
  },
  sliderIconss: {
    transform: "scale(1.0)",
    marginTop: "-26px",
    marginLeft: "-5px",
  },
  highlightedColor: {
    color: "white",
  },
  socialIcons: {
    transform: "scale(.9)",
  },
  linksWrapper: {
    padding: "25px 1vw",
  },
  contactus: {
    marginLeft: "10px",
  },
  feedback: {
    display: "none",
  },
  support: {
    display: "none",
  },
  forum: {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    root: {
      padding: "30px 6vw",
      maxHeight: "calc(100vh - 0px)",
    },
    sliderEscape: {
      right: "88px",
      top: "40px",
    },
    sliderLogo: {
      width: "110px",
      marginBottom: "50px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    root: {
      maxWidth: "290px",
      right: "unset",
      left: (props) => props.right,
    },
    sliderTitle: {
      fontSize: "16px",
      lineHeight: "5px",
    },
    sliderLink: {
      fontSize: "16px",
    },
    recommendations: {},
    feedback: {
      display: "flex",
    },
    support: {
      display: "flex",
    },
    forum: {
      display: "flex",
    },
  },
}));

function SideNavbar(props) {
  const {
    recommendations,
    linksWrapper,
    root,
    sliderTitle,
    sliderLink,
    sliderInfo,
    sliderLogo,
    groupIcons,
    sliderTitle2,
    socialIcons,
    sliderIcons,
    sliderIconss,
    sliderEscape,
    support,
    feedback,
    forum,
    horizontalLine,
    contactus,
    highlightedColor,
    bg,
  } = useStyles(props);
  const { handleOpenAndCloseSideNavbar } = props;
  const { right } = props;
  const scroll = () => handleOpenAndCloseSideNavbar("-600px");

  return (
    <div className={root}>
      <div className={bg} />
      <RouterLink onClick={scroll} to="/">
        <img src={Logo} alt="Bluehouse_logo" className={sliderLogo} />
      </RouterLink>
      <Button className={sliderEscape} onClick={scroll}>
        <img src={Escape} alt="Bluehouse_logo" />
      </Button>
      <TranslateMe scroll={scroll} />
      <Divider className={horizontalLine} />
      <Grid className={linksWrapper} container spacing={3}>
        <Grid
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
        >
          <p className={sliderTitle}>
            <WithTransLate text="BOOKINGS AND RENTAL" />
          </p>
        </Grid>
        <Grid
          onClick={scroll}
          component={"a"}
          href="#1"
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
        >
          <Grid item>
            <img className={sliderIcons} src={Bus} alt="" />
          </Grid>
          <Grid item>
            <a
              href="https://bluehouse.tourdesk.is/Transportation"
              target="_blank"
              rel="noreferrer"
              className={highlightedColor}
            >
              <p className={sliderLink}>
                <WithTransLate text="Book Airport Shuttle" />
              </p>
            </a>
          </Grid>
        </Grid>
        <Grid
          onClick={scroll}
          component={"a"}
          href="#2"
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
        >
          <Grid item>
            <img className={sliderIcons} src={Door} alt="" />
          </Grid>
          <Grid item>
            <a
              href="https://beds24.com/booking2.php?propid=3578&layout=1"
              target="_blank"
              rel="noreferrer"
              className={highlightedColor}
            >
              <p className={sliderLink}>
                <WithTransLate text="Book a Room" />
              </p>
            </a>
          </Grid>
        </Grid>
        <Grid onClick={scroll} container item spacing={2} alignItems="center">
          <Grid item>
            <img className={sliderIcons} src={Tour} alt="" />
          </Grid>
          <Grid item>
            <a
              href="https://bluehouse.tourdesk.is/Tour"
              target="_blank"
              rel="noreferrer"
              className={highlightedColor}
            >
              <p className={sliderLink}>
                <WithTransLate text="Book Day Tours" />
              </p>
            </a>
          </Grid>
        </Grid>
        <Grid onClick={scroll} container item spacing={2} alignItems="center">
          <Grid item>
            <img className={sliderIcons} src={Car} alt="" />
          </Grid>
          <Grid item>
            <a
              href="https://bluehouse.tourdesk.is/CarRental"
              target="_blank"
              rel="noreferrer"
              className={highlightedColor}
            >
              <p className={sliderLink}>
                <WithTransLate text="Rent a Car" />
              </p>
            </a>
          </Grid>
        </Grid>
        <Grid
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
        >
          <p className={sliderTitle}>
            <WithTransLate text="GENERAL INFORMATION" />
          </p>
        </Grid>
        <Grid
          className={highlightedColor}
          component={RouterLink}
          onClick={scroll}
          to="/view-gallery"
          duration={500}
          offset={-150}
          container
          item
          spacing={2}
          alignItems="center"
        >
          <Grid item>
            <img className={sliderIconss} src={Gallery} alt="" />
          </Grid>
          <Grid item>
            <p className={sliderLink}>
              <WithTransLate text="Gallery" />
            </p>
          </Grid>
        </Grid>
        <HashLink
          to="/#recommendations"
          className={highlightedColor}
          activeClassName={recommendations}
          scroll={(el) => el.scrollIntoView({ behavior: "auto", block: "end" })}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Grid item>
            <img
              className={sliderIconss}
              src={Bag}
              alt=""
              style={{ marginLeft: "20%" }}
            />
          </Grid>
          <Grid item>
            <p className={sliderLink} style={{ marginLeft: "18%" }}>
              <WithTransLate text="Recommendations" />
            </p>
          </Grid>
        </HashLink>
        <Grid
          container
          item
          spacing={2}
          alignItems="center"
          component={RouterLink}
          onClick={scroll}
          to="/About-Us"
          duration={500}
          offset={-200}
          className={highlightedColor}
        >
          <Grid item>
            <img className={sliderIconss} src={aboutus} alt="" />
          </Grid>
          <Grid item>
            <p className={sliderLink}>
              <WithTransLate text="About us" />
            </p>
          </Grid>
        </Grid>

        <p className={sliderTitle}>
          <WithTransLate text="HELP AND SUPPORT" />
        </p>
        <Grid
          component={Link}
          onClick={scroll}
          to="FAQ"
          duration={500}
          offset={-145}
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
        >
          <Grid onClick={scroll} container item spacing={2} alignItems="center">
            <Grid item>
              <img className={sliderIconss} src={Info} alt="" />
            </Grid>
            <Grid item>
              <p className={sliderLink}>
                <WithTransLate text="FAQ" />
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          className={support}
          onClick={scroll}
          container
          item
          spacing={2}
          alignItems="center"
        >
          <Grid item>
            <img className={sliderIconss} src={supportImage} alt="" />
          </Grid>
          <Grid item>
            <a
              href="https://gnl.ladesk.com/"
              target="_blank"
              rel="noreferrer"
              className={highlightedColor}
            >
              <p className={sliderLink}>
                <WithTransLate text="Support" />
              </p>
            </a>
          </Grid>
        </Grid>
        <Grid
          className={forum}
          onClick={scroll}
          container
          item
          spacing={2}
          alignItems="center"
        >
          <Grid item>
            <img className={sliderIcons} src={forumImage} alt="" />
          </Grid>
          <Grid item>
            <a
              href="https://support.bluehouse.is/105159-Forum"
              target="_blank"
              rel="noreferrer"
              className={highlightedColor}
            >
              <p className={sliderLink}>
                <WithTransLate text="Forum" />
              </p>
            </a>
          </Grid>
        </Grid>
        <Grid
          className={feedback}
          onClick={scroll}
          container
          item
          spacing={2}
          alignItems="center"
        >
          <Grid item>
            <img className={sliderIconss} src={feedbackImage} alt="" />
          </Grid>
          <Grid item>
            <a
              href="https://gnl.ladesk.com/219394-Feedback"
              target="_blank"
              rel="noreferrer"
              className={highlightedColor}
            >
              <p className={sliderLink}>
                <WithTransLate text="Feedback" />
              </p>
            </a>
          </Grid>
        </Grid>
        <Grid
          container
          item
          spacing={2}
          alignItems="center"
          component={Link}
          onClick={scroll}
          to="Map"
          duration={500}
          offset={-140}
        >
          <Grid item>
            <img className={sliderIconss} src={Location} alt="" />
          </Grid>
          <Grid item>
            <p className={sliderLink}>
              <WithTransLate text="Map" />
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="column" className={contactus}>
        <p className={sliderTitle2}>
          <WithTransLate text="Contact us" />
        </p>
        <div className={groupIcons}>
          <a
            onClick={scroll}
            href="https://www.instagram.com/bluehousebb/"
            target="_blank"
            rel="noreferrer"
          >
            <img className={socialIcons} src={Instagram} alt="" />
          </a>
          <a
            onClick={scroll}
            href="https://www.facebook.com/bluehouseiceland"
            target="_blank"
            rel="noreferrer"
          >
            <img className={socialIcons} src={Facebook} alt="" />
          </a>
          <a
            onClick={scroll}
            href="https://api.whatsapp.com/send?phone=3547756480&text=&source=&data="
            target="_blank"
            rel="noreferrer"
          >
            <img className={socialIcons} src={Whatsapp} alt="" />
          </a>
          <a
            onClick={scroll}
            href="https://gnl.ladesk.com/submit_ticket"
            target="_blank"
            rel="noreferrer"
          >
            <img className={socialIcons} src={Email} alt="" />
          </a>
        </div>
        <Divider className={horizontalLine} />
        <p className={sliderInfo}>Blue House B&B</p>
        <a
          onClick={scroll}
          href="mailto:info@bluehouse.is"
          target="_blank"
          rel="noreferrer"
          className={highlightedColor}
        >
          <p className={sliderInfo}>info@bluehouse.is</p>{" "}
        </a>
        <a onClick={scroll} href="tel:+3547756480">
          <p className={sliderInfo}>+354 775 6480</p>
        </a>
      </Grid>
    </div>
  );
}

export default SideNavbar;
