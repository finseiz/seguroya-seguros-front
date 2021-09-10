import { genderRadioTypes } from "app/helpers/radio-options";
import FormikInput from "app/modules/_forms/general/FormikInput";
import FormikRadioGroup from "app/modules/_forms/general/FormikRadioGroup";
import FormikSelect from "app/modules/_forms/general/FormikSelect";
import { useSelector } from "react-redux";
import { getCity, getDepartments, getDocumentTypes, getOccupations } from "../controller";

export function Step1({ formik }) {

  const { generalLists:{ occupations, documentTypes, departments } } = useSelector(state => state.healthInsurance)


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
    <div class="card-body">

      <div className="row">
        {renderInput("firstName", "Primer nombre")}
        {renderInput("middleName", "Segundo nombre")}
        {renderInput("surname", "Primer Apellido")}
        {renderInput("secondSurname", "Segundo Apellido")}
      </div>

      <div className="row mt-2">
        {renderSelect("documentType", "Tipo de documento",  getDocumentTypes(documentTypes) )}
        {renderInput("document", "Documento")}
        {renderSelect("occupation", "Ocupación",  getOccupations(occupations), "-6" )}
      </div>

      <div className="row mt-2">
        {renderInput("email", "Correo", "email")}
        {renderInput("address", "Direción de residencia")}
      </div>

      <div className="row mt-2">
        {renderInput("birthDate", "Fecha de nacimiento", "date")}
        {renderInput("phone", "Celular", "phone")}
      </div>

      <div className="row mt-2">
        {renderSelect("residenceDep", "Departamento de residencia", getDepartments(departments) )}
        {renderSelect("residenceCity", "Ciudad de residencia",  getCity(departments, formik.values.residenceDep )  )}
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

    </div>
  );
}
