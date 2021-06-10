import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import BaseSection from "app/components/UI/baseSection";

const initialValues = {
  completion_date: "",
  issue_date: "",
  city: "",
  branch_office: "",
  application_type: "",
  vinculation_class: "",
  tomador_asegurado_vinculation: "",
  tomador_beneficiario_vinculation: "",
  asegurado_beneficiario_vinculation: "",
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

  return (
    <form onSubmit={formik.handleSubmit}>
      <BaseSection
        title="Formulario SARLAFT - Sistema de Administración del Riesgo de Lavado de Activos y de la Financiación del Terrorismo"
        description="Razón por la cual hay que llenar este formulario en unas muy breves palabras. Ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.

        Tomará aproximadamente: 5 minutos."
        actions={actionsButton}
        loading={formik.isSubmitting}
      >
        {/* begin :: vinculation data */}
        <h4>0. Datos de vinculación</h4>
        <div className="form-row">
          <div className="form-group col">
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

          <div className="form-group col">
            <label htmlFor="address" className="form-label">
              Lugar de expedición
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

          <div className="form-group col">
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

          <div className="form-group col">
            <label htmlFor="address" className="form-label">
              Tipo de Solicitud
            </label>
            <select
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
            >
              <option value="">Seleccionar</option>
            </select>
            <div className="invalid-feedback">{formik.errors.address}</div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-3">
            <h5>Clase de vinculación</h5>
          </div>
          <div className="form-check col">
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
          <div className="form-check col">
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

          <div className="form-check col">
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
          <div className="form-check col">
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
          <div className="form-check col">
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
        <h5>Indique los vínculos existentes entre tomador-asegurado</h5>
        <div className="form-row">
          <div className="col">
            <label className="form-label" htmlFor="gender">
              Tomador - Asegurado
            </label>
          </div>
          <div className="form-check col">
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
          <div className="form-check col">
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

          <div className="form-check col">
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
          <div className="form-check col">
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
          <div className="col">
            <label className="form-label" htmlFor="gender">
              Tomador - Beneficiario
            </label>
          </div>
          <div className="form-check col">
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
          <div className="form-check col">
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

          <div className="form-check col">
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
          <div className="form-check col">
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
          <div className="col">
            <label className="form-label" htmlFor="gender">
              Asegurado - Beneficiario
            </label>
          </div>
          <div className="form-check col">
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
          <div className="form-check col">
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

          <div className="form-check col">
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
          <div className="form-check col">
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
        {/* end :: vinculation data */}

        {/* begin :: basic data */}
        <h4>1. Información básica</h4>
        <div className="form-row">
          <div className="form-group col-3">
            <label htmlFor="address" className="form-label">
              Primer apellido
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
            <label htmlFor="address" className="form-label">
              Segundo apellido
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
          <div className="form-group col-6">
            <label htmlFor="address" className="form-label">
              Nombres
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
        </div>

        <div className="form-row">
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
              <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
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
            <label htmlFor="ocupation" className="form-label">
              Lugar de expedición
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
          <div className="form-group col">
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
          <div className="form-group col">
            <label htmlFor="ocupation" className="form-label">
              Nacionalidad 1
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
          <div className="form-group col">
            <label htmlFor="ocupation" className="form-label">
              Nacionalidad 2
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
          <div className="form-group col">
            <label htmlFor="cellphone" className="form-label">
              Dirección (Residencia)
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
          <div className="form-group col">
            <label htmlFor="address" className="form-label">
              Departamento
            </label>
            <select
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
            >
              <option value="">Seleccionar</option>
            </select>
            <div className="invalid-feedback">{formik.errors.address}</div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="email" className="form-label">
              Ciudad
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
          <div className="form-group col">
            <label htmlFor="cellphone" className="form-label">
              Teléfono
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
          <div className="form-group col">
            <label htmlFor="address" className="form-label">
              Actividad principal
            </label>
            <select
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
            >
              <option value="">Seleccionar</option>
            </select>
            <div className="invalid-feedback">{formik.errors.address}</div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col">
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
          <div className="form-group col">
            <label htmlFor="cellphone" className="form-label">
              CIIU (código)
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
          <div className="form-group col">
            <label htmlFor="address" className="form-label">
              Tipo de actividad
            </label>
            <select
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
            >
              <option value="">Seleccionar</option>
            </select>
            <div className="invalid-feedback">{formik.errors.address}</div>
          </div>
          <div className="form-group col">
            <label htmlFor="cellphone" className="form-label">
              ¿Cuál?
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

        <div className="form-row">
          <div className="form-group col">
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
          <div className="form-group col">
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
          <div className="form-group col">
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
        </div>

        <div className="form-row">
          <div className="form-group col">
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
          <div className="form-group col">
            <label htmlFor="cellphone" className="form-label">
              Ciudad
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
          <div className="form-group col">
            <label htmlFor="address" className="form-label">
              Departamento
            </label>
            <select
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
            >
              <option value="">Seleccionar</option>
            </select>
            <div className="invalid-feedback">{formik.errors.address}</div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="cellphone" className="form-label">
              Teléfono (oficina)
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
          <div className="form-group col">
            <label htmlFor="cellphone" className="form-label">
              Actividad secundaria
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
          <div className="form-group col">
            <label htmlFor="cellphone" className="form-label">
              CIIU (código)
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

        <div className="form-group">
          <label htmlFor="cellphone" className="form-label">
            ¿Qué tipo de producto y/o servicio comercializa? (Independiente o
            Comerciantes)
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

        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="cellphone" className="form-label">
              Ingresos mensuales (Pesos)
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
          <div className="form-group col">
            <label htmlFor="cellphone" className="form-label">
              Egresos mensuales (Pesos)
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

        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="cellphone" className="form-label">
              Activos (Pesos)
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
          <div className="form-group col">
            <label htmlFor="cellphone" className="form-label">
              Pasivos (Pesos)
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

        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="cellphone" className="form-label">
              Patrimonio (Activos - Pasivos, Pesos)
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
          <div className="form-group col">
            <label htmlFor="cellphone" className="form-label">
              Otros Ingresos (Pesos)
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

        <div className="form-group">
          <label htmlFor="cellphone" className="form-label">
            Concepto otros ingresos mensuales
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

        <div className="form-row">
          <div className="form-group col">
            <label>¿Es usted una persona públicamente expuesta?</label>
            <div className="form-row">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="publicly_exposed"
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
                  name="publicly_exposed"
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
          <div className="form-group col">
            <label>
              ¿Existe algún vínculo entre usted y una persona considerada
              públicamente expuesta?
            </label>
            <div className="form-row">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="publicly_exposed"
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
                  name="publicly_exposed"
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

        <div className="form-group">
          <label>
            ¿Por su cargo o actividad, administra recursos públicos?
          </label>
          <div className="form-row">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="publicly_exposed"
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
                name="publicly_exposed"
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

        <div className="form-row">
          <div className="form-group col">
            <label>
              ¿Es usted SUJETO DE OBLIGACIONES TRIBUTARIAS EN OTRO PAÍS O GRUPO
              DE PAISES?
            </label>
            <div className="form-row">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="publicly_exposed"
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
                  name="publicly_exposed"
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
          <div className="form-group col">
            <label htmlFor="cellphone" className="form-label">
              Concepto otros ingresos mensuales
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
      </BaseSection>
    </form>
  );
}

export default SarlaftForm;
