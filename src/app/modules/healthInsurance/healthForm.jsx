import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import ProgressBar from "react-bootstrap/ProgressBar";
import { CircularProgress } from "@material-ui/core";
import { Step1, Step2, Step3 } from "./components/utils";
import { initialValues } from "./components/formik";

function HealthForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [step, setStep] = React.useState(1);
  const { data } = useSelector((state) => state.lifeInsurance);

  const formik = useFormik({
    initialValues,
    //validationSchema: lifeSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      setSubmitting(false);
    },
  });

  return (
    <section className="w-100 px-5">
      <form onSubmit={formik.handleSubmit}>
        <div className="card custom-card">
          <div className="card-body text-center">
            <span>Salud</span>
            <p>Para comenzar, cuéntanos sobre ti...</p>
            <div className="d-flex flex-row align-self-center">
              <span className="dot">1</span>
              <ProgressBar className="w-100" now={100} />
              <span className="dot">2</span>
              <ProgressBar className="w-100" now={100} />
              <span className="dot">3</span>
            </div>
          </div>
        </div>
        <div className="card custom-card mt-3">
          {step === 1 && <Step1 formik={formik} />}
          {step === 2 && <Step2 formik={formik} />}
          {step === 3 && <Step3 formik={formik} />}
        </div>
        <div className="text-center mt-3">
          {
            
          }
          <button
            type="button"
            onClick={() => {
              if (step != "3") setStep((prevStep) => prevStep + 1);
              else formik.handleSubmit();
            }}
            className="btn btn-primary primary-button"
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

export default HealthForm;
