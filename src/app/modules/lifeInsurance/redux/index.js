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
  data: {
    publiclyExposed: "no",
    publiclyExposedVinculation: "no",
    taxObligations: "no",
    usTaxResidentOrPlayer: "no",
    taxObligationsOutsideColombia: "no",
    beneficiaryEnrollment: [],
  },
};

const actionTypes = {
  SET_DATA: "SET_DATA",
  SET_FIELD_DATA: "SET_FIELD_DATA",
  ADD_DATA: "ADD_DATA",
  ADD_CLIENT_DATA: "ADD_CLIENT_DATA",
};

const setData = (data) => (dispatch) => {
  const action = { type: actionTypes.SET_DATA, data };
  dispatch(lifeInsuranceSlice.actions.setData(action));
};

const setDataField = (value, field) => (dispatch) => {
  const action = { type: actionTypes.SET_FIELD_DATA, value, field };
  dispatch(lifeInsuranceSlice.actions.setDataField(action));
};

const addData = (data) => (dispatch) => {
  const action = { type: actionTypes.ADD_DATA, data };
  dispatch(lifeInsuranceSlice.actions.addData(action));
};

const addClientData = (data) => (dispatch) => {
  const action = {
    type: actionTypes.ADD_CLIENT_DATA,
    data: lifeFormData(data),
  };
  dispatch(lifeInsuranceSlice.actions.addClientData(action));
};

export const actions = {
  setData,
  setDataField,
  addData,
  addClientData,
};

export const lifeInsuranceSlice = createSlice({
  name: "lifeInsurance",
  initialState,
  reducers: {
    setData: (state, action) => {
      const { data } = action.payload;
      state.data = data;
    },
    setDataField: (state, action) => {
      const { value, field } = action.payload;
      state.data[field] = value;
    },
    addData: (state, action) => {
      const { data } = action.payload;
      state.data = { ...state.data, ...data };
    },
    addClientData: (state, action) => {
      const { data } = action.payload;
      state.clientData = { ...state.clientData, ...data };
    },
  },
});
