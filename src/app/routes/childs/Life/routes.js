
export const LifeHomeRoute = "/life";

// ----------------------------------------------------------------

export const LifeProcessRoute = LifeHomeRoute + "/process"

export const LifeProcessSelectPlanRoute =  LifeProcessRoute + "/select-plan";

export const LifeProcessDetailsPlanRoute =  LifeProcessRoute + "/:policy/:plan/details";
export const LifeProcessDetailsPlanRouteFunc = ({policy, plan}) => LifeProcessRoute + `/${policy}/${plan}/details`;

export const LifeProcessInsurabilityRoute =  LifeProcessRoute + "/insurability-info";

export const LifeProcessBeneficiariesRoute =  LifeProcessRoute + "/beneficiaries";

export const LifeProcessPersonAndMoreDataRoute =  LifeProcessRoute + "/more-data";

export const LifeProcessAuthorizationRoute =  LifeProcessRoute + "/authorization";

export const LifeProcessOTP =  LifeProcessRoute + "/otp";

export const LifeProcessDone =  LifeProcessRoute + "/done";

// ----------------------------------------------------------------

export const SuraLifeProcessRoute = LifeHomeRoute + "/sura/process"

export const SuraLifeInfoRoute = SuraLifeProcessRoute + "/info"

export const SuraLifeBeneficiariesRoute = SuraLifeProcessRoute + "/beneficiaries"

export const SuraLifeSelectPlanRoute =  SuraLifeProcessRoute + "/select-plan";

export const SuraLifeProcessDetailsPlanRoute =  SuraLifeProcessRoute + "/:quoteId/details";
export const SuraLifeProcessDetailsPlanRouteFunc = (quoteId) => SuraLifeProcessRoute + `/${quoteId}/details`;

export const SuraLifeProcessInsurabilityRoute = SuraLifeProcessRoute + "/insurability-info";

export const SuraLifeProcessOTP =  SuraLifeProcessRoute + "/otp";

export const SuraLifeProcessDone =  SuraLifeProcessRoute + "/done";