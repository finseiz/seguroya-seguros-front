import * as Yup from "yup";

export const initialSchema = Yup.object().shape({

    firstName: Yup.string().trim().matches(/^[A-Za-z]+$/ , 'Evita usar caracteres especiales').required("Campo requerido"),
    middleName: Yup.string().trim().matches(/^[A-Za-z]+$/ , 'Evita usar caracteres especiales'),
    surname: Yup.string().trim().matches(/^[A-Za-z]+$/ , 'Evita usar caracteres especiales').required("Campo requerido"),
    secondSurname: Yup.string().trim().matches(/^[A-Za-z]+$/ , 'Evita usar caracteres especiales').required("Campo requerido"),
    documentType: Yup.string().required("Campo requerido"),
    document: Yup.string().min(6).max(10).required("Campo requerido"),
    phone: Yup.number().min(3000000000).max(3999999999).required("Campo requerido"),
    occupation: Yup.string().required("Campo requerido"),
    email: Yup.string().email().required("Campo requerido"),
    address: Yup.string().required("Campo requerido"),
    birthDate: Yup.string().required("Campo requerido"),
    expeditionDate: Yup.string().required("Campo requerido"),
    birthDep: Yup.number().required("Campo requerido"),
    birthCity: Yup.number().required("Campo requerido"),
    residenceDep: Yup.number().required("Campo requerido"),
    residenceCity: Yup.number().required("Campo requerido"),
    gender: Yup.string().required("Campo requerido"),

    firstsubmit: Yup.bool().required("Campo requerido").default(false),
    insuranceReason: Yup.string().when('firstsubmit', {
        is: true, then: Yup.string().required("Campo requerido")
    }),
    dataAuthorization: Yup.bool().when('firstsubmit', {
        is: true, then: Yup.bool().oneOf([true], "Debes aceptar los términos para continuar").required("Debes aceptar el tratamiento de datos para continuar")
    }),
    insuranceType: Yup.string().when('firstsubmit', {
        is: true, then: Yup.string().required("Campo requerido")
    }),
});

export const initialValues = {
    // firstName: "Jorge",
    // middleName: "Emilio",
    // surname: "Cnuñe",
    // secondSurname: "Chamorro",
    // documentType: "0",
    // document: "5523234444",
    // phone: "3057807786",
    // occupation: "0",
    // email: "d.santiagocardenas.m@gmail.com", 
    // address: "Calle 34",
    // birthDate: "1991-03-22",
    // expeditionDate: "2010-03-01",
    // birthDep: 1,
    // birthCity: 1,
    // residenceDep: 1,
    // residenceCity: 1,
    // gender: "M",

    firstName: "",
    middleName: "",
    surname: "",
    secondSurname: "",
    documentType: "",
    document: "",
    phone: "",
    occupation: "",
    email: "", 
    address: "",
    birthDate: "",
    expeditionDate: "",
    birthDep: 1,
    birthCity: 1,
    residenceDep: 1,
    residenceCity: 1,
    gender: "",
    
    firstsubmit: false,
    insuranceReason: "",
    dataAuthorization: undefined,
    insuranceType: "",

    //discount_code: "",
};