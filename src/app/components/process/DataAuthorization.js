
import { termsAndConditions } from 'app/helpers/terms-conditions'
import React from 'react'

export const DataAuthorization = () => {
    return (
        <div className="process__others-container mt-3">
            <div className="p-3 process__normal-text process__short-container">
                <p className="text-center"> <b> Política de tratamiento y privacidad de datos </b> </p>
                <p> <b> 1. ÁMBITO LEGAL DE APLICACIÓN: </b>  La presente política de Tratamiento de datos personales es elaborada de conformidad con lo dispuesto en la Constitución Política, la Ley 1581 de 2012, el Decreto Reglamentario 1377 de 2013 y 1074 DE 2015 y demás disposiciones complementarias y será aplicada por SEGUROYA Ltda. respecto de la recolección, almacenamiento, uso, circulación, supresión y de todas aquellas actividades que constituyan tratamiento de datos personales. </p>
                <a href={termsAndConditions.Privacity} >Ver todo...</a>
            </div>
        </div>
    )
}
