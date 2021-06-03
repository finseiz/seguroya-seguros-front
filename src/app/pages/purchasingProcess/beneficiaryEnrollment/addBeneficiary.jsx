import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import BaseModal from "app/components/UI/baseModal";

const initialValues = {
  fullname: "",
  kinship: "",
  age: "",
  cellphone: "",
  birth_date: "",
  document_type: "",
  identification: "",
  gender: "",
  participation: "",
};

function AddBeneficiary({ open, handleClose, handleSubmit }) {
  const modal = React.useRef(null);
  const formik = useFormik({
    initialValues,
    onSubmit: (values, actions) => {
      console.log(values);
      setTimeout(() => {
        handleSubmit(values);
        actions.setSubmitting(false);
        handleClose();
      }, 1000);
    },
  });
  return (
    <BaseModal open={open} handleClose={handleClose} size="lg">
      <form onSubmit={formik.handleSubmit}>
        <h4>Beneficiario 1</h4>
        <div className="form-row">
          <div className="form-group col-6">
            <label htmlFor="fullname" className="form-label">
              Nombre Completo
            </label>
            <input
              type="text"
              name="fullname"
              className={`form-control ${
                formik.touched.fullname
                  ? formik.errors.fullname
                    ? "is-invalid"
                    : "is-valid"
                  : ""
              }`}
              {...formik.getFieldProps("fullname")}
            />
            <div className="invalid-feedback">{formik.errors.fullname}</div>
          </div>
          <div className="form-group col-3">
            <label htmlFor="kinship" className="form-label">
              Parentezco
            </label>
            <input
              type="text"
              name="kinship"
              className={`form-control ${
                formik.touched.kinship
                  ? formik.errors.kinship
                    ? "is-invalid"
                    : "is-valid"
                  : ""
              }`}
              {...formik.getFieldProps("kinship")}
            />
            <div className="invalid-feedback">{formik.errors.kinship}</div>
          </div>
          <div className="form-group col-3">
            <label htmlFor="age" className="form-label">
              Edad
            </label>
            <input
              type="text"
              name="age"
              className={`form-control ${
                formik.touched.age
                  ? formik.errors.age
                    ? "is-invalid"
                    : "is-valid"
                  : ""
              }`}
              {...formik.getFieldProps("age")}
            />
            <div className="invalid-feedback">{formik.errors.age}</div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-3">
            <label htmlFor="cellphone" className="form-label">
              Celular
            </label>
            <input
              type="text"
              name="cellphone"
              className={`form-control ${
                formik.touched.cellphone
                  ? formik.errors.cellphone
                    ? "is-invalid"
                    : "is-valid"
                  : ""
              }`}
              {...formik.getFieldProps("cellphone")}
            />
            <div className="invalid-feedback">{formik.errors.cellphone}</div>
          </div>
          <div className="form-group col-3">
            <label htmlFor="birth_date" className="form-label">
              Fecha de Nacimiento
            </label>
            <input
              type="text"
              name="birth_date"
              className={`form-control ${
                formik.touched.birth_date
                  ? formik.errors.birth_date
                    ? "is-invalid"
                    : "is-valid"
                  : ""
              }`}
              {...formik.getFieldProps("birth_date")}
            />
            <div className="invalid-feedback">{formik.errors.birth_date}</div>
          </div>
          <div className="form-group col-3">
            <label htmlFor="document_type" className="form-label">
              Tipo de documento
            </label>
            <input
              type="text"
              name="document_type"
              className={`form-control ${
                formik.touched.document_type
                  ? formik.errors.document_type
                    ? "is-invalid"
                    : "is-valid"
                  : ""
              }`}
              {...formik.getFieldProps("document_type")}
            />
            <div className="invalid-feedback">
              {formik.errors.document_type}
            </div>
          </div>
          <div className="form-group col-3">
            <label htmlFor="identification" className="form-label">
              Número de documento
            </label>
            <input
              type="text"
              name="identification"
              className={`form-control ${
                formik.touched.identification
                  ? formik.errors.identification
                    ? "is-invalid"
                    : "is-valid"
                  : ""
              }`}
              {...formik.getFieldProps("identification")}
            />
            <div className="invalid-feedback">
              {formik.errors.identification}
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-6">
            <label htmlFor="gender" className="form-label">
              Género
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="radios1"
                {...formik.getFieldProps("gender")}
              />
              <label className="form-check-label" htmlFor="radios1">
                Masculino
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="radios2"
                {...formik.getFieldProps("gender")}
              />
              <label className="form-check-label" htmlFor="radios2">
                Femenino
              </label>
            </div>
          </div>
          <div className="form-group col-3">
            <label htmlFor="participation" className="form-label">
              Porcentaje de participación
            </label>
            <input
              type="text"
              name="participation"
              className={`form-control ${
                formik.touched.participation
                  ? formik.errors.participation
                    ? "is-invalid"
                    : "is-valid"
                  : ""
              }`}
              {...formik.getFieldProps("participation")}
            />
            <div className="invalid-feedback">
              {formik.errors.participation}
            </div>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Añadir beneficiario/a
          </button>
        </div>
      </form>
    </BaseModal>
  );
}

export default AddBeneficiary;
