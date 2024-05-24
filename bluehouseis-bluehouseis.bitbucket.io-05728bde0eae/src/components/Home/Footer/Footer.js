import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField } from "@material-ui/core";
import { LinksInfo, LinksInfo2 } from "./footerData";
import clsx from "clsx";
import useStyles from "./footer.styles"

const Links = ({ target, icon, info, info2 }) => {
  const { contactItems, contactIcons } = useStyles();

  return (
    <a href={target} className={contactItems} target="_blank" rel="noreferrer">
      {icon && <img src={icon} alt="" className={contactIcons} />}
      {info}{" "}
      {info2 && (
        <>
          <br /> {info2}{" "}
        </>
      )}
    </a>
  );
};

function Footer() {
  const validationSchema = yup.object({
    name: yup
      .string("Enter your full name")
      .min(4, "Too short!")
      .max(100, "Too Long!")
      .required("Your full name is required"),
    email: yup
      .string("Enter your email")
      .max(255, "Too Long!")
      .email("Enter a valid email")
      .required("Email is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  const {
    title,
    footerContainer,
    textField,
    form,
    signUpButton,
    columns,
    signUp,
    column2,
    column1,
    title1,
    column3,
  } = useStyles();
  return (
    <div className={footerContainer} id="contact">
      <div className={clsx(columns, column1)}>
        <h1 className={clsx(title, title1)}>CONTACT US</h1>
        {LinksInfo.map((link, i) => (
          <Links
            key={i}
            target={link.target}
            icon={link.icon}
            info={link.info}
            info2={link.info2}
          />
        ))}
      </div>
      <div className={clsx(columns, column2)}>
        <h1 className={title}>OUR NEWS LETTER</h1>
        <p className={signUp}>Sign up for our newsletter!</p>
        <form onSubmit={formik.handleSubmit} className={form}>
          <TextField
            placeholder="Your full name"
            fullWidth
            id="filled-full-width"
            name="name"
            style={{ marginBottom: "13px", height: "57px" }}
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            className={textField}
          />
          <TextField
            placeholder="Your email Address"
            fullWidth
            id="email"
            name="email"
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            className={textField}
          />
          <button className={signUpButton} type="submit">
            Sign up
          </button>
        </form>
      </div>
      <div className={clsx(columns, column3)}>
        <h1 className={title} >
          ABOUT US
        </h1>
        {LinksInfo2 ((link, i)=> <Links key={i} target={link.target} info={link.info}/>)}
      </div>
    </div>
  );
}

export default Footer;
