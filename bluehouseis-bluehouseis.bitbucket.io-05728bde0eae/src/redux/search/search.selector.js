import { createSelector } from 'reselect';

const clickedStatus = state => state.clicked;

export const selectSetSearchClicked = createSelector(
  [clickedStatus],
  clicked => clicked.clickedStatus
);
