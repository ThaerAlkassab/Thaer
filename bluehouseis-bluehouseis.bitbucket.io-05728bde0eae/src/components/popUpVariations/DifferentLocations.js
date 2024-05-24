import { makeStyles, Typography } from "@material-ui/core";
import PopUpVariationLayoutServices from "./popUpVariationLayoutServices";
import originalSideImage from "../../images/popUpVariations/3DIFFERENTLOCATIONS.png";
import replaceImage from "../../images/popUpVariations/replace/3DIFFERENTLOCATIONS.svg";
import { WithTransLate } from "../../translating/index";

const useStyles = makeStyles((theme) => ({
  intro: {
    width: "500px",
    fontSize: "18px",
    fontWeight: 300,
    lineHeight: "25px",
    letterSpacing: "0px",
    fontFamily: "Josefin Sans",
    marginTop: "-45px",
  },
  infoList: {
    fontSize: "16px",
    fontWeight: 300,
    lineHeight: "25px",
    textAlign: "left",
    fontFamily: "Josefin Sans",
    marginTop: "-45px",
    "& ul": {
      padding: 0,
      marginTop: "-45px",
    },
  },
  smallSizeFont: {
    fontSize: "14px",
    fontWeight: 300,
    lineHeight: "15px",
    letterSpacing: "0px",
    textAlign: "center",
    "& ul": {
      padding: "15px",
      listStylePosition: "inside",
    },
  },
}));

export default function DifferentLocations({ handleClose }) {
  const { intro, infoList, smallSizeFont } = useStyles();

  const largContent = (
    <>
      <Typography className={intro}>
        <WithTransLate text="The Blue House, the Green House, and the Grótta Northern Lights Apartment and Rooms are located on our wonderful peninsula." />
      </Typography>
      <Typography className={infoList}>
        <ul>
          <li>
            <WithTransLate text="Voted as one of the best locations for catching Northern Lights" />
          </li>
          <li>
            <WithTransLate text="Enjoy the beautiful scenery right from your window" />
          </li>
          <li>
            <WithTransLate text=" Amazing view and amenities" />
          </li>
        </ul>
      </Typography>
      <Typography className={intro}>
        <WithTransLate text="Feel free to contact us at " />
        <u>
          <b> info@bluehouse.is </b>
        </u>
      </Typography>
    </>
  );
  const smallContent = (
    <>
      <Typography className={smallSizeFont}>
        <WithTransLate text="The Blue House, the Green House, and the Grótta Northern Lights Apartment and Rooms are located on our wonderful peninsula." />
      </Typography>
      <Typography className={smallSizeFont}>
        <ul>
          <li>
            <WithTransLate text="Voted as one of the best locations for catching Northern Lights" />
          </li>
          <li>
            <WithTransLate text="Enjoy the beautiful scenery right from your window" />
          </li>
          <li>
            <WithTransLate text="Amazing view and amenities" />
          </li>
        </ul>
      </Typography>
    </>
  );

  return (
    <PopUpVariationLayoutServices
      popUpLargeContetn={largContent}
      popUpSmallContetn={smallContent}
      title={"3 DIFFERENT LOCATIONS"}
      imageSrcReplace={replaceImage}
      imgSrc={originalSideImage}
      originalSideImageWidth={"73%"}
      handleClose={handleClose}
    />
  );
}
