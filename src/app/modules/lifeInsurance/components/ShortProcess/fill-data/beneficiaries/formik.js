import * as Yup from "yup";

export const beneficiariesValues = {
    firstName: "Pedro",
    middleName: "Pedro",
    surname: "Pedro",
    secondSurname: "Pedro",
    cellphone: "3101111111",
    birthDate: "1991-03-22",
    gender: "F",
    kinship: 3,
    documentType: 0,
    identification: "1061589654",
    participation: 100,
};


export const beneficiariesSchema = Yup.object().shape({
    firstName: Yup.string().trim().matches(/^[A-Za-z]+$/ , 'Evita usar caracteres especiales').required("Campo requerido"),
    middleName: Yup.string().trim().matches(/^[A-Za-z]+$/ , 'Evita usar caracteres especiales'),
    surname: Yup.string().trim().matches(/^[A-Za-z]+$/ , 'Evita usar caracteres especiales').required("Campo requerido"),
    secondSurname: Yup.string().trim().matches(/^[A-Za-z]+$/ , 'Evita usar caracteres especiales').required("Campo requerido"),
    cellphone: Yup.number().min(3000000000).max(3999999999).required("Campo requerido"),
    birthDate: Yup.string().required("Campo requerido"),
    gender: Yup.string().oneOf(["F", "M"]).required("Campo requerido"),
    kinship: Yup.string().required("Campo requerido"),
    documentType: Yup.number().required("Campo requerido"),
    identification: Yup.string().min(6).max(10).required("Campo requerido"),
    participation: Yup.number().min(1).max(100).required("Campo requerido"),
});