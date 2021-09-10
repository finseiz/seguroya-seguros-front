import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  progress: {
    initial: 0,
    sura: 0
  },
  plans: [],
  beneficiaries: [],
  generalLists: {
    occupations: [],
    documentTypes: [],
    departments: [],
  },
  selectedPlan: {},
  data: {
    client: {},
  }
};

const setPlans = (data) => (dispatch) => {
  const action = { data };
  dispatch(healthInsuranceSlice.actions.setPlans(action));
};

const setSelectedPlan = (plan) => (dispatch) => {
  dispatch(healthInsuranceSlice.actions.setSelectedPlan(plan));
}

const setInitialProgress = (progress) => (dispatch) => {
  const action = { data: progress };
  dispatch(healthInsuranceSlice.actions.setInitialProgress(action));
};

const setSuraProgress = (progress) => (dispatch) => {
  const action = { data: progress };
  dispatch(healthInsuranceSlice.actions.setSuraProgress(action));
};

const addBeneficiary = (beneficiary) => (dispatch) => {
  dispatch(healthInsuranceSlice.actions.addBeneficiary(beneficiary));
}

const deleteBeneficiary = (index) => (dispatch) => {
  dispatch(healthInsuranceSlice.actions.deleteBeneficiary(index));
}

/**
 * @param {string} field "occupations" | "departments" | "documentTypes"
 * @param {array} data 
 */
const setGeneralListsValues = (field, data) => (dispatch) => {
  dispatch(healthInsuranceSlice.actions.setGeneralLists({ data, field }));
};

const setClientData = (data) => (dispatch) => {
  dispatch(healthInsuranceSlice.actions.setClientData(data));
}

export const actions = {
  setInitialProgress,
  setPlans,
  setSelectedPlan,
  setSuraProgress,
  addBeneficiary,
  deleteBeneficiary,
  setGeneralListsValues,
  setClientData
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
      const planInfo = action.payload;
      state.selectedPlan = { ...state.selectedPlan, ...planInfo} ;
    },
    addBeneficiary: (state, action) => {
      const beneficiary = action.payload;
      state.beneficiaries.push( {...beneficiary, id: state.beneficiaries.length} );
    },
    deleteBeneficiary: (state, action) => {
      const index = action.payload;
      const aux = [...state.beneficiaries];
      aux.splice(index, 1);
      state.beneficiaries = aux.map( (item, i) => ({...item, id: i}) );
    },
    setGeneralLists: ( state, action ) => {
      const { data, field } = action.payload;
      state.generalLists[field] = data;
    },
    setClientData: ( state, action ) => {
      const data = action.payload;
      state.data.client = {...state.data.client, ...data};
    }
  },
});
