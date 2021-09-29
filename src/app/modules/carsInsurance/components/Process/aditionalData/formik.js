
import * as Yup from "yup";

export const initalData = {
    isNewCar: undefined,
    carBrand: "",
    carModel: "",
    includeAccessories: undefined,
    accesoriesSum: 0,
    payment: "",
    inspectionType: "",
}

export const schema = Yup.object().shape({
    isNewCar: Yup.bool().required("Campo requerido"),
    carBrand: Yup.string().nullable().when( 'isNewCar', { is: true, then: Yup.string().required("Campo requerido")}),
    carModel: Yup.number().nullable().when( 'isNewCar', { is: true, then: Yup.number().required("Campo requerido")}),
    includeAccessories: Yup.bool().required("Campo requerido"),
    accesoriesSum: Yup.number().when( 'includeAccessories', { is: true, then: Yup.number().required("Campo requerido")}),
    payment: Yup.number().required("Campo requerido"),
    inspectionType: Yup.string().required("Campo requerido"),
})