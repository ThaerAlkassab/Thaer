import React, { useState, useEffect } from "react";
import { Paper, makeStyles, Box } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import clsx from "clsx";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import { WithTransLate } from "../translating/index";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  modalGalery: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      width: "100vw",
      height: "83vh",
      marginTop: "25vh",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      height: "55vh",
      marginTop: "25vh",
    },
  },

  headerRooms: {
    flex: 1,
    width: "100%",
    display: "flex",
    marginTop: "-10px",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      marginTop: "10px",
    },

    [theme.breakpoints.down("xs")]: {},
  },
  navCenter: {
    width: "90%",
    display: "flex",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("xs")]: {
      padding: "20px",
    },
  },

  Button: {
    background: "none !important",
    border: "none !important ",
    width: "30px !important",
    height: "30px !important",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  ButtonPosition: {
    display: "flex",
    flex: 1,
    width: "100vw",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 0 30px 0",
    [theme.breakpoints.down("md")]: {
      marginTop: "100px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "20px",
    },
  },
  main: {
    flex: 8,
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  slider: {
    maxWidth: "832px",
    width: "calc(100% - 288px)",
    height: "60%",
    opacity: 0,
    position: "absolute",
    transition: "all 0.3s linear",
    [theme.breakpoints.down("md")]: {
      height: "30%",
    },

    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      opacity: "1!important",
      transform: "translateZ(0)",
    },
  },

  slideImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "50px",
      width: "75vw",
      height: "35.2vh",
    },
  },

  activeSlide: {
    opacity: "1!important",
    transform: "translateX(0)",
  },
  lastSlide: {
    transform: "translateX(-100%)",
  },
  nextSlide: {
    transform: "translateX(100%)",
  },

  navigationButtons: {
    position: "absolute",
    top: "35%",
    transform: "translateY(-50%)",
    width: "2rem !important",
    height: "2rem !important",
    display: "grid",
    placeItems: "center",
    borderColor: "transparent",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.3s linear",
    backgroundColor: "transparent",
    "&:hover": {
      background: theme.palette.primary.dark,
    },
  },
  next: {
    right: "calc(50% - 462px)",
    [theme.breakpoints.down("xs")]: {
      right: "0px",
      marginTop: "25%",
      "&:hover": {
        background: "none",
      },
    },
  },

  prev: {
    left: "calc(50% - 462px)",
    "&:hover": {
      background: theme.palette.primary.dark,
    },
    [theme.breakpoints.down("xs")]: {
      left: "0px",
      marginTop: "25%",
      "&:hover": {
        background: "none",
      },
    },
  },

  slidesText: {
    position: "absolute",
    bottom: "35%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "70%",
    [theme.breakpoints.down("md")]: {
      bottom: "55%",
    },

    [theme.breakpoints.down("xs")]: {},
  },

  h3Text: {
    fontSize: "25px",
  },
  sliderBtn: {
    color: theme.palette.primary.dark,
    border: "none",
    background: "none",
  },
  navCenterBtn: {
    background: "none!important",
    border: "none!important",
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down("xs")]: {},
  },
  active: {
    color: theme.palette.primary.contrastText,
  },
  activeText: {
    color: theme.palette.primary.contrastText,
    border: "none",
    background: "none",
  },
  roomDescription: {
    position: "absolute",
    bottom: "calc(29% - 37px)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      bottom: "55%",
    },

    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  textOrigin: {
    position: "absolute",
    width: "40%",
    height: "60%",
    opacity: 0,
    transition: "all 0.3s linear",
    textAlign: "center",
    margin: "30px",
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },

    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  textOriginText: {
    color: "#14202b",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "30px",
    margin: "64px -270px 0",
    textAlign: "justify",
    width: "90vw",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  sliderSecondButton: {
    width: "145px",
    height: "49px",
    fontFamily: "Josephin 18",
    background: "none",
    border: "1px solid #14202B",
    borderRadius: "5px",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "18px",
    textAlign: "center",
    color: "#14202b",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      lineHeight: "20px",
      width: "128px",
      height: "29px  ",
      borderRadius: "0",
    },
    "&:hover": {
      background:
        "linear-gradient( 180deg,#04376f 99.99%,rgba(255, 255, 255, 0) 100%),   #ffffff",
      color: "#ffffff",
      borderColor: "#04376f !important",
    },
  },
  rootProgress: {
    width: "20%",
    height: "1px",
    margin: "8px 15px 0 15px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  numbers: {
    fontSize: "18px",
    lineHeight: "20px",
  },
  containerProgress: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "-25px",
  },
  imageTitle: {
    display: "flex",
    justifyContent: "space-between",
    width: "calc(100% - 240px)",
    maxWidth: "1000px",
    "& h2": {
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: "22px",
      letterSpacing: "0px",
    },
  },
  imagesTitleAndProgressWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "35px",
  },
  mobileView: {
    zIndex: "999",
    position: "absolute",

    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  closeButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const SliderPhoto = ({
  handleClose,
  title,
  data,
  withImageTitles = true,
  action,
  mobileViewData,
}) => {
  const {
    numbers,
    containerProgress,
    rootProgress,
    modalGalery,
    roomDescription,
    headerRooms,
    Button,
    ButtonPosition,
    navCenterBtn,
    textOriginText,
    sliderSecondButton,
    navCenter,
    main,
    slider,
    slideImg,
    activeSlide,
    lastSlide,
    nextSlide,
    next,
    prev,
    imagesTitleAndProgressWrapper,
    navigationButtons,
    closeButton,
  } = useStyles();

  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(index);

  // Reset Index
  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > data.length - 1) {
      setIndex(0);
    }
  }, [index, data, data.length, setIndex]);

  // Auto slider
  useEffect(() => {
    let Slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => clearInterval(Slider);
  }, [index, setIndex]);

  // Set ProgressBar
  useEffect(() => {
    const length = 97 / data.length;
    for (let i = 1; i < data.length; i++) {
      if (index === 0) setProgress(length);
      else if (index === data.length - 1) setProgress(100);
      else if (index === i) setProgress((i + 1) * length);
    }
  }, [index, data.length, setProgress, progress]);

  const pcSizeRender = (
    <div className={main}>
      {data.map((item, slideIndex) => {
        const { id, background, description } = item;
        let position = nextSlide;
        if (slideIndex === index) {
          position = activeSlide;
        }
        if (
          slideIndex === index - 1 ||
          (index === 0 && slideIndex === data.length - 1)
        ) {
          position = lastSlide;
        }

        // _______IMAGE & DESCRIPTION_______
        return (
          <div className={clsx(position, slider)} slider slide key={id}>
            <img className={slideImg} src={background} alt="" />
            <p className={textOriginText}>{description}</p>
          </div>
        );
        // /////////////////////
      })}
      <button
        onClick={() => {
          setIndex(index - 1);
        }}
        className={clsx(navigationButtons, prev)}
      >
        <NavigateBeforeIcon />
      </button>
      <button
        onClick={() => {
          setIndex(index + 1);
        }}
        className={clsx(navigationButtons, next)}
      >
        <NavigateNextIcon />
      </button>

      {/* ________SLIDER_______ */}
      <div className={roomDescription}>
        <Box className={imagesTitleAndProgressWrapper} width="100%">
          <div className={containerProgress}>
            <Typography>
              <span className={numbers}>{index + 1}</span>
            </Typography>
            <LinearProgress
              className={rootProgress}
              variant="determinate"
              color="secondary"
              aria-valuemax="100"
              value={progress}
            />
            <Typography>
              {" "}
              <span className={numbers}>{data.length}</span>
            </Typography>
          </div>
        </Box>
      </div>
      {/* ______________________ */}
    </div>
  );

  return (
    <div>
      <Paper className={modalGalery}>
        <nav className={headerRooms}>
          <div className={navCenter}>
            <button className={navCenterBtn} type="button">
              <h2>
                <WithTransLate text={title} />
              </h2>
            </button>
          </div>
          <div className={closeButton}>
            <button type="button" className={Button} onClick={handleClose}>
              <CloseIcon />
            </button>
          </div>
        </nav>
        {pcSizeRender}
        <div className={ButtonPosition}>
          <Link to="/beds24">
            <button className={sliderSecondButton} type="button">
              <WithTransLate text="BOOK NOW" />
            </button>
          </Link>
        </div>
      </Paper>
    </div>
  );
};

export default SliderPhoto;
