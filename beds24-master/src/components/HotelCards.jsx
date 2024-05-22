import React from 'react';
import styles from '../styles/HotelListCards/HotelCards.module.css';
const HotelCards = ({ title, status = true, price, img }) => {
	return (
		<div className={`${styles.listContainer}`}>
			<p className={`${styles.listName}`}>{title}</p>
			<div className={`${styles.cardContainer}`}>
				<div className={`${styles.imgHotelContainer}`}>
					<img
						src={`${process.env.PUBLIC_URL}/assets/hotelImages/1.jpg`}
						alt="hotels"
					/>
				</div>

				<div className={`${styles.descContainer}`}>
					<div className={`${styles.descTextContainer}`}>
						<ul>
							<li>Shared Bathroom</li>
							<li>Budget Friendly</li>
							<li>Cozy Room</li>
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
					<div className={`${styles.prizesContainer}`}>
						<h1>{price}</h1>
						<p>per night</p>
						<h2>14 day canellation</h2>
					</div>
					<div>
						{status ? (
							<>
								<div className={`${styles.qtyContainer}`}>
									<input
										type="number"
										name="qty"
										id="qty"
										placeholder="Quantity   >"
									/>
									<input
										type="number"
										name="guest"
										id="guest"
										placeholder="Guests   >"
									/>
								</div>
								<div className={`${styles.bookButton}`}>
									<input type="button" value="BOOK" />
								</div>
							</>
						) : (
							<div className={`${styles.bookUnavailButton}`}>
								<input type="button" value="NOT AVAILABLE" />
								<input type="button" value="ENQUIRE" />
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HotelCards;
