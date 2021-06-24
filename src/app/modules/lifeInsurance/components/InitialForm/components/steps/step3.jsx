import Question from "app/modules/_forms/overview/Question";

export function Step3({ formik }) {
  return (
    <div className="card-body text-center">

      <p className="text-left inital-from__title mt-2 text-center">
        Formulario de perfilamiento del cliente de Seguro de Vida (aplica
        términos y condiciones)
      </p>

      <Question
        question="Actualmente tienes un seguro de vida"
        formik={formik}
        options={[
          { formikValue: "current_insurance", label: "No tienes" , value: "na"},
          { formikValue: "current_insurance", label: "En la tarjeta de crédito", value: "tc"},
          { formikValue: "current_insurance", label: "En la cuenta de ahorros" , value: "ahorros"},
          { formikValue: "current_insurance", label: "Por medio de tu empresa" , value: "empres"},
          { formikValue: "current_insurance", label: "Con alguna compañía de seguros" , value: "compSeg"},
        ]}
      />

      {
        formik.values.current_insurance !== "na" &&
        (
          <Question
            className="mt-4"
            question={"Conoces si la cobertura de tu seguro es suficiente para afrontar la adversidad de una enfermedad de alto costo o una invalidez que no te permita seguir recibiendo ingresos"}
            formik={formik}
            options={[
              { formikValue: "knowledge_of_insurance_coverage", label: "Si" , value: "yes"},
              { formikValue: "knowledge_of_insurance_coverage", label: "No", value: "no"},
            ]}
          />
        )
      }

      <Question
        className="mt-3"
        question={"¿Que estás buscando proteger?"}
        formik={formik}
        options={[
          { formikValue: "search_to_project", label: "La educación de tus hijos" , value: "edu"},
          { formikValue: "search_to_project", label: "Tu patrimonio y tus ingresos", value: "ing"},
          { formikValue: "search_to_project", label: "La calidad de vida de mi familia si llegaras a faltar", value: "fam"},
          { formikValue: "search_to_project", label: "Mantener mi calidad de vida en caso de una enfermedad de alto costo o invalidez", value: "inva"},
        ]}
      />

      <Question
        className="mt-4"
        question={"¿Autorizo el tratamiento de mis datos personales a Seguro Ya?"}
        formik={formik}
        options={[
          { formikValue: "data_processing_licence", label: "Si" , value: "yes"},
          { formikValue: "data_processing_licence", label: "No", value: "no"},
        ]}
      />
    </div>
  );
}
