import React from "react";
import EditIcon from "@material-ui/icons/Edit";

export function Step2({ formik }) {
  const [displayFields, setDisplayFields] = React.useState();

  return (
    <div className="card-body">
      <span>Tus datos</span>
      <div className="form-row">
        <div className="form-group col-6">
          <label htmlFor="fullname" className="form-label">
            Nombre
          </label>
          <span>{formik.values.fullname}</span>
          <button title="editar" type="button" className="btn">
            <EditIcon />
          </button>
        </div>
        <div className="form-group col-6">
          <label htmlFor="cellphone" className="form-label">
            Celular
          </label>
          <span>{formik.values.cellphone}</span>
          <button title="editar" type="button" className="btn">
            <EditIcon />
          </button>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-6">
          <label htmlFor="identification" className="form-label">
            Cédula de ciudadanía
          </label>
          <span>{formik.values.identification}</span>
          <button title="editar" type="button" className="btn">
            <EditIcon />
          </button>
        </div>
        <div className="form-group col-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <span>{formik.values.email}</span>
          <button title="editar" type="button" className="btn">
            <EditIcon />
          </button>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-6">
          <label htmlFor="issue_date" className="form-label">
            Fecha de expedición
          </label>
          <span>{formik.values.issue_date}</span>
          <button title="editar" type="button" className="btn">
            <EditIcon />
          </button>
        </div>
        <div className="form-group col-6">
          <label htmlFor="gender" className="form-label">
            Género
          </label>
          <span>{formik.values.gender}</span>
          <button title="editar" type="button" className="btn">
            <EditIcon />
          </button>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-6">
          <label htmlFor="birth_date" className="form-label">
            Fecha de nacimiento
          </label>
          <span>{formik.values.birth_date}</span>
          <button title="editar" type="button" className="btn">
            <EditIcon />
          </button>
        </div>
        <div className="form-group col-6">
          <label htmlFor="ocupation" className="form-label">
            Ocupación
          </label>
          <span>{formik.values.ocupation}</span>
          <button title="editar" type="button" className="btn">
            <EditIcon />
          </button>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-6">
          <label htmlFor="discount_code" className="form-label">
            Código de descuento
          </label>
          <span>{formik.values.ocupation || "No aplica"}</span>
          <button title="editar" type="button" className="btn">
            <EditIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
