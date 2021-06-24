import * as Yup from "yup";

export const initialSchema = Yup.object().shape({
    address: Yup.string().required("Campo requerido"),
    document_type: Yup.string().required("Campo requerido"),
    identification: Yup.string().required("Campo requerido"),
    fullname: Yup.string().required("Campo requerido"),
    email: Yup.string().email("Email requerido").required("Campo requerido"),
    issue_date: Yup.string().required("Campo requerido"),
    birth_date: Yup.string().required("Campo requerido"),
    ocupation: Yup.string().required("Campo requerido"),
    cellphone: Yup.string().required("Campo requerido"),
    discount_code: Yup.string(),
    gender: Yup.string().required("Campo requerido"),
    // current_insurance: Yup.string().required("Campo requerido"),
    // knowledge_of_insurance_coverage: Yup.string().required("Campo requerido"),
    // search_to_project: Yup.string().required("Campo requerido"),
    // data_processing_licence: Yup.string().required("Campo requerido"),
});

export const initialValues = {
    address: "aa",
    document_type: "XX",
    identification: "21",
    fullname: "asd",
    email: "ant@gmail.com",
    issue_date: "123",
    birth_date: "123",
    ocupation: "asd",
    cellphone: "123",
    discount_code: "",
    gender: "f",
    current_insurance: "na",
    knowledge_of_insurance_coverage: "",
    search_to_project: "edu",
    data_processing_licence: "yes",
};