import React from "react";
import { useForm } from "app/modules/_forms/useForm";
import Question from "app/components/process/Question";
import BaseSection from "app/components/UI/baseSection";
import { activeRadio, onChangeQuestion, activeError, canContinue } from "./../../../../_forms/forms-actions";
import { questionAuthTerms, questionAuthPersonalData, questionAuthContent } from "./../questions-values";
import { useState } from "react";
import { LifeProcessOTP, LifeProcessPersonAndMoreDataRoute } from "app/routes/childs/Life/routes";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { actions } from "app/modules/lifeInsurance/redux";
import { sendInformation } from "../controller";
import { DataAuthorization } from "app/components/process/DataAuthorization";

export const Authorization = ({ }) => {

  const initValues = {
    [questionAuthTerms.id]: "",
    [questionAuthPersonalData.id]: "",
    [questionAuthContent.id]: "",
  }
  const [values, onChange, _, validateAllTrue] = useForm(initValues);
  const [trySubmit, setTrySubmit] = useState(false);
  const [loadingRequest, setLoadingRequest] = useState(false);
  const [showError, setShowError] = useState(false);

  const lifeInsurance = useSelector(state => state.lifeInsurance)
  const dispatch = useDispatch();
  const history = useHistory();

  const actionsButton = [
    {
      text: "Atras",
      className: "btn btn-primary primary-button process__process-button px-5 mx-3",
      onClick: () => {
        dispatch(actions.setShortProcess(2));
        history.push(LifeProcessPersonAndMoreDataRoute);
      },
    },
    {
      text: "Continuar",
      className: "btn btn-primary primary-button process__process-button px-5 mx-3",
      onClick: async () => {
        setTrySubmit(true)
        const allTrue = validateAllTrue();
        if (canContinue(values)) {
          if (allTrue) {
            setLoadingRequest(true);
            const success = await sendInformation(lifeInsurance, dispatch)
            if (success) {
              dispatch(actions.setShortProcess(4));
              history.push(LifeProcessOTP);
            }
            setLoadingRequest(false);
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
      loading={loadingRequest}
    >
      <div className="process__others-container">
        <div className="p-3 process__normal-text process__short-container">
          <p className="text-center"> <b> Términos y condiciones </b> </p>

          <p> <b> ¿Qué cubre este seguro? </b> </p>
          <p> <b> Muerte por cualquier causa: </b>  Si mueres dentro de la vigencia de la póliza por causa natural no preexistente o accidental, o prexistente declarada y aceptada por la compañía, Colmena pagará la suma indicada en la carátula de la póliza según el plan escogido. Si mueres como consecuencia de guerra civil y/o internacional, por suicidio voluntario o involuntario, o en el ejercicio de actividades ilícitas, Colmena no pagará el seguro. </p>
          <p> Para determinar la cobertura del amparo, se entenderá la fecha del fallecimiento como la fecha del siniestro. En caso de desaparición, un juez definirá la fecha de muerte. </p>
          <a href="#" >Ver todo...</a>
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
