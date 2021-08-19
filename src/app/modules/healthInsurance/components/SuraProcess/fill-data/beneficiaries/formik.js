import * as Yup from "yup";

export const beneficiariesValues = {
    name: "Pedro",
    document_type: "P",
    onerous: true,
    lastname: "Lues",
    document: "3434",
    kinship: "H",
    birthdate: "12/12/2019",
};

export const beneficiariesSchema = Yup.object().shape({
    name: Yup.string().required("Campo requerido"),
    document_type: Yup.string().required("Campo requerido"),
    onerous: Yup.bool().required("Campo requerido"),
    lastname: Yup.string().required("Campo requerido"),
    document: Yup.string().required("Campo requerido"),
    kinship: Yup.string().required("Campo requerido"),
    birthdate: Yup.string().required("Campo requerido"),
});