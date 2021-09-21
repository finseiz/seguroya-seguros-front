import React from 'react'
import Question from "app/modules/_forms/overview/Question";

export function Step3({ formik }) {

  return (
    <div className="card-body container text-center">

      <p className="text-left inital-from__title mt-3 px-4">
        Formulario de perfilamiento del cliente SALUD (aplica términos y condiciones)
      </p>

      <Question
        question="¿Actualmente qué servicio de salud tienes?"
        formik={formik}
        showError
        options={[
          { formikValue: "currentHealthService", label: "EPS", value: "eps" },
          { formikValue: "currentHealthService", label: "EPS-PLAN COMPLEMENTARIO", value: "eps-plan" },
          { formikValue: "currentHealthService", label: "EPS-PREPAGADA", value: "eps-prepagada" },
          { formikValue: "currentHealthService", label: "EPS-PÓLIZA DE SALUD", value: "eps-poliza-salud" },
          { formikValue: "currentHealthService", label: "EPS-Servición de atención en casa", value: "eps-casa" },
        ]}
      />

      <Question
        question="¿Qué es lo más importante para ti, a la hora de adquirir un servicio de salud adicional?"
        formik={formik}
        showError
        className="mt-4"
        options={[
          { formikValue: "mostImportant", label: "Poder acceder a una cita con un especialista sin consultar previamente un médico general.", value: "eps" },
          { formikValue: "mostImportant", label: "Calidad del servicio en un caso de urgencia y/o hospitalización.", value: "eps-plan" },
          { formikValue: "mostImportant", label: "Precio", value: "eps-prepagada" },
          { formikValue: "mostImportant", label: "Compañía de salud", value: "eps-salud" },
        ]}
      />

      <Question
        question="¿Te interesaría un servicio virtual de atención en salud 24/7?"
        formik={formik}
        showError
        className="mt-4"
        options={[
          { formikValue: "permanentService", label: "Si", value: true },
          { formikValue: "permanentService", label: "No", value: false },
        ]}
      />

      <Question
        question="¿Autorizo el tratamiento de mis datos personales a Seguro Ya?"
        formik={formik}
        showError
        className="mt-4"
        showError
        options={[
          { formikValue: "dataAuthorization", label: "Si", value: true },
          { formikValue: "dataAuthorization", label: "No", value: false },
        ]}
      />

    </div>
  );
}
