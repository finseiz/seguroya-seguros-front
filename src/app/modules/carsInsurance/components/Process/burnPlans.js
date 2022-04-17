import { CarsProcessDetailsPlanRouteFunc } from "app/routes/childs/Cars/routes";

export const allianzPlans = [
  {
    id: 1,
    logoPath: "allianz_logo.svg",
    insuranceName: "Allianz - Auto Oro",
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
    id: 2,
    recommended: true,
    logoPath: "allianz_logo.svg",
    insuranceName: "Allianz - Auto Oro",
    qualification: 4.5,
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
    id: 3,
    logoPath: "allianz_logo.svg",
    insuranceName: "Allianz - Auto Oro",
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
