import React, {useEffect, useState, useCallback} from 'react';
import styled from 'styled-components';
import homeImage from '../assets/booking-bg.jpg';
import styles from '../styles/HotelListCards/HotelCards.module.css';
import {differenceInDays, format} from "date-fns";


var Checkkin = 0;
var Checkkout= 1;
let notavailableat="";
let rowss=[];
let prices =[];
let alldata =[];
export {Checkkin,Checkkout,rowss,notavailableat,prices,alldata};


export default function Hero({setSelectedGuest}) {

	const [availdata, setavailData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const requestOptions = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },

	};
	function fetchData() {
		fetch('http://localhost:3001/api/availability', requestOptions)
			.then(response => response.json())

			.then((result) =>{
					setavailData(result.availability[0])
					setIsLoading(true);


				}

			)
			.catch((err) => console.log("error"));
	}

	useEffect(() => {
		fetchData();
	}, []);


	var curr = new Date();
	curr.setDate(curr.getDate());
	var currandone = new Date();
	currandone.setDate(currandone.getDate()+1);
	var today = curr.toISOString().substr(0,10);
	var tomorrow = currandone.toISOString().substr(0,10);
	var nights =1;

	const [Checkout, SetCheckout] = useState();
	const [Checkin, SetCheckin] = useState();
	console.log("hahha"+format(curr,"yyyy-MM-dd"));

	if (typeof  Checkin === 'undefined' && typeof Checkout ==='undefined'){
		Checkkin = format(curr,"yyyy-MM-dd")
		Checkkout = format(currandone,"yyyy-MM-dd")
		console.log("fel if "+Checkkout)
		console.log("fel if "+Checkkin)
		SetCheckin(Checkkin)
		SetCheckout(Checkkout)


	}
	else {
		Checkkin =Checkin;
		Checkkout=Checkout;

	}

	prices.length=0;




	var strToDatein = new Date(Checkkin)
	var strToDateout = new Date(Checkkout)
	console.log("fou9 lfor"+strToDatein)

	console.log("fou9 lfor"+strToDateout)
	var numberdays = differenceInDays(new Date(Checkkout),new Date(Checkkin));
	console.log("availability data "+availdata)

	const onButtonClick=()=>{
		setSelectedGuest(Math.random())
	}

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
							<input
								onChange={event => SetCheckin(event.target.value)
								}
								defaultValue={today}
								type="date"
								name="dt"
								id="dt"

							/>
						</div>

						<div className="container">
							<label htmlFor="">Check-out</label>
							<input
								defaultValue={tomorrow}
								onChange={event => SetCheckout(event.target.value)}
								type="date"
								name="dto"
								id="dto"
							/>
						</div>
						<div className="container">
							<label htmlFor="">Nights</label>
							< select
								class="dropdown-content f5-l cur link pa4 ph4-l"
								href="#currency"
								id="currencySelector"
								value={numberdays}
							>
								<option value="0"></option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
							</select>
						</div>
						<button onClick={()=>onButtonClick()} >Search</button>





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
