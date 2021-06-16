import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import BaseSection from "app/components/UI/baseSection";

const initialValues = {};

export default function Schedule() {
  const handleSubmit = async () => {
    const config = {
      method: "POST",
      body: JSON.stringify({
        mailTomador: "test@gmail.com",
        celTomador: "3112223344",
        dirTomador: "Av El Dorado 68B-31",
        ciuTomador: 14000,
        nomConductor: "Juan Perez",
        sexoConductor: "M",
        fecNacConductor: "1979-01-01",
        placaVeh: "EMR901",
        numLiquidacion: 29744875608,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    };
    try {
      const response = await fetch(
        "http://localhost:8080/api/segurosbolivar/cotizacion",
        config
      );
      if (response.ok) {
        const plans = await response.json();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues,
    //validationSchema: schema,
    onSubmit: (values, actions) => {
      console.log(values);
      setTimeout(async () => {
        await handleSubmit();
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

  return (
    <form onSubmit={formik.handleSubmit}>
      <BaseSection
        title="Agenda tu cita de inspección"
        actions={actionsButton}
        loading={formik.isSubmitting}
      >
        <div className="form-group">
          <label>¿Cómo quieres que sea tu cita de inspección?</label>
          <div className="form-row">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="terms_and_conditions"
                id="radios1"
                value="yes"
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="radios1">
                Presencial
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="terms_and_conditions"
                id="radios2"
                value="no"
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="radios2">
                Virtual - Tu tomas las fotos y nos las envías
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="terms_and_conditions"
                id="radios2"
                value="no"
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="radios2">
                Virtual Asistida - Te llamamos para explicarte el proceso
              </label>
            </div>
          </div>
        </div>
      </BaseSection>
    </form>
  );
}
