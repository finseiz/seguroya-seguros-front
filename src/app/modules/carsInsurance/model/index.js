export const bolivarCities = (data) => {
  return data.catalogoDato;
};

export const carsPlans = (data) => {
  return {
    placaVehiculo: "EMR901",
    tipoDocumentoTomador: "CC",
    numeroDocumentoTomador: 1026253336,
    nombresTomador: "Gustavo Emilio",
    apellidosTomador: "Gomez Rodriguez",
    fechaNacimientoTomador: "1968-11-26",
    generoConductor: "M",
    claveAsesor: 38867,
    sumaAccesorios: 0,
    ciudadMovilizacion: 14000,
    ceroKm: "false",
    periodoFact: 12,
    opcionPA: "S",
  };
};

export const bolivarPlan = (data) => {
  const {
    numerodeliquidacion,
    opcionAutosDescripcion,
    coberturasCotizacion,
    deduciblePeridaTotal,
    totalPrima,
  } = data.responseData;

  return {
    insurance_name: "BOLIVAR",
    title: numerodeliquidacion,
    rate: 4.0,
    premium: coberturasCotizacion[0].valorPrima,
    return_value: deduciblePeridaTotal,
    anual_price: totalPrima,
    mensual_price: "",
    message: "",
    description: opcionAutosDescripcion,
    plan: data.responseData,
  };
};
