import * as Yup from "yup";

export const beneficiariesValues = {
    firstName: "Pedro",
    middleName: "Pedro",
    surname: "Pedro",
    secondSurname: "Pedro",
    cellphone: "300566655",
    birthDate: "",
    gender: "F",
    kinship: 0,
    documentType: 0,
    identification: "10223",
    participation: "",
};

export const beneficiariesSchema = Yup.object().shape({
    firstName: Yup.string().required("Campo requerido"),
    middleName: Yup.string(),
    surname: Yup.string().required("Campo requerido"),
    secondSurname: Yup.string().required("Campo requerido"),
    cellphone: Yup.number().required("Campo requerido"),
    birthDate: Yup.string().required("Campo requerido"),
    gender: Yup.string().oneOf(["F", "M"]).required("Campo requerido"),
    kinship: Yup.string().required("Campo requerido"),
    documentType: Yup.number().required("Campo requerido"),
    identification: Yup.string().required("Campo requerido"),
    participation: Yup.number().min(1).max(100).required("Campo requerido"),
});