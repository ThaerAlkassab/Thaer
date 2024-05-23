import { Link } from "react-router-dom";
import React,{useState,useEffect,useRef} from 'react';
import styles from '../styles/HotelListCards/HotelCards.module.css';
import {Checkkin as checkkin}  from "./Hero";
import {Checkkout as checkkout}  from "./Hero";



const HotelCards = ({ idroom , title, status = true, price,total_prices, img ,avail,rows,guest }) => {
	const [guests, setGuest] = useState('')


	return (

		<div className={`${styles.listContainer}`}>
			<p className={`${styles.listName}`}>{title}</p>
			<div className={`${styles.cardContainer}`}>
				<div className={`${styles.imgHotelContainer}`}>
					<img
						src={img}
						alt="hotels"
					/>
				</div>


				<div className={`${styles.descContainer}`}>
					<div className={`${styles.descTextContainer}`}>
						<ul>
							<li>Shared Bathrooms {idroom}</li>
							<li>Budget Friendly</li>
							<li>Cozy Room </li>
							<li>Free Fast WiFi</li>
							<li>14 Day Cancellation</li>
						</ul>
					</div>

					<div className={`${styles.descIconContainer}`}>
						<img
							src={`${process.env.PUBLIC_URL}/assets/hotelServicesIcon/bed.png`}
							alt="bed"
						/>
						<img
							src={`${process.env.PUBLIC_URL}/assets/hotelServicesIcon/break.png`}
							alt="break"
						/>
						<img
							src={`${process.env.PUBLIC_URL}/assets/hotelServicesIcon/tv.png`}
							alt="tv"
						/>
						<img
							src={`${process.env.PUBLIC_URL}/assets/hotelServicesIcon/bath.png`}
							alt="bath"
						/>
					</div>
				</div>
				<div className={`${styles.bookingContainer}`}>
                    {price==0  ? (
                        //not available
					<div ></div>
                    ) : (
						//available
                        <div className={`${styles.prizesContainer}`}>
                        <p>starting from</p>
                        <h2> {Number(price).toFixed(2)} € </h2>
                        <p>per night</p>
							<p>total : {Number(total_prices).toFixed(2)} €</p>
                    </div>
					)}
					<div>
						{price==0  ? (
							<div className={`${styles.bookUnavailButton}`}>
								<input  type="button" value={avail} />
								<input
									onClick={event => setGuest(guest)}
									type="button" value="ENQUIRE" />
							</div>

						) : (
							<>
								<div className={`${styles.qtyContainer}`}>
									<input
										onChange={event => setGuest(guest)}
										type="number"
										min="0"
										name="guest"
										id="guest"
										placeholder="Guests   >"
									/>
								</div>
								<Link to={{pathname:`/book`,state: { total_prices,title,img,price,checkkin,checkkout,idroom },}}  >
									<div className={`${styles.bookButton} onClick={handleSubmit}`}>
										<input type="button" value="BOOK" />
									</div>
								</Link>
							</>

						)}
					</div>
				</div>
			</div>
		</div>

	);
};

export default HotelCards;