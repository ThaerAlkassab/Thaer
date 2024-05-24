import { makeStyles } from '@material-ui/core';
import React from 'react';
import './Navbar.css'
import  { Link as RouterLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const useStyles = makeStyles(theme => ({
    container: {
        borderTop: "1px solid rgba(128, 128, 128, 0.226)",
        borderBottom: "1px solid rgba(128, 128, 128, 0.226)",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center"
    },
    toolBar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "72px", 
        width: "1140px",
        [theme.breakpoints.down("xs")]: {
           display: "none"
        }
    },
    link: {
        textDecoration: "none",
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        fontFamily: "Josefin Sans",
        fontSize: "18px",
        lineHeight: "24px",
        color: "#14202B",
    }
}))


const NavBar = () => {

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.toolBar}>
                <RouterLink to="view-gallery" className={classes.link}>
                    GALLERY
                </RouterLink>
                <a href="https://bluehouse.tourdesk.is/Tour/Item/18676/1/Northern_lights_-_Minibus" target="_blank" rel="noopener noreferrer" className={classes.link}>
                    NORTHERN LIGHTS
                </a>
                <a href="https://blog.bluehouse.is/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                    BLOG
                </a>
                <HashLink to="/#map" className={classes.link} scroll={(el) => el.scrollIntoView({ behavior: "auto", block: "end" })}>
                    MAP
                </HashLink>
                <HashLink to="/beds24#footer" className={classes.link} scroll={(el) => el.scrollIntoView({ behavior: "auto", block: "end" })}>
                    CONTACT
                </HashLink>
                <HashLink to="/#FAQ" className={classes.link} scroll={(el) => el.scrollIntoView({ behavior: "auto", block: "end" })}>
                    FAQ
                </HashLink>
            </div>
        </div>
    );
};

export default NavBar;
