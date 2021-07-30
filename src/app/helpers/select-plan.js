import { parseCurrency } from "app/const/parse-currency"

export const colmenaPlan = ( price, returnValue ) => {
    return [
        {label: "Prima", value: `${parseCurrency(price)}COP`},
        {label: "Retorno de prima", value: `${returnValue}%`},
    ]
}

export const bolivarPlan = ( price, type ) => {
    return [
        {label: "Valor del carro", value: `${parseCurrency(price)}COP`},
        {label: "Tipo de cobertura", value: type},
    ]
}