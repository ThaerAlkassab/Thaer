import React,{useState,useEffect} from 'react';
import HotelCards from './HotelCards';
import styles from '../styles/Options/Options.module.css';
import {Checkkout as checkkout}  from "./Hero";
import {Checkkin as checkkin}  from "./Hero";
import {format as formatfns} from "date-fns";

let HC=[];
let uniqueArray = [];
let prices =[];
let notavailableat="";
let rowss=[];
export default function Options({selectedGuest}) {
	const [availdata, setavailData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isLoading2, setIsLoading2] = useState(false);
	const [data, setData] = useState([]);

	// request Headers
	const requestOptions = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },

	};
	const requestOptions2 = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },

	};



	//Get the rooms info along with the ID
	const fetchData = () => {
		fetch('http://localhost:3001/api/rooms', requestOptions)
			.then(response => response.json())

			.then((result) =>{
					console.log("roooms"+result)
					setData(result.rooms)
					setIsLoading2(true);

				}

			)
			.catch((err) => console.log("error"));
	};

	useEffect(() => {
		fetchData();
	}, []);

	//get the i and p variables
	function fetchData1() {
		fetch('http://localhost:3001/api/availability', requestOptions2)
			.then(response => response.json())

			.then((result) =>{
					setavailData(result.availability[0])


					console.log('ooooooooooh'+result.availability[0][7264])
					setIsLoading(true);


				}

			)
			.catch((err) => console.log("error"));
	}

	useEffect(() => {
		fetchData1();
	}, []);

	prices.length=0;
	var strToDatein = new Date(checkkin)
	var strToDateout = new Date(checkkout)
	function format(date) {
		return `${date.getFullYear()}${`${date.getMonth()+1}`.padStart(2, 0)}${`${date.getDate()}`.padStart(2, 0)}`;
	}
	//empty HC to escape useState renders
	HC.length=0;

	data.forEach((p) =>{

		if (isLoading && isLoading2 ){

			for (var day = new Date(strToDatein); day < strToDateout; day.setDate(day.getDate() + 1)) {

				console.log(day + "dekhel for");

				var diplaydate = formatfns(day,"dd  MMM ");

				var date = format(day, 'yyyyMMdd');

				if (availdata[p.roomId][date].i==0){

					notavailableat="Not available at "+diplaydate;
					console.log(+p.roomId+"not available at "+diplaydate)

					HC.push(<div key={p.roomId}>
						<HotelCards
							idroom={p.roomId}
							title={p.roomName.toUpperCase()}
							status={true}
							price={0}
							img={p.pictures[0].url}
							avail={notavailableat}
							rows={rowss}
							guest={selectedGuest}
						/></div>)


					break;
				}
				else
				{console.log("dateeee"+ date);
					var price_per_night=0;

					rowss.length=0;
					prices.length=0;

					console.log("9bal"+prices)

					for (var day = new Date(strToDatein); day < strToDateout; day.setDate(day.getDate() + 1)) {
						var d = format(day, 'yyyyMMdd');

						prices.push(availdata[p.roomId][d].p1);
					}

					console.log("room:"+p.roomId+"price?"+availdata[p.roomId][date].p1)

					var total_price = 0;
					if(prices.length!==0){
						for (var i=0;i<=prices.length-1;i++){
							total_price+=parseFloat(prices[i]);
							price_per_night =total_price / (prices.length);
						}
						console.log("baad"+prices)
					}
					console.log(prices)
					HC.push(<div key={p.roomId}>
						<HotelCards
							idroom={p.roomId}
							title={p.roomName.toUpperCase()}
							status={true}
							price={price_per_night}
							total_prices={total_price}
							img={p.pictures[0].url}
							avail={"available"}
							rows={rowss}
							guest={selectedGuest}
						/></div>)



				}
				return (
					<div className={`${styles.containers}`}>

						{HC }
					</div>
				);
			}

		}

	})


	return (
		<div className={`${styles.containers}`}>

			{HC }
		</div>
	);
}
