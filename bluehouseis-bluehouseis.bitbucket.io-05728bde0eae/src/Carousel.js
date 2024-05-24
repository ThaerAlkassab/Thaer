import React from "react";
import "./css/Carousel.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
//import CarouselBody from "./CarouselBody.js"
import { WithTransLate } from "./translating/index";

function Carousel({ homepage }) {
  return (
    <div className="carousel__body">
      <div className="body">
        {homepage ? (
          <div className="body__sidebar">
            <a href="www.facebook.com">
              <InstagramIcon className="paper__footerIcon" />
            </a>
            <a href="www.facebook.com">
              {" "}
              <img className="paper__footerIcon" src="./icon1.svg" alt="" />
            </a>
            <a href="www.facebook.com">
              {" "}
              <WhatsAppIcon className="paper__footerIcon" />
            </a>
            <a href="www.facebook.com">
              <MailOutlineOutlinedIcon className="paper__footerIcon" />
            </a>
          </div>
        ) : (
          <div className="body__sidebar">
            <h2 className="sidebar_text">
              <WithTransLate text="House Rules" />
            </h2>
          </div>
        )}
        <div className="body__carousel">
          {
            //<CarouselBody />
          }
        </div>
      </div>
    </div>
  );
}

export default Carousel;
