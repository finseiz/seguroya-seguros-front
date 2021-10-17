import * as Yup from "yup";
//import mapValues from 'lodash/mapValues';

export const initialValues = ( beneficiary ) => {
    return ({
        diseaseList: [], 
        otherDisease: "", 
        familyDisease: [],
        occupation: "",
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
    })
}

// "ocupacion": occupation,
// "estadoCivil": maritalStatus,
// "peso": weight,
// "estatura": height,
// "pesoGanado": otherWeight,
// "empresaTrabajo": company,
// "eps": eps,
// "hijosMenores": childenOver18,
// "trabajoRiesgoso": highOccupationRisk
// "antiguedad": requestingSeniority,
// "emergenciaMedica": emergency,
// "enfermedades": diseaseList,
// "enfermedadesDistintas": otherDisease,
// "familiares": familyDisease,
// "nombre": firstName + " " + middleName + " " + surname + " " + secondSurname


export const insurabilitySchema = Yup.object().shape({
    occupation: Yup.string().required("Campo requerido"),
    maritalStatus: Yup.string().required("Campo requerido"),
    weight: Yup.number().required("Campo requerido"),
    height: Yup.number().required("Campo requerido"),
    otherWeight: Yup.number().required("Campo requerido"),
    company: Yup.string().required("Campo requerido"),
    eps: Yup.string().required("Campo requerido"),
    childenOver18: Yup.bool().required("Campo requerido"),
    highOccupationRisk: Yup.bool().required("Campo requerido"),
    requestingSeniority: Yup.bool().required("Campo requerido"),
    emergency: Yup.bool().required("Campo requerido"),
})