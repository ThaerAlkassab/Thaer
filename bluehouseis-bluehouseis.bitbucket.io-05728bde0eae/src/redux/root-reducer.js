import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import searchReducer from "./search/search.reducer";
import dateReducer from "./dates/dates.reducer";
import bookingReducer from "./booking/booking.reducer";

import userInfoReducer from "./userInfo/userInfo.reducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "checkIn",
    "checkOut",
    "clicked",
    "dayDifference",
    "price",
    "userInfo",
    "quantity",
    "name"
  ],
};

const rootReducer = combineReducers({
  clicked: searchReducer,
  checkIn: dateReducer,
  checkOut: dateReducer,
  dayDifference: dateReducer,
  price: bookingReducer,
  name: bookingReducer,

  index: bookingReducer,
  userInfo: userInfoReducer,
  quantity: userInfoReducer,
});

export default persistReducer(persistConfig, rootReducer);
