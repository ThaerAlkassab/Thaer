import { Box, makeStyles, Typography } from "@material-ui/core";
import "../../css/Services.css";
import React, { useContext } from "react";
import clsx from "clsx";
import { Element } from "react-scroll";
import { UserContext } from "../../App";
import RecommendationCustomModal from "../../components/customModal/recommendationCustomModal";
import { WithTransLate } from "../../translating/index";

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    display: "flex",
    marginTop: "20px",
    justifyContent: "space-between",
    width: "83vw",
    [theme.breakpoints.down("md")]: {
      width: "115vw",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop: "40px",
      overflow: "auto",
      // gap: "25px",
      ...props,
    },
  }),
  photoWrapper: (props) => ({
    position: "relative",
    width: props.unitWidth,
    maxWidth: props.maxWidth,
    minWidth: props.minWidth,
    backgroundSize: "cover",
    display: "flex",
    flexWrap: "wrap",
    fontFamily: "Josefin Sans",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "fit-content",
    "& div": {
      visibility: "hidden",
    },
    "&:hover": {
      "& div": {
        visibility: "visible",
      },
    },
    "& img": {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "183px",
      minWidth: "183px",
      maxWidth: "183px",
      "& img": {
        height: "269px",
        width: "183px",
      },
    },
  }),

  imagesRoot: (props) => ({
    gap: "10px",
    display: "flex",
    justifyContent: "space-evenly",
    flexGrow: 1,
    marginLeft: "-60px",
    marginRight: "-20px",
    flexWrap: "wrap",

    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      justifyContent: "space-evenly",
    },
    [theme.breakpoints.down("xs")]: {
      gap: "7%",
      flexWrap: "nowrap",
      justifyContent: "space-evenly",
      marginLeft: "25%",
    },
  }),
  titleStyle: (props) => ({
    whiteSpace: "nowrap",
    transform: "rotate(-90deg)",
    height: "fit-content",
    fontFamily: "Oblik",
    width: "36px",
    fontSize: "24px",
    fontWeight: "700",
    letterSpacing: "0.1em",
    marginLeft: "0px",
    // marginTop: props.customTitleStyle.marginTop,
    marginTop: "15rem",
    [theme.breakpoints.down("xs")]: {
      // margin: `${props.customTitleStyle.marginTopXs} 15px 0`,
      margin: "178px -30px  0 20px",
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "50px",
    },
  }),
  category: {
    fontFamily: "Josefin Sans",
    fontSize: "22px",
    fontWeight: 300,
    paddingLeft: "0px",
    lineHeight: "50px",
    letterSpacing: "0em",
    marginRight: "auto",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      fontWeight: 400,
      marginLeft: "0px",
    },
  },
  actionStyle: {
    margin: " 50px  auto 0px auto",
    display: "flex",
    justifyContent: "center",
  },
  but: {
    display: "block",
    marginTop: "30px",
    [theme.breakpoints.down("xs")]: {
      width: "165px",
      height: "29px",
      fontFamily: "Josefin Sans",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "20px",
    },
  },

 
  descriptionOfGallaryStyle: {
    fontFamily: "Oblik",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "25px",
    letterSpacing: "0.1em",
    color: "#fff",
    width: "fit-content",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    [theme.breakpoints.down("xs")]: {
      width: "40vw",
      gap: "-100px",
      fontSize: "9px",
      marginTop: "30px",
    },
  },
  hoverPart: {
    position: "absolute",
    width: "100%",
    height: "calc(100% - 50px)",
    top: "0",
    right: "auto",
    marginBottom: "calc(50px - 100%)",
    gap: "30px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.52) 0%, rgba(0, 0, 0, 0.25) 100%)",

    [theme.breakpoints.down("md")]: {
      "& div:first-child": {
        width: "100%",
        height: "calc(80% - 100px)",
      },
    },
    "@media(max-width:426px)": {
      width: "100%",
      maxHeight: "100%",
    },
  },
  mobile: {
    display: "none",
  },
}));

export default function Recommendations({
  id,
  backgroundImagesUrlAndTitles,
  action,
  styling,
  description,
  title,
  actionType,
  removeInPhoneSize,
  openSliderOnClick,
  openSliderOnClickKnowMore,
  isClickable,
  ...props
}) {
  /**
   * backgroundImagesUrlAndTitles should be like this =
   * [
   * {
   * background:"url",
   * title:"title"
   * },
   * {
   * background:"url",
   * title:"title"
   * },
   * {
   * background:"url",
   * title:"title"
   * }
   * ]
   */
  // eslint-disable-next-line
  const [modalState, setModal, room, setRoom] = useContext(UserContext);
  const rootStyleInPhoneSize = removeInPhoneSize ? { display: "none" } : {};
  const {
    hoverPart,
    descriptionOfGallaryStyle,
    photoWrapper,
    imagesRoot,
    root,
    titleStyle,
    category,
    actionStyle,
    but,
    hoverImage,
  } = useStyles({ rootStyleInPhoneSize, ...props });

  const clickableParClassNames = isClickable
    ? clsx(photoWrapper, "clickable")
    : photoWrapper;

  return (
    <div id={id} onClick={() => openSliderOnClick && openSliderOnClick(true)}>
      <Element name={id}>
        <div className={root}>
          <h1 className={titleStyle}>
            <WithTransLate text={title} />
          </h1>
          <Box className={imagesRoot}>
            {backgroundImagesUrlAndTitles.map(
              ({ background, title }, index) => {
                return (
                  <div
                    className={clickableParClassNames}
                    // Implement click function here ->
                  >
                    {(description || action) && (
                      <div className={hoverPart}>
                        <ul className={descriptionOfGallaryStyle}></ul>
                        <div
                          className={actionStyle}
                          onClick={() => {
                            setModal({
                              state: true,
                              index: 2,
                            });
                          }}
                        >
                          {action}
                        </div>
                      </div>
                    )}
                    <a href={'https://blog.bluehouse.is/'}>
                    <img alt="ph" src={background} className={hoverImage} />
                    </a>
                    <Typography className={clsx(styling, category)}>
                      <WithTransLate text={title} />
                    </Typography>
                  </div>
                );
              }
            )}
          </Box>
        </div>
        {actionType && (
          <a
            href="https://blog.bluehouse.is/"
            className={clsx("outLinedButton", but)}
          >
            <WithTransLate text={actionType} />
          </a>
        )}
        <div>
          <RecommendationCustomModal />
        </div>
      </Element>
    </div>
  );
}
