import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center",
    fontFamily: "Josefin Sans",
    fontSize: "24px",
    lineHeight: "24px",
    color: "#14202B",
    height: "336px",
    fontWeight: "300",
    marginBottom: "50px",
    marginTop: "195px",
    [theme.breakpoints.down("1137")]: {
      flexDirection: "column-reverse",
      height: "auto",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Oblik",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "30px",
    lineHeight: "35px",
    color: "#14202B",
    margin: "0",
    marginBottom: "-10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },
  title1: {
    marginBottom: "10px",
  },
  contactItems: {
    display: "flex",
    alignItems: "center",
  },
  contactIcons: {
    marginRight: "30px",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "20px",
      marginRight: "15px",
    },
  },
  textField: {
    fontSize: "24px",
    fontWeight: 300,
    lineHeight: "24px",
    textAlign: "center",
    "& .MuiOutlinedInput-input": {
      fontSize: "24px",
      fontWeight: 300,
      lineHeight: "24px",
      letterSpacing: "0em",
      textAlign: "center",
      padding: "13px 17px",
      borderRadius: 0,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "240px",
      fontSize: "14px",
      lineHeight: "14px",
      "& .MuiOutlinedInput-input": {
        padding: "13px 17px",
        fontSize: "14px",
        lineHeight: "14px",
      },
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  signUpButton: {
    width: "395px",
    height: "57px",
    cursor: "pointer",
    background: "#073762",
    color: "white",
    fontWeight: "300",
    marginTop: "19px",
    fontSize: "24px",
    lineHeight: "24px",
    fontFamily: "Josefin Sans",
    border: "none",
    [theme.breakpoints.down("xs")]: {
      width: "240px",
      height: "43px",
      fontSize: "14px",
    },
  },

  column1: {
    [theme.breakpoints.down("xs")]: {
      maxHeight: "210px",
      alignItems: "flex-start !important",
    },
  },
  column2: {
    [theme.breakpoints.down("xs")]: {
      maxHeight: "259px",
      marginBottom: "51px",
    },
  },
  column3: {
    [theme.breakpoints.down("xs")]: {
      maxHeight: "236px",
      justifyContent: "space-between",
      marginBottom: "51px",
    },
  },
  columns: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: "90px",
    height: "336px",
    justifyContent: "space-between",
    [theme.breakpoints.down("1137")]: {
      marginLeft: "0",
      alignItems: "center",
    },
  },
  signUp: {
    marginTop: "36px",
    marginBottom: "36px",
    [theme.breakpoints.down("xs")]: {
      margin: "0",
    },
  },
}));

export default useStyles;
