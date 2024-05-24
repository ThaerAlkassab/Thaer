import SearchActionTypes from "./search.types";
const INITIAL_STATE = {
  clicked: false
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchActionTypes.SEARCH_CLICKED:
      return {
        ...state,
        clicked: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer; 