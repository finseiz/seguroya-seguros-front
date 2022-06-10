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
  // const getSurnames = values.surnames.split(" ");
  console.log("value to be sended", values);
  return {
    name: values.names,
    first_name: values.names,
    second_name: values.surnames,
    id_number: Number(values.identification),
    id_type: values.identificationType,
    gender:
      values.gender === "M"
        ? "Masculino"
        : values.gender === "F"
        ? "Femenino"
        : "",
    birth_date: formatGeneralDate(values.birthDate),
    address: "direccion",
    email: values.email,
    phone: values.cellphone,
    country: 1,
    traffic_city: parseInt(values.circulationZone) || "2",
    code_fasecolda: "05801206",
    plate_car: values.licensePlate,
    car_year: values.carYear || 2010,
  };
};

export const getPlans = async (reduxFormValues, dispatch) => {
  try {
    const data = prepareDataToSend(reduxFormValues);
    console.log("🚀 ~ file: controller.js ~ line 41 ~ getPlans ~ data", data);
    const responseData = await getPlansRequest(data);
    console.log(
      "🚀 ~ file: controller.js ~ line 43 ~ getPlans ~ responseData",
      responseData
    );
    // console.log(
    //   "🚀 ~ file: controller.js ~ line 43 ~ getPlans ~ packages",
    //   packages
    // );
    dispatch(
      actions.setPlans(
        responseData.data.packages.map((plan) => ({
          logoPath: "sbs-logo.png",
          insuranceName: "SBS - Auto",
          //qualification: 3,
          anualPrice: plan.total_cost,
          descriptionValues: bolivarPlan(plan.cost_by_km, plan.package),
          redirect: CarsKmProcessDetailsPlanRouteFunc,
          carId: plan.id,
          coverage: responseData.data.rate_coverage,
        }))
      )
    );

    return responseData;
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
