import React from "react";
import BaseSection from "app/components/UI/baseSection";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

/**
 * @param {*} redirectRoute
 * @param {*} onSubmit
 * @returns
 */
export const Appointment = ({ redirectRoute, onSubmit }) => {
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
      submitOtp();
    },
  });

  const submitOtp = async () => {
    if (onSubmit) {
      setLoading(true);
      const redirect = await onSubmit(formik.values["otp"]);
      if (redirect) {
        history.push(redirectRoute);
      } else {
        setError(true);
      }
      setLoading(false);
    }
  };

  return (
    <BaseSection title="Agenda tu cita de inspección">
      <div className="text-center process__opt_container center-flex">
        <form onSubmit={formik.handleSubmit}>
          <div>
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
    </BaseSection>
  );
};
