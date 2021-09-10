import * as Yup from "yup";

export const beneficiariesValues = {
    firstName: "Juan",
    middleName: "David",
    surname: "Alca",
    secondSurname: "Lorza",
    documentType: "",
    document: "3433434",
    kinship: "NI",
    birthDate: "20",
    gender: "F",
};

export const beneficiariesSchema = Yup.object().shape({
    firstName: Yup.string().required("Campo requerido"),
    middleName: Yup.string(),
    surname: Yup.string().required("Campo requerido"),
    secondSurname: Yup.string().required("Campo requerido"),
    documentType: Yup.string().required("Campo requerido"),
    document: Yup.string().required("Campo requerido"),
    kinship: Yup.string().required("Campo requerido"),
    birthDate: Yup.string().required("Campo requerido"),
    gender: Yup.string().required("Campo requerido"),
});