import React from "react";
import "./css/PaperImage.css";
import { Paper } from "@material-ui/core";
import { WithTransLate } from "./translating/index";

function PaperImage({
  image,
  textlist1,
  onhandle,
  textlist2,
  textlist3,
  textlist4,
  title,
  textboolean,
  key,
}) {
  return (
    <div className="paper_body">
      <Paper id={key} className="paper__image">
        <figure>
          <img src={image} alt={title}></img>
        </figure>
        {textboolean ? (
          <div className="paper__text">
            <ul>
              <li>
                <WithTransLate text={textlist1} />
              </li>
              <li>
                <WithTransLate text={textlist2} />
              </li>
              <li>
                <WithTransLate text={textlist3} />
              </li>
              <li>
                <WithTransLate text={textlist4} />
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
        {textboolean ? (
          <button className="paper__button" onClick={onhandle} type="button">
            <WithTransLate text="Know More" />
          </button>
        ) : (
          <div></div>
        )}
      </Paper>
      <p className="paper_body_text">
        <WithTransLate text={title} />
      </p>
    </div>
  );
}

export default PaperImage;
