import React from "react";
import CardGridContainer from "app/components/UI/CardGridContainer";
import { toAbsoluteUrl } from "theme/helpers";
import { InsuranceLogo } from "app/const";
import { ActionButton } from "app/components/UI/auxComponents";

function TopInsurance({ onSelect, insuranceList }) {
  return (
    <CardGridContainer data={insuranceList} limit={3}>
      {(plan) => (
        <div className="card custom-card">
          <div className="card-body">
            <div className="image-wrapper text-center">
              <img
                src={toAbsoluteUrl(
                  `/media/logos/${InsuranceLogo[plan.insurance_name]}`
                )}
                alt="seguros-logo"
              />
            </div>
            <h4>{plan.title}</h4>
            <div>
              <span>Calificación de usuario</span>
              {plan.rate}
            </div>
            <div>
              <span>Prima</span>
              {plan.premium}
            </div>
            <div>
              <span>Retorno de prima</span>
              {plan.return_value}
            </div>
          </div>
          <div className="card-body">
            <div>
              <span>Valor a pagar anual</span>
              {plan.anual_price}
            </div>
            <span>{plan.message}</span>
            <ActionButton
              className="btn btn-primary primary-button"
              content="Comprar"
              onClick={onSelect}
              value={plan}
            />
          </div>
        </div>
      )}
    </CardGridContainer>
  );
}

export default TopInsurance;
