import * as Yup from "yup";

export const healthSchema = Yup.object().shape({
    firstName: Yup.string().required("Campo requerido"),
    middleName: Yup.string(),
    surname: Yup.string().required("Campo requerido"),
    secondSurname: Yup.string().required("Campo requerido"),
    documentType: Yup.string().required("Campo requerido"),
    document: Yup.string().required("Campo requerido"),
    occupation: Yup.string().required("Campo requerido"),
    email: Yup.string().email().required("Campo requerido"),
    address: Yup.string().required("Campo requerido"),
    birthDate: Yup.string().required("Campo requerido"),
    phone: Yup.string().length(10).required("Campo requerido"),
    residenceDep: Yup.string().required("Campo requerido"),
    residenceCity: Yup.string().required("Campo requerido"),
    gender: Yup.string().required("Campo requerido"),

    firstsubmit: Yup.bool().required("Campo requerido").default(false),
    currentHealthService: Yup.string().when('firstsubmit', {
        is: true, then: Yup.string().required("Campo requerido")
    }),
    mostImportant: Yup.string().when('firstsubmit', {
        is: true, then: Yup.string().required("Campo requerido")
    }),
    permanentService: Yup.string().when('firstsubmit', {
        is: true, then: Yup.string().required("Campo requerido")
    }),
    dataAuthorization: Yup.bool().when('firstsubmit', {
        is: true, then: Yup.bool().oneOf([true], "Debes aceptar los términos para continuar").required("Debes aceptar el tratamiento de datos para continuar")
    }),
});

export const healthInitialValues = {
    firstName: "Juan",
    middleName: "",
    surname: "Juan",
    secondSurname: "Juan",
    documentType: "C",
    document: "78547785",
    occupation: "B10",
    email: "fbeckerf_r391k@gexik.com",
    address: "Calle 34 n",
    birthDate: "2021-01-01",
    phone: "3057807785",
    residenceDep: "34",
    residenceCity: "10",
    gender: "M",
    
    // firstName: "",
    // middleName: "",
    // surname: "",
    // secondSurname: "",
    // documentType: "",
    // document: "",
    // occupation: "",
    // email: "",
    // address: "",
    // birthDate: "",
    // phone: "",
    // residenceDep: "",
    // residenceCity: "",
    // gender: "",

    firstsubmit: false,
    currentHealthService: "",
    mostImportant: "",
    permanentService: "",
    dataAuthorization: undefined,
};