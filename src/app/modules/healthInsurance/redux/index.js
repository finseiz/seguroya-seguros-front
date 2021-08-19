import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  progress: {
    initial: 0,
    sura: 0
  },
  plans: [],
  selectedPlan: {},
  beneficiaries: [],
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

const setBeneficiaries = (beneficiaries) => (dispatch) => {
  const action = { beneficiaries };
  dispatch(healthInsuranceSlice.actions.setBeneficiaries(action));
}

export const actions = {
  setInitialProgress,
  setPlans,
  setSelectedPlan,
  setSuraProgress,
  setBeneficiaries
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
      state.progress.sura = data;
    },
    setPlans: (state, action) => {
      const { data } = action.payload;
      state.plans = data;
    },
    setSelectedPlan: (state, action) => {
      const { plan } = action.payload;
      state.selectedPlan = plan;
    },
    setBeneficiaries: (state, action) => {
      const { beneficiaries } = action.payload;
      state.beneficiaries = beneficiaries;
    },
  },
});
