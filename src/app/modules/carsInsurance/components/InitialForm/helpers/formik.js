import * as Yup from "yup";

export const CarsSchema = Yup.object().shape({
    isNew: Yup.boolean(),
    // conditional pathway when car is not new
    carYear: Yup.string().when('isNew', {
        is: false,
        then: Yup.string().required('Campo requerido')
    }),
    carModel: Yup.string().when('isNew', {
        is: false,
        then: Yup.string().required('Campo requerido')
    }),
    fasecoldaCode: Yup.string().when('isNew', {
        is: false,
        then: Yup.string().required('Campo requerido')
    }),
    protectionDevice: Yup.string().when('isNew', {
        is: false,
        then: Yup.string().required('Campo requerido')
    }),
    accessoryValue: Yup.string().when('isNew', {
        is: false,
        then: Yup.string().required('Campo requerido')
    }),
    armorValue: Yup.string().when('isNew', {
        is: false,
        then: Yup.string().required('Campo requerido')
    }),
    gasSystemValue: Yup.string().when('isNew', {
        is: false,
        then: Yup.string().required('Campo requerido')
    }),
    insuredValue: Yup.string().when('isNew', {
        is: false,
        then: Yup.string().required('Campo requerido')
    }),

    // is borrower the owner
    isBorrowerOwner: Yup.boolean(),
    identificationOwnerType: Yup.string().when('isBorrowerOwner', {
        is: false,
        then: Yup.string().required('Campo requerido')
    }),
    identificationOwnerNumber: Yup.string().when('isBorrowerOwner', {
        is: false,
        then: Yup.string().required('Campo requerido')
    }),
    ownerBirthDate: Yup.string().when('isBorrowerOwner', {
        is: false,
        then: Yup.string().required('Campo requerido')
    }),

    cellphone: Yup.string().required("Campo requerido").length(10, "Ingresa 10 caracteres"),
    email: Yup.string().email("Email requerido").required("Campo requerido"),
    birthDate: Yup.string().required("Campo requerido"),
    identification: Yup.string().required("Campo requerido"),
    city: Yup.number().required("Campo requerido"),
    identificationType: Yup.string().required("Campo requerido"),
    licensePlate: Yup.string().required("Campo requerido"),
    names: Yup.string().trim().required("Campo requerido"),
    surnames: Yup.string().trim().required("Campo requerido"),

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
    
    isNew: true,
    licensePlate: "",
    city: 0,
    names: "",
    surnames: "",
    email: "",
    cellphone: "",
    birthDate: "",
    identificationType: "",
    identification: "",
    discountCode: "",
    isBorrowerOwner: true,

    // car isn't new field path
    carYear: '',
    carModel: '',
    fasecoldaCode: '',
    protectionDevice: '',
    accessoryValue: '',
    armorValue: '',
    gasSystemValue: '',
    insuredValue: '',

    // is the borrower, owner of the car ?

    identificationOwnerType: "",
    identificationOwnerNumber: "",
    ownerBirthDate: "",

    
    firstsubmit: false,
    mostImportant: "",
    dataAuthorization: undefined,
    insuranceType: "",
    circulationZone: "",
};