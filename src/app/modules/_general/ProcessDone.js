import React, { useEffect } from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import BaseSection from "app/components/UI/baseSection";
import { toAbsoluteUrl } from "theme/helpers/AssetsHelpers";
import { HomeRoute } from "app/routes/routes";
import { Payment } from "./payments/component";

export const ProcessDone = ({ bottomMessage, payment, onInit }) => {

  useEffect(() => {
    onInit && onInit()
  }, [])

  return (
    <BaseSection>

      <div className="center-flex text-center" >
        <div>

          <b> <p>Información diligenciada con éxito</p> </b>

          <div className="m-4">
            <img
              src={toAbsoluteUrl("/media/icons/big-check.svg")}
              alt="car-icon"
            />
          </div>

          <b> <p> {bottomMessage} </p> </b>

          {
            payment ?
            (
              <Payment payment={payment}/>
            ) :
            (
              <Link to={HomeRoute} >
                <button
                  type="button"
                  className="btn btn-primary primary-button w-75 mt-3"
                >
                  <b> Volver al inicio </b>
                </button>
              </Link>
            )
          }

        </div>
      </div>

    </BaseSection>
  );
}


ProcessDone.propTypes = {
  bottomMessage: PropTypes.string.isRequired, 
  payment: PropTypes.shape({
    name: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired, 
    amount: PropTypes.number.isRequired,
  }), 
  onInit: PropTypes.func
}
