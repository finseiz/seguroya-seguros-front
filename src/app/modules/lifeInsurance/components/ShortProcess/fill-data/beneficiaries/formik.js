import * as Yup from "yup";

export const beneficiariesValues = {
    fullname: "Pedro",
    kinship: "P",
    age: 12,
    cellphone: "300566655",
    birth_date: "12/12/2019",
    document_type: "CC",
    identification: "10223",
    gender: "",
    participation: 23,
};

export const beneficiariesSchema = Yup.object().shape({
    fullname: Yup.string().required("Campo requerido"),
    kinship: Yup.string().required("Campo requerido"),
    age: Yup.number().required("Campo requerido"),
    cellphone: Yup.number().required("Campo requerido"),
    birth_date: Yup.string().required("Campo requerido"),
    document_type: Yup.string().required("Campo requerido"),
    identification: Yup.number().required("Campo requerido"),
    gender: Yup.string().oneOf(["F", "M"]).required("Campo requerido"),
    participation: Yup.number().min(1).max(100).required("Campo requerido"),
});