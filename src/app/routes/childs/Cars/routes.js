
export const CarsHomeRoute = "/cars";

export const CarsProcessRoute = CarsHomeRoute + "/process"

export const CarsProcessSelectPlanRoute =  CarsProcessRoute + "/select-plan";

export const CarsProcessDetailsPlanRoute =  CarsProcessRoute + "/:id/details";
export const CarsProcessDetailsPlanRouteFunc = (id) => CarsProcessRoute + `/${id}/details`;

export const CarsProcessOtpRoute =  CarsProcessRoute + "/otp";

export const CarsProcessSarlaftRoute =  CarsProcessRoute + "/sarlaft/form";

export const CarsProcessSheduleAppointmentRoute =  CarsProcessRoute + "/schedule-date";

export const CarsProcessDoneRoute =  CarsProcessRoute + "/done";

