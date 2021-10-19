import * as Yup from "yup";
//import mapValues from 'lodash/mapValues';

export const initialValues = ( beneficiary ) => {
    return ({
        diseaseList: [], 
        otherDisease: "", 
        familyDisease: [],
        maritalStatus: "",
        weight: "",
        height: "",
        otherWeight: "",
        company: "",
        eps: "",
        childenOver18: "",
        highOccupationRisk: "",
        requestingSeniority: "",
        emergency: "",
        ...beneficiary,
        occupation: "",
    })
}

export const insurabilitySchema = Yup.object().shape({
    occupation: Yup.string().required("Campo requerido").min(3).max(30),
    maritalStatus: Yup.string().required("Campo requerido"),
    weight: Yup.number().required("Campo requerido").min(1),
    height: Yup.number().required("Campo requerido").min(10).max(999),
    otherWeight: Yup.string().required("Campo requerido"),
    company: Yup.string().required("Campo requerido").min(3).max(30),
    eps: Yup.string().required("Campo requerido").min(3).max(30),
    childenOver18: Yup.bool().required("Campo requerido"),
    highOccupationRisk: Yup.bool().required("Campo requerido"),
    requestingSeniority: Yup.bool().required("Campo requerido"),
    emergency: Yup.bool().required("Campo requerido"),
})