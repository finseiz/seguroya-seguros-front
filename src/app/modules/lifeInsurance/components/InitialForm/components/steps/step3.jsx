import Question from "app/modules/_forms/overview/Question";

export function Step3({ formik }) {
  return (
    <div className="card-body text-center">

      <p className="text-left inital-from__title mt-2 text-center">
        Formulario de perfilamiento del cliente de Seguro de Vida (aplica
        términos y condiciones)
      </p>

      <Question
        question="¿Por qué estas buscando un seguro de vida?"
        formik={formik}
        showError
        options={[
          { formikValue: "insuranceReason", label: "Porque tengo personas que dependen económicamente de mi.", value: "eps" },
          { formikValue: "insuranceReason", label: "Porque quiero mantener mi calidad de vida en caso de que me diagnostiquen una enfermedad grave o sufra una invalidez.", value: "eps-plan" },
          { formikValue: "insuranceReason", label: "Porque quiero proteger a mi familia mientras ahorro para mi futuro.", value: "eps-salud" },
        ]}
      />

      <Question
        question="Que tipo de seguro de vida estas buscando:"
        formik={formik}
        showError
        className="mt-4"
        options={[
          { formikValue: "insuranceType", label: "Seguro de vida ajustado a tus necesidades", value: "eps" },
          { formikValue: "insuranceType", label: "Seguro de vida con devolución de hasta el 100% del dinero pagado. ", value: "eps-plan" },
        ]}
      />

      <Question
        question="¿Autorizo el tratamiento de mis datos personales a Seguro Ya?"
        formik={formik}
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
