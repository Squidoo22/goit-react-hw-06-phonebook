import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./phonebook-actions";

const contacts = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    const contacts = [...state, payload];
    return contacts;
  },
  [actions.deleteContact]: (state, { payload }) => {
    const contacts = state.filter(({ id }) => id !== payload);
    return [...contacts];
  },
});
const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
