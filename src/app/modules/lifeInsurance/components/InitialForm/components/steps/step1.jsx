import FormikInput from "app/modules/_forms/general/FormikInput";
import FormikRadioGroup from "app/modules/_forms/general/FormikRadioGroup";
import FormikSelect from "app/modules/_forms/general/FormikSelect";
import { useSelector } from "react-redux";
import { getCity, getDepartments, getDocumentTypes, getOccupations } from "../../controller";
import { genderRadioTypes } from "app/helpers/radio-options";

export function Step1({ formik }) {

  const { general: { lists, departments } } = useSelector(state => state.lifeInsurance)

  const renderInput = (field, label, type = "text") => (
    <div className="col p-0 pr-2">
      <FormikInput field={field} formik={formik} label={label} type={type} />
    </div>
  )

  const renderSelect = (field, label, options) => (
    <div className="col p-0 pr-2">
      <FormikSelect
        field={field} formik={formik} label={label} options={options}
      />
    </div>
  )

  return (
    <div className="card-body">

      <div className="row">
        {renderInput("firstName", "Primer nombre")}
        {renderInput("middleName", "Segundo nombre")}
        {renderInput("surname", "Primer Apellido")}
        {renderInput("secondSurname", "Segundo Apellido")}
      </div>

      <div className="row mt-2">
        {renderSelect("documentType", "Tipo de documento", getDocumentTypes(lists))}
        {renderInput("document", "Documento")}
        {renderInput("phone", "Celular")}
        {renderSelect("occupation", "Ocupación", getOccupations(lists))}
      </div>

      <div className="row mt-2">
        {renderInput("email", "Correo", "email")}
        {renderInput("address", "Direción de residencia")}
      </div>

      <div className="row mt-2">
        {renderInput("birthDate", "Fecha de nacimiento", "date")}
        {renderInput("expeditionDate", "Fecha de expedición de documento", "date")}
      </div>

      <div className="row mt-2">
        {renderSelect("birthDep", "Departamento de nacimiento", getDepartments(departments))}
        {renderSelect("birthCity", "Ciudad de nacimiento", getCity(departments, formik.values.birthDep))}
        {renderSelect("residenceDep", "Departamento de residencia", getDepartments(departments))}
        {renderSelect("residenceCity", "Ciudad de residencia", getCity(departments, formik.values.residenceDep))}
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

// "primerApellido",
// "primerNombre",
// "segundoApellido",
// "segundoNombre",
// "tipoDocumento"
// "numeroDocumento",
// "celular",
// "ocupacion":
// "email",
// "direccion",
// "fechaExpedicion",
// "fechaNacimiento",
// "genero":
// "indexCiudadNac":
// "indexCiudadRes":
// "indexDepNac":
// "indexDepRes":
