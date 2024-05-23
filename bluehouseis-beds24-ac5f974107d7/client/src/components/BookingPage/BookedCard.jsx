import React from 'react';
import styles from '../../styles/BookedCard/BookedCard.module.css';
import {differenceInDays, format} from "date-fns";
const BookedCard = ({ title, subtitle, img,price,total , checkin , checkout}) => {

	var days = differenceInDays(new Date(checkout),new Date(checkin));
	console.log('dayssss'+days)

	return (
		<div className={`${styles.listContainer}`}>
			<div className={`${styles.summaryContainer}`}>
				<div className={`${styles.sumContainer}`}>

					<div className={`${styles.titleContainer}`}>
						<p className={`${styles.listName}`}>{title}</p>
					</div>

					<div className={`${styles.subTitleContainer}`}>
						<p className={`${styles.listsubName}`}>{subtitle}</p>
					</div>

					<div className={`${styles.ascTextContainer}`}>
						<div className={`${styles.details1Container}`}>
							<h3>Check-in</h3>
							<p>{format(new Date(checkin), "EEEE , d MMM , yyyy")}</p>
						</div>

						<div className={`${styles.details2Container}`}>
							<h3>Check-out</h3>
							<p>{format(new Date(checkout), "EEEE , d MMM , yyyy")}</p>
						</div>

						<div className={`${styles.details3Container}`}>
							<h3>Nights</h3>
							<p>{days}</p>
						</div>

						<div className={`${styles.details4Container}`}>
							<h3>Price Details</h3>
						</div>

					</div>
				</div>



				<div className={`${styles.cardContainer}`}>

					<div className={`${styles.descContainer}`}>

						<div className={`${styles.imgHotelContainer}`}>

							<img
								src={img}
								alt="hotels"
							/>
						</div>

						<div className={`${styles.descTextContainer}`}>
							<ul>
								<li>Shared Bathroom</li>
								<li>Queen Size Bed</li>
								<li>Netflix TV</li>
								<li>Free WiFi</li>
								<li>14 day Cancellation</li>
							</ul>
						</div>

						<div className={`${styles.prcTextContainer}`}>
							<div className={`${styles.prc1Container}`}>
								<h3>Price Per Night</h3>
								<p>€ {Number(price).toFixed(2)}</p>
							</div>

							<div className={`${styles.prc2Container}`}>
								<h3>Total Amount</h3>
								<p>€ {total}</p>
							</div>

						</div>
					</div>

				</div>
			</div>

		</div>

	);
};

export default BookedCard;
