import { formatGeneralDate } from "app/helpers/date-format";
import { colmenaPlan } from "app/helpers/select-plan";
import { createSelectOptions } from "app/helpers/selet-options";
import { LifeProcessDetailsPlanRouteFunc } from "app/routes/childs/Life/routes";
import { actions } from "../../redux";
import { getPlansRequest, sendDataRequest, validateRequest } from "./repository"

export const getPlans = async ( dispatch, clientData ) => {
    try {
        const birthDate = formatGeneralDate(clientData.birthDate);
        const policies = await getPlansRequest( birthDate );

        let plans = [];

        Object.keys( policies ).forEach( (key) => {

            const { nombre, planes, cod:policyID } = policies[key];
            const returnValue = nombre.split(" ")[3];

            planes.forEach( (plan) => {
                const data = plan["informacion"].split(" ");
                const primaValue = data[2];
                const insuranceValue = data[7];
                plans.push(
                    {
                        logoPath: "colmena-logo.svg", 
                        insuranceName: "Colmena",
                        //qualification: 3,
                        planCount: plan["nombre"],
                        redirectValues: {policy: policyID, plan: plan.cod },
                        descriptionValues: colmenaPlan(returnValue, primaValue, insuranceValue),
                        redirect: LifeProcessDetailsPlanRouteFunc,
                        payments: plan["pagos"],
                    }
                )
            })

        } );

        dispatch( actions.setPlans(plans) )
        
    } catch (error) {
        return false;
    }
    return true;
}

export const getKinshipList = ( lists ) => {
    if ( lists.length ){
        const { map: types } = lists.find( (element) => element.nombre ===  "parentescos_beneficiario" )
        return createSelectOptions(types)
    }
    return [];   
}

export const getBeneficiariesDocumentTypes = ( lists ) => {
    if ( lists.length ){
        const { map: types } = lists.find( (element) => element.nombre ===  "tipos_doc_beneficiario" )
        return createSelectOptions(types)
    }
    return [];   
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

const prepareInformation = ( state ) => {

    const values = state.selectedPlan;
    const client = state.clientData;

    return {
        beneficiarios: values.beneficiaries.map( (beneficiary) => ({
            celular: beneficiary.cellphone,
            fechaNacimiento: formatGeneralDate(beneficiary.birthDate),
            genero: beneficiary.gender,
            indexParentesco: beneficiary.kinship,
            numeroDocumento: beneficiary.identification,
            porcentaje: beneficiary.participation,
            primerApellido: beneficiary.surname,
            primerNombre: beneficiary.firstName,
            segundoApellido: beneficiary.secondeSurname,
            segundoNombre: beneficiary.middleName,
            tipoDocumento: beneficiary.documentType
        })),
        opPago: values.paymentID,
        opPlan: values.redirectValues.plan,
        opPrima: values.redirectValues.policy,
        tomador: {
          celular: client.phone,
          direccion: client.address,
          email: client.email,
          fechaExpedicion: formatGeneralDate(client.expeditionDate),
          fechaNacimiento: formatGeneralDate(client.birthDate),
          genero: client.gender,
          indexCiudadNac: parseInt(client.birthCity),
          indexCiudadRes: parseInt(client.residenceCity),
          indexDepNac: parseInt(client.birthDep),
          indexDepRes: parseInt(client.residenceDep),
          numeroDocumento: client.document,
          ocupacion: parseInt(client.occupation),
          tipoDocumento: parseInt(client.documentType),
          primerApellido: client.surname,
          primerNombre: client.firstName,
          segundoApellido: client.secondSurname,
          segundoNombre: client.middleName,
        }
    }

}

export const sendInformation = async ( state, dispatch ) => {

    try {
        const body = prepareInformation(state);
        const response = await sendDataRequest(body);
        if ( response["idSolicitud"] ){
            dispatch( actions.setSelectedPlan({quoteId: response["idSolicitud"] }) );
            return true;
        }else{
            return false;
        }
    } catch (error) {
        return false
    }
}

export const sendOtp = async ( otp, state ) => {
    const requestId = state.quoteId;
    try {

        const data = {
            codigo: otp,
            idSolicitud: requestId
        }

        const response = await validateRequest(data);
        debugger
        if ( response.status === 200 ){
            return true;
        }else{
            return false;
        }
    } catch (error) {
        return false;
    }
}