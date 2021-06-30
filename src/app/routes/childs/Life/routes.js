
export const LifeHomeRoute = "/home/life";

export const LifeProcessRoute = "/process/life-process"

export const LifeProcessSelectPlanRoute =  LifeProcessRoute + "/select-plan";

export const LifeProcessDetailsPlanRoute =  LifeProcessRoute + "/:id/details";
export const LifeProcessDetailsPlanRouteFunc = (id) => LifeProcessRoute + `/${id}/details`;