import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataToSend: {},
  plans: [],
  allianzPlans: [],
  data: {
    cities: [],
  },
  selectedPlan: {},
  progress: {
    initial: 0,
    /** WARING: If this name change [uniqueProcess], most change carsInsaranceRoute.jsx at processIndicatorName="**" */
    uniqueProcess: 0,
  },
  doneMessage: "",
};

const setPlans = (data) => (dispatch) => {
  const action = { data };
  dispatch(carsInsuranceSlice.actions.setPlans(action));
};

const setDoneMessage = (data) => (dispatch) => {
  const action = { data };
  dispatch(carsInsuranceSlice.actions.setDoneMessage(action));
};

const setAllianzPlans = (data) => (dispatch) => {
  const action = { data };
  dispatch(carsInsuranceSlice.actions.setAllianzPlans(action));
};

const setInitialProgress = (progress) => (dispatch) => {
  const action = { data: progress };
  dispatch(carsInsuranceSlice.actions.setInitialProgress(action));
};

const setUniqueProgress = (progress) => (dispatch) => {
  const action = { data: progress };
  dispatch(carsInsuranceSlice.actions.setUniqueProgress(action));
};

const setSelectedPlan = (plan) => (dispatch) => {
  const action = { plan };
  dispatch(carsInsuranceSlice.actions.setSelectedPlan(action));
};

const editDataToSend = (data) => (dispatch) => {
  dispatch(carsInsuranceSlice.actions.editDataToSend(data));
};

const restartState = () => (dispatch) => {
  dispatch(carsInsuranceSlice.actions.reset());
};

export const actions = {
  setPlans,
  setAllianzPlans,
  setDoneMessage,
  setInitialProgress,
  setSelectedPlan,
  setUniqueProgress,
  editDataToSend,
  restartState,
};

export const carsInsuranceSlice = createSlice({
  name: "carsInsurance",
  initialState,
  reducers: {
    setPlans: (state, action) => {
      const { data } = action.payload;
      state.plans = data;
    },
    setAllianzPlans: (state, action) => {
      const { data } = action.payload;
      state.allianzPlans = data;
    },
    setInitialProgress: (state, action) => {
      const { data } = action.payload;
      state.progress.initial = data;
    },
    setUniqueProgress: (state, action) => {
      const { data } = action.payload;
      state.progress.uniqueProcess = data;
    },
    setSelectedPlan: (state, action) => {
      const { plan } = action.payload;
      state.selectedPlan = plan;
    },
    editDataToSend: (state, action) => {
      const newData = action.payload;
      state.dataToSend = {
        ...state.dataToSend,
        ...newData,
      };
    },
    setDoneMessage: (state, action) => {
      const { data } = action.payload;
      state.doneMessage = data;
    },
    reset: (state, action) => {
      state = initialState;
      return initialState;
    },
  },
});
