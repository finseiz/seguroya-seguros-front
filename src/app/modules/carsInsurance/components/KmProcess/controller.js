import { formatGeneralDate } from "app/helpers/date-format";
import { bolivarPlan } from "app/helpers/select-plan";
import { CarsKmProcessDetailsPlanRouteFunc } from "app/routes/childs/Cars/routes";
import { actions } from "../../redux";
import { getPlansRequest } from "./repository";
import {
  sendOtpRequest,
  verifyOtpRequest,
} from "app/modules/_general/repositories/otp";

const prepareDataToSend = (values) => {
  const getSurnames = values.surnames.split(" ");
  return {
    celular: values.cellphone,
    email: values.email,
    fechaNacimeinto: formatGeneralDate(values.birthDate),
    genero: values.gender,
    infoDocumento: {
      documento: values.identification,
      // idPais: parseInt(values.country),
      idPais: 0,
      tipoDocumento: values.identificationType,
    },
    nombres: values.names,
    placa: values.licensePlate,
    primerApellido: getSurnames[0],
    segundoApellido: getSurnames[1] ? getSurnames[1] : "",
    zonaCirculacion: parseInt(values.circulationZone),
  };
};

export const getPlans = async (reduxFormValues, dispatch) => {
  try {
    const data = prepareDataToSend(reduxFormValues);
    const { costs, policy } = await getPlansRequest(data);
    dispatch(
      actions.setPlans(
        costs.map((plan) => ({
          logoPath: "sbs-logo.png",
          insuranceName: "SBS - Auto",
          //qualification: 3,
          anualPrice: plan.total_cost,
          descriptionValues: bolivarPlan(plan.cost_by_km, plan.package),
          redirect: CarsKmProcessDetailsPlanRouteFunc,
          carId: policy.car_id,
        }))
      )
    );

    return costs;
  } catch (error) {
    return undefined;
  }
};

export const sendOtp = async (qouteId) => {
  await sendOtpRequest({
    idAseguradora: 4, // Seguros SBS
    numCotizacion: qouteId,
  });
};

export const verifyOtp = async (quoteId, otp) => {
  const response = await verifyOtpRequest({
    idAseguradora: 4, // Seguros SBS
    numCotizacion: quoteId,
    otp,
  });
  if (response.status === 200) {
    return true;
  }

  return false;
};
