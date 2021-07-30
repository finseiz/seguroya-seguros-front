import * as Yup from "yup";

export const CarsSchema = Yup.object().shape({
    license_plate: Yup.string().required("Campo requerido"),
    document_type: Yup.string().required("Campo requerido"),
    identification: Yup.string().required("Campo requerido"),
    name: Yup.string().required("Campo requerido"),
    lastname: Yup.string().required("Campo requerido"),
    email: Yup.string().email("Email requerido").required("Campo requerido"),
    city: Yup.string().required("Campo requerido"),
    birth_date: Yup.string().required("Campo requerido"),
    cellphone: Yup.string().required("Campo requerido"),
});

export const initialValues = {
    license_plate: "a",
    document_type: "a",
    identification: "a",
    name: "a",
    lastname: "a",
    email: "aa@gmail.com",
    birth_date: "a",
    cellphone: "3",
    discount_code: "2",
    current_insurance: "3",
    knowledge_of_insurance_coverage: "4",
    search_to_project: "5",
    data_processing_licence: "5",
    city: "a"
};