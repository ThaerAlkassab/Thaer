import React from 'react'
import styled from 'styled-components'
import phone from "../assets/footerImages/phone.svg";
import home from "../assets/footerImages/home.svg";
import mail from "../assets/footerImages/mail.svg";
import map from "../assets/footerImages/map.svg";
import whatsapp from "../assets/footerImages/whatsapp.svg";

export default function Footer() {
    return (
    <FooterContainer>
   <div class="col-1">
      <h2 class="nav__title">CONTACT US</h2>
      <ul>
      <li>
      <img src={phone} alt="phone" />
          <a href="#">354 775 6480</a>
        </li>

        <li>
        <img src={mail} alt="mail" />
          <a href="#">info@bluehouse.is</a>
        </li>
            
        <li>
        <img src={map} alt="map" />
          <a href="#">170 Seltjarnarnes, Iceland</a>
        </li>

        <li>
        <img src={home} alt="home" />
          <a href="#">Grotta Northern Lights Apartment</a>
        </li>

        <li>
        <img src={whatsapp} alt="whatsapp" />
          <a href="#">WhatsApp</a>
        </li>
      </ul>
      </div>
    
      <div class="col-2">
      <h2 class="nav__title">OUR NEWSLETTER</h2>
      
      <ul>
        <li>
          <a href="#">Sign up for our newsletter!</a>
        </li>
        
        <input type="text" placeholder="Your full name"/>

        <input type="text" placeholder="Your email addres"/>
        
       <button >Sign up</button>
       
      </ul>
      </div>
    
      <div class="col-3">
      <h2 class="nav__title">ABOUT US</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="#">House Rules</a>
        </li>
        
        <li>
          <a href="#">Blue House Blog</a>
        </li>
        
        <li>
          <a href="#">Northern Lights</a>
        </li>

        <li>
          <a href="#">Airport Shuttle</a>
        </li>

        <li>
          <a href="#">Feedback</a>
        </li>

        <li>
          <a href="#">Imprint & Privacy Policy</a>
        </li>
      </ul>
    </div>
  </FooterContainer>
    )
}

const FooterContainer = styled.footer`
max-height: 100vh;
display:flex;
justify-content: space-evenly;
align-items: left;
padding-top: 10rem;


input{
text-align: center;
height: 2.4rem;
width: 20rem;
margin-bottom: 1rem;
margin-left: 1rem;
border: 1.5px solid #073865;
font-family: 'Josefin Sans', sans-serif;
}

 input:focus{
    outline: none;
}

button {
    font-family: 'Josefin Sans', sans-serif;
    margin-left: 1rem;
    height: 2.4rem;
    width: 20rem;
    padding: 0.4rem 1.4rem;
    cursor: pointer;
    border: none;
    color: white;
    background-color: #073762;
    }

h2 { 
    float: left; 
    text-transform: uppercase; 
    margin: 0 0 20px 0; 
    padding: 9px 0 0 19px; 
    height: 33px; 
    width: 291px;
  }

.col-1, .col-2, .col-3 {
    float: left;
    padding: 30px 0 0 35px;
    width: 340px;   
}

col-1, a {
    margin-left: 1rem;
}

ul { 
    list-style: none; 
    margin: 0; 
    padding: 0; 
}

li {  
    float: left; 
    height: 35px; 
    margin: 3px 0;
    padding: 0; 
    width: 310px;
  }

  a {
      text-decoration: none;
  }

.nav__title, a {
    font-family: 'Josefin Sans', sans-serif;
    color: #14202b;
}

.col:first-child {
    padding: 30px 0 0 0;
  }

  @media screen and (min-width: 280px) and (max-width: 900px) {
   flex-direction: column;
   align-items: center;
   gap: 2rem;
   margin-left: 4rem;
   
`;
