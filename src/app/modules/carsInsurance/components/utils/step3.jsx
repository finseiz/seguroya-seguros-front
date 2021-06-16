export function Step3({ formik }) {
  return (
    <div className="card-body text-center">
      <p>
        Formulario de perfilamiento del cliente de Seguro de Autos (aplica
        términos y condiciones)
      </p>

      <label htmlFor="current_insurance">
        ¿Qué es lo más importante para ti en la compra del seguro?
      </label>
      <div className="form-row text-center">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="current_insurance"
            id="radios1"
            onChange={formik.handleChange}
          />
          <label className="form-check-label" htmlFor="radios1">
            El precio
          </label>
        </div>
        <div className="form-check ml-3">
          <input
            className="form-check-input"
            type="radio"
            name="current_insurance"
            id="radios2"
            onChange={formik.handleChange}
          />
          <label className="form-check-label" htmlFor="radios2">
            La compañía
          </label>
        </div>
        <div className="form-check ml-3">
          <input
            className="form-check-input"
            type="radio"
            name="current_insurance"
            id="radios3"
            onChange={formik.handleChange}
          />
          <label className="form-check-label" htmlFor="radios3">
            Valores agregados como el conducto elegido
          </label>
        </div>
        <div className="invalid-feedback">
          {formik.errors.current_insurance}
        </div>
      </div>

      <label htmlFor="search_to_project" className="mt-3">
        ¿Qué es lo más importante para ti en la compra del seguro?
      </label>
      <div className="form-row text-center">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="search_to_project"
            id="radios1"
            {...formik.getFieldProps("search_to_project")}
          />
          <label className="form-check-label" htmlFor="radios1">
            Menos que antes
          </label>
        </div>
        <div className="form-check ml-3">
          <input
            className="form-check-input"
            type="radio"
            name="search_to_project"
            id="radios2"
            onChange={formik.handleChange}
          />
          <label className="form-check-label" htmlFor="radios2">
            Igual que antes
          </label>
        </div>
        <div className="form-check ml-3">
          <input
            className="form-check-input"
            type="radio"
            name="search_to_project"
            id="radios3"
            onChange={formik.handleChange}
          />
          <label className="form-check-label" htmlFor="radios3">
            Más que antes
          </label>
        </div>
        <div className="invalid-feedback">
          {formik.errors.search_to_project}
        </div>
      </div>

      <label htmlFor="data_processing_licence" className="mt-3">
        ¿Qué tanto condujiste tu auto en pos pandemia?
      </label>
      <div className="form-row">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="data_processing_licence"
            id="radios1"
            onChange={formik.handleChange}
          />
          <label className="form-check-label" htmlFor="radios1">
            Si
          </label>
        </div>
        <div className="form-check ml-3">
          <input
            className="form-check-input"
            type="radio"
            name="data_processing_licence"
            id="radios3"
            onChange={formik.handleChange}
          />
          <label className="form-check-label" htmlFor="radios3">
            No
          </label>
        </div>
        <div className="invalid-feedback">
          {formik.errors.data_processing_licence}
        </div>
      </div>

      <label htmlFor="data_processing_licence" className="mt-3">
        ¿Autorizo el tratamiento de mis datos personales a Seguro Ya?
      </label>
      <div className="form-row">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="data_processing_licence"
            id="radios1"
            onChange={formik.handleChange}
          />
          <label className="form-check-label" htmlFor="radios1">
            Si
          </label>
        </div>
        <div className="form-check ml-3">
          <input
            className="form-check-input"
            type="radio"
            name="data_processing_licence"
            id="radios3"
            onChange={formik.handleChange}
          />
          <label className="form-check-label" htmlFor="radios3">
            No
          </label>
        </div>
        <div className="invalid-feedback">
          {formik.errors.data_processing_licence}
        </div>
      </div>
    </div>
  );
}
