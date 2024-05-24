

export const setFirstDay = date1 => ({
  type: 'FIRST_DAY',
  payload: date1
});
export const setSecondDay = date2 => ({
  type: 'SECOND_DAY',
  payload: date2
});
export const setDayDifference = dif => ({
  type: 'DAY_DIFFERENCE',
  payload: dif
});

/* export const addDates = item => ({
  type: SearchActionTypes.ADD_DATES,
  payload: item
}); */