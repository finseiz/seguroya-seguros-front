import * as Yup from "yup";

export const CarsSchema = Yup.object().shape({
  // isNew: Yup.boolean(),

  // is borrower the owner
  // isHolderDriver: Yup.boolean(),
  identificationOwnerType: Yup.string().when("isBorrowerOwner", {
    is: false,
    then: Yup.string().required("Campo requerido"),
  }),
  identificationOwnerNumber: Yup.string().when("isBorrowerOwner", {
    is: false,
    then: Yup.string().required("Campo requerido"),
  }),
  ownerBirthDate: Yup.string().when("isBorrowerOwner", {
    is: false,
    then: Yup.string().required("Campo requerido"),
  }),

  cellphone: Yup.string()
    .required("Campo requerido")
    .length(10, "Ingresa 10 caracteres"),
  email: Yup.string().email("Email requerido").required("Campo requerido"),
  birthDate: Yup.string().required("Campo requerido"),
  identification: Yup.string().required("Campo requerido"),
  // city: Yup.number().required("Campo requerido"),
  identificationType: Yup.string().required("Campo requerido"),
  licensePlate: Yup.string().required("Campo requerido"),
  names: Yup.string().trim().required("Campo requerido"),
  surnames: Yup.string().trim().required("Campo requerido"),
  gender: Yup.string().trim().required("Campo requerido"),

  firstsubmit: Yup.bool().required("Campo requerido").default(false),
  mostImportant: Yup.string().when("firstsubmit", {
    is: true,
    then: Yup.string().required("Campo requerido"),
  }),
  dataAuthorization: Yup.bool().when("firstsubmit", {
    is: true,
    then: Yup.bool()
      .oneOf([true], "Debes aceptar los términos para continuar")
      .required("Debes aceptar el tratamiento de datos para continuar"),
  }),
  insuranceType: Yup.string().when("firstsubmit", {
    is: true,
    then: Yup.string().oneOf(["km", "ar"]).required("Campo requerido"),
  }),
  circulationZone: Yup.string().when("firstsubmit", {
    is: true,
    then: Yup.string().required("Campo requerido"),
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

  isNew: false,
  licensePlate: "",
  city: 76001,
  names: "",
  surnames: "",
  gender: "",
  email: "",
  cellphone: "",
  birthDate: "",
  identificationType: "",
  identification: "",
  discountCode: "",
  isHolderDriver: true,

  // car isn't new field path
  //carYear: "",
  //carModel: "",
  //fasecoldaCode: "",
  //protectionDevice: "",
  //accessoryValue: "",
  //shieldingValue: "",
  //gasSystemValue: "",
  //insuredValue: "",

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
