import React from "react";
import { useForm } from "app/modules/_forms/useForm";
import Question from "app/components/process/Question";
import BaseSection from "app/components/UI/baseSection";
import { activeRadio, onChangeQuestion } from "./../../../../_forms/forms-actions";
import { questionAuthTerms, questionAuthPersonalData, questionAuthContent } from "./../questions-values";

export const Authorization = ({ }) => {

  const initValues = {
    [questionAuthTerms.id]: "",
    [questionAuthPersonalData.id]: "",
    [questionAuthContent.id]: "",
  }
  const [values, onChange] = useForm(initValues);

  const actionsButton = [
    {
      text: "Continuar",
      className: "btn btn-primary primary-button",
      type: "submit",
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
      />

      <div className="process__others-container">

        <div className="p-3 process__normal-text process__short-container">
          <p className="text-center"> <b> Autorización tratamiento de datos personales </b> </p>
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
      />


    </BaseSection>
  );
}
