import startQout from "../images/startQout.svg";
import endQout from "../images/endQout.svg";
import {
  ImageList,
  makeStyles,
  Typography,
  ImageListItem,
} from "@material-ui/core";
import next from "../images/reviews/next.svg";
import back from "../images/reviews/back.svg";
import { useRef } from "react";
import clsx from "clsx";
import { WithTransLate } from "../translating/index";

const useStyles = makeStyles((theme) => ({
  reviewsRoot: {
    display: "flex",
    margin: "100px 0",
    [theme.breakpoints.down("md")]: {
      width: "115vw",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "30px 0 0 10px",
      width: "90vw",
      overflow: "auto hidden",
    },
  },
  quotRoot: {
    width: "calc(550px - 4%)",
    padding: "4%",
    marginRight: " 55px !important",
    // "&:hover": {
    //   boxShadow: "0px 4px 4px rgba(7, 55, 98, 0.48)",
    //   background: "#fff",
    // },
    [theme.breakpoints.down("xs")]: {
      width: "calc(320px - 2%)",
      padding: "4%",
      marginRight: "30px !important",
      maxWidth: "290px",
    },
  },
  titleStyle: {
    fontFamily: "Oblik",
    transform: "rotate(-90deg)",
    height: "fit-content",
    width: "fit-content",
    margin: "40px -20px 0 -50px",
    fontSize: "24px",
    fontWeight: "700",
    letterSpacing: "0.1em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
      margin: "42px -20px 0 -12px",
    },
  },

  quotaIcon: {
    marginBottom: "-2px",
    width: "60px",
    [theme.breakpoints.down("xs")]: {
      width: "22px",
    },
  },
  commentStyle: {
    margin: "0 10%",
    "font-size": "24px",
    "font-weight": "300",
    "letter-spacing": "0em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      fontWeight: 300,
      lineHeight: "14px",
    },
  },
  writerAndEndCount: {
    display: "flex",
    justifyContent: "flex-end",
    // marginTop: "-30px",
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
    },
  },
  writerName: {
    height: "fit-content",
    marginTop: "auto",
    marginRight: "15px",
    fontSize: "18px",
    fontWeight: 300,
    lineHeight: "18px",
    letterSpacing: "0em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      lineHeight: "16px",
    },
  },
  underScore: {
    height: "1px",
    width: "30px",
    margin: "auto 8px 11px",
    background: "#14202B",
    border: "none",
    [theme.breakpoints.down("xs")]: {
      margin: "auto 8px 8px",
    },
  },
  quotesWrapper: {
    display: "flex",
    flexGrow: 1,
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down("xs")]: {
      display: "block",
      width: "fit-content",
      overflow: "unset",
    },
  },
  gridList: (props) => ({
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    overflowX: "hidden",
    fontFamily: "Josefin Sans",
    scrollBehavior: "smooth",
    [theme.breakpoints.down("xs")]: {
      display: "grid",
      gridTemplateRows: "1fr 1fr",
      gridTemplateColumns: `repeat(${props.gridListRepeat},260px)`,
      width: "fit-content",
    },
  }),
  controlsButtons: {
    marginLeft: "auto",
    marginTop: "5px",
    [theme.breakpoints.down("xs")]: {
      width: "570px",
    },
  },
  control: {
    padding: "0 12.5px",
    background: "none",
    border: "none",
  },
  gridListTile: {
    width: "580px",
    // width: "38.1vw",
    [theme.breakpoints.down("xs")]: {
      width: "141vw",
      height: "90px !important",
    },
  },
}));

function Quot({ comment, writer }) {
  const {
    quotaIcon,
    writerName,
    quotRoot,
    commentStyle,
    underScore,
    writerAndEndCount,
  } = useStyles();
  return (
    <div id="hover-effect" className={clsx(quotRoot)}>
      <img alt="start qout" className={quotaIcon} src={startQout} />
      <p className={commentStyle}>
        <WithTransLate text={comment} />
      </p>
      <div className={writerAndEndCount}>
        <hr className={underScore} />
        <p className={writerName}>
          <WithTransLate text={writer} />
        </p>
        <img alt="end qout" className={quotaIcon} src={endQout} />
      </div>
    </div>
  );
}

const reviewsData = [
  {
    comment: "The location offered an amazing view of the  sea.",
    writer: "LESLEY",
  },
  {
    comment: "The Blue House B&B was everything our family of 7 hoped for! ",
    writer: "JAMES",
  },
  {
    comment:
      "Great place to stay. The look and feel of the place was quite cozy.",
    writer: "PRATEEK",
  },
  {
    comment:
      "One of the best features: freshly home-baked bread for breakfast.",
    writer: "PAULS",
  },
  {
    comment: "Superb location and an exciting atmosphere around the area!",
    writer: "JODY",
  },
];

export default function Reviews() {
  const gridListRepeat = parseInt((reviewsData.length + 1) / 2);
  const {
    gridListTile,
    control,
    controlsButtons,
    gridList,
    reviewsRoot,
    titleStyle,
    quotesWrapper,
  } = useStyles({ gridListRepeat });
  const scrollOffset = window.innerWidth > 600 ? 555 : 355;
  const reviewsRef = useRef(null);
  return (
    <div className={reviewsRoot}>
      <Typography className={titleStyle}>
        <WithTransLate text="REVIEWS" />
      </Typography>
      <div className={quotesWrapper}>
        <ImageList ref={reviewsRef} className={gridList} cols={0}>
          {reviewsData.map(({ comment, writer }, index) => (
            <ImageListItem className={gridListTile} key={index}>
              <Quot comment={comment} writer={writer} />
            </ImageListItem>
          ))}
        </ImageList>
        <div className={controlsButtons}>
          <button
            onClick={() => {
              reviewsRef.current.scrollLeft -= scrollOffset;
            }}
            className={control}
          >
            <img alt="arrow back" src={back} />
          </button>
          <button
            className={control}
            onClick={() => {
              reviewsRef.current.scrollLeft += scrollOffset;
            }}
          >
            <img alt="arrow next" src={next} />
          </button>
        </div>
      </div>
    </div>
  );
}
