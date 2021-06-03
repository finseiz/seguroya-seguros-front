export function Step1({ formik }) {
  return (
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
            <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
          </select>
          <div className="invalid-feedback">{formik.errors.document_type}</div>
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
          <div className="invalid-feedback">{formik.errors.identification}</div>
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
          <label htmlFor="discount_code" className="form-label">
            Tengo un código de descuento (Opcional)
          </label>
          <input
            type="text"
            name="discount_code"
            className={`form-control ${
              formik.touched.discount_code
                ? formik.errors.discount_code
                  ? "is-invalid"
                  : "is-valid"
                : ""
            }`}
            {...formik.getFieldProps("discount_code")}
          />
          <div className="invalid-feedback">{formik.errors.discount_code}</div>
        </div>
      </div>

      <label className="form-label" htmlFor="gender">
        Género
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
            Masculino
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
            Femenino
          </label>
        </div>
      </div>
    </div>
  );
}
