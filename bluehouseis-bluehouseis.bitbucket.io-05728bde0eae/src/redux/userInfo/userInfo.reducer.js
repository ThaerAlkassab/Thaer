//import SearchActionTypes from "./dates.types";

const INITIAL_STATE = {
  userInfo : {
    firstName: "",
    Surname : "",
    Email : "",
    Mobile : "",
    Address : "",
    Postcode : "",
    City : "",
    Country : "",
    Arrival : "",
    Comments : "" 
  },
  quantity: 1
  

};

const userInfoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USERINFO':
      return {
        ...state,
        userInfo: action.payload
      };
    case 'SET_QUANTITY':
      return {
        ...state,
        quantity: action.payload
      };
    default:
      return state;
  }
};

export default userInfoReducer; 