import * as Yup from "yup";

export const CarsSchema = Yup.object().shape({
    cellphone: Yup.string().required("Campo requerido").length(10, "Ingresa 10 caracteres"),
    email: Yup.string().email("Email requerido").required("Campo requerido"),
    birthDate: Yup.string().required("Campo requerido"),
    gender: Yup.string().required("Campo requerido"),
    identification: Yup.string().required("Campo requerido"),
    country: Yup.number().required("Campo requerido"),
    identificationType: Yup.string().required("Campo requerido"),
    fullname: Yup.string().trim().matches(/^[A-Za-z ]+$/ , 'Evita usar caracteres especiales').required("Campo requerido"),
    licensePlate: Yup.string().required("Campo requerido"),
    surname: Yup.string().trim().matches(/^[A-Za-z]+$/, 'Evita usar caracteres especiales').required("Campo requerido"),
    secondSurname: Yup.string().trim().matches(/^[A-Za-z]+$/ , 'Evita usar caracteres especiales'),
    address: Yup.string().required("Campo requerido"),

    firstsubmit: Yup.bool().required("Campo requerido").default(false),
    mostImportant: Yup.string().when('firstsubmit', {
        is: true, then: Yup.string().required("Campo requerido")
    }),
    dataAuthorization: Yup.bool().when('firstsubmit', {
        is: true, then: Yup.bool().oneOf([true], "Debes aceptar los términos para continuar").required("Debes aceptar el tratamiento de datos para continuar")
    }),
    insuranceType: Yup.string().when('firstsubmit', {
        is: true, then: Yup.string().oneOf(["km", "ar"]).required("Campo requerido")
    }),
    circulationZone: Yup.string().when('firstsubmit', {
        is: true, then: Yup.string().required("Campo requerido")
    }),
});

export const initialValues = {

    // cellphone: 3057807788,
    // email: "d.santiagocardenas.m@gmail.com",
    // birthDate: "",
    // gender: "F",
    // identification: "45454534",
    // identificationType: "Cedula",
    // fullname: "Pedro ",
    // licensePlate: "IJK996",
    // surname: "Albornoz",
    // secondSurname: "Castro",
    // address: "Calle 45n",
    
    cellphone: "",
    email: "",
    birthDate: "",
    gender: "",
    identification: "",
    identificationType: "",
    fullname: "",
    licensePlate: "",
    surname: "",
    secondSurname: "",
    address: "",
    
    
    country: 0,
    firstsubmit: false,
    mostImportant: "",
    dataAuthorization: undefined,
    insuranceType: "",
    circulationZone: "",
};