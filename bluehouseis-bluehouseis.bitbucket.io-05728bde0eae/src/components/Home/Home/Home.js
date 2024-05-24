import React from 'react';
import Header from '../Header/Header/Header'
import BookingSearch from '../BookingSearch/BookingSearch'
import Services from '../Services/Services/Services'
import Rooms from '../Rooms/Rooms/Rooms'
import { connect } from 'react-redux';
import Footer from '../../Footer/Footer'


const Home = ({clicked }) => {
    
    const RenderRooms = () => {
        return (<Rooms/>)
    }
 
    return (
        <>  
            <Header />
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <BookingSearch/>
                <Services />
                {clicked && <RenderRooms /> }
                <Footer />
            </div>
        </>
    );
};


const mapStateToProps = state => ({
    checkIn: state.checkIn.firstDay,
    checkOut: state.checkOut.secondDay,
    clicked: state.clicked.clicked
  });
  
export default connect(mapStateToProps)(Home);