import { createSelectOptions } from "app/helpers/selet-options";
import { citiesRequest, departmentsRequest } from "../repositories/locations";
import { getActivitiesRequest, postInformation } from "./repository";

export const getDepartments = async ( ) => {
    const response = await departmentsRequest();
    if (response.status === 200) {
        return createSelectOptions(response.body)
    }
    return [];
}

export const getCities = async ( department ) => {
    const response = await citiesRequest(department);
    if (response.status === 200) {
        return createSelectOptions(response.body)
    }
    return [];
}

export const getCiiuActivities = async ( ) => {
    const response = await getActivitiesRequest();
    if (response.status === 200) {
        return createSelectOptions(response.body, "codigo", "descripcion")
    }
    return [];
}

export const getDocumentTypes = ( ) => {
    return [
        { title: "Selecciona", value: "" },
        { title: "Cédula", value: "CC" },
        { title: "Cédula de extranjería", value: "CE" },
        { title: "Tarjeta de identidad", value: "TI" },
        { title: "Pasaporte", value: "PAS" },
    ];
}

export const getActivities = ( ) => {
    const activities = [
        { title: "Selecciona", value: "" },
        { title: "Asalariado", value: "ASALARIADO" },
        { title: "Comerciante", value: "COMERCIANTE" },
        { title: "Empleado público", value: "EMPLEADO_PUBLICO" },
        { title: "Estudiante", value: "ESTUDIANTE" },
        { title: "Hogar", value: "HOGAR" },
        { title: "Independiente", value: "INDEPENDIENTE" },
        { title: "Inversionista", value: "INVERSIONISTA" },
        { title: "Pensionado", value: "PENSIONADO" },
        { title: "Rentista", value: "RENTISTA" },
        { title: "Socio", value: "SOCIO" },
    ];
    return activities;
}

export const getSectors = () => {
    const sectors = [
        { title: "Selecciona", value: "" },
        { title: "Agropecuario", value: "AGROPECUARIO", },
        { title: "Comercio", value: "COMERCIO", },
        { title: "Construcción", value: "CONSTRUCCION", },
        { title: "Financiero", value: "FINANCIERO", },
        { title: "Industrial, minero y energetico", value: "INDUSTRIAL, MINERO_Y_ENERGETICO", },
        { title: "Servicios", value: "SERVICIOS", },
        { title: "Solidario", value: "SOLIDARIO", },
        { title: "Transporte", value: "TRANSPORTE", },
    ];
    return sectors;
}

export const getActivityTypes = ( ) => {

    const types = [
        { title: "Selecciona", value: "" },
        { title: "Agricola", value: "AGRICOLA", },
        { title: "Campaña politica", value: "CAMPAÑA_POLITICA", },
        { title: "Alimentos", value: "ALIMENTOS", },
        { title: "Construcción", value: "CONSTRUCCION", },
        { title: "Educación", value: "EDUCACION", },
        { title: "Farmaceutica", value: "FARMACEUTICA", },
        { title: "Informatica", value: "INFORMATICA", },
        { title: "Metalmecanico", value: "METALMECANICO", },
        { title: "Petroleo", value: "PETROLEO",},
        { title: "Quimico", value: "QUIMICO",},
        { title: "Salud", value: "SALUD", },
        { title: "Servicios financieros", value: "SERVICIOS_FINANCIEROS", },
        { title: "Telecuminicaciones", value: "TELECUMINICACIONES", },
        { title: "Textiles", value: "TEXTILES", },
        { title: "Turismo", value: "TURISMO",},
        { title: "Otro", value: "OTRO" },
    ];
    return types;
}

export const getInternationalOperationTypes = ( ) => {

    const activities = [
        { title: "Selecciona", value: "" },
        { title: "Exportaciones", value: "EXPORTACIONES" },
        { title: "Giros", value: "GIROS" },
        { title: "Importaciones", value: "IMPORTACIONES" },
        { title: "Inversiones", value: "INVERSIONES" },
        { title: "Pago de servicos", value: "PAGO_DE_SERVICOS" },
        { title: "Prestamos", value: "PRESTAMOS" },
        { title: "Transferencia", value: "TRANSFERENCIA" },
        { title: "Ninguna", value: "NINGUNA" },
        { title: "Otro",value: "OTRO" },
    ];
    return activities;
}

const prepareData = (data) => {
    return {
        "actPrincipal": data.mainActivity,
        "actSecundaria": data.optionalActivity,
        "activos": data.assets,
        "aseBen": data.tie_3,
        "cargo": data.position,
        "celular": data.cellphone,
        "ciudadDili": data.city,
        "ciuu": data.ciiu,
        "ciuuSec": data.secondeCiiu,
        "claseVin": data.vinculationType,
        "conOtrosIngresos": data.otherIncomeDesc,
        "correo": data.email,
        "cuentaInt": data.internationalAccounts,
        "dirEmpresa": data.companyAddress,
        "direccion": data.address,
        "egrMensual": data.expenses,
        "empresaTrab": data.companyName,
        "fechaDil": data.date,
        "fechaExpDoc": data.expeditionDate,
        "fechaNacimiento": data.birthdate,
        "ingMensual": data.income,
        "lugarExpDoc": data.expeditionCity,
        "lugarNacimiento": data.birthCity,
        "munEmpresa": data.companyCity,
        "municipio": data.cityRes,
        "nacionalidad": data.nationality,
        "nombres": data.fullname,
        "numDocumento": data.document,
        "obliExtranjero": data.otherCountyObligations,
        "ocupacion": data.occupation,
        "origenFondos": data.sourceFunds,
        "otrosIngresos": data.otherIncome,
        "pasivos": data.passives,
        "patrimonio": data.heritage,
        "perExpuesta": data.publicExposed,
        "primerApellido": data.surname,
        "proFinInt": data.internationalFinancialProduct,
        "prodSer": data.productOrService,
        "recPublicos": data.publicResources,
        "sector": data.sector,
        "segNacionalidad": data.secondNationality,
        "segundoApellido": data.secondSurname,
        "telEmpresa": data.companyPhone,
        "telefono": data.phone,
        "tipoActividad": data.activityType,
        "tipoDocumento": data.documentType,
        "tomAse": data.tie_1,
        "tomBen": data.tie_2,
        "vinPerExpuesta": data.tiesPublicExposed,
        "tipoSolicitud": data.requestType,
        "tipoOpeInt": data.typeOfInternationalTransactions,
        "otroOpeInter": data.otherTypeOfIntTransaction,
        "otroAseBen": data.otherTie3,
        "otroTomAse": data.otherTie1,
        "otroTomBen": data.otherTie2,
        "otroClasVin": data.otherVinculationType,
        "otroTipoActividad": data.otherActivityType
    }
}

export const sendData = async ( values ) => {

    const body = prepareData(values);

    // Backend doesn't accept "" values. 
    // If value has empty value, or "", must send as null
    Object.keys(body).forEach( (key) => {
        if ( body[key] === "" )  body[key] = null;
    })

    const response = await postInformation(body);

    if ( response.status === 200 ) return true;

    return false;

}
