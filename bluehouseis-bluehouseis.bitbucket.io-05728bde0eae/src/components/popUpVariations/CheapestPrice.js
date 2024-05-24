import { makeStyles, Typography } from "@material-ui/core";
import PopUpVariationLayoutServices from "./popUpVariationLayoutServices";
import logo from "../../images/stampLogo.png";
import originalSideImage from "../../images/popUpVariations/CHEAPESTPRICE.png";
import replaceImage from "../../images/popUpVariations/replace/CHEAPESTPRICE.svg";
import { WithTransLate } from "../../translating/index";

const useStyles = makeStyles((theme) => ({
  intro: {
    fontSize: "18px",
    fontWeight: 300,
    lineHeight: "25px",
    letterSpacing: "0px",
    fontFamily: "Josefin Sans",
  },
  infoList: {
    fontSize: "16px",
    fontWeight: 300,
    lineHeight: "25px",
    marginBottom: "-45px",
    textAlign: "left",
    fontFamily: "Josefin Sans",
    marginTop: "10px",
    "& ul": {
      padding: 0,
      marginTop: "-4px",
      marginBottom: "55px",
    },
  },
  stampLogo: {
		width: "100px",
		height:"100px",
    marginLeft: "22em",
    marginBottom: "5px",

		[theme.breakpoints.down("md")]: {
		  width: "100px",
		}
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

export default function CheapestPrice({ handleClose }) {
  const { intro, infoList, smallSizeFont, stampLogo } = useStyles();

  const largContent = (
    <>
      <Typography className={intro}>
        <WithTransLate
          text="In the unlikely event that you happen to find your reservation cheaper
        on another website, we will offer a price match, refunding the
        difference when appropriate,"
        />

        <b>
          <WithTransLate text=" providing you meet the following requirements:" />
        </b>
      </Typography>
      <Typography className={infoList}>
        <ul>
          <li>
            {" "}
            <WithTransLate
              text=" You contact us within 24-hours after you have made the booking with
            us (for a difference refund) or before you have made the booking
            with the third party."
            />
          </li>
          <li>
            <WithTransLate
              text="You provide us with a link to the same rate which is still online
            and available."
            />
          </li>
          <li>
            <WithTransLate
              text="The other offer must be for the same property and accommodation
            type, for the same check-in and check-out dates and for the same
            cancellation policy and conditions."
            />
          </li>
        </ul>
      </Typography>
      <Typography className={intro}>
        <WithTransLate text="Feel free to contact us at" />

        <u>
          <b> info@bluehouse.is </b>
        </u>
        
      </Typography>
      <img src={logo} className={stampLogo} alt="logo" />
    </>
  );
  const smallContent = (
    <>
      <Typography className={smallSizeFont}>
        <WithTransLate
          text="In the unlikely event that you happen to find your reservation cheaper
        on another website, we will offer a price match, refunding the
        difference when appropriate,"
        />

        <b>
          <WithTransLate text=" providing you meet the following requirements:" />
        </b>
      </Typography>
      <Typography className={smallSizeFont}>
        <ul>
          <li>
            <WithTransLate
              text="You contact us within 24-hours after you have made the booking with
            us (for a difference refund) or before you have made the booking
            with the third party."
            />
          </li>
          <li>
            <WithTransLate
              text=" You provide us with a link to the same rate which is still online
            and available."
            />
          </li>
          <li>
            <WithTransLate
              text=" The other offer must be for the same property and accommodation
            type, for the same check-in and check-out dates and for the same
            cancellation policy and conditions."
            />
          </li>
        </ul>
      </Typography>
    </>
  );

  return (
    <PopUpVariationLayoutServices
      popUpLargeContetn={largContent}
      popUpSmallContetn={smallContent}
      title={"CHEAPEST PRICE"}
      imgSrc={originalSideImage}
      imageSrcReplace={replaceImage}
      originalSideImageWidth={"173%"}
      handleClose={handleClose}
    />
  );
}
