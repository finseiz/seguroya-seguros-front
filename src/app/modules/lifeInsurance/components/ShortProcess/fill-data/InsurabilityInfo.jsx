import React, { useState } from "react";
import BaseSection from "app/components/UI/baseSection";
import Question from "app/components/process/Question";
import { useForm } from "app/modules/_forms/useForm";

function InsurabilityInfo({ handleSubmit }) {

  const initValues = { "1qst": "", "2qst": "" }

  const [ values, onChange ] = useForm(initValues);

  const actionsButton = [
    {
      text: "Continuar",
      className: "btn btn-primary primary-button",
      type: "submit",
    },
  ];

  return (
    <BaseSection
      title="Información de asegurabilidad"
      actions={actionsButton}
    >
      <Question 
        question="¿Padece o ha padecido enfermedades de tipo cardiovascular o enfermedades como hipertensión arteria, diabetes, infarto o enfermedades de las arterias coronarias, cáncer, leucemia, linfomas, trombosis, derrames o eventos cerebrovasculares, anemias, esclerosis múltiple, cirrosis hepática, insuficiencia renal, tumores malignos, lupus?"
        options={[
          { label: "Si", value: "yes", active: values["1qst"] === "yes", onChange: () => onChange({name: "1qst", value: "yes" }) },
          { label: "No", value: "no", active: values["1qst"] === "no", onChange: () => onChange({name: "1qst", value: "no" }) }
        ]}        
      />
      

      <div className="form-group">
        <label>
          ¿Le han detectado la presencia de anticuerpos contra el virus VIH
          productor del SIDA, ha sido VIH positivo, prueba de Elisa positiva o
          le han diagnostica SIDA?
        </label>
        <div className="form-row">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="diagnosed_VIH"
              id="radios1"
              value="yes"
              //onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="radios1">
              Si
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="diagnosed_VIH"
              id="radios2"
              value="no"
              //onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="radios2">
              No
            </label>
          </div>
        </div>
      </div>
    </BaseSection>
  );
}

export default InsurabilityInfo;
