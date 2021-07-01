import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import BaseSection from "app/components/UI/baseSection";

const initialValues = {
  cardiovascular_disease: "",
  diagnosed_VIH: "",
};

const schema = Yup.object().shape({
  cardiovascular_disease: Yup.string().required("Campo requerido"),
  diagnosed_VIH: Yup.string().required("Campo requerido"),
});

function InsurabilityInfo({ handleSubmit }) {
  const formik = useFormik({
    initialValues,
    //validationSchema: schema,
    onSubmit: (values, actions) => {
      console.log(values);
      setTimeout(() => {
        handleSubmit(values);
        actions.setSubmitting(false);
      }, 1000);
    },
  });

  const actionsButton = [
    {
      text: "Continuar",
      className: "btn btn-primary primary-button",
      type: "submit",
    },
  ];

  return (
    <form onSubmit={formik.handleSubmit}>
      <BaseSection
        title="Información de asegurabilidad"
        actions={actionsButton}
        loading={formik.isSubmitting}
      >
        <div className="form-group">
          <label>
            ¿Padece o ha padecido enfermedades de tipo cardiovascular o
            enfermedades como hipertensión arteria, diabetes, infarto o
            enfermedades de las arterias coronarias, cáncer, leucemia, linfomas,
            trombosis, derrames o eventos cerebrovasculares, anemias, esclerosis
            múltiple, cirrosis hepática, insuficiencia renal, tumores malignos,
            lupus?
          </label>
          <div className="form-row">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="cardiovascular_disease"
                id="radios1"
                value="yes"
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="radios1">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="cardiovascular_disease"
                id="radios2"
                value="no"
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="radios2">
                No
              </label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>
            ¿Le han detectado la presencia de anticuerpos contra el virus VIH
            productor del SIDA, ha sido VIH positivo, prueba de Elisa positiva o
            le han diagnostica SIDA?
          </label>
          <div className="form-row">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="diagnosed_VIH"
                id="radios1"
                value="yes"
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="radios1">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="diagnosed_VIH"
                id="radios2"
                value="no"
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="radios2">
                No
              </label>
            </div>
          </div>
        </div>
      </BaseSection>
    </form>
  );
}

export default InsurabilityInfo;
