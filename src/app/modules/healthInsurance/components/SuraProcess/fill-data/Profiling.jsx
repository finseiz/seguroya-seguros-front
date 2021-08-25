import BaseSection from "app/components/UI/baseSection";
import { actions } from "app/modules/healthInsurance/redux";
import Question from "app/modules/_forms/overview/Question";
import { HealthProcessSelectPlanRoute } from "app/routes/childs/Health/routes";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export function Profiling({ }) {

  const dispatch = useDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {},
  })

  const actionsButton = [
    {
      text: "Continuar",
      className: "btn btn-primary primary-button process__process-button px-5 mx-3",
      onClick: () => {
        dispatch(actions.setSuraProgress(2));
        history.push(HealthProcessSelectPlanRoute);
      },
    },
  ];

  return (
    <BaseSection
      title="Perfilamiento"
      actions={actionsButton}
    >

      <p className="text-left inital-from__title mt-2 text-center">
        Formulario de perfilamiento del cliente SALUD (aplica términos y condiciones)
      </p>

      <Question
        question="Actualmente que con qué servicio de salud cuentas"
        formik={formik}
        options={[
          { formikValue: "current_health_service", label: "EPS", value: "eps" },
          { formikValue: "current_health_service", label: "EPS-PLAN COMPLEMENTARIO", value: "eps-plan" },
          { formikValue: "current_health_service", label: "EPS-PREPAGADA", value: "eps-prepagada" },
          { formikValue: "current_health_service", label: "EPS-PÓLIZA DE SALUD", value: "eps-salud" },
        ]}
      />

      <Question
        question="Actualmente que con qué servicio de salud cuentas"
        formik={formik}
        className="mt-4"
        options={[
          { formikValue: "current_health_service", label: "La atención inmediata", value: "eps" },
          { formikValue: "current_health_service", label: "El precio", value: "eps-plan" },
          { formikValue: "current_health_service", label: "La rapidez de las citas con especialistas", value: "eps-prepagada" },
          { formikValue: "current_health_service", label: "Exámenes de laboratorio", value: "eps-salud" },
        ]}
      />

      <Question
        question="¿Cuentas con un servicio de atención domiciliario?"
        formik={formik}
        className="mt-4"
        options={[
          { formikValue: "delivery_service", label: "Si", value: true },
          { formikValue: "delivery_service", label: "No", value: false },
        ]}
      />

      <Question
        question="¿Autorizo el tratamiento de mis datos personales a Seguro Ya?"
        formik={formik}
        className="mt-4"
        options={[
          { formikValue: "data_processing_licence", label: "Si", value: true },
          { formikValue: "data_processing_licence", label: "No", value: false },
        ]}
      />

    </BaseSection>
  );
}
