
import * as Yup from "yup";

export const registryInitialValues = {

    document: "123132322",
    password: "123123123",
    documentType: "CC",

    name: "Juan",
    surname: "Pereza",
    phone: "3057807789",
    email: "juan@ex.com",
    address: "Calle 45n 5 12",
    birthDate: "1992-02-02",
    gender: "M",
    tAndC: true,
    department: "",
    city: "",
    
    // document: "",
    // password: "",
    // documentType: "",
    // name: "",
    // surname: "",
    // phone: "",
    // email: "",
    // address: "",
    // birthDate: "",
    // gender: "",
    // tAndC: "",
    // department: "",
    // city: "",

}

export const registrySchema = Yup.object().shape({

    document: Yup.number().required("Campo requerido"),
    password: Yup.string().required("Campo requerido").min(8, "Ingresa mínimo 8 caracteres").max(15,"Ingresa máximo 15 caracteres" ),
    documentType: Yup.string().oneOf(["CC", "CE"]).required("Campo requerido"),

    name: Yup.string().required("Campo requerido"),
    surname: Yup.string().required("Campo requerido"),
    phone: Yup.string().required("Campo requerido").length(10, "Ingresa 10 caracteres"),
    email: Yup.string().email("Ingresa un correo válido").required("Campo requerido"),
    address: Yup.string().required("Campo requerido").min(10, "Ingresa mínimo 10 caracteres").max(50,"Ingresa máximo 50 caracteres" ),
    birthDate: Yup.string().required("Campo requerido"),
    gender: Yup.string().required("Campo requerido"),
    department: Yup.number().required("Campo requerido"),
    city: Yup.number().required("Campo requerido"),
    tAndC: Yup.bool().oneOf([true], "Debes aceptar los términos y condiciones").required("Debes aceptar los términos y condiciones"),

})

export const loginSchema = Yup.object().shape({
    document: Yup.number().required("Campo requerido"),
    password: Yup.string().required("Campo requerido"),
    documentType: Yup.string().oneOf(["CC", "CE"]).required("Campo requerido"),
})