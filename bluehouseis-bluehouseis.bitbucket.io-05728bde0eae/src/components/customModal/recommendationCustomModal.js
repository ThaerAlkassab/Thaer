import React, { useState } from "react";
import "../../css/CustomModal.css";
import { Modal, makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { UserContext } from "../../App";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import customModalData from "./customModalData";
import { WithTransLate } from "../../translating/index";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "3px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 8, 5),
    width: "100%",
    boxSizing: "border-box",
    maxWidth: "100vw",
    height: "100%",
    maxHeight: "100vh",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "62%",
      maxHeight: "none",
      maxWidth: "none",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "64%",
    },
  },
  containerProgress: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "-25px",

    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  rootProgress: {
    width: "20%",
    height: "3px",
    margin: "8px 15px 0 15px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  numbers: {
    fontSize: "18px",
    lineHeight: "20px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  imageTitle: {
    display: "flex",
    justifyContent: "space-between",
    width: "calc(80% - 20px)",
    maxWidth: "1000px",
    "& h2": {
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: "22px",
      letterSpacing: "0px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      overflow: "auto",
      justifyContent: "space-between",
      width: "61.5vw",
      whiteSpace: "nowrap",
      textIndent: "16px",
      "& h2": {
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "16px",
        letterSpacing: "0",
      },
    },
  },
  ButtonPosition: {
    display: "flex",
    alignSelf: "center",
    marginBottom: "0rem",
  },
  sliderSecondButton: {
    width: "9.44vw",
    height: "6vh",
   fontFamily: "Josefin Sans !important",
    background: "none",
    border: "1px solid #14202B",
    borderRadius: "5px",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "0px",
    textAlign: "center",
    color: "#14202b",
    [theme.breakpoints.down("md")]: {
      width: "18vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      lineHeight: "20px",
      width: "128px",
      height: "29px  ",
      borderRadius: "0",
      marginTop: "-50px",
    },
    "&:hover": {
      background:
        "linear-gradient( 180deg,#04376f 99.99%,rgba(255, 255, 255, 0) 100%),   #ffffff",
      color: "#ffffff",
      borderColor: "#04376f !important",
    },
  },
  descriptionStyle: {},
  textOriginText: {
    color: "#14202b",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "30px",
    margin: "0 auto ",
    width: "90vw",
    background: "rgba(256, 256, 256, 0.7)",
    padding: "20px 0 12px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));
const style = () => {
  const top = "50%";
  const left = "50%";
  return {
    top: top,
    left: left,
    transform: `translate(-${top}, -${left})`,
  };
};
const activeStyle = {
  color: "black",
  cursor: "pointer",
};
const deactivateStyle = {
  color: "grey",
  cursor: "pointer",
};

function RecommendationCustomModal() {
  const [modalState, setModal] = useContext(UserContext);
  const [modalStyle] = useState(style);
  const [subCategoryIndex, setSubCategoryIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [progressInitialValue, setProgressInitialValue] = useState(
    100 / customModalData[modalState.index][subCategoryIndex].backgrounds.length
  );
  const [progress, setProgress] = useState(progressInitialValue);

  const {
    containerProgress,
    paper,
    rootProgress,
    numbers,
    imageTitle,
    ButtonPosition,
    sliderSecondButton,
    textOriginText,
    descriptionStyle,
  } = useStyles();

  const handleNextAndPrev = (nextIndex) => {
    if (nextIndex < 0) return;
    const lastIndex =
      customModalData[modalState.index][subCategoryIndex].backgrounds.length;
    if (lastIndex <= nextIndex) {
      setProgress(progressInitialValue);
      return setImageIndex(0);
    }

    setProgress(progressInitialValue * (nextIndex + 1));
    return setImageIndex(nextIndex);
  };

  ///////////////////////////////////////////////////////////////////////
  const handleChangeSubCategory = (subCategory) => {
    const progressNewInitialValue =
      100 / customModalData[modalState.index][subCategory].backgrounds.length;
    setImageIndex(0);
    setSubCategoryIndex(subCategory);
    setProgressInitialValue(progressNewInitialValue);
    setProgress(progressNewInitialValue);
  };
  ////////////////////////////////////////////////////////////////////////////
  const handleChangeCategory = (categoryindex) => {
    const progressNewInitialValue =
      100 / customModalData[categoryindex][0].backgrounds.length;
    setImageIndex(0);
    setSubCategoryIndex(0);
    setModal({
      state: true,
      index: categoryindex,
    });
    setProgressInitialValue(progressNewInitialValue);
    setProgress(progressNewInitialValue);
  };

  const body = (
    <div style={modalStyle} className={paper}>
      <section className="modal-sec1">
        <div className="sec1-div1"></div>
        <div className="sec1-div2">
          <h2
            style={
              modalState.index === 0
                ? { color: "black", cursor: "pointer" }
                : { color: "grey", cursor: "pointer" }
            }
            onClick={() => handleChangeCategory(0)}
          >
            <WithTransLate text="Rooms" />
          </h2>
          <h2
            style={
              modalState.index === 1
                ? { color: "black", cursor: "pointer" }
                : { color: "grey", cursor: "pointer" }
            }
            onClick={() => handleChangeCategory(1)}
          >
            <WithTransLate text="Houses" />
          </h2>
          <h2
            style={
              modalState.index === 2
                ? { color: "black", cursor: "pointer" }
                : { color: "grey", cursor: "pointer" }
            }
            onClick={() => handleChangeCategory(2)}
          >
            <WithTransLate text="Surroundings" />
          </h2>
        </div>
        <div className="sec1-div3">
          <span
            onClick={() => setModal({ state: false, index: 0 })}
            className="cross"
          >
            X
          </span>
        </div>
      </section>
      <section className="modal-sec2">
        <button
          onClick={() => {
            handleNextAndPrev(imageIndex - 1);
          }}
          className="btn-arrow left-arrow"
        >
          &lt;
        </button>
        <img
          src={
            customModalData[modalState.index][subCategoryIndex].backgrounds[
              imageIndex
            ]
          }
          alt=""
        />
        <button
          onClick={() => {
            handleNextAndPrev(imageIndex + 1);
          }}
          className="btn-arrow right-arrow"
        >
          &gt;
        </button>
      </section>
      <section className="modal-sec3">
        <div className={imageTitle}>
          {customModalData[modalState.index].map(({ title }, photoIndex) => {
            return (
              <h2
                key={"title" + photoIndex}
                style={
                  photoIndex === subCategoryIndex
                    ? activeStyle
                    : deactivateStyle
                }
                onClick={() => handleChangeSubCategory(photoIndex)}
              >
                <WithTransLate text={title} />
              </h2>
            );
          })}
        </div>
      </section>
      <section className="modal-sec4">
        <div className={containerProgress}>
          <Typography>
            <span className={numbers}>0{imageIndex + 1}</span>
          </Typography>
          <LinearProgress
            className={rootProgress}
            variant="determinate"
            color="secondary"
            aria-valuemax="100"
            value={progress}
          />
          <Typography>
            {" "}
            <span className={numbers}>
              0
              {
                customModalData[modalState.index][subCategoryIndex].backgrounds
                  .length
              }
            </span>
          </Typography>
        </div>
      </section>
      <section className={descriptionStyle}>
        <p className={textOriginText}>
          <WithTransLate
            text={
              customModalData[modalState.index][subCategoryIndex].description
            }
          />
        </p>
      </section>
      <section className="modal-sec6">
        <div className={ButtonPosition}>
          <Link to="/beds24">
            <button className={sliderSecondButton} type="button">
              <WithTransLate text="BOOK NOW" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );

  return (
    <div>
      <Modal
        open={modalState.state}
        onClose={() => setModal({ state: false, index: 0 })}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
export default RecommendationCustomModal;
