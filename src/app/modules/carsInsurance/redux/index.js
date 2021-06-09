import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clientData: {
    license_plate: "",
    document_type: "",
    identification: "",
    name: "",
    lastname: "",
    email: "",
    birth_date: "",
    cellphone: "",
    discount_code: "",
    currentInsurance: "",
    knowledgeOfInsuranceCoverage: "",
    searchToProject: "",
    dataProcessingLicence: "",
  },
  plans: [],
  data: {
    cities: [],
  },
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
    const {
      numerodeliquidacion,
      opcionAutosDescripcion,
      coberturasCotizacion,
      deduciblePeridaTotal,
      totalPrima,
    } = element.responseData;

    plans.push({
      insurance_name: "BOLIVAR",
      title: numerodeliquidacion,
      rate: 4.0,
      premium: coberturasCotizacion[0].valorPrima,
      return_value: deduciblePeridaTotal,
      anual_price: totalPrima,
      mensual_price: "",
      message: "",
      description: opcionAutosDescripcion,
      plan: element.responseData,
    });
  });
  dispatch(addPlans(plans));
};

export const actions = {
  setClientData,
  setClientDataField,
  addClientData,
  setPlans,
  addPlans,
  setDataField,
  addBolivarPlans,
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
  },
});
