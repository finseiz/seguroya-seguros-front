import React from "react";
import BaseSection from "app/components/UI/baseSection";
import BaseModal from "app/components/UI/baseModal";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

/**
 * 
 * @param {*} redirectRoute 
 * @param {*} messageIndex 
 * @param {*} email 
 * @param {*} onSubmit *Important* Must return a boolean. If "true", the user will be redirected
 * @returns 
 */
export const ConfirmationCode = ({ redirectRoute, messageIndex, email = "", onSubmit }) => {

  const [openModal, setOpenModal] = useState(false);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const message = [
    "Digita el código que se ha enviado por mensaje de texto a tu celular",
    "Digita el código que se ha enviado a tu correo electrónico"
  ];
  const formik = useFormik({
    initialValues: { otp: "" },
    validationSchema: Yup.object().shape({
      otp: Yup.number().required("Este campo es requrido")
    }),
    onSubmit: (values) => setOpenModal(true)
  })

  return (
    <BaseSection
      title="Verifica tu identidad"
    >
      <div className="text-center process__opt_container center-flex">

        <form onSubmit={formik.handleSubmit}>

          <div>
            <p className="m-3">
              {message[messageIndex]}
            </p>
            {/* <div className="mb-2">
              <a href="#">Click aquí para re-enviar el mensaje</a>.
            </div> */}

            <input
              type="number"
              className="form-control process__opt_input mb-3 process-input-otp process__otp-width"
              {...formik.getFieldProps("otp")}
            />
            {
              formik.errors["otp"] && formik.touched["otp"] &&
              (
                <p className="invalid-msj"> {formik.errors["otp"]} </p>
              )
            }

            <button
              type="submit"
              className="btn btn-primary primary-button process__process-button process__otp-width mx-3"
            >
              Continuar
            </button>
          </div>

        </form>

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
                <a href="#"> {email} </a>
              </div>
            </div>

            {
              loading ?
                <div className="spinner-border" role="status">
                  <span className="visually-hidden"></span>
                </div> 
                :
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
                    onClick={async () => {
                      if (onSubmit) {
                        setLoading(true);
                        const redirect = await onSubmit(formik.values["otp"])
                        redirect && history.push(redirectRoute);
                        setLoading(false);
                      }
                    }}
                  >
                    <b>Continuar</b>
                  </button>

                </div>

            }


          </div>
        )}
      />

    </BaseSection>
  );
}
