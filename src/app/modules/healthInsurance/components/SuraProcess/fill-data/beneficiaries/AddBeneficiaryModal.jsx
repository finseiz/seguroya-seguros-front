import React from "react";
import { useFormik } from "formik";
import BaseModal from "app/components/UI/baseModal";
import { beneficiariesSchema, beneficiariesValues } from "./formik";
import FormikInput from "app/modules/_forms/general/FormikInput";
import FormikSelect from "app/modules/_forms/general/FormikSelect";
import { useSelector } from "react-redux";
import { getDocumentTypes, getKinship } from "../../controller";
import { genderRadioTypes } from "app/helpers/radio-options";
import FormikRadioGroup from "app/modules/_forms/general/FormikRadioGroup";


function AddBeneficiary({ open, handleClose, handleSubmit }) {

  const { generalLists:{ documentTypes}, plans, selectedPlan } = useSelector(state => state.healthInsurance)

  const formik = useFormik({
    initialValues: beneficiariesValues,
    enableReinitialize: true,
    validationSchema: beneficiariesSchema,
    onSubmit: (values) => {
      handleSubmit(values);
      formik.resetForm();
    },
  });

  const renderInput = (field, label, type = "text", col="") => (
    <div className={`col${col} p-0 pr-2`}>
      <FormikInput field={field} formik={formik} label={label} type={type} />
    </div>
  )

  const renderSelect = (field, label, options, col="") => (
    <div className={`col${col} p-0 pr-2`}>
      <FormikSelect
        field={field} formik={formik} label={label} options={options}
      />
    </div>
  )

  return (
    <BaseModal open={open} handleClose={handleClose} size="lg" centered>

      <form onSubmit={formik.handleSubmit}>

        <p className="process__beneficiares-title text-center">Añadir asegurado/a</p>

        <div className="row">

          { renderInput("firstName", "Primer nombre") }
          { renderInput("middleName", "Segundo nombre") }
          { renderInput("surname", "Primer apellido") }
          { renderInput("secondSurname", "Segundo apellido") }

        </div>

        <div className="row mt-2"> 
          { renderSelect("documentType", "Tipo de documento", getDocumentTypes(documentTypes)) }
          { renderInput("document", "Documento") }
        </div>

        <div className="row mt-2"> 
          { renderSelect("kinship", "Parentesco", getKinship(plans, selectedPlan)) }
          { renderInput("birthDate", "Fecha de nacimiento", "date") }
        </div>

        <div className="row mt-2">

          <div className="col-6 p-0 pr-2">
            <FormikRadioGroup
              formik={formik}
              field="gender"
              label="Género"
              options={genderRadioTypes}
            />
          </div>

          </div>

        <div className="text-center mt-5">
          <button
            type="submit"
            className="btn btn-primary process__process-table-btn mt-2"
          >
            Añadir asegurado/a
          </button>
        </div>

      </form>
    </BaseModal>
  );
}

export default AddBeneficiary;
