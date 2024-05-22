import React from 'react';
import HotelCards from './HotelCards';
import styles from '../styles/Options/Options.module.css';

export default function Options() {
	return (
		<div className={`${styles.containers}`}>
				<HotelCards
					title={'ECONOMY DOUBLE ROOM'}
					status={true}
					price={'$72'}
					img={'1.png'}
				/>
				<HotelCards
					title={'DOUBLE TWIN ROOM'}
					status={true}
					price={'$79'}
					img={'1.png'}
				/>
				<HotelCards
					title={'ECONOMY DOUBLE ROOM'}
					status={false}
					price={'$79'}
					img={'1.png'}
				/>
				<HotelCards
					title={'DOUBLE TWIN ROOM'}
					status={true}
					price={'$79'}
					img={'1.png'}
				/>
		</div>
	);
}
