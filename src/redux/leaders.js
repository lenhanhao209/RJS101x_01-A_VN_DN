import { LEADERS } from "../shared/leaders";
import { actionTypes } from "redux-form";

export const Leaders = (state = LEADERS, action) => {
  switch (actionTypes.type) {
    default:
      return state;
  }
};
