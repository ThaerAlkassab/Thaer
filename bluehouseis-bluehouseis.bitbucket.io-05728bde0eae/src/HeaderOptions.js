import React from "react";
import "./css/HeaderOptions.css";
import { WithTransLate } from "./translating/index";

function HeaderOptions({ title }) {
  return (
    <div className="headerOption">
      <h4>
        <WithTransLate text={title} />
      </h4>
    </div>
  );
}

export default HeaderOptions;
