import React from "react";
import BaseSection from "app/components/UI/baseSection";
import BaseModal from "app/components/UI/baseModal";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const ConfirmationCode = ({ redirectRoute, messageIndex }) => {

  const [openModal, setOpenModal] = useState(false);
  const history = useHistory();
  const message = [
    "Digita el código que se ha enviado por mensaje de texto a tu celular",
    "Digita el código que se ha enviado a tu correo electrónico"
  ]

  return (
    <BaseSection
      title="Verifica tu identidad"
    >
      <div className="text-center process__opt_container center-flex">

        <div>
          <p className="m-1">
            { message[messageIndex] }
          </p>
          <div className="mb-2">
            <a href="#">Click aquí para re-enviar el mensaje</a>.
          </div>

          <input
            type="text"
            name="confirmation_code"
            className="form-control process__opt_input mb-3 process-input-otp process__otp-width"
          />

          <button
            type="submit"
            className="btn btn-primary primary-button process__process-button process__otp-width mx-3"
            onClick={() => setOpenModal(true)}
          >
            Continuar
          </button>
        </div>

      </div>

      <BaseModal
        open={openModal}
        centered
        handleClose={() => setOpenModal(false)}
        children={(
          <div className="text-center process__otp-title-modal">

            <b>Recuerda</b>

            <div className="my-5">
              <p className="m-1">
                Tu poliza será enviada a tu correo
              </p>
              <div>
                <a href="#"> mandreaotero@gmail.com </a>
              </div>

            </div>

            <div className="row">
              <button
                type="submit"
                className="col btn btn-primary primary-button mr-2 w-100 bg-dark-blue"
                onClick={() => setOpenModal(false)}
              >
                <b>Volver</b>
              </button>
              <button
                type="submit"
                className="col btn btn-primary primary-button ml-2 w-100"
                onClick={() => {
                  history.push(redirectRoute);
                }}
              >
                <b>Continuar</b>
              </button>

            </div>


          </div>
        )}
      />

    </BaseSection>
  );
}
