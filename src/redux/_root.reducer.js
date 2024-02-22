import { combineReducers } from "redux";

const guests = (state = [], action) => {
  switch (action.type) {
    case "SET_GUESTS":
      return action.payload;
    default:
      return state;
  }
};

const hotels = (state = [], action) => {
  switch (action.type) {
    case "SET_HOTELS":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  guests,
  hotels,
});

export default rootReducer;
