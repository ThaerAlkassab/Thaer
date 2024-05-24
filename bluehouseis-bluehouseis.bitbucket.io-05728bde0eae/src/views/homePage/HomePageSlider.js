import React, { useEffect, useRef, useState } from "react";
import nextIcon from "../../images/next.png";
import backIcon from "../../images/back.png";
import indexCircle from "../../images/index-circle.svg";
import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import Facebook from "../../images/Header_icons/headerSocialIcons/facebook.svg";
import Tripadvisor from "../../images/Header_icons/headerSocialIcons/tripadvisor_icon.svg";
import instaIcon from "../../images/Header_icons/headerSocialIcons/insta.svg";
import houserules_mobile from "../../images/houserules_mobile.png";
import headerLogoMobileSize from "../../images/headerLogoMobileSize.svg";
import Email from "../../images/Header_icons/headerSocialIcons/email.svg";
import Whatsapp from "../../images/Header_icons/headerSocialIcons/whats.svg";
import clsx from "clsx";
import intro from "../../videos/intro.mp4";
import { WithTransLate } from "../../translating/index";
//#region slider images

import slide1 from "../../images/homePageSlider/slide1.jpg";
import slide2 from "../../images/homePageSlider/slide2.jpg";
import slide3 from "../../images/homePageSlider/slide3.jpg";
import slide4 from "../../images/homePageSlider/slide4.jpg";
import slide5 from "../../images/homePageSlider/slide5.jpg";
import slide6 from "../../images/homePageSlider/slide6.jpg";

//#endregion

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    width: "81vw",
    margin: "-55px auto 0",
    padding: "0",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  "@media only screen and (min-device-width: 768px) and (max-device-width: 800px)":
    {
      root: {
        display: "flex",
        justifyContent: "space-around",
        width: "115vw",
        margin: "50px auto ",
        padding: "0",
        [theme.breakpoints.up("md")]: {
          flexDirection: "row",
        },
      },
    },
  sliderRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    width: `80vw`,
    height: "590px",
    [theme.breakpoints.down("md")]: {
      width: `87vw`,
    },
    [theme.breakpoints.down("xs")]: {
      width: "calc(0vw - 0px)",
    },
  },
  "@media(max-width:660px)": {
    root: {
      marginTop: "10vh",
      marginLeft: "-43px",
      marginRight: "0px",
    },
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    overflow: "hidden",
    scrollBehavior: "smooth",
    width: "75vw",
    height: "100%",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  gridListTile: {
    height: "100% !important",
    padding: "0 !important",
    width: "100%",
    backgroundSize: "cover",

    "@media(max-width:426px)": {
      display: "none",
    },
    "& video": {},
  },

  image: {
    width: "100%",
    height: "100%",
    display: "block",
    margin: "auto",
    objectFit: "contain",
    [theme.breakpoints.up("md")]: {
      width: "100vw",
    },
  },
  video: {
    width: "100%",
    height: "100%",
  },
  nextButton: {
    position: "absolute",
    bottom: "50%",
    zIndex: 3,
    left: "90.5%",
    transform: " translate(0, 50%)",
    backgroundColor: "transparent",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  backButton: {
    position: "absolute",
    top: "50%",
    zIndex: 1,
    right: "90.5%",
    transform: " translate(0, -50%)",
    backgroundColor: "transparent",
    "&:hover": {
      // backgroundColor: "#007bff",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  indexCircle: {
    transform: "translate(-50%, -100%)",
    top: "100%",
    left: "50%",
    position: "sticky",
    display: " grid",
    gap: "10px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  indexCircleButton: {
    padding: "15px 5px",
    height: "fit-content",
    background: "none",
    zIndex: "3",
    border: "none",
  },
  socialIcons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: " 45px 0 0 0",
    gap: "31px",
    "& img": {
      width: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  iconz: {
    width: "20px",
    height: "20px",
  },
  whats: {
    width: "21.5px",
    height: "21px",
  },
  trip: {
    filter:
      "invert(14%)sepia(44%)saturate(3036%)hue-rotate(192deg)brightness(96%)contrast(95%)",
  },
  emai: {
    width: "20px",
    height: "16px",
  },
  titleStyle: {
    fontFamily: "Oblik",
    transform: "rotate(-90deg)",
    whiteSpace: "nowrap",
    height: "fit-content",
    width: "fit-content",
    fontSize: "24px",
    fontWeight: "700",
    letterSpacing: "0.1em",
    margin: (props) => props.titleMargins,
    [theme.breakpoints.down("sm")]: {
      transform: "none",
      margin: "15px 0 -40px !important",
      width: "unset",
      height: "unset",
      textAlign: "center",
      padding: "0",
      marginBottom: "-35px",
      zIndex: 1,
    },
  },
  sliderReplacement: {
    width: "150vw",
    display: "none",
    backgroundSize: "cover",
    background: `url(${houserules_mobile})`,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    "& h1": {
      fontFamily: "Oblik",
      fontSize: "14px",
      fontWeight: "bold",
      textAlign: "center",
      color: "#fff",
      marginTop: "20px",
      marginBottom: "-15%",
    },
    "@media(max-width:767px)": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "-460px",
      marginLeft: "157px",
      width: "100vw",
      height: "41vh",
      marginTop: "-500px",
    },
  },
  arrow: {
    width: "2vw",
    maxWidth: "17px",
  },
}));

const sliderData = [
  {
    img: slide1,
    title: "Image",
    author: "author",
  },
  {
    img: slide2,
    title: "Image",
    author: "author",
  },
  {
    img: slide3,
    title: "Image",
    author: "author",
  },
  {
    img: slide4,
    title: "Image",
    author: "author",
  },
  {
    img: slide5,
    title: "Image",
    author: "author",
  },
  {
    img: slide6,
    title: "Image",
    author: "author",
  },
];

function Slider({ classes, title }) {
  const ref = useRef(null);
  const screenWidth = window.innerWidth;
  const offset =
    screenWidth > 1280
      ? screenWidth * 0.75
      : screenWidth > 600
      ? screenWidth * 0.87
      : screenWidth - 20;
  const videoDuration = 43000,
    imageDuration = 2500;

  const [indexValue, setIndexValue] = useState(0);
  const [duration, setDuration] = useState(videoDuration);
  const imagesLength = sliderData.length;
  const timeoutRef = React.useRef(null);
  const videoRef = React.useRef();

  try {
    ref.current.scrollLeft = indexValue * offset;
  } catch (error) {
    console.log(error);
  }

  const scroll = (isBack) => {
    isBack ? setIndexValue(indexValue - 1) : setIndexValue(indexValue + 1);
  };

  if (indexValue >= 7) {
    setIndexValue(indexValue === 0);
  } else if (indexValue < 0) {
    setIndexValue(indexValue === 0);
  }
  if (videoDuration > 43000) {
    setDuration(videoRef === 0);
  }

  const getStyle = (index) =>
    index === indexValue
      ? {
          border: "5px solid #04376F",
          borderRadius: "50%",
          width: 0,
          backgroundColor: "#04376f",
        }
      : {};

  useEffect(() => {
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
    resetTimeout();
    timeoutRef.current = setTimeout(async () => {
      if (imagesLength <= indexValue + 1) {
        const video = await videoRef.current;
        setIndexValue(0);
        setDuration(videoDuration);
        for (var i = 0; i < videoDuration; i++) {
          if (!video) return;
          video.currentTime = "0";
          video.play();
        }
      } else {
        setIndexValue(indexValue + 1);
        setDuration(imageDuration);
      }
    }, duration);

    return () => {
      resetTimeout();
    };
  }, [setIndexValue, indexValue, imagesLength, duration]);

  return (
    <div className={classes.sliderRoot}>
      <Button
        key={"back"}
        onClick={() => scroll(true)}
        className={classes.backButton}
      >
        <img className={classes.arrow} alt="back icon" src={backIcon} />
      </Button>
      <ImageList ref={ref} className={classes.gridList} cols={1}>
        <ImageListItem key={"video"} className={classes.gridListTile}>
          <video
            style={{ height: "111%" }}
            loop
            className={classes.video}
            autoPlay
            muted
          >
            <source src={intro} type="video/mp4" />
          </video>
        </ImageListItem>
        {sliderData.map((tile, index) => (
          <ImageListItem key={index} className={classes.gridListTile}>
            <img className={classes.image} src={tile.img} alt={tile.title} />
          </ImageListItem>
        ))}
      </ImageList>
      {!title && (
        <Box
          style={{
            gridTemplateColumns: `repeat(${sliderData.length + 1} ,1fr)`,
          }}
          className={classes.indexCircle}
        >
          <button
            key={0}
            className={clsx(classes.indexCircleButton, "clickable")}
            onClick={() => {
              setIndexValue(0);
              setDuration(videoDuration);
            }}
          >
            <img alt={"image " + 0} style={getStyle(0)} src={indexCircle} />
          </button>
          {sliderData.map((tile, index) => {
            const style = getStyle(index + 1);
            return (
              <>
                <button
                  key={index + 1}
                  className={clsx(classes.indexCircleButton, "clickable")}
                  onClick={() => {
                    setIndexValue(index + 1);
                    setDuration(2400);
                  }}
                >
                  <img
                    alt={"image " + index + 1}
                    style={style}
                    src={indexCircle}
                  />
                </button>
              </>
            );
          })}
        </Box>
      )}
      <Button
        key={"next"}
        onClick={() => scroll(false)}
        className={classes.nextButton}
      >
        <img alt="next icon" className={classes.arrow} arrow src={nextIcon} />
      </Button>
    </div>
  );
}

export default function Header({ title, titleMargins }) {
  const classes = useStyles({ titleMargins });
  return (
    <Box className={classes.root}>
      {title ? (
        <Typography className={classes.titleStyle}>
          <WithTransLate text={title} />
        </Typography>
      ) : (
        <Box className={classes.socialIcons}>
          <a
            href="https://www.instagram.com/bluehousebb/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={instaIcon}
              title="Instagram"
              alt="instagram"
              className={classes.iconz}
            />
          </a>
          <a
            href="https://www.facebook.com/bluehouseiceland"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Facebook}
              title="facebook"
              alt="facebook"
              className={classes.iconz}
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=3547756480&text=&source=&data="
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Whatsapp}
              title="Whatsapp"
              alt="whatsapp"
              className={classes.whats}
            />
          </a>
          <a
            href="https://www.tripadvisor.com/Hotel_Review-g189970-d1915669-Reviews-Blue_House-Reykjavik_Capital_Region.html"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Tripadvisor}
              alt="trip-advisor"
              title="Tripadvisor"
              className={classes.trip}
            />
          </a>
          <a
            href="https://gnl.ladesk.com/submit_ticket"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Email} title="Email" alt="" className={classes.emai} />
          </a>
        </Box>
      )}
      <Box>
        <Slider title={title} classes={classes} />
        <div className={classes.sliderReplacement}>
          <img src={headerLogoMobileSize} alt="logo" />
          <h1>
            <WithTransLate text="COLOUR YOUR EXPERIENCE" />
          </h1>
        </div>
      </Box>
    </Box>
  );
}
