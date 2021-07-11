import React from "react";
import { useFormik } from "formik";
import BaseSection from "app/components/UI/baseSection";
import { otherInitValues, othersSchema } from "./formik";
import { actions } from "app/modules/lifeInsurance/redux"
import { LifeProcessAuthorizationRoute, LifeProcessBeneficiariesRoute } from "./../../../../../../routes/childs/Life/routes";
import FormikRadioGroup from "../../../../../_forms/general/FormikRadioGroup";
import FormikInput from "../../../../../_forms/general/FormikInput";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toAbsoluteUrl } from 'theme/helpers/AssetsHelpers'

export const PersonAndOthers = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues: otherInitValues,
    validationSchema: othersSchema,
    onSubmit: (values) => {
      dispatch(actions.setShortProcess(3));
      history.push(LifeProcessAuthorizationRoute);
    },
  });

  const actionsButton = [
    {
      text: "Atras",
      className: "btn btn-primary primary-button process__process-button px-5 mx-3",
      onClick: () => {
        dispatch(actions.setShortProcess(1));
        history.push(LifeProcessBeneficiariesRoute);
      },
    },
    {
      text: "Continuar",
      className: "btn btn-primary primary-button process__process-button px-5 mx-3",
      onClick: () => formik.handleSubmit(),
    },
  ];

  const radioField = (field, question) => (
    <FormikRadioGroup
      formik={formik}
      field={field}
      question={question}
      questionClass="process__others-lable"
      marginTop="0"
      radioLabelClass="radio-label"
      options={[
        { title: "Si", value: true },
        { title: "No", value: false }
      ]}
      className="mt-2"
    />
  )

  return (
    <>
      <BaseSection
        title="Preguntas persona expuesta y otros datos"
      >
        <form onSubmit={formik.handleSubmit}>

          <div className="row">

            <div className="col">
              {radioField(
                "publicly_exposed",
                "¿Es usted una persona públicamente expuesta?"
              )}

              {radioField(
                "publicly_exposed_vinculation",
                "¿Existe algún vínculo entre usted y una persona considerada públicamente expuesta?"
              )}

              {radioField(
                "manages_public_resources",
                "¿Por su cargo o actividad, administra recursos públicos?"
              )}

              {radioField(
                "obligations",
                "¿Es usted SUJETO DE OBLIGACIONES TRIBUTARIAS EN OTRO PAÍS O GRUPO DE PAISES?"
              )}

              <span className="radio-label"> Indique </span>
              <FormikInput 
                field="countys_obligations"
                disable={ formik.values.obligations === false }
                formik={formik}
              />
            </div>

            <div className="col">
              <div className="row">
                <div className="col-auto">
                  <img
                    src={toAbsoluteUrl("/media/icons/excla.svg")}
                    alt="exclamación-icon"
                  />
                </div>

                <div className="col">
                  <div className="process__others-container">
                    <div className="p-3">
                      Persona Públicamente Expuesta (PPE): i) las personas expuestas políticamente-conforme al Decreto 1674 de 2016-, ii) los representantes legales de organizaciones internacionales y iii) las personas que gozan de reconocimiento público. Se entiende por persona políticamente expuesta (Decreto 1674 / 2016) los individuos que desempeñan o han desempeñado funciones públicas destacadas como jefes de Estado, políticos de alta jerarquía, funcionarios gubernamentales, judiciales o militares de alta jerarquía, altos ejecutivos (directores y gerentes) de empresas sociales, industriales y comerciales del estado y de sociedades de economía mixta, unidades administrativas especiales, y funcionarios importantes de partidos políticos.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </form>
      </BaseSection>
      <BaseSection
        actions={actionsButton}
      >
        <div>

          <p className="process__others-lable">
            A continuación registrará la información de la ley de cumplimiento tributario de cuentas extranjeras.
          </p>

          {radioField(
            "us_tax_resident_or_player",
            "¿Eres responsable o residente fiscal en Estados Unidos de América?"
          )}

          {radioField(
            "tax_obligations_outside_colombia",
            "¿Eres sujeto de obligaciones tributarias, responsable o residente fiscal en otro país diferente a Colombia?"
          )}
        </div>
      </BaseSection>
    </>
  );
}
