import { combineReducers } from "redux";

import * as auth from "app/modules/auth/_redux/authRedux";
import { lifeInsuranceSlice } from "app/modules/lifeInsurance/redux";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  lifeInsurance: lifeInsuranceSlice.reducer,
});
