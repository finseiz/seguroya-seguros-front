import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clientData: {},
  plans: [],
  selectedPlan: {
    beneficiaries: []
  },
  progress: {
    initial: 0,
    /** WARING: If this name change [shortProcess] change, most change lifeInsaranceRoute.jsx 
     * at processIndicatorName="**" */
    shortProcess: 0,
  },
  general: {
    lists: [],
    departments: {},
    documentTypes: [],
  }
};

const addClientData = (data) => (dispatch) => {
  dispatch(lifeInsuranceSlice.actions.addClientData(data));
};

const setPlans = (data) => (dispatch) => {
  const action = { data };
  dispatch(lifeInsuranceSlice.actions.setPlans(action));
};

const setInitialProgress = (progress) => (dispatch) => {
  const action = { data: progress };
  dispatch(lifeInsuranceSlice.actions.setInitialProgress(action));
};

const setShortProcess = (progress) => (dispatch) => {
  const action = { data: progress };
  dispatch(lifeInsuranceSlice.actions.setShortProcess(action));
};

const setSelectedPlan = (plan) => (dispatch) => {
  const action = { plan };
  dispatch(lifeInsuranceSlice.actions.setSelectedPlan(action));
}

const setBeneficiares = (beneficiaries) => (dispatch) => {
  dispatch(lifeInsuranceSlice.actions.setBeneficiares(beneficiaries));
}

/**
 * 
 * @param {*} values 
 * @param {*} field "lists" | "departments"
 * @returns 
 */
const setGeneralValues = (values, field) => (dispatch) => {
  const payload = { values, field };
  dispatch(lifeInsuranceSlice.actions.setGeneralValues(payload));
}

const resetState = () => (dispatch) => {
  dispatch(lifeInsuranceSlice.actions.reset());
}

const addBeneficiary = (beneficiary) => (dispatch) => {
  dispatch(lifeInsuranceSlice.actions.addBeneficiary(beneficiary));
}

const deleteBeneficiary = (index) => (dispatch) => {
  dispatch(lifeInsuranceSlice.actions.deleteBeneficiary(index));
}

const updateBeneficiary = (data, index) => (dispatch) => {
  dispatch(lifeInsuranceSlice.actions.updateBeneficiary({data, index}));
}

export const actions = {
  addClientData,
  setPlans,
  setInitialProgress,
  setSelectedPlan,
  setShortProcess,
  setGeneralValues,
  setBeneficiares,
  resetState,
  addBeneficiary,
  deleteBeneficiary,
  updateBeneficiary,
};

export const lifeInsuranceSlice = createSlice({
  name: "lifeInsurance",
  initialState,
  reducers: {
    addClientData: (state, action) => {
      const data = action.payload;
      state.clientData = { ...state.clientData, ...data };
    },
    setPlans: (state, action) => {
      const { data } = action.payload;
      state.plans = data;
    },
    setInitialProgress: (state, action) => {
      const { data } = action.payload;
      state.progress.initial = data;
    },
    setShortProcess: (state, action) => {
      const { data } = action.payload;
      state.progress.shortProcess = data;
    },
    setSelectedPlan: (state, action) => {
      const { plan } = action.payload;
      state.selectedPlan = { ...state.selectedPlan, ...plan };
    },
    setBeneficiares: (state, action) => {
      const beneficiaries = action.payload;
      state.selectedPlan.beneficiaries = beneficiaries;
    },
    setGeneralValues: (state, action) => {
      const { values, field } = action.payload;
      state.general[field] = values;
    },
    reset: ( ) => initialState,

    //Sura
    addBeneficiary: (state, action) => {
      const beneficiary = action.payload;
      state.selectedPlan.beneficiaries.push( {...beneficiary, id: beneficiary.document} );
    },
    deleteBeneficiary: (state, action) => {
      const index = action.payload;
      const aux = [...state.selectedPlan.beneficiaries];
      aux.splice(index, 1);
      state.selectedPlan.beneficiaries = aux;
    },
    updateBeneficiary: (state, action) => {
      const { data, index } = action.payload;
      state.selectedPlan.beneficiaries[index] = {...data, id: data.document};
    },

  },
});
