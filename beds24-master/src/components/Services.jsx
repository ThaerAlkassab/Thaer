import React from 'react'
import styled from 'styled-components'
import services1 from "../assets/servicesImages/view.svg";
import services2 from "../assets/servicesImages/wifi.svg";
import services3 from "../assets/servicesImages/bus.svg";
import services4 from "../assets/servicesImages/car.svg";
import services5 from "../assets/servicesImages/airplane.svg";
import services6 from "../assets/servicesImages/clock.svg";

export default function Services() {
const data = [
    {
        icon: services1,
        title: "Popular Spot for Northern Lights"
    },
    {
        icon: services2,
        title: "Free Wifi"
    },
    {
        icon: services3,
        title: "3 Min Walk to Bus Stop"
    },
    {
        icon: services4,
        title: "5 Min Drive from Town"
    },
    {
        icon: services5,
        title: "45 Min Drive from Airport"
    },
    {
        icon: services6,
        title: "Late Night Self Check In"
    },

];

    return (
    <Section id="services">
    {data.map((service) => {
        return (
            <div className="service">
                <div className="icon">
                <img src={service.icon} alt="" />
                </div>
                <p>{service.title}</p>
            </div>
        );
    })}
    </Section>
    );
}

const Section = styled.section`
padding: 2rem 0;
margin-left: 13.4rem;
margin-right: 12rem;
display: grid;
padding: 0rem 0 2rem;
margin-top: -2rem;
grid-template-columns: repeat(6, 1fr);
align-content: center;



.service {
    display: grid;
    flex-direction: column;
    align-content: center;
    padding: 2rem;
}

.icon{
    img{
    height: 1.4rem;
    margin-left: 2rem;
}
}
@media screen and (min-width: 280px) and (max-width: 1080px) 
{
margin-left: 8rem;
flex-direction: column;
gap: 2rem;
align-items: center;
}


@media screen and (min-width: 720px) and (max-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
}
`;
