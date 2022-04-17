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

export const getAllianzPlans = async (dataToSend, dispatch) => {
  console.log("allianz data to send", dataToSend);
  const body = prepareData(dataToSend);
  const response = await getAllianzPlansRequest(body);

  if (response.status === 200) {
    const quoteId = response.body.idConsulta;
    const data = response.body.data;

    const plans = data.map((plan) => {
      const { responseData } = plan;

      return {
        logoPath: "allianz-logo.svg",
        insuranceName: `Allianz - ${responseData.packages}`,
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
        id: responseData.quotationNumber,
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

const prepareAllianzQuoteData = (data) => {
  return {
    firstBill: "NO_BANCARIO",
    holderDocNumber: data.holderDocNumber,
    holderDocType: data.holderDocType,
    holderDriver: true,
    holderOwner: data.holderOwner,
    isHolderDriver: data.isHolderDriver,
    isHolderOwner: data.isHolderOwner,
    isNewOwner: data.isNewOwner,
    newOwner: data.isNewOwner,
    ownerDocNumber: data.ownerDocNumber,
    ownerDocType: data.ownerDocType,
    riskData: {
      accessoriesValue: data.accessoriesValue || 0,
      circulationAreaDaneCode: data.circulationAreaDaneCode || 0,
      gasSystemValue: data.gasSystemValue || "0",
      insuredValue: data.insuredValue || 0,
      isNewVehicle: data.isNewVehicle || true,
      newVehicle: data.newVehicle || true,
      ownerBornDate: data.ownerBornDate || "string",
      ownerSex: data.ownerSex,
      protectionDeviceCode: data.protectionDeviceCode || "CAZADOR",
      repowered: data.repowered || true,
      shieldingValue: data.shieldingValue || 0,
    },
    successive: "NO_BANCARIO",
    vehicleFasecoldaCode: data.vehicleFasecoldaCode || 0,
    vehiclePlate: data.vehiclePlate,
    vehicleYear: data.vehicleYear,
  };
};

export const createAllianzQuote = async (state) => {
  const data = prepareAllianzQuoteData(state);

  const response = await getAllianzPlansRequest(data);

  if (response.status === 200) {
    const quoteId = response.body.responseData.quotationNumber;
    return quoteId;
  }

  return undefined;
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
