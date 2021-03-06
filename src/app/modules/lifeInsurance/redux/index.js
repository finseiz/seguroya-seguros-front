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
};

const actionTypes = {
  SET_CLIENT_DATA: "SET_CLIENT_DATA",
  SET_FIELD_CLIENT_DATA: "SET_FIELD_CLIENT_DATA",
  ADD_CLIENT_DATA: "ADD_CLIENT_DATA",
  SET_PLANS: "SET_PLANS",
  ADD_PLANS: "ADD_PLANS",
};

const setClientData = (data) => (dispatch) => {
  const action = { type: actionTypes.SET_CLIENT_DATA, data };
  dispatch(lifeInsuranceSlice.actions.setClientData(action));
};

const setClientDataField = (value, field) => (dispatch) => {
  const action = { type: actionTypes.SET_FIELD_CLIENT_DATA, value, field };
  dispatch(lifeInsuranceSlice.actions.setClientDataField(action));
};

const addClientData = (data) => (dispatch) => {
  const action = {
    type: actionTypes.ADD_CLIENT_DATA,
    data: lifeFormData(data),
  };
  dispatch(lifeInsuranceSlice.actions.addClientData(action));
};

const setPlans = (data) => (dispatch) => {
  const action = { type: actionTypes.SET_PLANS, data };
  dispatch(lifeInsuranceSlice.actions.setPlans(action));
};

const addPlans = (data) => (dispatch) => {
  const action = { type: actionTypes.ADD_CLIENT_DATA, data };
  dispatch(lifeInsuranceSlice.actions.addPlans(action));
};

export const actions = {
  setClientData,
  setClientDataField,
  addClientData,
  setPlans,
  addPlans,
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
  },
});
