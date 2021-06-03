export function Step1({ formik, cities }) {
  return (
    <div className="card-body">
      <div className="form-row">
        <div className="form-group col-6">
          <label htmlFor="license_plate" className="form-label">
            Ingresa tu placa
          </label>
          <input
            type="text"
            name="license_plate"
            className={`form-control ${
              formik.touched.license_plate
                ? formik.errors.license_plate
                  ? "is-invalid"
                  : "is-valid"
                : ""
            }`}
            {...formik.getFieldProps("license_plate")}
          />
          <div className="invalid-feedback">{formik.errors.license_plate}</div>
        </div>
        <div className="form-group col-6">
          <label htmlFor="city" className="form-label">
            Ciudad de circulación
          </label>
          <select
            type="text"
            id="city"
            name="city"
            className={`form-control ${
              formik.touched.city
                ? formik.errors.city
                  ? "is-invalid"
                  : "is-valid"
                : ""
            }`}
            {...formik.getFieldProps("city")}
          >
            <option value="">Seleccionar</option>
            {cities.map((value, index) => (
              <option key={index} value={value.codigo}>
                {value.valor}
              </option>
            ))}
          </select>
          <div className="invalid-feedback">{formik.errors.city}</div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-6">
          <label htmlFor="name" className="form-label">
            Nombres
          </label>
          <input
            type="text"
            name="name"
            className={`form-control ${
              formik.touched.name
                ? formik.errors.name
                  ? "is-invalid"
                  : "is-valid"
                : ""
            }`}
            {...formik.getFieldProps("name")}
          />
          <div className="invalid-feedback">{formik.errors.name}</div>
        </div>
        <div className="form-group col-6">
          <label htmlFor="lastname" className="form-label">
            Apellidos
          </label>
          <input
            type="text"
            name="lastname"
            className={`form-control ${
              formik.touched.lastname
                ? formik.errors.lastname
                  ? "is-invalid"
                  : "is-valid"
                : ""
            }`}
            {...formik.getFieldProps("lastname")}
          />
          <div className="invalid-feedback">{formik.errors.lastname}</div>
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
    </div>
  );
}
