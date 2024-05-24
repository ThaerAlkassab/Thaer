import { makeStyles, Typography } from "@material-ui/core";
import PopUpVariationLayoutServices from "./popUpVariationLayoutServices";
import originalSideImage from "../../images/popUpVariations/SELFCHECKIN.png";
import replaceImage from "../../images/popUpVariations/replace/SELFCHECKIN.svg";
import { WithTransLate } from "../../translating/index";

const useStyles = makeStyles((theme) => ({
  intro: {
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
      padding: 0,
      listStylePosition: "inside",
    },
  },
}));

export default function SelfCheckIn({ handleClose }) {
  const { intro, infoList, smallSizeFont } = useStyles();

  const largContent = (
    <>
      <Typography className={intro}>
        <WithTransLate text="Here at the Blue House we want to" />
        <b>
          {" "}
          <WithTransLate text="give you the greatest flexibility." />
        </b>{" "}
        <WithTransLate text="That’s why we have a self-check-in system with a self-service breakfast." />
      </Typography>
      <Typography className={infoList}>
        <ul>
          <li>
            {" "}
            <WithTransLate text=" Two days before your arrival, you will receive an email with the information you will need to    
   check in from 4 pm." />
          </li>
          <li>
            {" "}
            <WithTransLate text="We offer a full continental breakfast that includes our home-baked bread." />
          </li>
          <li>
            {" "}
            <WithTransLate text="You can enjoy our breakfast as early as you need until 10:30 am." />
          </li>
        </ul>
      </Typography>
      <Typography className={intro}>
        {" "}
        <WithTransLate text="Feel free to contact us at" />{" "}
        <u>
          <b> info@bluehouse.is </b>
        </u>
      </Typography>
    </>
  );
  const smallContent = (
    <>
      <Typography className={smallSizeFont}>
        {" "}
        <WithTransLate text="At the Grótta Northern Lights Apartment and Rooms we want to" />
        <b>
          {" "}
          <WithTransLate text="give you the greatest flexibility." />{" "}
        </b>{" "}
        <WithTransLate text="That’s why we created our self-service check-in and breakfast at our partner location, the Blue House." />
      </Typography>
      <Typography className={smallSizeFont}>
        <ul>
          <li>
            {" "}
            <WithTransLate text="Two days before your arrival, you will receive an email with all details which allows you to check-in from 4PM." />
          </li>
          <li>
            {" "}
            <WithTransLate text="You can enjoy our breakfast as early as you need until 10.30 am at our partner location, the Blue House only 150 meters on foot." />
          </li>
          <li>
            {" "}
            <WithTransLate text="We offer a full breakfast selection with our home-baked bread." />
          </li>
        </ul>
      </Typography>
    </>
  );

  return (
    <PopUpVariationLayoutServices
      popUpLargeContetn={largContent}
      popUpSmallContetn={smallContent}
      title={"SELF CHECK-IN"}
      imageSrcReplace={replaceImage}
      imgSrc={originalSideImage}
      originalSideImageWidth={"165%"}
      handleClose={handleClose}
    />
  );
}
