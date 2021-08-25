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

const addBeneficiary = (beneficiary) => (dispatch) => {
  dispatch(healthInsuranceSlice.actions.addBeneficiary(beneficiary));
}

const deleteBeneficiary = (index) => (dispatch) => {
  dispatch(healthInsuranceSlice.actions.deleteBeneficiary(index));
}

export const actions = {
  setInitialProgress,
  setPlans,
  setSelectedPlan,
  setSuraProgress,
  addBeneficiary,
  deleteBeneficiary,
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
    addBeneficiary: (state, action) => {
      const beneficiary = action.payload;
      state.beneficiaries.push( {...beneficiary, id: state.beneficiaries.length} );
    },
    deleteBeneficiary: (state, action) => {
      const index = action.payload;
      const aux = [...state.beneficiaries];
      aux.splice(index, 1);
      state.beneficiaries = aux.map( (item, i) => ({...item, id: i}) );
    }
  },
});
