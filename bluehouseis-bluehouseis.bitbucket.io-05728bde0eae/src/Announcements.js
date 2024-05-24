import React from "react";
import "./css/Announcements.css";
import { WithTransLate } from "./translating/index";

function Announcements({ Icon, title }) {
  return (
    <div className="announcements">
      {Icon && <img src={Icon} alt="" className="announcements__icon" />}
      <div className="announcements_text">
        <p>
          <WithTransLate text={title} />
        </p>
      </div>
    </div>
  );
}

export default Announcements;
