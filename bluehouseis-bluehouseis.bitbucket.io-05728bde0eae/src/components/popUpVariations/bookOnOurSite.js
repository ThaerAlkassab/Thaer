import { makeStyles, Typography } from "@material-ui/core";
import PopUpVariationMainLayout from "./popUpVariationMainLayout";
import originalSideImage from "../../images/popUpVariations/BOOKONOURSITE.jpg";
import BHlogo from"../../images/popUpVariations/bluehouse.svg";
import replaceImage from "../../images/popUpVariations/replace/BOOKONOURSITE.svg";
import { WithTransLate } from "../../translating/index";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  intro: {
    fontSize: "20px",
    fontWeight: 300,
    lineHeight: "25px",
    letterSpacing: "0px",
    fontFamily: "Josefin Sans",
  },
  infoList: {
    fontSize: "18px",
    fontWeight: 300,
    lineHeight: "25px",
    textAlign: "left",
    
    fontFamily: "Josefin Sans",
    "& ul": {
      padding: 0,
    },
  },
  smallSizeFont: {
    fontSize: "16px",
    fontWeight: 300,
    lineHeight: "15px",
    letterSpacing: "0px",
    textAlign: "center",
    "& ul": {
      padding: 0,
      listStylePosition: "inside",
    },
  },
 

  sliderSecondButton: {
    width: "9.44vw",
    height: "6vh",
    fontFamily: "Josephin 18",
    background: "none",
    border: "1px solid #14202B",
    borderRadius: "none",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "0px",
    textAlign: "center",
    color: "#14202b",
    marginTop: "-13%",
    cursor:"pointer",
    [theme.breakpoints.down("md")]: {
      width: "18vw",
    },
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
}));

export default function BookOnOurWebsite({ handleClose }) {
  const { intro, infoList, smallSizeFont, ButtonPosition, sliderSecondButton } = useStyles();

  const largContent = (
    
    <>
      <Typography className={intro} style={{ marginTop: "-13%",  marginBottom: "-15%"}}>
        <WithTransLate text="Don't miss an adventure!" />
      </Typography>
      <Typography className={infoList} style={{ marginLeft: "3%"}}>
        <ul>
          <li>
            <WithTransLate
              text=" Best Price guaranteed"
            />
          </li>
          <li>
            <WithTransLate
              text=" Breakfast included (Continental/Cereal Depending on your booking)"
            />
          </li>
          <li>
            <WithTransLate
              text=" 45 minutes away from the new volcanic eruption"
            />
          </li>
        </ul>
      </Typography>
      <Grid marginTop="-15%" item>
        <div className={ButtonPosition}>
          <a  href="https://beds24.com/booking2.php?propid=3578&layout=1"
              target="_blank"
              rel="noreferrer">
            <button className={sliderSecondButton} type="button">
              <WithTransLate text="BOOK NOW" />
            </button>
          </a>
        </div>
      </Grid>
    </>
  );
  const smallContent = (
    <>
      <Typography className={smallSizeFont} style={{ marginTop: "-13%",  marginBottom: "-15%"}}>
        <WithTransLate
          text=" Don't miss an adventure!"
        />
      </Typography>
      <Typography className={smallSizeFont} style={{ marginLeft: "3%"}}>
        <ul>
          <li>
            <WithTransLate
              text=" Best Price guaranteed"
            />
          </li>
          <li>
            <WithTransLate
              text=" Breakfast included (Continental/Cereal Depending on your booking)"
            />
          </li>
          <li>
            <WithTransLate
              text=" 45 minutes away from the new volcanic eruption"
            />
          </li>
        </ul>
      </Typography>
    </>
  );

  return (
    <PopUpVariationMainLayout
      popUpLargeContetn={largContent}
      popUpSmallContetn={smallContent}
      Logo={BHlogo}
      title={"BOOK ON OUR WEBSITE AND YOU WILL RECEIVE"}
      imgSrc={originalSideImage}
      imageSrcReplace={replaceImage}
      originalSideImageWidth={"173%"}
      handleClose={handleClose}
    />
  );
}
