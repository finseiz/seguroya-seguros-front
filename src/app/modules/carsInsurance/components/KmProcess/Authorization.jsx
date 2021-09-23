import React, { useState } from "react";
import { useForm } from "app/modules/_forms/useForm";
import Question from "app/components/process/Question";
import BaseSection from "app/components/UI/baseSection";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { questionAuthContent, questionAuthPersonalData, questionAuthTerms } from "app/modules/healthInsurance/components/SuraProcess/fill-data/Auth/questions-values";
import { CarsKmProcessOtpRoute } from "app/routes/childs/Cars/routes";
import { actions } from "../../redux";
import { activeRadio, onChangeQuestion, activeError, canContinue } from "app/modules/_forms/forms-actions";
import { DataAuthorization } from "app/components/process/DataAuthorization";

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

  const actionsButton = [
    {
      text: "Continuar",
      className: "btn btn-primary primary-button process__process-button px-5 mx-3",
      onClick: async () => {
        setTrySubmit(true)
        const allTrue = validateAllTrue();
        if (canContinue(values)) {
          if (allTrue) {
            dispatch(actions.setUniqueProgress(1));
            history.push(CarsKmProcessOtpRoute);
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

          <p> SBS SEGUROS COLOMBIAS.A. EN ADELANTE SBS COLOMBIA, TE PAGARÁ A TI O A LOS BENEFICIARIOS, HASTA EL LÍMITE INDICADO EN LA CARÁTULA DE LA PÓLIZA, LA INDEMNIZACIÓN CORRESPONDIENTE, DE ACUERDO CON LAS COBERTURAS QUE A CONTINUACIÓN SE INDICAN Y QUE AFECTEN A TU VEHÍCULO ASEGURADO, SIEMPRE Y CUANDO OCURRA UN SINIESTRO AMPARADO DURANTE LA VIGENCIA DEL SEGURO. </p>
          <p> LAS COBERTURAS VARIARÁN EN CASO DE QUE TU VEHÍCULO ESTÉ DETENIDO O EN MOVIMIENTO. </p>
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
