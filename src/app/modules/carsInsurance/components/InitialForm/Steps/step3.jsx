import React, { useState, useEffect } from "react";
import FormikSelect from "app/modules/_forms/general/FormikSelect";
import Question from "app/modules/_forms/overview/Question";
import { getCirculationZone } from "../controller";
import { Spinner } from "react-bootstrap";

export function Step3({ formik }) {

  const [zoneLoading, setZoneLoading] = useState(false);
  const [circulationZone, setCirculationZone] = useState([]);

  useEffect(() => {
    setZoneLoading(true);
    getCirculationZone(formik.values.insuranceType)
      .then((list) => {
        setCirculationZone(list)
        setZoneLoading(false);
      })
  }, [formik.values.insuranceType])

  return (

    <div className="card-body text-center">

      <p className="text-left inital-from__title mt-2 text-center">
        Formulario de perfilamiento del cliente de Seguro de Autos (aplica términos y condiciones)
      </p>

      <Question
        question="¿Qué es lo más importante para ti en la compra del seguro?"
        formik={formik}
        showError
        options={[
          { formikValue: "current_insurance", label: "El precio", value: "na" },
          { formikValue: "current_insurance", label: "La compañía", value: "tc" },
          { formikValue: "current_insurance", label: "Valores agregados como el conducto elegido", value: "ahorros" },
        ]}
      />

      <Question
        question="¿Qué es lo más importante para ti en la compra del seguro?"
        className="mt-4"
        formik={formik}
        showError
        options={[
          { formikValue: "current_insurance", label: "Menos que antes", value: "na" },
          { formikValue: "current_insurance", label: "Igual que antes", value: "tc" },
          { formikValue: "current_insurance", label: "Más que antes", value: "ahorros" },
        ]}
      />

      <Question
        question="¿Qué tanto condujiste tu auto en pos pandemia?"
        className="mt-4"
        formik={formik}
        showError
        options={[
          { formikValue: "auto_drive", label: "Si", value: "yes" },
          { formikValue: "auto_drive", label: "No", value: "no" },
        ]}
      />

      <Question
        question={"¿Autorizo el tratamiento de mis datos personales a Seguro Ya?"}
        className="mt-4"
        formik={formik}
        showError
        options={[
          { formikValue: "data_processing_licence", label: "Si", value: true },
          { formikValue: "data_processing_licence", label: "No", value: false },
        ]}
      />

      <Question
        question={"¿Deseas comprar un seguro por kilometro o un seguro todo riesgo?"}
        className="mt-4"
        formik={formik}
        showError
        options={[
          { formikValue: "insuranceType", label: "Seguro todo riesgo", value: "ar" },
          { formikValue: "insuranceType", label: "Seguro por kilometro", value: "km" },
        ]}
      />

      {!zoneLoading ?
        <FormikSelect
          formik={formik}
          className="w-50 m-auto"
          field="circulationZone"
          label="Zona de circulación"
          options={circulationZone.map((element) => ({ title: element["nombre"], value: element["id"] }))}
        /> :
        (<div className="mt-3">
          <Spinner animation="border" role="status" />
        </div>)
      }

      {/* { title: "Selecciona una opción", value: "" }, */}

    </div>
  );
}
