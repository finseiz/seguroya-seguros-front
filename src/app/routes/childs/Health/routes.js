
export const HealthHomeRoute = "/health";

export const HealthProcessRoute = HealthHomeRoute + "/process"

export const HealthProcessBeneficiariesRoute =  HealthProcessRoute + "/beneficiaries";

export const HealthProcessSelectPlanRoute =  HealthProcessRoute + "/select-plan";

export const HealthProcessDetailsPlanRoute =  HealthProcessRoute + "/:id/details";
export const HealthProcessDetailsPlanRouteFunc = (id) => HealthProcessRoute + `/${id}/details`;

export const HealthProcessInsurabilityRoute =  HealthProcessRoute + "/insurability-info";

export const HealthProcessAuthRoute =  HealthProcessRoute + "/auth";

export const HealthProcessDoneRoute =  HealthProcessRoute + "/done";