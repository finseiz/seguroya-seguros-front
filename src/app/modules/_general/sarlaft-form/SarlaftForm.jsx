import React, { useState } from "react";
import { useFormik } from "formik";

import BaseSection from "app/components/UI/baseSection";
import { sarlaftInitialValues } from "./formik";
import FormikInput from "app/modules/_forms/general/FormikInput";
import FormikSelect from "app/modules/_forms/general/FormikSelect";
import FormikRadioGroup from "app/modules/_forms/general/FormikRadioGroup";
import { requestType } from "app/helpers/sarlaft-const";

export const SarlaftForm = ({ }) => {

  const [cities, setCities] = useState([
    { title: "Cali, Valle", value: "cali" },
    { title: "Bogotá, Cundinamarca", value: "bog" },
  ]);

  const formik = useFormik({
    initialValues: sarlaftInitialValues,
    //validationSchema: schema,
    onSubmit: (values, actions) => {
      console.log(values);
      setTimeout(() => {
        actions.setSubmitting(false);
      }, 1000);
    },
  });

  const actionsButton = [
    {
      text: "Continuar",
      className: "btn btn-primary primary-button",
      type: "submit",
    },
  ];

  const simpleField = (field, label, type = "text") => {
    return (
      <div className="col px-0 py-2">
        <div className="mr-2">
          <FormikInput formik={formik} field={field} label={label} type={type} labelClass="text-dark" />
        </div>
      </div>
    )
  }

  const select = (field, label, options) => {
    return (
      <div className="col px-0 py-2">
        <div className="mr-2">
          <FormikSelect formik={formik} field={field} label={label} labelClass="text-dark"
            options={options}
          />
        </div>
      </div>
    )
  }

  const ties = (field, title) => {
    return (
      <div className="row align-items-center mt-2">
        <div className="col-md-auto pl-0 pr-5">
          { title }
        </div>

        <div className="col">
          <FormikRadioGroup
            formik={formik}
            field={field}
            options={[
              { title: "Familiar", value: "F" },
              { title: "Comercial", value: "C" },
              { title: "Laboral", value: "L" },
              { title: "Otra", value: "Ot" },
            ]}
          />
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <BaseSection
        title="Formulario SARLAFT - Sistema de Administración del Riesgo de Lavado de Activos y de la Financiación del Terrorismo"
        description={(
          <div>
            <p>
              Razón por la cual hay que llenar este formulario en unas muy breves palabras. Ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            </p>
            <p> Tomará aproximadamente: <b>5 minutos.</b> </p>
          </div>
        )}
        loading={formik.isSubmitting}
      >

        <p className="sarlaft-section-title"> 1. Datos de vinculación </p>
        <div className="row row-cols-3">

          {simpleField("date", "Fecha Diligenciamiento", "date")}

          {select("city", "Lugar de expedición", cities)}

          {simpleField("office", "Sucursal")}

          {select("requestType", "Tipo de Solicitud", requestType)}

        </div>

        <p className="sarlaft-section-subtitle text-left mt-3"> Clase de vinculación </p>
        <FormikRadioGroup
          formik={formik}
          field="vinculationType"
          options={[
            { title: "Tomador", value: "T" },
            { title: "Asegurado", value: "A" },
            { title: "Beneficiario", value: "B" },
            { title: "Afianzado", value: "Af" },
            { title: "Proveedor", value: "Pr" },
            { title: "Intermediario", value: "In" },
            { title: "Otra", value: "O" },
          ]}
        />

        <p className="sarlaft-section-subtitle text-left mt-4"> Indique los vínculos existentes entre tomador-asegurado </p>
        { ties( "tie_1", "Tomador - Asegurado" ) }
        { ties( "tie_2", "Beneficiario - Tomador" ) }
        { ties( "tie_3", "Asegurado - Beneficiario" ) }


      </BaseSection>

      <BaseSection
        actions={actionsButton}
      >
        ultimo
      </BaseSection>
    </form>
  );
}