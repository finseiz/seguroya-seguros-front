import { makeRequest } from "app/const";

const baseURL = "sbs/";
const bolivarURL = "segurosbolivar/";
const municipiosURL = "ubicacion/municipios";

const getCountriesPath = baseURL + "paises";
const getCirculationZoneByKmPath = baseURL + "zonas-circulacion";

const getBolivarCities = bolivarURL + "listaCiudades";

export const getCountriesRequest = async () => {
  const response = await makeRequest({ path: getCountriesPath, method: "GET" });
  return response.json();
};

export const getCirculationZoneByKmRequest = async () => {
  const response = await makeRequest({
    path: getCirculationZoneByKmPath,
    method: "GET",
  });
  return response.json();
};

export const getBolivarCitiesRequest = async () => {
  const response = await makeRequest({ path: getBolivarCities, method: "GET" });
  const body = await response.json();
  return { body, status: response.status };
};

export const getMunicipiosRequest = async () => {
  const response = await makeRequest({ path: municipiosURL, method: "GET" });
  const body = await response.json();
  return { body, status: response.status };
};
