import * as Yup from "yup";

export const initialValues = ( beneficiaries ) => {

    const newBeneficiaries = beneficiaries.map( ( beneficiary ) => ({
        ...beneficiary,
        diseaseList: [], 
        otherDisease: "", 
        familyDisease: []
    }));


    return newBeneficiaries;
}

//export const healthSchema = Yup.object().shape({

//export const insurabilitySchema = Yup.object().shape( Yup.array().of( Yup.object().shape({ occupation: Yup.string().required("hos") }) ) )