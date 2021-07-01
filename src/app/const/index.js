export { makeRequest, getQueryParams } from "./crud";

const MAIN_URL = process.env.BACKEND_URL || "http://localhost:8080";
export const URL = MAIN_URL + "/api";

export const InsuranceLogo = {
  COLMENA: "colmena-logo.svg",
  BOLIVAR: "seguros-bolivar-logo.svg",
};

