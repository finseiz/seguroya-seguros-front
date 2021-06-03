export function Step3({ formik }) {
  return (
    <div className="card-body text-center">
      <p>
        Formulario de perfilamiento del cliente SALUD (aplica términos y
        condiciones)
      </p>

      <label htmlFor="current_insurance">
        Actualmente que con qué servicio de salud cuentas
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
            EPS
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
            EPS-PLAN COMPLEMENTARIO
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
            EPS-PREPAGADA
          </label>
        </div>
        <div className="form-check ml-3">
          <input
            className="form-check-input"
            type="radio"
            name="current_insurance"
            id="radios4"
            onChange={formik.handleChange}
          />
          <label className="form-check-label" htmlFor="radios4">
            EPS-PÓLIZA DE SALUD
          </label>
        </div>
        <div className="invalid-feedback">
          {formik.errors.current_insurance}
        </div>
      </div>

      <label htmlFor="knowledge_of_insurance_coverage" className="mt-3">
        Actualmente que con qué servicio de salud cuentas
      </label>
      <div className="form-row text-center">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="knowledge_of_insurance_coverage"
            id="radios1"
            onChange={formik.handleChange}
          />
          <label className="form-check-label" htmlFor="radios1">
            La atención inmediata
          </label>
        </div>
        <div className="form-check ml-3">
          <input
            className="form-check-input"
            type="radio"
            name="knowledge_of_insurance_coverage"
            id="radios3"
            onChange={formik.handleChange}
          />
          <label className="form-check-label" htmlFor="radios3">
            El precio
          </label>
        </div>
        <div className="form-check ml-3">
          <input
            className="form-check-input"
            type="radio"
            name="knowledge_of_insurance_coverage"
            id="radios3"
            onChange={formik.handleChange}
          />
          <label className="form-check-label" htmlFor="radios3">
            La rapidez de las citas con especialistas
          </label>
        </div>
        <div className="form-check ml-3">
          <input
            className="form-check-input"
            type="radio"
            name="knowledge_of_insurance_coverage"
            id="radios3"
            onChange={formik.handleChange}
          />
          <label className="form-check-label" htmlFor="radios3">
            Exámenes de laboratorio
          </label>
        </div>
        <div className="invalid-feedback">
          {formik.errors.knowledge_of_insurance_coverage}
        </div>
      </div>

      <label htmlFor="search_to_project" className="mt-3">
        ¿Cuentas con un servicio de atención domiciliario?
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
