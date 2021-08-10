import { combineReducers } from "redux";

import * as auth from "app/modules/auth/_redux/authRedux";
import { lifeInsuranceSlice } from "app/modules/lifeInsurance/redux";
import { carsInsuranceSlice } from "app/modules/carsInsurance/redux";
import { healthInsuranceSlice } from "app/modules/healthInsurance/redux";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  lifeInsurance: lifeInsuranceSlice.reducer,
  carsInsurance: carsInsuranceSlice.reducer,
  healthInsurance: healthInsuranceSlice.reducer,
});
