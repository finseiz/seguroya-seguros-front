import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import BaseSection from "app/components/UI/baseSection";

const initialValues = {};

export default function UploadDocuments() {
  const formik = useFormik({
    initialValues,
    //validationSchema: schema,
    onSubmit: (values, actions) => {      
      setTimeout(async () => {
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
      <BaseSection></BaseSection>
    </form>
  );
}
