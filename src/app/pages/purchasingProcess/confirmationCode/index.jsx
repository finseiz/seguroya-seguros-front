import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import BaseSection from "app/components/UI/baseSection";

const initialValues = {
  question1: "",
};

function ConfirmationCode({ handleSubmit }) {
  const formik = useFormik({
    initialValues,
    onSubmit: (values, actions) => {
      console.log(values);
      setTimeout(() => {
        handleSubmit(values);
        actions.setSubmitting(false);
      }, 1000);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <BaseSection title="Verifica tu identidad">
        <div className="text-center">
          <span>
            Digita el código que se ha enviado por mensaje de texto a tu celular{" "}
            <a href="#">Click aquí para re-enviar el mensaje</a>.
          </span>
          <input type="text" />
          <button type="submit" className="btn btn-primary primary-button">
            Continuar
          </button>
        </div>
      </BaseSection>
    </form>
  );
}

export default ConfirmationCode;
