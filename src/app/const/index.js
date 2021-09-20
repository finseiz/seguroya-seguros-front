import { toAbsoluteUrl } from "theme/helpers/AssetsHelpers";

export { makeRequest } from "./crud";

export const URL = "http://34.95.140.147:8080/api/";

export const InsuranceLogo = {
  COLMENA: "colmena-logo.svg",
  BOLIVAR: "seguros-bolivar-logo.svg",
};

export const insuranceLogoAbsolutePath = {
  'SBS': toAbsoluteUrl("/media/logos/sbs-logo.png"),
  'Seguros Bolívar': toAbsoluteUrl("/media/logos/seguros-bolivar-logo.svg"),
  'Sura': toAbsoluteUrl("/media/logos/sura-logo.png"),
  'Colmena Seguros': toAbsoluteUrl("/media/logos/colmena-logo.svg"),
}