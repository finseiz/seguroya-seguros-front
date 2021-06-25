import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { CircularProgress } from "@material-ui/core";
import { Step1, Step2, Step3 } from "./components/steps";
import { actions } from "../../redux";
import { getColmenaPlans } from "../../redux/crud";
import { initialSchema, initialValues } from "./helpers/formik";
import { toAbsoluteUrl } from "theme/helpers/AssetsHelpers";
import { ProgressIndicator } from "./components/ProgressIndicator";
import { LifeProcessSelectPlanRoute } from "app/routes/childs/Life/routes";

function LifeForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [step, setStep] = React.useState(1);
  const { data } = useSelector((state) => state.lifeInsurance);

  const formik = useFormik({
    initialValues,
    validationSchema: initialSchema,
    onSubmit: (values, { setSubmitting }) => {

      dispatch(actions.addClientData(values));
      setStep((prevStep) => prevStep + 1)
      setSubmitting(false);
      dispatch(actions.setInitialProgress(50));

    },
  });

  const continueBtn = () => {
    switch (step) {
      case 1:
        formik.handleSubmit();
        break;
      case 2:
        setStep((prevStep) => prevStep + 1)
        dispatch(actions.setInitialProgress(100));
        break;
      case 3:
        history.push(LifeProcessSelectPlanRoute);
        break;
      default:
        break;
    }
  }

  const backBtnAction = () => {
    setStep((prevStep) => prevStep - 1 );
    switch (step) {
      case 2:
        dispatch(actions.setInitialProgress(0));
        break;
      case 3:
        dispatch(actions.setInitialProgress(50));   
        break;
      default:
        break;
    }
  }

  return (
    <section className="w-100 px-5">
      <form onSubmit={formik.handleSubmit}>

        <div className="text-center">
            <p className="insurance-name m-0">Seguro de Vida</p>
            <p className="insurance-desc">Buscamos hacer más fácil y cercano el mundo de los seguros siendo tu asesor digital 24/7</p>
        </div>

        { /** Step section */ }
        <div className="card inital-from__box inital-from__shadow">
          <div className="card-body text-center">

            <div className="small-icon">
              <img
                src={toAbsoluteUrl("/media/icons/healthcare.svg")}
                alt="life-icon"
              />
            </div>
            <p className="m-1 initial-form__insurance-name-short" >Vida</p>
            <p className="initial-form__insurance-sentense" >Para comenzar, cuéntanos sobre ti...</p>

            <ProgressIndicator />

          </div>
        </div>

        {/* Form steps */}
        <div className="container w-100 inital-from__box mt-3">
          {step === 1 && <Step1 formik={formik} />}
          {step === 2 && <Step2 formik={formik} onEdit={backBtnAction} />}
          {step === 3 && <Step3 formik={formik} />}
        </div>

        {/* Bottom buttons */}
        <div className="text-center mt-3">

          {/* Back btn */}
          { [2,3].includes(step) && (
            <button
              type="button"
              onClick={ backBtnAction }
              className="btn btn-primary primary-button mx-3"
            >
              <span>Atras</span>
            </button>
          ) }

          {/* Continue btn */}
          <button
            type="button"
            onClick={ continueBtn }
            className="btn btn-primary primary-button mx-3"
          >
            <span>Continuar</span>
            {formik.isSubmitting && (
              <CircularProgress className="ml-2" size={10} color="inherit" />
            )}
          </button>
        </div>

      </form>
    </section>
  );
}

export default LifeForm;
