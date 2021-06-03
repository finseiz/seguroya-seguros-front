import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import ProgressBar from "react-bootstrap/ProgressBar";
import { CircularProgress } from "@material-ui/core";
import { Step1, Step2, Step3 } from "./utils";
import { actions } from "../redux";
import { getColmenaPlans } from "../redux/crud";

const initialValues = {
  address: "",
  document_type: "",
  identification: "",
  fullname: "",
  email: "",
  issue_date: "",
  birth_date: "",
  ocupation: "",
  cellphone: "",
  discount_code: "",
  gender: "",
  current_insurance: "",
  knowledge_of_insurance_coverage: "",
  search_to_project: "",
  data_processing_licence: "",
};

function LifeForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [step, setStep] = React.useState(1);
  const { data } = useSelector((state) => state.lifeInsurance);

  const lifeSchema = Yup.object().shape({
    address: Yup.string().required("Campo requerido"),
    document_type: Yup.string().required("Campo requerido"),
    identification: Yup.string().required("Campo requerido"),
    fullname: Yup.string().required("Campo requerido"),
    email: Yup.string().email("Email requerido").required("Campo requerido"),
    issue_date: Yup.string().required("Campo requerido"),
    birth_date: Yup.string().required("Campo requerido"),
    ocupation: Yup.string().required("Campo requerido"),
    cellphone: Yup.string().required("Campo requerido"),
    gender: Yup.string().required("Campo requerido"),
    current_insurance: Yup.string().required("Campo requerido"),
    knowledge_of_insurance_coverage: Yup.string().required("Campo requerido"),
    //search_to_project: Yup.string().required("Campo requerido"),
    data_processing_licence: Yup.string().required("Campo requerido"),
  });

  const handleSubmit = async () => {
    await getColmenaPlans();
  };

  const formik = useFormik({
    initialValues,
    //validationSchema: lifeSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      setTimeout(async () => {
        dispatch(actions.addClientData(values));
        await handleSubmit();
        history.push("/select-plan");
        setSubmitting(false);
      }, 1000);
    },
  });

  React.useEffect(() => console.log(formik.values), [formik.values]);

  return (
    <section className="w-100 px-5">
      <form onSubmit={formik.handleSubmit}>
        <div className="card custom-card">
          <div className="card-body text-center">
            <span>Vida</span>
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

export default LifeForm;
