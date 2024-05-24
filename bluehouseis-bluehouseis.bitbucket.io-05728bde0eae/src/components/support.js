import supportImage from "../images/support/support.png";
import faqImage from "../images/support/faq.png";
import forumImage from "../images/support/forum.png";
import feedbackImage from "../images/support/feedback.png";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { WithTransLate } from "../translating/index";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px auto 80px",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    gap: "5vw",
    background:
      "linear-gradient(180deg, rgba(196, 196, 196, 0.06) 0%, rgba(196, 196, 196, 0) 51.04%)",
  },
  "@media only screen and (min-device-width: 768px) and (max-device-width: 812px)":
    {
      root: {
        margin: "80px auto 0px 180px",
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "space-around",
        gap: "0vw",
        zoom: "0.9",
      },
      supportCardRoot: {
        height: "100px",
        width: "100px",
        padding: "0vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        "&:hover": {
          boxShadow: "0px 4px 4px rgba(7, 55, 98, 0.48)",
          background: "#fff",
        },
      },
    },

  supportCardRoot: {
    height: "253px",
    width: "253px",
    padding: "1vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    "&:hover": {
      boxShadow: "0px 4px 4px rgba(7, 55, 98, 0.48)",
      background: "#fff",
    },
  },
  LinksColor: {
    color: "black",
    "&:hover": {
      background: "#00000",
    },
  },
  titleStyle: {
    fontSize: "18px",
    fontWeight: 400,
    fontFamily: "Josefin Sans",
    lineHeight: "24px",
    letterSpacing: "0px",
    textAlign: "center",
    fontColor: "white",
  },
  descriptionStyle: {
    fontSize: "16px",
    fontWeight: 300,
    lineHeight: "24px",
    letterSpacing: "0px",
    textAlign: "center",
    maxWidth: "90%",
    margin: "0 auto",
  },
  icon: {
    display: "block",
    margin: "0 auto",
  },
  [theme.breakpoints.down("xs")]: {
    root: (props) => ({
      justifyContent: "space-between",
      margin: "50px 17px",
      gap: "18px",
      height: "'fit-content",
      padding: "30px 30px 50px",
      flexWrap: "nowrap",
      ...props.rootStyleInPhoneSize,
    }),
    icon: {
      width: "50px",
      marginBottom: "10px",
    },
    descriptionStyle: {
      fontSize: "12.5px",
    },
    titleStyle: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    supportCardRoot: {
      width: "fit-content",
      height: "60px",
      justifyContent: "space-between",
    },
  },
}));

function SupportCard({ description, title, image }) {
  const { icon, titleStyle, supportCardRoot, descriptionStyle } = useStyles();
  return (
    <div className={clsx("clickable", supportCardRoot)}>
      <img alt="icon" className={icon} src={image} />
      <p className={titleStyle}>
        <WithTransLate text={title} />
      </p>
      <p className={descriptionStyle}>
        <WithTransLate text={description} />
      </p>
    </div>
  );
}
export default function Support({ removeInPhoneSize }) {
  const rootStyleInPhoneSize = removeInPhoneSize ? { display: "none" } : {};
  const { root, LinksColor } = useStyles({ rootStyleInPhoneSize });
  const isMobile = window.matchMedia(
    "only screen and (max-width: 767px)"
  ).matches;
  return (
    <div id="FAQ" className={root}>
      <Link
        className={LinksColor}
        to={{ pathname: "https://gnl.ladesk.com/" }}
        target="_blank"
      >
        <SupportCard
          description={"Get personal support from our team."}
          title={"SUPPORT"}
          image={supportImage}
        />
      </Link>
      <Link
        className={LinksColor}
        to={{ pathname: "https://support.bluehouse.is/019474-FAQ" }}
        target="_blank"
      >
        <SupportCard
          description={"Check  previous guest requests."}
          title={"FAQ"}
          image={faqImage}
        />
      </Link>

      {!isMobile && (
        <Link
          className={LinksColor}
          to={{ pathname: "https://gnl.ladesk.com/219394-Feedback" }}
          target="_blank"
        >
          <SupportCard
            description={"Your opinion is important to us."}
            title={"FEEDBACK"}
            image={feedbackImage}
          />
        </Link>
      )}
    </div>
  );
}
