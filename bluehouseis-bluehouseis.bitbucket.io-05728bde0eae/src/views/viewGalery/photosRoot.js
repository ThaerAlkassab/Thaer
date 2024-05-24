import { Box, makeStyles, Typography } from "@material-ui/core";
import "../../css/Services.css";
import React, { useContext, useState } from "react";
import clsx from "clsx";
import { Element } from "react-scroll";
import { UserContext } from "../../App";
import CustomModal from "../../components/customModal/CustomModal";
import { WithTransLate } from "../../translating/index";

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    display: "flex",
    marginTop: "20px",
    justifyContent: "space-between",
    width: "83vw",
    [theme.breakpoints.down("xs")]: {
      overflow: "auto",
      width: "100vw",
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
      width: "115%",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    [theme.breakpoints.down("xs")]: {
      width: "59.1vw",
      "& img": {
        height: "269px",
        width: "221px",
      },
    },
  }),

  imagesRoot: (props) => ({
    gap: "48px",
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
      gap: "30px",
      flexWrap: "nowrap",
      justifyContent: "space-between",
      marginLeft: "0px",
    },
  }),
  titleStyle: (props) => ({
    whiteSpace: "nowrap",
    transform: "rotate(-90deg)",
    height: "fit-content",
    fontFamily: "Josefin Sans",
    width: "36px",
    fontSize: "24px",
    fontWeight: "700",
    letterSpacing: "0.1em",
    marginLeft: "0px",
    marginTop: props.customTitleStyle.marginTop,
    [theme.breakpoints.down("xs")]: {
      margin: `${props.mobileTitle.mobileMarginTop} 20px 0`,
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "50px",
    },
  }),
  category: {
    fontFamily: "Josefin Sans",
    fontSize: "22px",
    fontWeight: 300,
    paddingLeft: "5px",
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
  },
  hoverPart: {
    position: "absolute",
    width: "100%",
    height: "calc(100% - 50px)",
    top: "0",
    right: "auto",
    marginBottom: "calc(50px - 100%)",
    gap: "0px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.52) 0%, rgba(0, 0, 0, 0.25) 100%)",

    [theme.breakpoints.down("md")]: {
      "& div:first-child": {
        display: "none",
      },
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  mobile: {
    display: "none",
  },
}));

export default function PhotosRoot({
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
  const [initialCategory, setInitialCategory] = useState(0);
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
  } = useStyles({ ...props });

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
                    onClick={() => {
                      title === "Double/Twin"
                        ? setRoom({ double: true })
                        : title === "Triple / Quadruple"
                        ? setRoom({ triple: true })
                        : title === "Family Room"
                        ? setRoom({ family: true })
                        : title === "Apartments"
                        ? setRoom({ apartments: true })
                        : title === "Blue House"
                        ? setRoom({ blueHouse: true })
                        : title === "Green House"
                        ? setRoom({ greenHouse: true })
                        : title === "Grótta Northern Lights"
                        ? setRoom({ gNorthernLights: true })
                        : title === "Northern Lights"
                        ? setRoom({ northernLights: true })
                        : title === "Neighborhood"
                        ? setRoom({ neighborhood: true })
                        : title === "Activities"
                        ? setRoom({ activities: true })
                        : setRoom(false);
                    }}
                  >
                    {(description || action) && (
                      <div className={hoverPart}>
                        <ul className={descriptionOfGallaryStyle}>
                          <li>
                            {title === "Rooms" ? (
                              <WithTransLate
                                text={description[0][0]
                                  .toString()
                                  .split(",")
                                  .join(" ")}
                              />
                            ) : title === "Houses" ? (
                              <WithTransLate
                                text={description[1][0]
                                  .toString()
                                  .split(",")
                                  .join(" ")
                                  .toUpperCase()}
                              />
                            ) : title === "Surroundings" ? (
                              <WithTransLate
                                text={description[2][0]
                                  .toString()
                                  .split(",")
                                  .join(" ")
                                  .toUpperCase()}
                              />
                            ) : null}
                          </li>
                          <li>
                            {title === "Rooms" ? (
                              <WithTransLate
                                text={description[0][1]
                                  .toString()
                                  .split(",")
                                  .join(" ")
                                  .toUpperCase()}
                              />
                            ) : title === "Houses" ? (
                              <WithTransLate
                                text={description[1][1]
                                  .toString()
                                  .split(",")
                                  .join(" ")
                                  .toUpperCase()}
                              />
                            ) : title === "Surroundings" ? (
                              <WithTransLate
                                text={description[2][1]
                                  .toString()
                                  .split(",")
                                  .join(" ")
                                  .toUpperCase()}
                              />
                            ) : null}
                          </li>
                          <li>
                            {title === "Rooms" ? (
                              <WithTransLate
                                text={description[0][2]
                                  .toString()
                                  .split(",")
                                  .join(" ")
                                  .toUpperCase()}
                              />
                            ) : title === "Houses" ? (
                              <WithTransLate
                                text={description[1][2]
                                  .toString()
                                  .split(",")
                                  .join(" ")
                                  .toUpperCase()}
                              />
                            ) : title === "Surroundings" ? (
                              <WithTransLate
                                text={description[2][2]
                                  .toString()
                                  .split(",")
                                  .join(" ")
                                  .toUpperCase()}
                              />
                            ) : null}
                          </li>
                        </ul>

                        <div
                          className={actionStyle}
                          onClick={() => {
                            setInitialCategory(index);
                            setModal({
                              state: true,
                              index: index,
                            });
                          }}
                        >
                          {action}
                        </div>
                      </div>
                    )}
                    <img alt="ph" src={background} className={hoverImage} />
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
          <a href="/view-gallery" className={clsx("outLinedButton", but)}>
            <WithTransLate text={actionType} />
          </a>
        )}
        <div>
          <CustomModal initialCategory={initialCategory} />
        </div>
      </Element>
    </div>
  );
}
