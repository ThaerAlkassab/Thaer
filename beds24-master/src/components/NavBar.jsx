import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

export default function NavBar() {
	const [navbarState, NavbarState] = useState(false);
	return (
		<Nav>
			<header class=" white-80 tc pv4 font">
				<img src={logo} alt="" />

				<nav class="navbar bt bb tc mw7 center mt4">
					<a
						href="#gallery"
						class="f6 f5-l link bg-animate white-80 hover-bg-lightest-blue dib pa3 ph4-l"
					>
						GALLERY
					</a>
					<a
						href="https://bluehouse.tourdesk.is/Tour/Item/18676/1/Northern_lights_-_Minibus"
						class="f6 f5-l link bg-animate white-80 hover-bg-lightest-blue dib pa3 ph4-l"
						href="#northernlights"
					>
						NORTHERN LIGHTS
					</a>
					<a
						href="https://blog.bluehouse.is/"
						target="_blank"
						rel="noopener noreferrer"
						class="f6 f5-l link bg-animate white-80 hover-bg-lightest-blue dib pa3 ph4-l"
						href="#blog"
					>
						BLOG
					</a>
					<a
						class="f6 f5-l link bg-animate white-80 hover-bg-lightest-blue dib pa3 ph4-l"
						href="#map"
					>
						MAP
					</a>
					<a
						class="f6 f5-l link bg-animate white-80 hover-bg-lightest-blue dib pa3 ph4-l"
						href="#contact"
					>
						CONTACT
					</a>
					<a
						class="f6 f5-l link bg-animate white-80 hover-bg-lightest-blue dib pa3 ph4-l"
						href="#faq"
					>
						FAQ
					</a>

					<select
						class="dropdown-content f5-l cur link pa4 ph4-l"
						href="#currency"
						id="currencySelector"
					>
						<option class="currency">CURRENCY</option>
						<option value="aud">AUD</option>
						<option value="cad">CAD</option>
						<option value="eur">EUR</option>
						<option value="gbp">GBP</option>
						<option value="nzd">NZD</option>
						<option value="usd">USD</option>
						<option value="ars">ARS</option>
						<option value="bgn">BGN</option>
						<option value="bhd">BHD</option>
						<option value="brl">BRL</option>
						<option value="chf">CHF</option>
						<option value="clp">CLP</option>
						<option value="cny">CNY</option>
						<option value="cop">COP</option>
						<option value="crc">CRC</option>
						<option value="czk">CZK</option>
						<option value="dkk">DKK</option>
						<option value="dop">DOP</option>
						<option value="fjd">FJD</option>
						<option value="gel">GEL</option>
						<option value="hkd">HKD</option>
						<option value="hrk">HRK</option>
						<option value="huf">HUF</option>
						<option value="idr">IDR</option>
						<option value="ils">ILS</option>
						<option value="inr">INR</option>
						<option value="isk">ISK</option>
						<option value="jpy">JPY</option>
						<option value="kes">KES</option>
						<option value="krw">KRW</option>
						<option value="lbp">LBP</option>
						<option value="lkr">LKR</option>
						<option value="mad">MAD</option>
						<option value="mmk">MMK</option>
						<option value="mxn">MXN</option>
						<option value="myr">MYR</option>
						<option value="nok">NOK</option>
						<option value="omr">OMR</option>
						<option value="php">PHP</option>
						<option value="pln">PLN</option>
						<option value="ron">RON</option>
						<option value="rsd">RSD</option>
						<option value="rub">RUB</option>
						<option value="sek">SEK</option>
						<option value="sgd">SGD</option>
						<option value="thb">THB</option>
						<option value="tnd">TND</option>
						<option value="try">TRY</option>
						<option value="uah">UAH</option>
						<option value="vnd">VND</option>
						<option value="zar">ZAR</option>
					</select>
				</nav>
			</header>
		</Nav>
	);
}

const Nav = styled.nav`
	.bt {
		border-top-style: double;
		border-top-width: 4.5px;
	}

	.bb {
		border-bottom-style: double;
		border-bottom-width: 4.5px;
	}

	.dib {
		display: inline-block;
		margin-left: 1rem;
	}

	.font {
		font-family: 'Josefin Sans', sans-serif;
	}

	a {
		color: #14202b;
	}

	.fw4 {
		font-weight: 400;
	}

	.link {
		text-decoration: none;
		transition: color 0.15s ease-in;
	}

	.link:link,
	.link:visited {
		transition: color 0.15s ease-in;
	}

	.link:hover {
		transition: color 0.15s ease-in;
	}

	.link:active {
		transition: color 0.15s ease-in;
	}

	.link:focus {
		transition: color 0.15s ease-in;
		outline: 1px solid currentColor;
	}

	.mw7 {
		max-width: 90rem;
		color: #e5e5e5;
	}

	.w2 {
		width: 2rem;
	}

	.hover-bg-lightest-blue:hover {
		background-color: #073762;
		color: #fff;
	}

	.hover-bg-lightest-blue:focus {
		background-color: #073762;
		color: #fff;
	}

	.pa3 {
		padding: 1.5rem;
	}
	.pa4 {
		padding: 1.45rem;
	}

	.pv4 {
		padding-top: 2rem;
		padding-bottom: 2rem;
	}

	.mb0 {
		margin-bottom: 0;
	}

	.mt2 {
		margin-top: 0.5rem;
	}

	.mt4 {
		margin-top: 2rem;
	}

	.tc {
		text-align: center;
	}

	.ttu {
		text-transform: uppercase;
	}

	.center {
		margin-right: 0.5rem;
		margin-left: 0.5rem;
	}

	.bg-animate,
	.bg-animate:hover,
	.bg-animate:focus {
		transition: background-color 0.15s ease-in-out;
	}

	.dropdown-content {
		position: absolute;
		max-width: 12rem;
		border: none;
		cursor: pointer;
		font-size: 16px;
		outline: none;
	}

	select {
		font-weight: bold;
		font-family: 'Josefin Sans', sans-serif;
		color: #14202b;
	}

	option {
		background-color: #fff;
		font-weight: 800;
	}

	select option:hover {
		color: #e5e5e5;
	}

	@media screen and (min-width: 60em) {
		.ph4-l {
			padding-left: 2rem;
			padding-right: 2rem;
		}

		.f5-l {
			font-size: 1rem;
		}
	}
`;
