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
    onSubmit: ( values ) => {
      handleSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <BaseModal open={open} handleClose={handleClose} size="lg" centered>

      <form onSubmit={formik.handleSubmit}>

        <p className="process__beneficiares-title">Beneficiario #</p>

        <div className="row">

          {/* Left form */}
          <div className="col p-0">

            <FormikInput formik={formik} field="fullname" label="Nombre completo" />

            <div className="row mt-2">
              <div className="col p-0 pr-2">
                <FormikInput formik={formik} field="cellphone" type="number" label="Celular" />
              </div>
              <div className="col p-0">
                <FormikInput formik={formik} field="birth_date" type="date" label="Edad" />
              </div>
            </div>

            <div className="mt-2">
              <FormikRadioGroup
                formik={formik}
                field="gender"
                label="Género"
                options={[
                  { title: "Femenino", value: "F" },
                  { title: "Masculino", value: "M" }
                ]}
              />
            </div>

          </div>

          {/* Right form */}
          <div className="col">

            <div className="row">
              <div className="col p-0">
                <FormikSelect
                  formik={formik}
                  field="kinship"
                  label="Parentesco"
                  options={[
                    { title: "Hijo", value: "H" },
                    { title: "Padre", value: "P" },
                  ]}
                />
              </div>
              <div className="col">
                <FormikInput formik={formik} field="age" label="Edad" />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col p-0">
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
              <div className="col">
                <FormikInput formik={formik} field="identification" label="Identificación" />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-6 p-0">
                <FormikInput formik={formik} field="participation" label="Porcentaje de participación" type="number" />
              </div>
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
