import * as Yup from "yup";

export const initialSchema = Yup.object().shape({

    firstName: Yup.string().required("Campo requerido"),
    middleName: Yup.string(),
    surname: Yup.string().required("Campo requerido"),
    secondSurname: Yup.string().required("Campo requerido"),
    documentType: Yup.string().required("Campo requerido"),
    document: Yup.string().min(6).max(10).required("Campo requerido"),
    phone: Yup.number().min(3000000000).max(3999999999).required("Campo requerido"),
    occupation: Yup.string().required("Campo requerido"),
    email: Yup.string().email().required("Campo requerido"),
    address: Yup.string().required("Campo requerido"),
    birthDate: Yup.string().required("Campo requerido"),
    expeditionDate: Yup.string().required("Campo requerido"),
    birthDep: Yup.number().required("Campo requerido"),
    birthCity: Yup.number().required("Campo requerido"),
    residenceDep: Yup.number().required("Campo requerido"),
    residenceCity: Yup.number().required("Campo requerido"),
    gender: Yup.string().required("Campo requerido"),

    // current_insurance: Yup.string().required("Campo requerido"),
    // knowledge_of_insurance_coverage: Yup.string().required("Campo requerido"),
    // search_to_project: Yup.string().required("Campo requerido"),
    // data_processing_licence: Yup.string().required("Campo requerido"),
});

export const initialValues = {
    firstName: "Jorge",
    middleName: "Emilio",
    surname: "Cnuñe",
    secondSurname: "Chamorro",
    documentType: "0",
    document: "123123",
    phone: "3057807786",
    occupation: "0",
    email: "fbeckerf_r391k@gexik.com", // dragon
    address: "Calle 34",
    birthDate: "1995-01-02",
    expeditionDate: "2013-01-02",
    birthDep: undefined,
    birthCity: "0",
    residenceDep: undefined,
    residenceCity: "0",
    gender: "F",
    
    current_insurance: "",
    knowledge_of_insurance_coverage: "",
    search_to_project: "",
    data_processing_licence: "",

    //discount_code: "",
};