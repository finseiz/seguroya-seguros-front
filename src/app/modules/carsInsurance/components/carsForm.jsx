import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ProgressBar from "react-bootstrap/ProgressBar";
import { CircularProgress } from "@material-ui/core";
import { Step1, Step2, Step3 } from "./utils";
import { getBolivarCities } from "../redux/crud";

const initialValues = {
  license_plate: "",
  document_type: "",
  identification: "",
  name: "",
  lastname: "",
  email: "",
  birth_date: "",
  cellphone: "",
  discount_code: "",
  current_insurance: "",
  knowledge_of_insurance_coverage: "",
  search_to_project: "",
  data_processing_licence: "",
};

function CarsForm() {
  const history = useHistory();
  const [step, setStep] = React.useState(1);
  const [cities, setCities] = React.useState([]);

  const lifeSchema = Yup.object().shape({
    license_plate: Yup.string().required("Campo requerido"),
    document_type: Yup.string().required("Campo requerido"),
    identification: Yup.string().required("Campo requerido"),
    name: Yup.string().required("Campo requerido"),
    lastname: Yup.string().required("Campo requerido"),
    email: Yup.string().email("Email requerido").required("Campo requerido"),
    city: Yup.string().required("Campo requerido"),
    birth_date: Yup.string().required("Campo requerido"),
    cellphone: Yup.string().required("Campo requerido"),
  });

  const handleSubmit = async () => {
    const config = {
      method: "POST",
      body: JSON.stringify({
        placaVehiculo: "EMR901",
        tipoDocumentoTomador: "CC",
        numeroDocumentoTomador: 1026253336,
        nombresTomador: "Gustavo Emilio",
        apellidosTomador: "Gomez Rodriguez",
        fechaNacimientoTomador: "1968-11-26",
        generoConductor: "M",
        claveAsesor: 38867,
        sumaAccesorios: 0,
        ciudadMovilizacion: 14000,
        ceroKm: "false",
        periodoFact: 12,
        opcionPA: "S",
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    };
    await fetch("http://localhost:8080/api/segurosbolivar/liquidacion", config);
  };

  const formik = useFormik({
    initialValues,
    //validationSchema: lifeSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      setTimeout(async () => {
        await handleSubmit();
        history.push("/select-plan");
        setSubmitting(false);
      }, 1000);
    },
  });

  // Cities init
  React.useEffect(() => {
    async function getCities() {
      try {
        const res = await getBolivarCities();
        setCities(res.catalogoDato);
      } catch (err) {
        console.log(err);
      }
    }
    getCities();
  }, []);

  React.useEffect(() => console.log(formik.values), [formik.values]);

  return (
    <section className="w-100 px-5">
      <form onSubmit={formik.handleSubmit}>
        <div className="card custom-card">
          <div className="card-body text-center">
            <span>Seguro para Autos</span>
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
          {step === 1 && <Step1 formik={formik} cities={cities} />}
          {step === 2 && <Step2 formik={formik} cities={cities} />}
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

export default CarsForm;
