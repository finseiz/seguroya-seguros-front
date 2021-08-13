import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  progress: {
    initial: 0,
    sura: 0
  },
  plans: [],
  selectedPlan: {}
};

const setPlans = (data) => (dispatch) => {
  const action = { data };
  dispatch(healthInsuranceSlice.actions.setPlans(action));
};

const setSelectedPlan = (plan) => (dispatch) => {
  const action = { plan };
  dispatch(healthInsuranceSlice.actions.setSelectedPlan(action));
}

const setInitialProgress = (progress) => (dispatch) => {
  const action = { data: progress };
  dispatch(healthInsuranceSlice.actions.setInitialProgress(action));
};

const setSuraProgress = (progress) => (dispatch) => {
  const action = { data: progress };
  dispatch(healthInsuranceSlice.actions.setSuraProgress(action));
};

export const actions = {
  setInitialProgress,
  setPlans,
  setSelectedPlan,
  setSuraProgress
};

export const healthInsuranceSlice = createSlice({
  name: "healthInsurance",
  initialState,
  reducers: {
    setInitialProgress: (state, action) => {
      const { data } = action.payload;
      state.progress.initial = data;
    },
    setSuraProgress: (state, action) => {
      const { data } = action.payload;
      state.progress.initial = data;
    },
    setPlans: (state, action) => {
      const { data } = action.payload;
      state.plans = data;
    },
    setSelectedPlan: (state, action) => {
      const { plan } = action.payload;
      state.selectedPlan = plan;
    },
  },
});
