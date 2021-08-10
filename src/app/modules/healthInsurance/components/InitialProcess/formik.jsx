import * as Yup from "yup";

export const healthSchema = Yup.object().shape({

});

export const healthInitialValues = {
    address: "prueba",
    document_type: "prueba",
    identification: "prueba",
    fullname: "prueba",
    email: "prueba",
    cellphone: "prueba",
    birthdate: "prueba",
    discount_code: "prueba",
    gender: "prueba",
    
    current_health_service: "",
    knowledge_of_insurance_coverage: "",
    delivery_service: "",
    data_processing_licence: "",
};