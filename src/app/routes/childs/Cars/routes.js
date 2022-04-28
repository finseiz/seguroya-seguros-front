export const CarsHomeRoute = "/cars";

export const CarsProcessRoute = CarsHomeRoute + "/process";

export const CarsProcessSelectPlanRoute = CarsProcessRoute + "/select-plan";

export const CarsProcessDetailsPlanRoute = CarsProcessRoute + "/:id/details";
export const CarsProcessDetailsPlanRouteFunc = (id) =>
  CarsProcessRoute + `/${id}/details`;

//*ALLIANZ
export const AllianzCarsProcessDetailsPlanRoute =
  CarsProcessRoute + "/:id/allianz-details";
export const AllianzCarsProcessDetailsPlanRouteFunc = (id) =>
  CarsProcessRoute + `/${id}/allianz-details`;

export const CarsProcessOtpRoute = CarsProcessRoute + "/otp";
export const AllianzCarsProcessOtpRoute = CarsProcessRoute + "/allianz-otp";

export const CarsProcessSarlaftRoute = CarsProcessRoute + "/sarlaft/form";

export const CarsProcessSheduleAppointmentRoute =
  CarsProcessRoute + "/schedule-date";

export const CarsProcessDoneRoute = CarsProcessRoute + "/done";
export const AllianzCarsProcessDoneRoute = CarsProcessRoute + "/allianz-done";

// Kilimeter insurance ----------------------------------------------------------------

export const CarsKmProcessRoute = CarsHomeRoute + "/km/process";

export const CarsKmProcessSelectPlanRoute = CarsKmProcessRoute + "/select-plan";

export const CarsKmProcessDetailsPlanRoute =
  CarsKmProcessRoute + "/:id/details";
export const CarsKmProcessDetailsPlanRouteFunc = (id) =>
  CarsKmProcessRoute + `/${id}/details`;

export const CarsKmProcessDataAutorizationRoute =
  CarsKmProcessRoute + "/autorization";

export const CarsKmProcessOtpRoute = CarsKmProcessRoute + "/otp";

export const CarsKmProcessDoneRoute = CarsKmProcessRoute + "/done";
