import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
};

const setClientData = (data) => (dispatch) => {
  const action = { type: actionTypes.SET_CLIENT_DATA, data };
  dispatch(carsInsuranceSlice.actions.setClientData(action));
};

export const actions = {
  setClientData,
};

export const carsInsuranceSlice = createSlice({
  name: "healthInsurance",
  initialState,
  reducers: {
    addPlans: (state, action) => {
      const { data } = action.payload;
      state.plans = [...state.plans, ...data];
    },
  },
});
