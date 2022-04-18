import { getCarTypId } from "app/helpers/selet-options";
import { actions } from "app/modules/carsInsurance/redux";
import {
  createQuoteRequest,
  getPlansRequest,
  getAllianzPlansRequest,
} from "./repository";
import { bolivarPlan } from "app/helpers/select-plan";
import { CarsProcessDetailsPlanRouteFunc } from "app/routes/childs/Cars/routes";
import {
  sendOtpRequest,
  verifyOtpRequest,
} from "app/modules/_general/repositories/otp";
import { getDocumentaPdf } from "app/modules/_general/repositories/document";
import { parseCurrency } from "app/helpers/parse-currency";

const prepareData = (data) => {
  return {
    apellidosTomador: data.surnames,
    // ceroKm: data.isNewCar ? "true" : "false",
    ceroKm: "false",
    ciudadMovilizacion: data.circulationZone,
    fechaNacimientoTomador: data.birthDate,
    generoConductor: data.gender,
    // marcaVehiculo: data.carBrand,
    // modeloVehiculo: data.carModel,
    marcaVehiculo: null,
    modeloVehiculo: null,
    nombresTomador: data.names,
    numeroDocumentoTomador: data.identification,
    // opcionPA: data.includeAccessories ? "S" : "N",
    opcionPA: "N",
    // periodoFact: data.payment,
    periodoFact: "12",
    placaVehiculo: data.licensePlate,
    // sumaAccesorios: data.accesoriesSum,
    sumaAccesorios: 0,
    tipoDocumentoTomador: getCarTypId(data.identificationType),
    // tipoInspeccion: data.inspectionType
    tipoInspeccion: "VIRTUAL",
  };
};

export const getPlans = async (dataToSend, dispatch) => {
  const body = prepareData(dataToSend);
  const response = await getPlansRequest(body);

  if (response.status === 200) {
    const quoteId = response.body.idConsulta;
    const data = response.body.data;

    const plans = data.map((plan) => {
      const { responseData } = plan;

      return {
        logoPath: "bolivar-logo.svg",
        insuranceName: `Bolivar - ${responseData.opcionAutosDescripcion}`,
        //qualification: 3,
        totalPrice: responseData.totalPrima,
        monthPrice: responseData.pagoMensual,
        descriptionValues: [
          { label: "Tipo de cobertura", value: "Todo riesgo" },
          {
            label: (
              <p>
                Valor mensual <br />
                Diferido a 10 cuotas mensuales
              </p>
            ),
            value: `${parseCurrency(responseData.pagoMensual)}COP`,
            includeInfo: true,
          },
        ],
        id: responseData.numerodeliquidacion,
        redirect: CarsProcessDetailsPlanRouteFunc,
        data: { ...plan },
      };
    });

    dispatch(actions.setPlans(plans));
    dispatch(actions.editDataToSend({ quoteId }));
  } else {
    throw new Error("No fue posible recuperar los planes");
  }

  return [];
};

const prepareQuoteData = (data, planId) => {
  return {
    celTomador: data.cellphone,
    ciuTomador: data.circulationZone,
    dirTomador: data.address,
    fecNacConductor: data.birthDate,
    idConsulta: data.quoteId,
    mailTomador: data.email,
    nomConductor: data.fullname,
    numLiquidacion: planId,
    placaVeh: data.licensePlate,
    sexoConductor: data.gender,
  };
};

export const createQuote = async (state, planId) => {
  const data = prepareQuoteData(state, planId);

  const response = await createQuoteRequest(data);

  if (response.status === 200) {
    const quoteId = response.body.responseData.numCotizacion;
    return quoteId;
  }

  return undefined;
};

export const sendOtp = async (qouteId) => {
  await sendOtpRequest({
    idAseguradora: 3, // Seguros Bolivar ID
    numCotizacion: qouteId,
  });
};

export const getDocumentPdf = async (id) => {
  getDocumentaPdf(id)
    .then((response) => response.blob())
    .then((blob) => {
      // Create blob link to download
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Poliza_" + id + ".pdf");

      // Append to html link element page
      document.body.appendChild(link);

      // Start download
      link.click();

      // Clean up and remove the link
      link.parentNode.removeChild(link);
    });
};

export const verifyOtp = async (quoteId, otp) => {
  const response = await verifyOtpRequest({
    idAseguradora: 3, // Seguros Bolivar ID
    numCotizacion: quoteId,
    otp,
  });

  if (response.status === 200) {
    return true;
  }

  return false;
};

// ALLIANZ CONTROLLER

const prepareAllianzData = (data) => {
  // Due to the specific id Enum class
  // checks this field and apply the value that match the api.

  let identificationType = "";

  if (data.identificationType === "Cedula") {
    identificationType = "CEDULA_CIUDADANIA";
  } else if (data.identificationType === "Cedula_Extranjeria") {
    identificationType = "CEDULA_EXTRANJERIA";
  } else {
    identificationType = data.identificationType;
  }

  console.log("DATA COMES", data.ownerBirthDate || data.birthDate);

  return {
    firstBill: "NO_BANCARIO",
    holderDocNumber: data.identification,
    holderDocType: identificationType,
    holderDriver: true,
    holderOwner: data.isHolderDriver,
    isHolderDriver: data.isHolderDriver,
    isHolderOwner: data.isHolderOwner,
    isNewOwner: data.isNewOwner || true,
    newOwner: data.isNewOwner || true,
    ownerDocNumber: data.identidicationOwnerNumber || data.identification,
    ownerDocType: data.identificationOwnerType || identificationType,
    riskData: {
      accessoriesValue: data.accessoryValue || 0,
      // circulationAreaDaneCode: Number(data.circulationZone) || 0,
      circulationAreaDaneCode: 76001,
      gasSystemValue: data.gasSystemValue || "0",
      insuredValue: Number(data.insuredValue) || 0,
      isNewVehicle: data.isNew || false,
      newVehicle: data.isNew || false,
      ownerBornDate: data.ownerBirthDate || data.birthDate,
      ownerSex: data.gender,
      protectionDeviceCode: "CAZADOR",
      repowered: data.repowered || true,
      shieldingValue: Number(data.shieldingValue) || 0,
    },
    successive: "NO_BANCARIO",
    vehicleFasecoldaCode: Number(data.fasecoldaCode),
    vehiclePlate: data.licensePlate,
    vehicleYear: Number(data.carYear),
  };
};

//  {
//   firstBill: "NO_BANCARIO",
//   holderDocNumber: "1002802174",
//   holderDocType: "CEDULA_CIUDADANIA",
//   holderDriver: true,
//   holderOwner: true,
//   isHolderDriver: true,
//   isNewOwner: true,
//   newOwner: true,
//   ownerDocNumber: "1002802174",
//   ownerDocType: "CEDULA_CIUDADANIA",
//   riskData: {
//     accessoriesValue: "0",
//     circulationAreaDaneCode: 76001,
//     gasSystemValue: "0",
//     insuredValue: 0,
//     isNewVehicle: false,
//     newVehicle: false,
//     ownerBornDate: "1994-04-17",
//     ownerSex: "M",
//     protectionDeviceCode: "CAZADOR",
//     repowered: true,
//     shieldingValue: 0,
//   },
//   successive: "NO_BANCARIO",
//   vehicleFasecoldaCode: 5806047,
//   vehiclePlate: "UGV495",
//   vehicleYear: 2015,
// };

export const getAllianzPlans = async (dataToSend, dispatch) => {
  console.log("allianz data to send", dataToSend);

  // const body = prepareAllianzData(dataToSend);
  const body = prepareAllianzData(dataToSend);
  const response = await getAllianzPlansRequest(body);

  if (response.status === 200) {
    const quoteId = response.body.idConsulta;
    const data = response.body.data;

    const plans = data.packages.map((plan) => {
      return {
        id: plan.packageId,
        logoPath: "allianz-logo.svg",
        insuranceName: `Allianz - ${plan.packageName}`,
        //qualification: 3,
        coverages: plan.coverages,
        payments: plan.payments,
        descriptionValues: [
          { label: "Tipo de cobertura", value: "Todo riesgo" },
          {
            label: (
              <p>
                Valor mensual <br />
                Diferido a 10 cuotas mensuales
              </p>
            ),
            value: `${parseCurrency(plan.coverages[1].premiumValue)}COP`,
            includeInfo: true,
          },
        ],
        redirect: CarsProcessDetailsPlanRouteFunc,
        data: { ...plan },
      };
    });

    dispatch(actions.setPlans(plans));
    dispatch(actions.editDataToSend({ quoteId }));
  } else {
    throw new Error("No fue posible recuperar los planes");
  }

  return [];
};
