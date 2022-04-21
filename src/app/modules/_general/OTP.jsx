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
 * @param {*} showModal - In case of true, the modal will request the user email confirmation,
 *                      otherwise, the function [onSubmit] will be excecuted.
 * @returns
 */
export const ConfirmationCode = ({
  redirectRoute,
  messageIndex,
  email = "",
  onSubmit,
  showModal = true,
}) => {
  console.log("message index", messageIndex);

  const [openModal, setOpenModal] = useState(false);
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const message = [
    "Digita el código que se ha enviado por mensaje de texto a tu celular",
    "Digita el código que se ha enviado a tu correo electrónico",
  ];

  const formik = useFormik({
    initialValues: { otp: "" },
    validationSchema: Yup.object().shape({
      otp: Yup.number().required("Este campo es requrido"),
    }),
    onSubmit: (values) => {
      if (showModal) setOpenModal(true);
      else submitOtp();
    },
  });

  const submitOtp = async () => {
    if (onSubmit) {
      setLoading(true);
      // const redirect = await onSubmit(formik.values["otp"]);

      // *** set redirect.
      if (true) {
        history.push(redirectRoute);
      } else {
        setOpenModal(false);
        setError(true);
      }
      setLoading(false);
    }
  };

  return (
    <BaseSection title="Verifica tu identidad">
      <div className="text-center process__opt_container center-flex">
        <form onSubmit={formik.handleSubmit}>
          {error && (
            <div className="alert alert-danger mt-4" role="alert">
              Error en el código. Por favor verifica la información
            </div>
          )}

          <div>
            <p className="m-3">{message[messageIndex]}</p>
            {/* <div className="mb-2">
              <a href="#">Click aquí para re-enviar el mensaje</a>.
            </div> */}

            <input
              type="number"
              className="form-control process__opt_input mb-3 process-input-otp process__otp-width"
              {...formik.getFieldProps("otp")}
            />
            {formik.errors["otp"] && formik.touched["otp"] && (
              <p className="invalid-msj"> {formik.errors["otp"]} </p>
            )}

            {loading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden"></span>
              </div>
            ) : (
              <button
                type="submit"
                className="btn btn-primary primary-button process__process-button process__otp-width mx-3"
              >
                Continuar
              </button>
            )}
          </div>
        </form>
      </div>

      <BaseModal
        open={openModal}
        centered
        handleClose={() => setOpenModal(false)}
        children={
          <div className="text-center process__otp-title-modal">
            <b>Recuerda</b>

            <div className="my-5">
              <p className="m-1">Tu poliza será enviada a tu correo</p>
              <div>
                <a href="#"> {email} </a>
              </div>
            </div>

            {loading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden"></span>
              </div>
            ) : (
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
                  onClick={submitOtp}
                >
                  <b>Continuar</b>
                </button>
              </div>
            )}
          </div>
        }
      />
    </BaseSection>
  );
};
