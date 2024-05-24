import React from "react";
import "./css/BlogPart.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { WithTransLate } from "./translating/index";

AOS.init({
  // Global settings:
  duration: 2000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
});
function BlogPart() {
  return (
    <div className="blogPart">
      <div data-aos="fade-up" className="blogPart__help">
        <h1>
          <WithTransLate text="Don’t know which one to choose?" />{" "}
        </h1>
        <p>
          <WithTransLate text="Leave a request and we will get back to you as soon as possible" />
        </p>
        <div className="blogPart__help_button">
          <button type="button">
            <WithTransLate text="I NEED HELP" />
          </button>
        </div>
      </div>
      <div data-aos="fade-up" className="blogPart__blog">
        <div className="blogPart__blog_image">
          <figure>
            <img src="./island.jpg" alt="" />
          </figure>
        </div>
        <div data-aos="fade-up" className="blogPart__blog_content">
          <div className="blogPart__blog_content_text">
            <h2>
              <WithTransLate text="FOR USEFUL RECOMMENDATIONS" /> <br />{" "}
              &amp;
              <WithTransLate
                text="ADVENTURES READ AMAZING
              STORIES IN OUR BLOG"
              />
            </h2>
          </div>
          <button type="button">
            <WithTransLate text="Read Blog" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogPart;
