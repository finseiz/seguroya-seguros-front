import { createSlice } from "@reduxjs/toolkit";
import { lifeFormData } from "app/models";

const initialState = {
  clientData: {
    documentType: "",
    identification: "",
    firstName: "",
    firstLastName: "",
    birthDepartment: "",
    brithCity: "",
    gender: "",
    residentDepartment: "",
    residentCity: "",
    address: "",
    ocupation: "",
    cellphone: "",
    email: "",
    issueDate: "",
    bithDate: "",
    discountCode: "",
    currentInsurance: "",
    knowledgeOfInsuranceCoverage: "",
    searchToProject: "",
    dataProcessingLicence: "",
  },
  plans: [],
  progress: {
    initial: 0,
  }
};

const setClientData = (data) => (dispatch) => {
  const action = { data };
  dispatch(lifeInsuranceSlice.actions.setClientData(action));
};

const setClientDataField = (value, field) => (dispatch) => {
  const action = { value, field };
  dispatch(lifeInsuranceSlice.actions.setClientDataField(action));
};

const addClientData = (data) => (dispatch) => {
  const action = { data: lifeFormData(data), };
  dispatch(lifeInsuranceSlice.actions.addClientData(action));
};

const setPlans = (data) => (dispatch) => {
  const action = { data };
  dispatch(lifeInsuranceSlice.actions.setPlans(action));
};

const addPlans = (data) => (dispatch) => {
  const action = { data };
  dispatch(lifeInsuranceSlice.actions.addPlans(action));
};

const setInitialProgress = ( progress ) => (dispatch) => {
  const action = { data: progress };
  dispatch(lifeInsuranceSlice.actions.setInitialProgress(action));
};

export const actions = {
  setClientData,
  setClientDataField,
  addClientData,
  setPlans,
  addPlans,
  setInitialProgress
};

export const lifeInsuranceSlice = createSlice({
  name: "lifeInsurance",
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
    setInitialProgress: (state, action) => {
      const { data } = action.payload;
      state.progress.initial = data;
    },
  },
});
