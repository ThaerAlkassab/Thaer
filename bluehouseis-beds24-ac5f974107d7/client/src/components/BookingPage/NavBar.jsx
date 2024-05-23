import React from 'react';
import Logo from '../../assets/logo.png';
import styles from '../../styles/NavBar/NavBar.module.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className={`${styles.mainNavbarContainer}`}>
			<nav className={`${styles.navbarLinkContainer}`}>
				<img src={Logo} alt="bluehouse logo" />
				<Link to="/">
					<div className={`${styles.navbarArrow}`}>
					<NavigateBeforeIcon style={{ fontSize: "1.5rem", marginTop: "1rem" }}/>Back
					</div>
				</Link>
			</nav>
		</div>
	);
};

export default NavBar;
