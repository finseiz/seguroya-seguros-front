import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { Step1, Step2, Step3 } from "./Steps";
import { actions } from "../../redux";
import { CarsSchema, initialValues } from "./helpers/formik";
import { toAbsoluteUrl } from "theme/helpers/AssetsHelpers";
import { ProgressIndicator } from "app/components/process/ProgressIndicator";
import { CarsKmProcessSelectPlanRoute, CarsProcessSheduleAppointmentRoute } from "app/routes/childs/Cars/routes";
import { getCountries } from "./controller";

function CarsForm() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [step, setStep] = React.useState(1);
  const [countries, setCountries] = useState([]);
  const [circulationZone, setCirculationZone] = useState([]);

  useEffect(() => {
    getCountries().then( list => setCountries(list) );     
    dispatch(actions.restartState());
    
  }, [])

  const formik = useFormik({
    initialValues,
    validationSchema: CarsSchema,
    onSubmit: (values) => {
      if (step === 1) {
        setStep((prevStep) => prevStep + 1)
        dispatch(actions.setInitialProgress(50));
        formik.setFieldValue("firstsubmit", true);
      } else {
        if ( formik.values.insuranceType === "ar" ){
          const value = formik.values.circulationZone;
          const element = circulationZone.find( e => e.valor === value )
          if ( element === undefined ) {
            formik.setFieldValue("circulationZone", "");
            return;
          }else{
            values.circulationZone = element["codigo"]
          }
        }
        dispatch(actions.editDataToSend(values));
        if ( formik.values.insuranceType === "ar" )          
          history.push(CarsProcessSheduleAppointmentRoute);
        else   
               
          history.push(CarsKmProcessSelectPlanRoute);
      }
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
        formik.setFieldError("insuranceType", "");
        formik.setFieldError("data_processing_licence", "");
        break;
      case 3:
        formik.handleSubmit();
        break;
      default:
        break;
    }
  }

  const backBtnAction = () => {
    setStep((prevStep) => prevStep - 1);
    switch (step) {
      case 2:
        dispatch(actions.setInitialProgress(0));
        formik.setFieldValue("firstsubmit", false);
        break;
      case 3:
        dispatch(actions.setInitialProgress(50));
        break;
      default:
        break;
    }
  }

  return (
    <section className="w-100 px-1">
      <form onSubmit={formik.handleSubmit}>

        <div className="text-center">
          <p className="insurance-name m-0">Seguro de Autos</p>
          <p className="insurance-desc">Buscamos hacer más fácil y cercano el mundo de los seguros siendo tu asesor digital 24/7</p>
        </div>

        { /** Step section */}
        <div className="card inital-from__box inital-from__shadow">
          <div className="card-body text-center">

            <div className="small-icon">
              <img
                src={toAbsoluteUrl("/media/icons/car.svg")}
                alt="life-icon"
              />
            </div>
            <p className="m-1 initial-form__insurance-name-short" >Seguro para Autos</p>
            <p className="initial-form__insurance-sentense" >Para comenzar, cuéntanos sobre ti...</p>

            <ProgressIndicator insuranceReduxName="carsInsurance" />

          </div>
        </div>

        {/* Form steps */}
        <div className="w-100 inital-from__box mt-3">
          {step === 1 && <Step1 formik={formik} countries={countries} />}
          {step === 2 && <Step2 formik={formik} onEdit={backBtnAction} />}
          {step === 3 && <Step3 formik={formik} setCirculation={setCirculationZone} />}
        </div>

        {/* Bottom buttons */}
        <div className="text-center mt-3">

          {/* Back btn */}
          {[2, 3].includes(step) && (
            <button
              type="button"
              onClick={backBtnAction}
              className="btn btn-primary primary-button mx-3"
            >
              <span>Atras</span>
            </button>
          )}

          {/* Continue btn */}
          <button
            type="button"
            onClick={continueBtn}
            className="btn btn-primary primary-button mx-3"
          >
            <span>Continuar</span>
          </button>
        </div>

      </form>
    </section>
  );
}

export default CarsForm;
