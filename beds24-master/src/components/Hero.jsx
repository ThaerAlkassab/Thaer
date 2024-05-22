import React from 'react';
import styled from 'styled-components';
import homeImage from '../assets/booking-bg.jpg';
import styles from '../styles/HotelListCards/HotelCards.module.css';

export default function Hero() {
	return (
		<Section id="hero" className="">
			<div className="mainContainer">
				<p className="titleVertical"> BEST PRICE GUARANTEED</p>
				<div className="background">
					<img src={homeImage} alt="" />
				</div>
				<div className="content">
					<div className="search">
						<div className="container">
							<label htmlFor="">Check-in</label>
							<input type="date" />
						</div>

						<div className="container">
							<label htmlFor="">Check-out</label>
							<input type="date" />
						</div>

						<div className="container">
							<label htmlFor="">Nights</label>
							<select
								class="dropdown-content f5-l cur link pa4 ph4-l"
								href="#currency"
								id="currencySelector"
							>
								<option value="0"></option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>
						</div>
						<button>Search</button>
					</div>
				</div>
			</div>
		</Section>
	);
}

const Section = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 2rem 0;
	/* border: 1px solid red; */
	position: relative;
	.background {
		img {
			width: 100%;
		}
	}

	.titleVertical {
		font-size: 17px;
		font-weight: 700;
		margin-bottom: 3rem;
		text-align: left;
		/* height: 50%; */
		@media screen and (min-width: 720px) {
			writing-mode: vertical-lr;
			margin-top: 3rem;
			margin-right: 1rem;
		}
	}

	.content {
		/* height: 100%; */
		/* width: 106.4rem; */
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 3;
		text-align: left;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	.search {
		display: flex;
		color: white;
		background-color: #000000ce;
		padding: 2rem 1rem 0.4rem 0.4rem;
		border-radius: 0.2rem;
		.container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 0 2.3rem;

			label {
				font-size: 1.25rem;
				margin-left: 0.4rem;
			}

			input {
				background-color: #fff;
				border: none;
				text-align: center;
				color: #000;
				padding: 0.4rem 0.5rem;
				border-radius: 0.2rem;
			}

			input:focus {
				outline: none;
			}
		}

		select {
			padding: 0.4rem 3rem;
			border-radius: 0.2rem;
			border: none;
		}
	}
	button {
		padding: 0.4rem 1.4rem;
		cursor: pointer;
		border-radius: 0.3rem;
		border: none;
		color: white;
		background-color: #073762;
		&:hover {
			background-color: #023e8a;
		}
	}

	@media screen and (min-width: 720px) and (max-width: 980px) {
		height: 25rem;
		.background {
			img {
				height: 100%;
			}
		}

		.content {
			width: 70rem;
		}
		.search {
			flex-direction: column;
			padding: 0.8rem;
			gap: 0.8rem;
			.container {
				padding: 0 0.8rem;
				input[type='date'] {
					padding-left: 1rem;
				}
			}

			select {
				padding: 0.5rem 4.2rem;
			}

			button {
				padding: 1rem;
				font-size: 1rem;
			}
		}
	}
`;
