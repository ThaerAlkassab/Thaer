import { Box, makeStyles } from "@material-ui/core";
import HomeHeader from "./HomePageSlider";
import PhotoGallery from "./photoGallery";
import Services from "./services";
import roomsImage from "../../images/gallery/rooms.svg";
import housesImage from "../../images/gallery/houseBB2.svg";
import surroundingsImage from "../../images/gallery/surroundings.svg";
import Blue_lagoonImage from "../../images/RECOMMENDATIONS/Blue-lagoon.png";
import Glacier_CaveseImage from "../../images/RECOMMENDATIONS/Glacier-Caves.jpg";
import NorthernlightsImage from "../../images/RECOMMENDATIONS/Northernlights.png";

import Support from "../../components/support";
import Recommendations from "./recommendations";

const useStyles = makeStyles((theme) => ({
  galleryButton: {
    width: "150px",
    height: "40px",
    background: "transparent",
    fontSize: "14px",
    lineHeight: "20px",
    border: "1px solid #073865",
    borderColor: "#fff",
    cursor: "pointer",
    color: "#fff",
    "&:hover": {
      background:
        "linear-gradient( 180deg,#04376f 99.99%,rgba(255, 255, 255, 0) 100%), #ffffff",
      color: "#ffffff",
      borderColor: "#04376f !important",
    },
    [theme.breakpoints.down("md")]: {
      width: "150px",
      height: "25px",
      fontSize: "14px",
      marginTop: "-65px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100px",
      height: "25px",
      fontSize: "10px",
      marginTop: "-65px",
    },
  },
  recommendationButton: {
    position: "absolute",
    width: "20.963541666666668vw",
    height: "65vh",
    background: "transparent",
    marginTop: "-47vh",
    border: "0px solid rgba(255,255,255,.5)",
    cursor: "pointer",
    color:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.52) 0%, rgba(0, 0, 0, 0.25) 100%)",
    [theme.breakpoints.down("xs")]: {
      width: "49vw",
      height: "54vh",
      marginTop: "-47vh",
    },
  },
}));

////////////////////////////////////////////////////////////////////

const GALLERY_BACKGROUND_IMAGES_AND_TITLES = [
  {
    background: roomsImage,
    title: "Rooms",
  },

  {
    background: housesImage,
    title: "Houses",
  },

  {
    background: surroundingsImage,
    title: "Surroundings",
  },
];

///////////////////////////////////////////////////////////////////////////

export const RECOMMENDATIONS_BACKGROUND_IMAGES_AND_TITLES = [
  {
    background: NorthernlightsImage,
    title: "Northern lights",
  },

  {
    background: Blue_lagoonImage,
    title: "Blue Lagoon",
  },

  {
    background: Glacier_CaveseImage,
    title: "Glacier caves",
  },
];

/////////////////////////////////////////////////////////////////////////////
export default function HomePage() {
  const { root, galleryButton, recommendationButton } = useStyles();

  const customGALLERYTitleStyle = {
    marginTop: "95px",
    marginTopXs: "52px",
  };

  const customRECOMMENDATIONSTitleStyle = {
    marginTop: "264px",
  };
  const descrip1 = [
    ["DOUBLE / TWIN", "TRIPLE / QUADRUPLE", "FAMILY ROOM", "APARTMENTS"],
    ["Blue House", "Green House", "Grótta Northern Lights"],
    ["Northern Lights", "Neighborhood", "Activities"],
  ];

  return (
    <Box className={root}>
      <HomeHeader />

      <PhotoGallery
        id="gallery"
        actionType="VIEW GALLERY"
        action={<button className={galleryButton}>DISCOVER MORE</button>}
        description={descrip1}
        title="GALLERY"
        backgroundImagesUrlAndTitles={GALLERY_BACKGROUND_IMAGES_AND_TITLES}
        customTitleStyle={customGALLERYTitleStyle}
        unitWidth={"21vw"}
        maxWidth={"514px"}
        minWidth={"220px"}
      />

      <Recommendations
        removeInPhoneSize
        id="recommendations"
        actionType="DISCOVER MORE"
        title="RECOMMENDATIONS"
        backgroundImagesUrlAndTitles={
          RECOMMENDATIONS_BACKGROUND_IMAGES_AND_TITLES
        }
        customTitleStyle={customRECOMMENDATIONSTitleStyle}
        unitWidth={"21vw"}
        maxWidth={"514px"}
        minWidth={"220px"}
      />

      <Support />
    </Box>
  );
}
