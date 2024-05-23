import React from 'react';
import Logo from '../../assets/logo.svg';
import styles from '../../styles/NewNavbar/NewNavbar.module.css';

let currency = [
	'AUD',
	'CAD',
	'EUR',
	'GBP',
	'NZD',
	'USD',
	'ARS',
	'BGN',
	'BHD',
	'BRL',
	'CHF',
	'CLP',
	'CNY',
	'COP',
	'CRC',
	'CZK',
	'DKK',
	'DOP',
	'FJD',
	'GEL',
	'HKD',
	'HRK',
	'HUF',
	'IDR',
	'ILS',
	'INR',
	'ISK',
	'JPY',
	'KES',
	'KRW',
	'LBP',
	'LKR',
	'MAD',
	'MMK',
	'MXN',
	'MYR',
	'NOK',
	'OMR',
	'PHP',
	'PLN',
	'RON',
	'RSD',
	'RUB',
	'SEK',
	'SGD',
	'THB',
	'TND',
	'TRY',
	'UAH',
	'VND',
	'ZAR',
];

const NewNavbar = () => {
	return (
		<div className={`${styles.mainNavbarContainer}`}>
			<div className={`${styles.logoNavbar}`}>
				<img src={Logo} alt="bluehouse logo" />
			</div>
			<nav className={`${styles.navbarLinkContainer}`}>
				<div>
					<a href="#gallery">GALLERY</a>
					<a
						href="https://bluehouse.tourdesk.is/Tour/Item/18676/1/Northern_lights_-_Minibus"
						href="#northernlights"
					>
						NORTHERN LIGHTS
					</a>
					<a
						href="https://blog.bluehouse.is/"
						target="_blank"
						rel="noopener noreferrer"
						href="#blog"
					>
						BLOG
					</a>
					<a href="#map">MAP</a>
					<a href="#contact">CONTACT</a>
					<a href="#faq">FAQ</a>

					<select href="#currency" id="currencySelector">
						<option class="currency">CURRENCY</option>
						{currency.map((data) => {
							return <option value={data}>{data}</option>;
						})}
					</select>
				</div>
			</nav>
		</div>
	);
};

export default NewNavbar;
