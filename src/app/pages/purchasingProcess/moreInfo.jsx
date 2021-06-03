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

function MoreInfo({ handleSubmit }) {
  const lifeSchema = Yup.object().shape({
    publicly_exposed: Yup.string().required("Campo requerido"),
    publicly_exposed_vinculation: Yup.string().required("Campo requerido"),
    manages_public_resources: Yup.string().required("Campo requerido"),
    question4: Yup.string().required("Campo requerido"),
    us_tax_resident_or_player: Yup.string().required("Campo requerido"),
    tax_obligations_outside_colombia: Yup.string().required("Campo requerido"),
  });

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
        title="Preguntas persona expuesta y otros datos"
        actions={actionsButton}
        loading={formik.isSubmitting}
      >
        <div className="card">
          <div className="card-body">
            <div className="card-text">
              Persona Públicamente Expuesta (PPE): i) las personas expuestas
              políticamente-conforme al Decreto 1674 de 2016-, ii) los
              representantes legales de organizaciones internacionales y iii)
              las personas que gozan de reconocimiento público. Se entiende por
              persona políticamente expuesta (Decreto 1674 / 2016) los
              individuos que desempeñan o han desempeñado funciones públicas
              destacadas como jefes de Estado, políticos de alta jerarquía,
              funcionarios gubernamentales, judiciales o militares de alta
              jerarquía, altos ejecutivos (directores y gerentes) de empresas
              sociales, industriales y comerciales del estado y de sociedades de
              economía mixta, unidades administrativas especiales, y
              funcionarios importantes de partidos políticos.
            </div>
          </div>
        </div>
        <div className="form-group">
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

        <div className="form-group">
          <label>
            ¿Existe algún vínculo entre usted y una persona considerada
            públicamente expuesta?
          </label>
          <div className="form-row">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="publicly_exposed_vinculation"
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
                name="publicly_exposed_vinculation"
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

        <div className="form-group">
          <label>
            ¿Por su cargo o actividad, administra recursos públicos?
          </label>
          <div className="form-row">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="manages_public_resources"
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
                name="manages_public_resources"
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

        <div className="form-group">
          <label>
            ¿Es usted SUJETO DE OBLIGACIONES TRIBUTARIAS EN OTRO PAÍS O GRUPO DE
            PAISES?
          </label>
          <div className="form-row">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="question4"
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
                name="question4"
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

        <div className="form-group">
          <label htmlFor="">Indique</label>
          <input
            type="text"
            name="question5"
            {...formik.getFieldProps("question5")}
          />
        </div>

        <span>
          A continuación registrará la información de la ley de cumplimiento
          tributario de cuentas extranjeras.
        </span>

        <div className="form-group">
          <label>
            ¿Eres responsable o residente fiscal en Estados Unidos de América?
          </label>
          <div className="form-row">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="us_tax_resident_or_player"
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
                name="us_tax_resident_or_player"
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

        <div className="form-group">
          <label>
            ¿Eres sujeto de obligaciones tributarias, responsable o residente
            fiscal en otro país diferente a Colombia?
          </label>
          <div className="form-row">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="tax_obligations_outside_colombia"
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
                name="tax_obligations_outside_colombia"
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
      </BaseSection>
    </form>
  );
}

export default MoreInfo;
