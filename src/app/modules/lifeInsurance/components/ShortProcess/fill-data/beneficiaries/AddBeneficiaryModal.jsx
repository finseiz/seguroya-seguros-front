import React, { useEffect } from "react";
import { useFormik } from "formik";
import BaseModal from "app/components/UI/baseModal";
import { beneficiariesSchema, beneficiariesValues } from "./formik";
import FormikInput from "app/modules/_forms/general/FormikInput";
import FormikSelect from "app/modules/_forms/general/FormikSelect";
import FormikRadioGroup from "../../../../../_forms/general/FormikRadioGroup";
import { genderRadioTypes } from "app/helpers/radio-options";
import { getBeneficiariesDocumentTypes, getKinshipList } from "../../controller";
import { useSelector } from "react-redux";

function AddBeneficiary({ state, handleClose, handleSubmit }) {

  const { general:{lists} } = useSelector(state => state.lifeInsurance)
  const { initialValues, open } = state;

  const isEditing = initialValues.participation;

  const formik = useFormik({
    initialValues: isEditing ? initialValues : beneficiariesValues,
    enableReinitialize: true,
    validationSchema: beneficiariesSchema,
    onSubmit: ( values ) => {
      handleSubmit(values, initialValues.index);
      formik.resetForm();
    },
  });

  return (
    <BaseModal open={open} handleClose={handleClose} size="lg" centered>

      <form onSubmit={formik.handleSubmit}>

        <p className="process__beneficiares-title">Incribir beneficiario</p>

        <div className="row">

          {/* Left form */}
          <div className="col p-0">

            <div className="row">
              <div className="col p-0 pr-2">
                <FormikInput formik={formik} field="firstName" label="Primer nombre" />
              </div>
              <div className="col p-0">
                <FormikInput formik={formik} field="middleName" label="Segundo nombre" />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col p-0 pr-2">
                <FormikInput formik={formik} field="surname" label="Apellido" />
              </div>
              <div className="col p-0">
                <FormikInput formik={formik} field="secondSurname" label="Segundo apellido" />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col p-0 pr-2">
                <FormikInput formik={formik} field="cellphone" type="phone" label="Celular" />
              </div>
              <div className="col p-0">
                <FormikInput formik={formik} field="birthDate" type="date" label="Edad" />
              </div>
            </div>

            <div className="mt-2">
              <FormikRadioGroup
                formik={formik}
                field="gender"
                label="Género"
                options={genderRadioTypes}
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
                  label="Parentescoo"
                  options={getKinshipList(lists)}
                />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col p-0">
                <FormikSelect
                  formik={formik}
                  field="documentType"
                  label="Tipo de documento"
                  options={getBeneficiariesDocumentTypes(lists)}
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
            {
              isEditing ? 
              "Actualizar beneficiario/a":
              "Añadir beneficiario/a"
            }
          </button>
        </div>

      </form>
    </BaseModal>
  );
}

export default AddBeneficiary;
