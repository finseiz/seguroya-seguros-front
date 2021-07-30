import { createSlice } from "@reduxjs/toolkit";
import { bolivarPlan } from "../model";

const initialState = {
  clientData: {},
  plans: [],
  data: {
    cities: [],
  },
  selectedPlan: {},
  progress: {
    initial: 0,
    /** WARING: If this name change [uniqueProcess] change, most change carsInsaranceRoute.jsx at processIndicatorName="**" */
    uniqueProcess: 0
  }
};

const actionTypes = {
  SET_CLIENT_DATA: "SET_CLIENT_DATA",
  SET_FIELD_CLIENT_DATA: "SET_FIELD_CLIENT_DATA",
  ADD_CLIENT_DATA: "ADD_CLIENT_DATA",
  SET_PLANS: "SET_PLANS",
  ADD_PLANS: "ADD_PLANS",
  SET_DATA: "SET_DATA",
};

const setClientData = (data) => (dispatch) => {
  const action = { type: actionTypes.SET_CLIENT_DATA, data };
  dispatch(carsInsuranceSlice.actions.setClientData(action));
};

const setClientDataField = (value, field) => (dispatch) => {
  const action = { type: actionTypes.SET_FIELD_CLIENT_DATA, value, field };
  dispatch(carsInsuranceSlice.actions.setClientDataField(action));
};

const setDataField = (value, field) => (dispatch) => {
  const action = { type: actionTypes.SET_DATA, value, field };
  dispatch(carsInsuranceSlice.actions.setDataField(action));
};

const addClientData = (data) => (dispatch) => {
  const action = { type: actionTypes.ADD_CLIENT_DATA, data };
  dispatch(carsInsuranceSlice.actions.addClientData(action));
};

const setPlans = (data) => (dispatch) => {
  const action = { type: actionTypes.SET_PLANS, data };
  dispatch(carsInsuranceSlice.actions.setPlans(action));
};

const addPlans = (data) => (dispatch) => {
  const action = { type: actionTypes.ADD_CLIENT_DATA, data };
  dispatch(carsInsuranceSlice.actions.addPlans(action));
};

const addBolivarPlans = (data) => (dispatch) => {
  const plans = [];
  data.data.forEach((element) => {
    plans.push(bolivarPlan(element));
  });
  dispatch(addPlans(plans));
};

/** -------------------------------- Nuevo -------------------------------- */
const setInitialProgress = ( progress ) => (dispatch) => {
  const action = { data: progress };
  dispatch(carsInsuranceSlice.actions.setInitialProgress(action));
};

const setSelectedPlan = ( plan ) => ( dispatch ) => {
  const action = { plan };
  dispatch(carsInsuranceSlice.actions.setSelectedPlan(action));
}
export const actions = {
  setClientData,
  setClientDataField,
  addClientData,
  setPlans,
  addPlans,
  setDataField,
  addBolivarPlans,

  setInitialProgress,
  setSelectedPlan
};

export const carsInsuranceSlice = createSlice({
  name: "carsInsurance",
  initialState,
  reducers: {
    setClientData: (state, action) => {
      const { data } = action.payload;
      state.clientData = data;
    },
    setClientDataField: (state, action) => {
      const { value, field } = action.payload;
      state.clientData[field] = value;
    },
    setDataField: (state, action) => {
      const { value, field } = action.payload;
      state.data[field] = value;
    },
    addClientData: (state, action) => {
      const { data } = action.payload;
      state.clientData = { ...state.clientData, ...data };
    },
    setPlans: (state, action) => {
      const { data } = action.payload;
      state.plans = data;
    },
    addPlans: (state, action) => {
      const { data } = action.payload;
      state.plans = [...state.plans, ...data];
    },

    /** -------------------------------- Nuevo -------------------------------- */
    setInitialProgress: (state, action) => {
      const { data } = action.payload;
      state.progress.initial = data;
    },
    setSelectedPlan: (state, action) => {
      const { plan } = action.payload;
      state.selectedPlan = plan;
    },
  },
});
