import { PROMOTIONS } from "../shared/promotions";
import { actionTypes } from "redux-form";

export const Promotions = (state = PROMOTIONS, action) => {
  switch (actionTypes.type) {
    default:
      return state;
  }
};
