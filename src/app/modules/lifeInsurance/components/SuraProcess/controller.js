import { parseCurrency } from "app/helpers/parse-currency";
import { sendOtpRequest, verifyOtpRequest } from "app/modules/_general/repositories/otp";
import { SuraLifeProcessDetailsPlanRouteFunc } from "app/routes/childs/Life/routes";
import { actions } from "../../redux";
import { getActivitiesRequest, getDiseasesRequest, getDocumentTypesRequest, getOccupationsRequest, getPlansRequest, postUserInfo } from "./repository"

const kindshipList = [
    {codigo: "CP", nombre: "COMPAÑERO(A) PERMANENTE"},
    {codigo: "AF", nombre: "AFILIADO(A)"},
    {codigo: "CO", nombre: "CONYUGE"},
    {codigo: "EX", nombre: "EXESPOSO(A)"},
    {codigo: "HE", nombre: "HERMANO(A)"},
    {codigo: "HI", nombre: "HIJO(A)"},
    {codigo: "NI", nombre: "NIETO(A)"},
    {codigo: "PR", nombre: "PROGENITOR(A)"},
    {codigo: "SB", nombre: "SOBRINO(A)"},
    {codigo: "SU", nombre: "SUEGRO(A)"}
];

export const getInfoList = async () => {

    const occupationListRespone = await getOccupationsRequest();
    const documentTypeListResponse = await getDocumentTypesRequest();

    if ( occupationListRespone.status === 200 && documentTypeListResponse.status === 200 ){
        return {occupations: occupationListRespone.body, documentTypes: documentTypeListResponse.body}
    }

    return undefined;
}

export const getOccupations = ( list ) => {
    if ( list.length > 0 ){
        let selectOptions = list.map( (element) => ({value: element["id"], title: element["descripcion"]}) )
        selectOptions.unshift({value: "", title: "Selecciona"});
        return selectOptions;
    }
    return [];    
}

export const getDocumentTypes = (list) => {
    if (list.length > 0) {
        let selectOptions = list.map((element) => ({ value: element["id"], title: element["descripcion"] }))
        selectOptions.unshift({ value: "", title: "Selecciona" });
        return selectOptions;
    }
    return [];
}

export const getKinship = ( ) => {

    try {
        let selectOptions = kindshipList.map((element) => ({ value: element["codigo"], title: element["nombre"] }))
        selectOptions.unshift({ value: "", title: "Selecciona" });
        return selectOptions;

    } catch (error) {

    }
}

export const isPecentCorrect = ( beneficiaries ) => {
    if ( beneficiaries.length ){
        let count = 0;
        beneficiaries.forEach( (element) => count += element.participation );

        if ( count === 100 ){
            return true
        }
    }
    return false;
}

const prepareData = ({ client, beneficiaries, occupationList, departmentList, documentTypes }) => {

    const department = departmentList.find( (element) => element.id === parseInt(client.residenceDep) );
    const city = department.municipios.find( (element) => element.id === parseInt(client.residenceCity))

    return {
        beneficiarios: beneficiaries.map( ( beneficiary ) =>
          ({
            fechaNacimiento: beneficiary.birthDate,
            identificacion: {
              numero: beneficiary.document,
              tipo: documentTypes.find( (element) => element.id === beneficiary.documentType )
            },
            parentesco: kindshipList.find( (element) => element.codigo === beneficiary.kinship),
            porcentaje: beneficiary.participation,
            primerApellido: beneficiary.surname?.toUpperCase(),
            primerNombre: beneficiary.firstName?.toUpperCase(),
            segundoApellido: beneficiary.secondSurname?.toUpperCase(),
            segundoNombre: beneficiary.middleName?.toUpperCase(),
            sexo: beneficiary.gender,
        })),
        celular: client.phone,
        correoElectronico: client.email,
        departamento: department["nombre"],
        direccion: client.address,
        fechaNacimiento: client.birthDate,
        identificacion: {
          numero: client.identification.number,
          tipo: client.identification.type
        },
        manejaMoto: client.motoDriver,
        municipio: city["nombre"],
        ocupacion: occupationList.find( ele => ele.id === client.occupation),
        primerApellido: client.surname?.toUpperCase(),
        primerNombre: client.firstName?.toUpperCase(),
        segundoApellido: client.secondSurname?.toUpperCase(),
        segundoNombre: client.middleName?.toUpperCase(),
        sexo: client.gender,
        telefono: "8001100"
    }
}

export const getPlans = async ( values, dispatch ) => {
    const data = prepareData( values );
    const response = await getPlansRequest(data);
    if ( response.status === 200){

        const plans = response.body.map( (plan, n) => ({
            data: plan,
            logoPath: "sura-logo.png",
            insuranceName: "Plan vive - Vida Sura",
            planCount: n + 1, 
            redirectValues: plan.infoPoliza.numeroCotizacion, 
            descriptionValues: [
                {value: parseCurrency(plan.tarifas.tarifa.calculoTarifaVida.primas[0].valorAsegurado), label: "Valor asegurado"},
                {value: "Pagos mensuales, trimestrales, semestrales y anuales", label: "Pagos"},
                {value: "Si necesitas proteger a los tuyos en caso de que faltes, les damos a tus beneficiarios todo el respaldo económico que definas al momento de comprar tu seguro para que ellos utilicen ese dinero y no pierdan su calidad de vida.", label: "Cobertura principal"}
            ], 
            redirect: SuraLifeProcessDetailsPlanRouteFunc
        }))
        dispatch(actions.setPlans(plans))
        return true;
    }
    return false;
}

export const getInsurabilityLists = async () => {

    const diseaseResponse = await getDiseasesRequest();
    const activitiesResponse = await getActivitiesRequest();

    if ( diseaseResponse.status === 200 && activitiesResponse.status === 200 ){
        return {disease: diseaseResponse.body, activities: activitiesResponse.body}
    }

    return undefined;
}

export const sendUserInformation = async ( data, quoteId ) => {
    const body = {
        "actividades": data.activities,
        "enfermedades": data.disease,
        "enfermedadesDistintas": data.otherDisease,
        "familiares": data.familiarDisease,
        "numCotizacion": quoteId,
        "otrosDeportes": data.othersSports
    }
    const response = await postUserInfo(body);
    if ( response.status === 200)
        return true;
    return false;
}

export const sendOtp = async ( qouteId ) => {
    await sendOtpRequest({
        idAseguradora: 2, // Seguros Bolivar ID
        numCotizacion: qouteId
    });
}

export const verifyOtp = async ( quoteId, otp ) => {
    const response = await verifyOtpRequest({
        idAseguradora: 2, // Seguros Sura
        numCotizacion: quoteId,
        otp
    });
    if ( response.status === 200 ){
        return true;
    }
    return false;
}