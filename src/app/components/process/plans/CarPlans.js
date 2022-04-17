import React from "react";
import PropTypes from "prop-types";
import { toAbsoluteUrl } from "theme/helpers/AssetsHelpers";
import { useHistory } from "react-router-dom";
import { parseCurrency } from "app/helpers/parse-currency";
import Qualification from "../Qualification";
import InfoIcon from "@material-ui/icons/Info";

const CarPlan = (props) => {
  const {
    logoPath,
    insuranceName,
    id,
    qualification,
    descriptionValues,
    totalPrice,
    recommended,
    redirect,
  } = props;

  const history = useHistory();

  return (
    <div style={{ position: "relative" }}>
      {recommended && (
        <>
          <div className="recommended-batch">
            <span className="batch-text">Recomendado</span>
          </div>
        </>
      )}
      <div className="container custom-card plans_plan-container">
        {/** Insurance Logo */}
        <div className="plans_insurance-logo-space">
          <img
            className="plans_insurance-logo"
            src={toAbsoluteUrl(`/media/logos/${logoPath}`)}
            style={{ maxWidth: 220 }}
            alt="plan logo"
          />
        </div>

        {/** Insurance Description */}
        <div className="plans__insurance-desc">
          <p className="plans_plan-name">{insuranceName}</p>

          {qualification && (
            <div>
              <p className="plans_plan-label">Calificación de usuarios</p>
              <div className="row">
                <Qualification qualification={qualification} />
                <p className="plans_plan-qualification mx-3 my-auto">
                  {" "}
                  {qualification}{" "}
                </p>
              </div>
            </div>
          )}

          {descriptionValues &&
            descriptionValues.map((value) => (
              <div>
                <p className="plans_plan-label"> {value.label} </p>
                <p className="plans_plan-value"> {value.value} </p>
              </div>
            ))}
        </div>

        <hr />

        <div className="plans__insurance-desc">
          <p className="plans_plan-label"> Valor prima </p>
          <p className="plans_plan-price"> {parseCurrency(totalPrice)} </p>
        </div>

        {/**Insurance Button */}
        <div className="text-center">
          <button
            type="button"
            className="btn primary_btn_expand w-90"
            onClick={() => history.push(redirect(id))}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

CarPlan.propTypes = {
  logoPath: PropTypes.any,
  insuranceName: PropTypes.any,
  index: PropTypes.any,
  qualification: PropTypes.any,
  descriptionValues: PropTypes.array,
  anualPrice: PropTypes.any,
  share: PropTypes.any,
  shareNumber: PropTypes.any,
};

export default CarPlan;
