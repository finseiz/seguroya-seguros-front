import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import BaseSection from "app/components/UI/baseSection";

const initialValues = {
  publicly_exposed: "",
  publicly_exposed_vinculation: "",
  manages_public_resources: "",
  question4: "",
  name_tax_obligation: "",
  us_tax_resident_or_player: "",
  tax_obligations_outside_colombia: "",
};

function SarlaftForm({ handleSubmit }) {
  const lifeSchema = Yup.object().shape({});

  const formik = useFormik({
    initialValues,
    //validationSchema: lifeSchema,
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

  console.log("woefnwoenf");
  return (
    <form onSubmit={formik.handleSubmit}>
      <BaseSection
        title="Formulario SARLAFT - Sistema de Administración del Riesgo de Lavado de Activos y de la Financiación del Terrorismo"
        actions={actionsButton}
        loading={formik.isSubmitting}
      >
        <h5>0. Datos de vinculación</h5>
        <div className="form-group">
          <label htmlFor="address" className="form-label">
            Fecha Diligenciamiento
          </label>
          <input
            type="date"
            name="address"
            className={`form-control ${
              formik.touched.address
                ? formik.errors.address
                  ? "is-invalid"
                  : "is-valid"
                : ""
            }`}
            {...formik.getFieldProps("address")}
          />
          <div className="invalid-feedback">{formik.errors.address}</div>
        </div>

        <div className="form-group">
          <label htmlFor="address" className="form-label">
            Lugar de expedición
          </label>
          <input
            type="date"
            name="address"
            className={`form-control ${
              formik.touched.address
                ? formik.errors.address
                  ? "is-invalid"
                  : "is-valid"
                : ""
            }`}
            {...formik.getFieldProps("address")}
          />
          <div className="invalid-feedback">{formik.errors.address}</div>
        </div>

        <div className="form-group">
          <label htmlFor="address" className="form-label">
            Sucursal
          </label>
          <input
            type="text"
            name="address"
            className={`form-control ${
              formik.touched.address
                ? formik.errors.address
                  ? "is-invalid"
                  : "is-valid"
                : ""
            }`}
            {...formik.getFieldProps("address")}
          />
          <div className="invalid-feedback">{formik.errors.address}</div>
        </div>

        <div className="form-group">
          <label htmlFor="address" className="form-label">
            Tipo de Solicitud
          </label>
          <input
            type="text"
            name="address"
            className={`form-control ${
              formik.touched.address
                ? formik.errors.address
                  ? "is-invalid"
                  : "is-valid"
                : ""
            }`}
            {...formik.getFieldProps("address")}
          />
          <div className="invalid-feedback">{formik.errors.address}</div>
        </div>

        <label className="form-label" htmlFor="gender">
          Clase de vinculación
        </label>
        <div className="form-row">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="radios1"
              value="M"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="radios1">
              Tomador
            </label>
          </div>
          <div className="form-check ml-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="radios2"
              value="F"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="radios2">
              Asegurado
            </label>
          </div>

          <div className="form-check ml-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="radios2"
              value="F"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="radios2">
              Beneficiario
            </label>
          </div>
          <div className="form-check ml-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="radios2"
              value="F"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="radios2">
              Afianzado
            </label>
          </div>
          <div className="form-check ml-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="radios2"
              value="F"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="radios2">
              Otra
            </label>
          </div>
        </div>

        <label className="form-label" htmlFor="gender">
          Indique los vínculos existentes entre tomador-asegurado
        </label>
        <div className="form-row">
          <label className="form-label" htmlFor="gender">
            Tomador - Asegurado
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="radios1"
              value="M"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="radios1">
              Familiar
            </label>
          </div>
          <div className="form-check ml-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="radios2"
              value="F"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="radios2">
              Comercial
            </label>
          </div>

          <div className="form-check ml-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="radios2"
              value="F"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="radios2">
              Laboral
            </label>
          </div>
          <div className="form-check ml-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="radios2"
              value="F"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="radios2">
              Otra
            </label>
          </div>
        </div>

        <div className="form-row">
          <label className="form-label" htmlFor="gender">
            Beneficiario - Tomador
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="radios1"
              value="M"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="radios1">
              Familiar
            </label>
          </div>
          <div className="form-check ml-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="radios2"
              value="F"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="radios2">
              Comercial
            </label>
          </div>

          <div className="form-check ml-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="radios2"
              value="F"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="radios2">
              Laboral
            </label>
          </div>
          <div className="form-check ml-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="radios2"
              value="F"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="radios2">
              Otra
            </label>
          </div>
        </div>

        <div className="form-row">
          <label className="form-label" htmlFor="gender">
            Asegurado - Beneficiario
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="radios1"
              value="M"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="radios1">
              Familiar
            </label>
          </div>
          <div className="form-check ml-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="radios2"
              value="F"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="radios2">
              Comercial
            </label>
          </div>

          <div className="form-check ml-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="radios2"
              value="F"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="radios2">
              Laboral
            </label>
          </div>
          <div className="form-check ml-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="radios2"
              value="F"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="radios2">
              Otra
            </label>
          </div>
        </div>

        <div className="card-body">
          <div className="form-row">
            <div className="form-group col-6">
              <label htmlFor="address" className="form-label">
                Dirección
              </label>
              <input
                type="text"
                name="address"
                className={`form-control ${
                  formik.touched.address
                    ? formik.errors.address
                      ? "is-invalid"
                      : "is-valid"
                    : ""
                }`}
                {...formik.getFieldProps("address")}
              />
              <div className="invalid-feedback">{formik.errors.address}</div>
            </div>
            <div className="form-group col-3">
              <label htmlFor="document_type" className="form-label">
                Tipo de documento
              </label>
              <select
                type="text"
                id="document_type"
                name="document_type"
                className={`form-control ${
                  formik.touched.document_type
                    ? formik.errors.document_type
                      ? "is-invalid"
                      : "is-valid"
                    : ""
                }`}
                {...formik.getFieldProps("document_type")}
              >
                <option value="">Seleccionar</option>
                <option value="Cédula de Ciudadanía">
                  Cédula de Ciudadanía
                </option>
              </select>
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
              <label htmlFor="fullname" className="form-label">
                Nombre completo
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
            <div className="form-group col-6">
              <label htmlFor="email" className="form-label">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                className={`form-control ${
                  formik.touched.email
                    ? formik.errors.email
                      ? "is-invalid"
                      : "is-valid"
                    : ""
                }`}
                {...formik.getFieldProps("email")}
              />
              <div className="invalid-feedback">{formik.errors.email}</div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-3">
              <label htmlFor="issue_date" className="form-label">
                Fecha de expedición
              </label>
              <input
                type="date"
                name="issue_date"
                className={`form-control ${
                  formik.touched.issue_date
                    ? formik.errors.issue_date
                      ? "is-invalid"
                      : "is-valid"
                    : ""
                }`}
                {...formik.getFieldProps("issue_date")}
              />
              <div className="invalid-feedback">{formik.errors.issue_date}</div>
            </div>
            <div className="form-group col-3">
              <label htmlFor="birth_date" className="form-label">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
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
            <div className="form-group col-6">
              <label htmlFor="ocupation" className="form-label">
                Lugar de nacimiento
              </label>
              <input
                type="text"
                name="ocupation"
                className={`form-control ${
                  formik.touched.ocupation
                    ? formik.errors.ocupation
                      ? "is-invalid"
                      : "is-valid"
                    : ""
                }`}
                {...formik.getFieldProps("ocupation")}
              />
              <div className="invalid-feedback">{formik.errors.ocupation}</div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col">
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
          </div>
        </div>

        <div className="form-group col-6">
          <label htmlFor="cellphone" className="form-label">
            Acitivdad principal
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

        <div className="form-group col-6">
          <label htmlFor="cellphone" className="form-label">
            Sector
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

        <div className="form-group col-6">
          <label htmlFor="cellphone" className="form-label">
            CIU (código)
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

        <div className="form-group col-6">
          <label htmlFor="cellphone" className="form-label">
            Tipo de actividad
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

        <div className="form-group col-6">
          <label htmlFor="cellphone" className="form-label">
            Ocupación
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

        <div className="form-group col-6">
          <label htmlFor="cellphone" className="form-label">
            Cargo
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

        <div className="form-group col-6">
          <label htmlFor="cellphone" className="form-label">
            Empresa donde trabaja
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

        <div className="form-group col-6">
          <label htmlFor="cellphone" className="form-label">
            Dirección (oficina)
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

        <div className="form-group col-6">
          <label htmlFor="cellphone" className="form-label">
            ¿Qué tipo de producto y/o servicio comercializa?
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
      </BaseSection>
    </form>
  );
}

export default SarlaftForm;
