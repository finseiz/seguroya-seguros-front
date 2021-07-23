import React from "react";
import { useForm } from "app/modules/_forms/useForm";
import Question from "app/components/process/Question";
import BaseSection from "app/components/UI/baseSection";
import { activeRadio, onChangeQuestion, activeError, canContinue } from "./../../../../_forms/forms-actions";
import { questionAuthTerms, questionAuthPersonalData, questionAuthContent } from "./../questions-values";
import { useState } from "react";
import { LifeProcessOTP, LifeProcessPersonAndMoreDataRoute } from "app/routes/childs/Life/routes";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { actions } from "app/modules/lifeInsurance/redux";

export const Authorization = ({ }) => {

  const initValues = {
    [questionAuthTerms.id]: "",
    [questionAuthPersonalData.id]: "",
    [questionAuthContent.id]: "",
  }
  const [values, onChange] = useForm(initValues);
  const [trySubmit, setTrySubmit] = useState(false);
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
      onClick: () => {
        setTrySubmit(true)
        if ( canContinue(values) ){
          dispatch(actions.setShortProcess(4));
          history.push(LifeProcessOTP);
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
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
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
        activeError={ activeError(questionAuthTerms, values) }
        showError={trySubmit}
      />

      <div className="process__others-container mt-3">
        <div className="p-3 process__normal-text process__short-container">
          <p className="text-center"> <b> Autorización tratamiento de datos personales </b> </p>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </div>
      </div>


      <Question
        question={questionAuthPersonalData.question}
        className="mt-4"
        options={questionAuthPersonalData.options.map((option, i) => ({
          ...option,
          active: () => activeRadio(questionAuthPersonalData, i, values),
          onChange: () => onChangeQuestion(questionAuthPersonalData, i, onChange)
        }))}
        activeError={ activeError(questionAuthPersonalData, values) }
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
        activeError={ activeError(questionAuthContent, values) }
        showError={trySubmit}
      />


    </BaseSection>
  );
}
