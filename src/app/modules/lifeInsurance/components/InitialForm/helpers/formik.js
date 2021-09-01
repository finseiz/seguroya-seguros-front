import * as Yup from "yup";

export const initialSchema = Yup.object().shape({

    firstName: Yup.string().required("Campo requerido"),
    middleName: Yup.string(),
    surname: Yup.string().required("Campo requerido"),
    secondSurname: Yup.string().required("Campo requerido"),
    documentType: Yup.string().required("Campo requerido"),
    document: Yup.string().required("Campo requerido"),
    phone: Yup.string().required("Campo requerido"),  //-------- test
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
    document: "2355321",
    phone: "3105343534",
    occupation: "0",
    email: "cdazai@gmail.com",
    address: "Calle 34",
    birthDate: "2000-01-02",
    expeditionDate: "2018-01-02",
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