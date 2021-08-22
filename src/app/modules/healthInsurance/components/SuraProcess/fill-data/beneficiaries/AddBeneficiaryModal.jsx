import React from "react";
import { useFormik } from "formik";
import BaseModal from "app/components/UI/baseModal";
import { beneficiariesSchema, beneficiariesValues } from "./formik";
import FormikInput from "app/modules/_forms/general/FormikInput";
import FormikSelect from "app/modules/_forms/general/FormikSelect";
import FormikRadioGroup from "../../../../../_forms/general/FormikRadioGroup";

function AddBeneficiary({ open, handleClose, handleSubmit }) {

  const formik = useFormik({
    initialValues: beneficiariesValues,
    validationSchema: beneficiariesSchema,
    onSubmit: (values) => {
      handleSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <BaseModal open={open} handleClose={handleClose} size="lg" centered>

      <form onSubmit={formik.handleSubmit}>

        <p className="process__beneficiares-title text-center">Añadir asegurado/a</p>

        <div className="row row-cols-3">

          <div className="col px-2">

            <FormikInput formik={formik} field="name" label="Nombres" />

            <div className="mt-2">
              <FormikSelect
                formik={formik}
                field="document_type"
                label="Tipo de documento"
                options={[
                  { title: "Cédula", value: "CC" },
                  { title: "TI", value: "TI" },
                  { title: "Pasaporte", value: "PA" },
                ]}
              />
            </div>

          </div>

          <div className="col px-2">
            <FormikInput formik={formik} field="lastname" label="Apellidos" />
            <div className="mt-2">
              <FormikInput formik={formik} field="document" label="Número de documento" />
            </div>
          </div>

          <div className="col px-2">
            <FormikSelect
              formik={formik}
              field="kinship"
              label="Tipo de parentesco"
              options={[
                { title: "Hija", value: "CC" },
                { title: "Padre", value: "TI" },
              ]}
            />
            <div className="mt-2">
              <FormikInput formik={formik} field="birthdate" type="date" label="Fecha de Nacimiento" />
            </div>
          </div>

        </div>

        <div className="text-center mt-5">
          <button
            type="submit"
            className="btn btn-primary process__process-table-btn mt-2"
          >
            Añadir beneficiario/a
          </button>
        </div>

      </form>
    </BaseModal>
  );
}

export default AddBeneficiary;
