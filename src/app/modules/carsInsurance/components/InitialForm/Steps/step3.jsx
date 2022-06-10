import React, { useState, useEffect, useMemo } from "react";
import FormikSelect from "app/modules/_forms/general/FormikSelect";
import Question from "app/modules/_forms/overview/Question";
import { getCirculationZone } from "../controller";
import { Spinner } from "react-bootstrap";
import FormikInput from "app/modules/_forms/general/FormikInput";

export function Step3({ formik, setCirculation }) {
  const [zoneLoading, setZoneLoading] = useState(false);
  const [circulationZone, setCirculationZone] = useState([]);

  const citiesList = useMemo(() => {
    if (formik.values.insuranceType === "km") {
      return circulationZone.map((element) => ({
        title: element["nombre"],
        value: element["id"],
      }));
    } else if (formik.values.insuranceType === "ar") {
      return circulationZone.map((element) => element["valor"]);
    }
    return [];
  }, [circulationZone, formik.values.insuranceType]);

  useEffect(() => {
    setZoneLoading(true);
    // formik.setFieldValue("circulationZone", "");
    getCirculationZone(formik.values.insuranceType).then((list) => {
      console.log(
        "🚀 ~ file: step3.jsx ~ line 28 ~ getCirculationZone ~ list",
        list
      );
      setCirculationZone(list);
      setZoneLoading(false);
      setCirculation([...list]);
    });
  }, [setCirculation, formik.values.insuranceType]);

  return (
    <div className="card-body text-center mx-5">
      <p className="text-left inital-from__title mt-2 text-center">
        Formulario de perfilamiento del cliente de Seguro de Autos (aplica
        términos y condiciones)
      </p>

      <Question
        question="¿Qué es lo más importante para ti, a la hora de adquirir un seguro para tu vehículo?"
        formik={formik}
        showError
        options={[
          { formikValue: "mostImportant", label: "El precio", value: "Precio" },
          {
            formikValue: "mostImportant",
            label: "La compañía de seguros",
            value: "Compañía",
          },
          {
            formikValue: "mostImportant",
            label:
              "Los valores agregados, como el servicio de conductor elegido o profesional",
            value: "Otros",
          },
        ]}
      />
      <Question
        question={
          "Estás buscando un seguro todo riesgo o un seguro por kilómetros (el valor del seguro depende de los kilometros recorridos en su vehíco) para tu vehículo?"
        }
        className="mt-4"
        formik={formik}
        showError
        options={[
          {
            formikValue: "insuranceType",
            label: "Seguro todo riesgo",
            value: "ar",
          },
          {
            formikValue: "insuranceType",
            label: "Seguro por kilometro",
            value: "km",
          },
        ]}
      />

      {!zoneLoading ? (
        formik.values.insuranceType === "km" ? (
          // <div></div>
          <FormikSelect
            formik={formik}
            className="w-50 m-auto"
            field="circulationZone"
            label="Zona de circulación"
            options={citiesList}
          />
        ) : (
          <FormikInput
            formik={formik}
            className="m-auto w-50"
            field="circulationZone"
            label="Zona de circulación"
            datalist={citiesList}
          />
        )
      ) : (
        <div className="mt-3">
          <Spinner animation="border" role="status" />
        </div>
      )}

      <Question
        question={
          "¿Autorizo el tratamiento de mis datos personales a Seguro Ya?"
        }
        className="mt-4"
        formik={formik}
        showError
        options={[
          { formikValue: "dataAuthorization", label: "Si", value: true },
          { formikValue: "dataAuthorization", label: "No", value: false },
        ]}
      />
    </div>
  );
}
