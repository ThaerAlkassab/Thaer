//import SearchActionTypes from "./dates.types";

const INITIAL_STATE = {
  booking_price: 1,
  roomName: "",
  index: 1
};

const bookingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_PRICE':
      return {
        ...state,
        booking_price: action.payload
      };
    case 'SET_NAME':
      return {
        ...state,
        roomName: action.payload
      };
    case 'SET_INDEX':
      return {
        ...state,
        index: action.payload
      };
    default:
      return state;
  }
};

export default bookingReducer; 