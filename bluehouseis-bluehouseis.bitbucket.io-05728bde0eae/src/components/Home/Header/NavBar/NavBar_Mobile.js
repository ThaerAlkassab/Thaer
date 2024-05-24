
import { makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import './Navbar.css'
import  { Link as RouterLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

const useStyles = makeStyles(theme => ({

    toolBar: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#fff",
        width: "100vw",
        position: "absolute",
        top: "40px",
        height: "100vh",
        zIndex: "1",
        padding: "0"
    },
    link: {
        textDecoration: "none",
        fontSize: "18px",
        lineHeight: "24px",
        color: "#14202B",
        borderBottom: "1px solid rgba(128, 128, 128, 0.226)",
        width: "258px",
        padding:"30px 0",
        display: "flex",
        justifyContent: "center"

    },
    typography:{
        display: "flex",
        flexDirection:"column",
    }
}))

const NavBarMobile = () => {


    const classes = useStyles();
    return (
        <Toolbar className={classes.toolBar}>
             <Typography  className={classes.typography}>
             <RouterLink to="view-gallery" className={classes.link}>
                    GALLERY
                </RouterLink>
                <a href="https://bluehouse.tourdesk.is/Tour/Item/18676/1/Northern_lights_-_Minibus" target="_blank" rel="noopener noreferrer" className={classes.link}>
                    NORTHERN LIGHTS
                </a>
                <a href="https://blog.bluehouse.is/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                    BLOG
                </a>
                <Link to="/#map" className={classes.link}>
                    MAP
                </Link>
                <Link to="/beds24#contact" className={classes.link}>
                    CONTACT
                </Link>
                <Link to="/#FAQ" className={classes.link}>
                    FAQ
                </Link>
                </Typography>
        </Toolbar>

    );
};

export default NavBarMobile;
