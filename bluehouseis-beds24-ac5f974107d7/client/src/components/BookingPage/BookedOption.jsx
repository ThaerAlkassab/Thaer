import React, {useState} from 'react';
import BookedCard from './BookedCard';
import styles from '../../styles/Options/Options.module.css';
import {useLocation, useParams} from 'react-router-dom';
import {differenceInDays} from "date-fns";
import {Checkkin, Checkkout} from "../Hero";


export default function Options() {
	const location = useLocation()





	return (
		<div className={`${styles.containers}`}>

				<BookedCard
					title={'YOUR BOOKING SUMMARY'}
					subtitle={location.state.title}
					price={location.state.price}
					total={location.state.total_prices}
					img={location.state.img}
					checkin={location.state.checkkin}
					checkout={location.state.checkkout}
				/>
		</div>
	);
}
