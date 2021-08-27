import { parseCurrency } from "app/const/parse-currency"
import { simpleNumberFormat } from "./number-format"

export const colmenaPlan = ( price, returnValue ) => {
    return [
        {label: "Prima", value: `${parseCurrency(price)}COP`},
        {label: "Retorno de prima", value: `${returnValue}%`},
    ]
}

export const bolivarPlan = ({kmCosto, coverage}) => {
    return [
        {label: "Costo por km", value: `${parseCurrency(kmCosto)}COP`},
        {label: "Cobertura", value: `${simpleNumberFormat(coverage)}KMS`},
    ]
}

export const suraPlan = ( type ) => {
    return [
        {label: "Tipo de plan", value: type},
    ]
}