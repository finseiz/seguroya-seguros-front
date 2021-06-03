import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import BaseSection from "app/components/UI/baseSection";

const initialValues = {
  terms_and_conditions: "",
  processing_of_personal_data: "",
  accept_content: "",
};

function Authorization({ handleSubmit }) {
  const lifeSchema = Yup.object().shape({
    terms_and_conditions: Yup.string().required("Campo requerido"),
    processing_of_personal_data: Yup.string().required("Campo requerido"),
    accept_content: Yup.string().required("Campo requerido"),
  });

  const formik = useFormik({
    initialValues,
    //validationSchema: lifeSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      setTimeout(async () => {
        await handleSubmit(values);
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
        title="Autorizaciones"
        actions={actionsButton}
        loading={formik.isSubmitting}
      >
        <div className="card">
          <div className="card-body">
            <div className="card-title">Términos y condiciones</div>
            <div className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>¿Aceptas términos y condiciones?</label>
          <div className="form-row">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="terms_and_conditions"
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
                name="terms_and_conditions"
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

        <div className="card">
          <div className="card-body">
            <div className="card-title">Términos y condiciones</div>
            <div className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>¿Autorización tratamiento de datos personales?</label>
          <div className="form-row">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="processing_of_personal_data"
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
                name="processing_of_personal_data"
                id="radios2"
                value="no"
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="radios2">
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>¿Acepto integralmente el contenido?</label>
            <div className="form-row">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="accept_content"
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
                  name="accept_content"
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
        </div>
      </BaseSection>
    </form>
  );
}

export default Authorization;
