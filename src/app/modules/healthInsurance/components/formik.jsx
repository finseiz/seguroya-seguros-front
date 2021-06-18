import * as Yup from "yup";

export const lifeSchema = Yup.object().shape({
    address: Yup.string().required("Campo requerido"),
    document_type: Yup.string().required("Campo requerido"),
    identification: Yup.string().required("Campo requerido"),
    fullname: Yup.string().required("Campo requerido"),
    email: Yup.string().email("Email requerido").required("Campo requerido"),
    issue_date: Yup.string().required("Campo requerido"),
    birth_date: Yup.string().required("Campo requerido"),
    ocupation: Yup.string().required("Campo requerido"),
    cellphone: Yup.string().required("Campo requerido"),
    gender: Yup.string().required("Campo requerido"),
    current_insurance: Yup.string().required("Campo requerido"),
    knowledge_of_insurance_coverage: Yup.string().required("Campo requerido"),
    search_to_project: Yup.string().required("Campo requerido"),
    data_processing_licence: Yup.string().required("Campo requerido"),
});

export const initialValues = {
    address: "",
    document_type: "",
    identification: "",
    fullname: "",
    email: "",
    issue_date: "",
    birth_date: "",
    ocupation: "",
    cellphone: "",
    discount_code: "",
    gender: "",
    current_insurance: "",
    knowledge_of_insurance_coverage: "",
    search_to_project: "",
    data_processing_licence: "",
};