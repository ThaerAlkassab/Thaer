import React from "react";
import "./css/SuportCard.css";
import { WithTransLate } from "./translating/index";

function SuportCard({ Icon, title, text }) {
  return (
    <div className="support_card">
      <div>{Icon && <img src={Icon} alt="" className="support__icon" />}</div>
      <div>
        <h3>
          <WithTransLate text={title} />
        </h3>
      </div>
      <div className="support__title">
        <p>
          <WithTransLate text={text} />
        </p>
      </div>
    </div>
  );
}

export default SuportCard;
