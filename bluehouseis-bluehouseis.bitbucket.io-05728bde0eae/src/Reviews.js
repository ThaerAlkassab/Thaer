import React from "react";
import "./css/Reviews.css";
import ReviewCard from "./ReviewCard.js";
import Slider from "infinite-react-carousel";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  // Global settings:
  duration: 2000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
});
function Reviwes() {
  const settings = {
    arrowsScroll: 2,
    autoplay: true,
    centerPadding: 30,
    shift: 50,
    slidesPerRow: 2,
    swipe: false,
    wheel: true,
    adaptiveHeight: true,
    arrows: false,
  };

  return (
    <div className="reviews">
      <div data-aos="fade-up" className="reviwes__sidebar">
        <h2>Reviews</h2>
      </div>
      <div data-aos="fade-up" className="reviwes__content">
        <Slider className="carousel" {...settings}>
          <div>
            <ReviewCard
              name="LESLEY"
              review="The location offered an amasing view of the sea"
            />
          </div>

          <div>
            <ReviewCard
              name="BRAD"
              review="We saw northern lights from our room."
            />
          </div>
          <div>
            <ReviewCard
              name="LESLEY"
              review="The location offered an amasing view of the sea"
            />
          </div>
          <div>
            <ReviewCard
              name="BRAD"
              review="We saw northern lights from our room."
            />
          </div>
          <div>
            <ReviewCard
              name="LESLEY"
              review="The location offered an amasing view of the sea"
            />
          </div>
          <div>
            <ReviewCard
              name="BRAD"
              review="We saw northern lights from our room."
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Reviwes;
