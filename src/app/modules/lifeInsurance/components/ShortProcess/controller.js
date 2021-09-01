import { formatGeneralDate } from "app/helpers/date-format";
import { colmenaPlan } from "app/helpers/select-plan";
import { createSelectOptions } from "app/helpers/selet-options";
import { LifeProcessDetailsPlanRouteFunc } from "app/routes/childs/Life/routes";
import { actions } from "../../redux";
import { getPlansRequest } from "./repository"

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