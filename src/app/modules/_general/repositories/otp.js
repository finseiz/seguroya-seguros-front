import { makeRequest } from "app/const";

const baseURL = "otp/";

const sendOtpPath = baseURL + "generar-otp-compra";
const verifyOtpPath = baseURL + "validar-otp-compra";

/**
 *
 * @param {object} data -  { idAseguradora: number, numCotizacion: string }
 * @returns response
 */
export const sendOtpRequest = async (data) => {
  const response = await makeRequest({
    path: sendOtpPath,
    method: "POST",
    body: JSON.stringify(data),
  });
  localStorage.setItem("data", JSON.stringify(data));
  const body = await response.json();
  return { body, status: response.status };
};

export const sendAllianzOtpRequest = async (data) => {
  const response = await makeRequest({
    path: sendOtpPath,
    method: "POST",
    body: JSON.stringify(data),
  });
  localStorage.setItem("data", JSON.stringify(data));
  //    const body = await response;
  return { status: response.status };
};

/**
 *
 * @param {object} data -  { idAseguradora: number, numCotizacion: string, otp: number }
 * @returns response
 */
export const verifyOtpRequest = async (data) => {
  const response = await makeRequest({
    path: verifyOtpPath,
    method: "POST",
    body: JSON.stringify(data),
  });
  const body = await response.json();
  return { body, status: response.status };
};
