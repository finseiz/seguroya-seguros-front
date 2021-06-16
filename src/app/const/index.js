export { makeRequest, getQueryParams } from "./crud";

const MAIN_URL = process.env.BACKEND_URL || "http://localhost:8080";
export const URL = MAIN_URL + "/api";

export const InsuranceLogo = {
  COLMENA: "colmena-logo.svg",
  BOLIVAR: "seguros-bolivar-logo.svg",
};

export const StepsInsuranceProcess = {
  insurability_information: {
    title: "Información de asegurabilidad",
    path: "insurability-information",
  },
  beneficiary_enrollment: {
    title: "inscripción de beneficiarios",
    path: "beneficiary-enrollment",
  },
  more_info: {
    title: "Preguntas persona expuesta y otros datos",
    path: "more-info",
  },
  authorizations: {
    title: "Autorizaciones",
    path: "authorizations",
  },
  confimation_code: {
    title: "Verifica tu identidad",
    path: "confirmation-code",
  },
  sarlaft: {
    title: "Llena el SARLAFT",
    path: "sarlaft",
  },
  upload_car_documents: {
    title: "Carga de documentos",
    path: "upload-cars-documents",
  },
  appointment_schedule: {
    title: "Agenda tu cita de inspección",
    path: "appointment-schedule",
  },
};
