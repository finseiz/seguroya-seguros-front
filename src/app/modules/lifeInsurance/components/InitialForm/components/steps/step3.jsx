export function Step3({ formik }) {
  return (
    <div className="card-body text-center">
      <p>
        Formulario de perfilamiento del cliente de Seguro de Vida (aplica
        términos y condiciones)
      </p>

      <label htmlFor="current_insurance">
        Actualmente tienes un seguro de vida
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
            En la tarjeta de crédito
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
            En la cuenta de ahorros
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
            Por medio de tu empresa
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
            Con alguna compañía de seguros
          </label>
        </div>
        <div className="form-check ml-3">
          <input
            className="form-check-input"
            type="radio"
            name="current_insurance"
            id="radios5"
            onChange={formik.handleChange}
          />
          <label className="form-check-label" htmlFor="radios5">
            No tienes
          </label>
        </div>
        <div className="invalid-feedback">
          {formik.errors.current_insurance}
        </div>
      </div>

      <label htmlFor="knowledge_of_insurance_coverage" className="mt-3">
        Conoces si la cobertura de tu seguro es suficiente para afrontar la
        adversidad de una enfermedad de alto costo o una invalidez que no te
        permita seguir recibiendo ingresos
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
            Si
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
            No
          </label>
        </div>
        <div className="invalid-feedback">
          {formik.errors.knowledge_of_insurance_coverage}
        </div>
      </div>

      <label htmlFor="search_to_project" className="mt-3">
        ¿Que estás buscando proteger?
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
            La educación de tus hijos
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
            Tu patrimonio y tus ingresos
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
            La calidad de vida de mi familia si llegaras a faltar
          </label>
        </div>
        <div className="form-check ml-3">
          <input
            className="form-check-input"
            type="radio"
            name="search_to_project"
            id="radios4"
            onChange={formik.handleChange}
          />
          <label className="form-check-label" htmlFor="radios4">
            Mantener mi calidad de vida en caso de una enfermedad de alto costo
            o invalidez
          </label>
        </div>
        <div className="invalid-feedback">
          {formik.errors.search_to_project}
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
