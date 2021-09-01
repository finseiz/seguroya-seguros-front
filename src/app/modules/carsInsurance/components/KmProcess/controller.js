import { formatGeneralDate } from "app/helpers/date-format";
import { bolivarPlan } from "app/helpers/select-plan";
import { CarsKmProcessDetailsPlanRouteFunc } from "app/routes/childs/Cars/routes";
import { actions } from "../../redux";
import { getPlansRequest } from "./repository"

const prepareDataToSend = (values) => {
    return {
        celular: values.cellphone,
        email: values.email,
        fechaNacimeinto: formatGeneralDate(values.birthDate),
        genero: values.gender,
        infoDocumento: {
            documento: values.identification,
            idPais: parseInt(values.country),
            tipoDocumento: values.identificationType
        },
        nombres: values.fullname,
        placa: values.licensePlate,
        primerApellido: values.surname,
        segundoApellido: values.secondSurname,
        zonaCirculacion: parseInt(values.circulationZone)
    }
}

export const getPlans = async (reduxFormValues, dispatch) => {

    try {
        const data = prepareDataToSend(reduxFormValues);
        const { costs } = await getPlansRequest(data);

        dispatch(actions.setPlans( costs.map( (plan) => 
            ({
                logoPath: "sbs-logo.png",
                insuranceName: "SBS - Auto",
                //qualification: 3,
                anualPrice: plan.total_cost,
                descriptionValues: bolivarPlan({ coverage: plan.package, kmCosto: plan.cost_by_km}),
                redirect: CarsKmProcessDetailsPlanRouteFunc
            })
        )))

        return costs;

    } catch (error) {
        return undefined;
    }
}
