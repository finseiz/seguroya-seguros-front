import { CarsProcessDetailsPlanRouteFunc } from "app/routes/childs/Cars/routes";
import { AllianzCarsProcessDetailsPlanRouteFunc } from "app/routes/childs/Cars/routes";
import { allianzResponze } from "./burnData/allianzResponse";

const plans = allianzResponze.packages;

const allianzPlansMap = plans.map((plan) => {
  return {
    id: plan.packageId,
    detail: allianzResponze,
    logoPath: "allianz_logo.svg",
    insuranceName: `Allianz - ${plan.packageName}`,
    coverages: plan.coverages,
    payments: plan.payments,
    qualification: 5,
    descriptionValues: [
      { label: "Tipo de cobertura", value: "Todo riesgo" },
      {
        label: (
          <p>
            Valor mensual <br />
            Diferido a 10 cuotas mensuales
          </p>
        ),
        value: `${plan.payments[1].premiumValue}COP`,
        includeInfo: true,
      },
    ],
    totalPrice: plan.coverages[0].insuredValue,
    redirect: AllianzCarsProcessDetailsPlanRouteFunc,
  };
});

export const allianzPlans = allianzPlansMap;

export const bolivarPlans = [
  {
    id: 4,
    logoPath: "bolivar-logo.svg",
    insuranceName: "Seguros Bolivar - Oro",
    qualification: 5,
    descriptionValues: [
      { label: "Tipo de cobertura", value: "Todo riesgo" },
      {
        label: (
          <p>
            Valor mensual <br />
            Diferido a 10 cuotas mensuales
          </p>
        ),
        value: `800000COP`,
        includeInfo: true,
      },
    ],
    totalPrice: 2000000,
    redirect: CarsProcessDetailsPlanRouteFunc,
  },
  {
    id: 5,
    logoPath: "bolivar-logo.svg",
    insuranceName: "Seguros Bolivar - Oro",
    qualification: 5,
    descriptionValues: [
      { label: "Tipo de cobertura", value: "Todo riesgo" },
      {
        label: (
          <p>
            Valor mensual <br />
            Diferido a 10 cuotas mensuales
          </p>
        ),
        value: `800000COP`,
        includeInfo: true,
      },
    ],
    totalPrice: 2000000,
    redirect: CarsProcessDetailsPlanRouteFunc,
  },
  {
    id: 6,
    logoPath: "bolivar-logo.svg",
    insuranceName: "Seguros Bolivar - Oro",
    qualification: 5,
    descriptionValues: [
      { label: "Tipo de cobertura", value: "Todo riesgo" },
      {
        label: (
          <p>
            Valor mensual <br />
            Diferido a 10 cuotas mensuales
          </p>
        ),
        value: `800000COP`,
        includeInfo: true,
      },
    ],
    totalPrice: 2000000,
    redirect: CarsProcessDetailsPlanRouteFunc,
  },
];
