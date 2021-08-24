import * as Yup from "yup";

export const CarsSchema = Yup.object().shape({
    cellphone: Yup.string().required("Campo requerido").length(10, "Ingresa 10 caracteres"),
    email: Yup.string().email("Email requerido").required("Campo requerido"),
    birthDate: Yup.string().required("Campo requerido"),
    gender: Yup.string().required("Campo requerido"),
    identification: Yup.string().required("Campo requerido"),
    country: Yup.number().required("Campo requerido"),
    identificationType: Yup.string().required("Campo requerido"),
    fullname: Yup.string().required("Campo requerido"),
    licensePlate: Yup.string().required("Campo requerido"),
    surname: Yup.string().required("Campo requerido"),
    secondSurname: Yup.string().required("Campo requerido"),

    firstsubmit: Yup.bool().required("Campo requerido").default(false),
    data_processing_licence: Yup.bool().when('firstsubmit', {
        is: true, then: Yup.bool().oneOf([true]).required("Debes aceptar el tratamiento de datos para continuar")
    }),
    insuranceType: Yup.string().when('firstsubmit', {
        is: true, then: Yup.string().oneOf(["km", "ar"]).required("Campo requerido")
    }),
    circulationZone: Yup.string().when('firstsubmit', {
        is: true, then: Yup.string().required("Campo requerido")
    }),
});

export const initialValues = {

    cellphone: 3057807788,
    email: "cesardaza91@gmail.com",
    birthDate: "",
    gender: "F",
    identification: "45454534",
    country: "",
    identificationType: "Cedula",
    fullname: "acccwdsfc",
    licensePlate: "IJK996",
    surname: "sdfcsa",
    secondSurname: "acsdfcsdc",
    
    // cellphone: "",
    // email: "",
    // birthDate: "",
    // gender: "",
    // identification: "",
    // country: "",
    // identificationType: "",
    // fullname: "",
    // licensePlate: "",
    // surname: "",
    // secondSurname: "",

    current_insurance: "3",
    knowledge_of_insurance_coverage: "4",
    search_to_project: "5",
    
    firstsubmit: false,
    data_processing_licence: undefined,
    insuranceType: "",
    circulationZone: "",
    
};

// cellphone *
// email *
// birthDate *
// gender *
// identification *
// country *
// identificationType *
// fullname *
// licensePlate *
// surname *
// secondSurname *
// circulationZone
// discountCode