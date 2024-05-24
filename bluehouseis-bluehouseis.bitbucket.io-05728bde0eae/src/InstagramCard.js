import React from "react";
import "./css/InstagramCard.css";
function InstagramCard({ path }) {
  return (
    <div className="instagramCard">
      <figure>
        <img src={path} alt="" />
      </figure>
    </div>
  );
}

export default InstagramCard;
