import { makeStyles, Typography } from "@material-ui/core";
import readBlogImage from "../../images/readBlog.png";
import React from "react";
import Modal from "@material-ui/core/Modal";
import NeedHelp from "./NeedHelp.js";
import clsx from "clsx";
import { WithTransLate } from "../../translating/index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "70px",
    justifyContent: "space-evenly",
    padding: "0 0 0 40px",
    gap: "35px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      gap: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  needHelp: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "30px",
    alignItems: "center",
    marginTop: "15vh",
    [theme.breakpoints.down("md")]: {
      gap: "20px",
    },
  },
  TA_selfserveprop: {
    // width: "16rem",
    height: "10rem",
    // marginLeft: "-5rem",
    "& ul": {
      listStyleType: "none",
    },
    "& img": {
      width: "15vw",
      height: "5rem",
      // backgroundColor: "red",
    },
  },
  question: {
    textAlign: "center",
    fontSize: "18px",
    fontFamily: "Josefin Sans",
    fontWeight: 300,
    lineHeight: "18px",
    color: "#14202B",
    letterSpacing: "0em",
  },
  description: {
    maxWidth: "250px",
    textAlign: "center",
    fontFamily: "Josefin Sans",
    fontSize: "18px",
    fontWeight: 300,
    lineHeight: "18px",
    letterSpacing: "0em",
  },
  readBlog: {
    border: "1px solid #C6D1DB",
    boxSizing: "border-box",
    display: "flex",
    width: "48.2vw",
    justifyContent: "space-around",
    padding: "4% 2%",
    minWidth: "700px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      width: "fit-content",
      margin: "auto",
      minWidth: "unset",
      gap: "25px",
    },
  },
  modal: {
    display: "flex",
    justifyContent: "center",
  },
  blogDescription: {
    textAlign: "center",
    fontSize: "18px",
    lineHeight: "18px",
    fontFamily: "Josefin Sans",
    color: "#14202B",
    fontWeight: 300,
    marginTop: "40px",
    width: "340px",
    marginLeft: "13px",
    [theme.breakpoints.up("lg")]: {
      marginBottom: "-35px",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: 0,
    },
  },
  button: {
    width: "182px",
    height: "55px",
    border: "1px solid #04376F",
    boxsizing: "border-box;",
    cursor: "pointer",
  },
}));

export default function Instructions() {
  const {
    readBlog,
    needHelp,
    question,
    root,
    TA_selfserveprop,

    description,
    modal,
    blogDescription,
    button,
  } = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={root}>
      <div className={needHelp}>
        <Typography className={question}>
          <WithTransLate text="FIND MORE ABOUT US" />
        </Typography>
        <div id="TA_selfserveprop274" class={TA_selfserveprop}>
          <ul id="Lsp0k1LWyD" class="TA_linksnw6bGZ5c2">
            <li id="866kOv" class="WzYulS3PG">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.tripadvisor.com/Hotel_Review-g189970-d1915669-Reviews-Blue_House-Reykjavik_Capital_Region.html"
              >
                <img
                  src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg"
                  alt="TripAdvisor"
                />
              </a>
            </li>
          </ul>
        </div>
        <script
          async
          src="https://www.jscache.com/wejs?wtype=selfserveprop&uniq=274&locationId=1915669&lang=en_US&rating=false&nreviews=4&writereviewlink=true&popIdx=true&iswide=true&border=true&display_version=2"
          data-loadtrk
          onl
          oad="this.loadtrk=true"
        ></script>
        {/* <Typography className={question}>
          <WithTransLate text="Don’t know which one to choose?" />
        </Typography>
        <Typography className={description}>
          <WithTransLate text="Leave the request and we will get back to you" />
        </Typography>
        <button
          type="button"
          onClick={handleOpen}
          className={clsx(button, "outLinedButton")}
        >
          <WithTransLate text="I NEED HELP" />
        </button> */}
      </div>
      <div className={modal}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <NeedHelp onClose={handleClose} />
        </Modal>
      </div>
      <div className={readBlog}>
        <img alt="read blog" src={readBlogImage} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            maxWidth: "340px",
            gap: "20px",
          }}
        >
          <Typography className={blogDescription}>
            <WithTransLate
              text="FOR USEFUL RECOMMENDATIONS & ADVENTURES READ AMAZING STORIES IN
            OUR BLOG"
            />
          </Typography>
          <a
            href="https://blog.bluehouse.is/"
            className={clsx(button, "outLinedButton")}
            target="_blank"
            rel="noreferrer"
          >
            <WithTransLate text="READ BLOG" />
          </a>
        </div>
      </div>
    </div>
  );
}
