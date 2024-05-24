import React from "react";
import "./css/ReviewCard.css";
import { Paper } from "@material-ui/core";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import { WithTransLate } from "./translating/index";
function ReviewCard({ name, review }) {
  return (
    <div className="reviewCard">
      <Paper className="reviewCardPaper">
        <div className="reviewCard_top">
          <FormatQuoteIcon className="reviewCard_quotes" />
        </div>
        <div className="reviewCard_center">
          <div className="reviewCard_centertext">
            <h1>
              <WithTransLate text={review} />
            </h1>
          </div>
        </div>
        <div className="reviewCard_bottom">
          <h1>
            __
            <WithTransLate text={name} />
          </h1>
          <FormatQuoteIcon className="reviewCard_quotes" />
        </div>
      </Paper>
    </div>
  );
}

export default ReviewCard;
