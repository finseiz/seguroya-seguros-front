import * as Yup from "yup";

export const healthSchema = Yup.object().shape({
    firstName: Yup.string().required("Campo requerido"),
    middleName: Yup.string(),
    surname: Yup.string().required("Campo requerido"),
    secondSurname: Yup.string().required("Campo requerido"),
    documentType: Yup.string().required("Campo requerido"),
    document: Yup.string().required("Campo requerido"),
    occupation: Yup.string().required("Campo requerido"),
    email: Yup.string().email().required("Campo requerido"),
    address: Yup.string().required("Campo requerido"),
    birthDate: Yup.string().required("Campo requerido"),
    phone: Yup.string().length(10).required("Campo requerido"),
    residenceDep: Yup.string().required("Campo requerido"),
    residenceCity: Yup.string().required("Campo requerido"),
    gender: Yup.string().required("Campo requerido"),
});

export const healthInitialValues = {
    firstName: "Juan",
    middleName: "",
    surname: "Juan",
    secondSurname: "Juan",
    documentType: "C",
    document: "78547785",
    occupation: "B10",
    email: "juan@example.com",
    address: "Calle 34 n",
    birthDate: "2021-01-01",
    phone: "3057807785",
    residenceDep: "34",
    residenceCity: "10",
    gender: "M",
    
    // current_health_service: "",
    // knowledge_of_insurance_coverage: "",
    // delivery_service: "",
    // data_processing_licence: "",
};