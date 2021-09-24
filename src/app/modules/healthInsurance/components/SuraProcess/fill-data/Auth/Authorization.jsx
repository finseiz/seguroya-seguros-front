import React, { useMemo } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { useForm } from "app/modules/_forms/useForm";
import Question from "app/components/process/Question";
import BaseSection from "app/components/UI/baseSection";
import { actions } from "app/modules/healthInsurance/redux";

import { questionAuthTerms, questionAuthPersonalData, questionAuthContent } from "./questions-values";
import { activeRadio, onChangeQuestion, activeError, canContinue } from "../../../../../_forms/forms-actions";
import { HealthProcessDoneRoute } from "app/routes/childs/Health/routes";
import { DataAuthorization } from "app/components/process/DataAuthorization";
import { findPlan } from "../../controller";
import { termsAndConditions } from "app/helpers/terms-conditions";

export const Authorization = ({ }) => {

  const initValues = {
    [questionAuthTerms.id]: "",
    [questionAuthPersonalData.id]: "",
    [questionAuthContent.id]: "",
  }
  const [values, onChange, _, validateAllTrue] = useForm(initValues);
  const [trySubmit, setTrySubmit] = useState(false);
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const state = useSelector(state => state.healthInsurance);
  const { plans, selectedPlan } = state;

  const planName = useMemo(() => {
    const plan = findPlan(plans, selectedPlan.solutionId);
    return plan["data"]["solucion"]["nombre"];
  }, [])

  const includePay = useMemo(() => {
    if (planName.includes("EVOLUCIONA")) return true;
    else return false;
  }, [])

  const downloadTermsLink = useMemo(() => {
    if (planName.includes("CLÁSICO")) {
      return termsAndConditions.SuraClasico;
    } else if (planName.includes("EVOLUCIONA")) {
      return termsAndConditions.SuraEvoluciona;
    } else {
      return termsAndConditions.SuraGlobal;
    }
  }, [])

  const actionsButton = [
    {
      text: "Continuar",
      className: "btn btn-primary primary-button process__process-button px-5 mx-3",
      onClick: () => {
        setTrySubmit(true)
        const allTrue = validateAllTrue();
        if (canContinue(values)) {
          if (allTrue) {
            dispatch(actions.setSuraProgress(4));
            history.push(HealthProcessDoneRoute);
          } else {
            setShowError(true);
          }
        }
      },
    },
  ];

  return (

    <BaseSection
      title="Autorizaciones"
      actions={actionsButton}
    >
      <div className="process__others-container">
        <div className="p-3 process__normal-text process__short-container">
          <p className="text-center"> <b> Términos y condiciones </b> </p>
          <p>  {planData(includePay)}  </p>
          <a href={downloadTermsLink} >Ver todo...</a>
        </div>
      </div>


      <Question
        question={questionAuthTerms.question}
        className="mt-4"
        options={questionAuthTerms.options.map((option, i) => ({
          ...option,
          active: () => activeRadio(questionAuthTerms, i, values),
          onChange: () => onChangeQuestion(questionAuthTerms, i, onChange)
        }))}
        activeError={activeError(questionAuthTerms, values)}
        showError={trySubmit}
      />

      <DataAuthorization />

      <Question
        question={questionAuthPersonalData.question}
        className="mt-4"
        options={questionAuthPersonalData.options.map((option, i) => ({
          ...option,
          active: () => activeRadio(questionAuthPersonalData, i, values),
          onChange: () => onChangeQuestion(questionAuthPersonalData, i, onChange)
        }))}
        activeError={activeError(questionAuthPersonalData, values)}
        showError={trySubmit}
      />

      <Question
        question={questionAuthContent.question}
        className="mt-4"
        options={questionAuthContent.options.map((option, i) => ({
          ...option,
          active: () => activeRadio(questionAuthContent, i, values),
          onChange: () => onChangeQuestion(questionAuthContent, i, onChange)
        }))}
        activeError={activeError(questionAuthContent, values)}
        showError={trySubmit}
      />


      {
        showError &&
        (
          <div class=" mt-4 alert alert-danger" role="alert">
            Debes aceptar todas las preguntas anteriores
          </div>
        )
      }


    </BaseSection>
  );
}

const planData = (includePay) => {

  return (
    <>
      Tratamiento médico hospitalario y ambulatorio en Colombia{includePay && " con copago"}, de acuerdo con lo indicado en la carátula de la póliza
      Si te enfermas o te accidentas, SURA te pagará los tratamientos médicos y quirúrgicos que se describen a continuación, siempre y cuando:
      <ul>
        <li> El tratamiento sea prestado en Colombia. </li>
        <li> El tratamiento sea consecuencia de un accidente ocurrido o de una enfermedad adquirida, durante la vigencia del seguro. </li>
        <li> El tratamiento sea prestado durante la vigencia del seguro. </li>
        <li> Te encuentres al día con los valores a pagar. </li>
      </ul>
    </>
  );

}
