import React from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import NewNavbar from './components/NewNavbar';
import Options from './components/Options';
import ScrollToTop from './components/ScrollToTop';
import Services from './components/Services';

export default function App() {
	return (
		<>
			<NewNavbar />
			{/* <NavBar /> */}
			<Hero />
			<Services />
			<Options />
			<ScrollToTop />
			<Footer />
		</>
	);
}
