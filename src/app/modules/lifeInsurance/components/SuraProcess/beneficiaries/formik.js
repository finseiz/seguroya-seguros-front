import * as Yup from "yup";

export const beneficiariesValues = {
    firstName: "Juan",
    middleName: "David",
    surname: "Alca",
    secondSurname: "Lorza",
    documentType: "C",
    document: "87851475",
    kinship: "NI",
    birthDate: "2000-01-02",
    gender: "M",
    participation: 50

    // firstName: "",
    // middleName: "",
    // surname: "",
    // secondSurname: "",
    // documentType: "",
    // document: "",
    // kinship: "",
    // birthDate: "",
    // gender: "",
    // participation: ""
};

export const beneficiariesSchema = Yup.object().shape({
    firstName: Yup.string().trim().matches(/^[A-Za-z]+$/ , 'Evita usar caracteres especiales').required("Campo requerido"),
    middleName: Yup.string().trim().matches(/^[A-Za-z]+$/ , 'Evita usar caracteres especiales'),
    surname: Yup.string().trim().matches(/^[A-Za-z]+$/ , 'Evita usar caracteres especiales').required("Campo requerido"),
    secondSurname: Yup.string().required("Campo requerido"),
    documentType: Yup.string().required("Campo requerido"),
    document: Yup.string().required("Campo requerido"),
    kinship: Yup.string().required("Campo requerido"),
    birthDate: Yup.string().required("Campo requerido"),
    gender: Yup.string().required("Campo requerido"),
    participation: Yup.number().min(1).max(100).required("Campo requerido"),
});