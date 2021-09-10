import { actions } from "../../redux";
import { getPlansRequest } from "../../repository";

export const getPlans = async (clienteData, dispatch) => {

    try {

        const { residenceDep, residenceCity } = clienteData;

        const plans = await getPlansRequest(residenceDep, residenceCity);

        if ( plans.status === 200 ){

            const plansToSet = []
            plans.body.map( plan => {
                const planValue = {
                    logoPath: "sura-logo.png", 
                    insuranceName: "Sura",
                    data: plan
                }
                plansToSet.push(planValue);
            })
        
            dispatch( actions.setPlans(plansToSet) );
            return true;

        }else{
            return false;
        }
        
    } catch (error) {
        return false;   
    }    
}

export const getDocumentTypes = ( list ) => {
    if ( list.length > 0 ){
        let selectOptions = list.map( (element) => ({value: element["id"], title: element["descripcion"]}) )
        selectOptions.unshift({value: "", title: "Selecciona"});
        return selectOptions;
    }
    return [];    
}

export const getKinship = ( plans, selectedPlan ) => {

    try {

        const plan = plans.find( (plan) => plan.data["solucion"]["codigo"] === selectedPlan.solutionId );
        const list = plan.data["infoSolucion"]["parentescos"];

        let selectOptions = list.map( (element) => ({value: element["codigo"], title: element["nombre"]}) )
        selectOptions.unshift({value: "", title: "Selecciona"});
        return selectOptions;
        
    } catch (error) {
        
    }

    


}