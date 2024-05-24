import React from "react";
import "./css/Suport.css";
import SuportCard from "./SuportCard.js";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  // Global settings:
  duration: 2000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
});
function Suport() {
  return (
    <div data-aos="fade-up" className="support" id="faq">
      <SuportCard
        Icon="./Group.svg"
        title="Support"
        text="Get personal support from our team."
      />
      <SuportCard
        Icon="./Group-1.svg"
        title="FAQ"
        text="Check previous guest requests."
      />

      <SuportCard
        Icon="./Group-3.svg"
        title="FEEDBACK"
        text="Your opinion is important to us."
      />
    </div>
  );
}

export default Suport;
