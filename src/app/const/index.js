import { toAbsoluteUrl } from "theme/helpers/AssetsHelpers";

export { makeRequest, makeBolivarRequest } from "./crud";

//export const URL = "http://34.95.140.147:8080/api/";
export const URL = "http://35.225.47.8:8080/api/";

export const insuranceLogoAbsolutePath = {
  SBS: toAbsoluteUrl("/media/logos/sbs-logo.png"),
  "Seguros Bolívar": toAbsoluteUrl("/media/logos/seguros-bolivar-logo.svg"),
  Sura: toAbsoluteUrl("/media/logos/sura-logo.png"),
  "Colmena Seguros": toAbsoluteUrl("/media/logos/colmena-logo.svg"),

  "Seguros del Estado": toAbsoluteUrl("/media/logos/seguros-estado.jpg"),
  "Seguros mundial": toAbsoluteUrl("/media/logos/seguros-mundial.png"),
};
