import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { WithTransLate } from "../../translating/index";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: "Josefin Sans",
    marginTop: "-20px",

    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      textAlign: "left",
      marginLeft: "-50px",
      marginBottom: "-50px",
    },
  },
  title: {
    fontFamily: "Oblik",
    fontSize: "24px",
    lineHeight: "25px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  subtitle: {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "25px",
    letterSpacing: "0em",
  },
  titleContainer: {
    fontFamily: "Oblik",
    display: "flex",
    flexDirection: "column",
    textAling: "left",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  textClass: {
    marginTop: "5px",
    fontSize: "16px",
    fontWeight: 300,
    lineHeight: "25px",
    letterSpacing: "0em",
  },
}));
function Subtitle({ title, text }) {
  const { subtitle, textClass, titleContainer } = useStyles();
  return (
    <Box className={titleContainer}>
      <h2 className={subtitle}>
        <WithTransLate text={title} />
      </h2>
      <p className={textClass}>
        <WithTransLate text={text} />
      </p>
    </Box>
  );
}
export default function Privacy() {
  const { root, title } = useStyles();
  return (
    <Box className={root}>
      <h1 className={title}>
        <WithTransLate text="PRIVACY POLICY" />
      </h1>
      <Subtitle
        title="Who are we?"
        text=" Our website address is: https://bluehouse.is."
      />
      <Subtitle
        title="What personal data we collect and why we collect it?"
        text=""
      />
      <Subtitle
        title="Comments"
        text="When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection."
      />
      <Subtitle
        title=""
        text="An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment."
      />
      <Subtitle
        title="Media"
        text="If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website."
      />
      <Subtitle title="Contact forms" text="" />
      <Subtitle
        title="Cookies"
        text="If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year."
      />
      <Subtitle
        title=""
        text="If you have an account and you log in to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser."
      />
      <Subtitle
        title=""
        text="When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed."
      />
      <Subtitle
        title=""
        text="If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day."
      />
      <Subtitle
        title="Embedded content from other websites"
        text="Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website."
      />
      <Subtitle
        title=""
        text="These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website."
      />
      <Subtitle title="Analytics" text="" />
      <Subtitle
        title="Who we share your data with? How long we retain your data?"
        text="If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue."
      />
      <Subtitle
        title=""
        text="For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information."
      />
      <Subtitle
        title="What rights you have over your data?"
        text="If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes."
      />
      <Subtitle
        title="Where we send your data?"
        text="Visitor comments may be checked through an automated spam detection service."
      />
    </Box>
  );
}
