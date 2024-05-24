//import SearchActionTypes from "./dates.types";
import * as moment from 'moment'
let newDate = moment(new Date()).format('YYYYMMDD')

const INITIAL_STATE = {
  firstDay: newDate,
  secondDay: newDate,
  dayDifference: 0
};

const dateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FIRST_DAY':
      return {
        ...state,
        firstDay: action.payload
      };
    case 'SECOND_DAY':
    return {
      ...state,
      secondDay: action.payload
    };
    case 'DAY_DIFFERENCE':
      return {
        ...state,
        dayDifference: action.payload
      };
    default:
      return state;
  }
};

export default dateReducer; 