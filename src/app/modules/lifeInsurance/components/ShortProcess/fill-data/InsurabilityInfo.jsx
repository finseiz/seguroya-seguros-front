import React, { useState } from "react";
import BaseSection from "app/components/UI/baseSection";
import Question from "app/components/process/Question";
import { useForm } from "app/modules/_forms/useForm";
import { question1, question2 } from "./../questions-values";
import { activeError, activeRadio, canContinue, onChangeQuestion } from "./../../../../_forms/forms-actions";
import { useHistory } from "react-router-dom";
import { LifeProcessBeneficiariesRoute } from "app/routes/childs/Life/routes";
import { useDispatch } from "react-redux";
import { actions } from "app/modules/lifeInsurance/redux";

function InsurabilityInfo() {

  const initValues = { [question1.id]: "", [question2.id]: "", }
  const [values, onChange] = useForm(initValues);
  const history = useHistory();
  const dispatch = useDispatch();
  const [trySubmit, setTrySubmit] = useState(false);

  const actionsButton = [
    {
      text: "Continuar",
      className: "btn btn-primary primary-button process__process-button px-5",
      type: "button",
      onClick: () => {
        setTrySubmit(true);
        if ( canContinue( values ) ){
          dispatch( actions.setShortProcess(1) );
          history.push(LifeProcessBeneficiariesRoute);
        }
      },
    },
  ];

  return (
    <BaseSection
      title="Información de asegurabilidad"
      actions={actionsButton}
    >
      <Question
        question={question1.question}
        options={[
          {
            ...question1.options[0],
            active: () => activeRadio(question1, 0, values),
            onChange: () => onChangeQuestion(question1, 0, onChange)
          },
          {
            ...question1.options[1],
            active: () => activeRadio(question1, 1, values),
            onChange: () => onChangeQuestion(question1, 1, onChange)
          },
        ]}
        activeError={ activeError(question1, values) }
        showError={trySubmit}
      />

      <Question
        question={question2.question}
        className="mt-4"        
        options={[
          {
            ...question2.options[0],
            active: () => activeRadio(question2, 0, values),
            onChange: () => onChangeQuestion(question2, 0, onChange)
          },
          {
            ...question2.options[1],
            active: () => activeRadio(question2, 1, values),
            onChange: () => onChangeQuestion(question2, 1, onChange)
          },
        ]}
        activeError={ activeError(question2, values) }
        showError={trySubmit}
      />

    </BaseSection>
  );
}

export default InsurabilityInfo;
