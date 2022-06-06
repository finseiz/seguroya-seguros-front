import { makeRequest, makeBolivarRequest } from "app/const";

// const baseURL = "segurosbolivar/";
const baseURL = "seguro-autos/";

const getPlansPath = baseURL + "liquidacion";
const quotePath = baseURL + "cotizacion";

export const getPlansRequest = async (data) => {
  const response = await makeBolivarRequest({
    path: getPlansPath,
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "x-api-key": "ylKFdr3Twg4eoT8FUFfdq2YHV8ACVZrea1wq9gMd",
    },
  });
  const body = await response.json();
  return { body, status: response.status };
};

export const createQuoteRequest = async (data) => {
  const response = await makeBolivarRequest({
    path: quotePath,
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "x-api-key": "ylKFdr3Twg4eoT8FUFfdq2YHV8ACVZrea1wq9gMd",
    },
  });
  const body = await response.json();
  return { body, status: response.status };
};

// allianz...
const getAllianzPlansPath = `allianz/cotizacion`;
const saveAllianzQuotePath = `allianz/cotizacion/save`;

export const getAllianzPlansRequest = async (data) => {
  const response = await makeRequest({
    path: getAllianzPlansPath,
    method: "POST",
    body: JSON.stringify(data),
  });
  const body = await response.json();
  return { body, status: response.status };
};

export const saveAllianzQuoteRequest = async (data) => {
  const response = await makeRequest({
    path: saveAllianzQuotePath,
    method: "POST",
    body: JSON.stringify(data),
  });
  const body = await response.json();
  return { body, status: response.status };
};
//TODO: Test allianz --------->
