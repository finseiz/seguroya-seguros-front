import FormikInput from "app/modules/_forms/general/FormikInput";
import FormikRadioGroup from "app/modules/_forms/general/FormikRadioGroup";
import FormikSelect from "app/modules/_forms/general/FormikSelect";
import { genderRadioTypes } from "app/helpers/radio-options";
import { useEffect } from "react";
import { CarsIdentificationsTypes } from "app/helpers/selet-options";

export function Step1({ formik, countries }) {

  useEffect(() => {
    formik.setFieldValue("firstsubmit", false);
  }, [])

  return (
    <div className="card-body">

      <div className="row">

        <div className="col-6 p-0 pr-2">
          <FormikInput field="fullname" formik={formik} label="Nombres" />
        </div>

        <div className="col p-0 pr-2">
          <FormikInput field="surname" formik={formik} label="Primer apellido" />
        </div>

        <div className="col p-0 pr-2">
          <FormikInput field="secondSurname" formik={formik} label="Segundo apellido" />
        </div>

      </div>

      <div className="row mt-2">

        <div className="col-6 p-0 pr-2">
          <FormikInput field="email" formik={formik} label="Correo" type="email" />
        </div>

        <div className="col p-0 pr-2">
          <FormikInput field="cellphone" formik={formik} label="Celular" type="number" />
        </div>

        <div className="col p-0 pr-2">
          <FormikInput field="birthDate" formik={formik} label="Fecha de nacimiento" type="date" />
        </div>

      </div>

      <div className="row mt-2">

        <div className="col p-0 pr-2">
          <FormikSelect
            field="country" formik={formik} label="País"
            // options={countries.map(country => ({ title: country["nombre"], value: country["id"] }))}
            options={[ { title: "Colombia", value: "0" }]}
            disabled = {true}
          />
        </div>

        <div className="col p-0 pr-2">
          <FormikSelect
            field="identificationType" formik={formik} label="Tipo de identification"
            options={CarsIdentificationsTypes}
          />
        </div>

        <div className="col p-0 pr-2">
          <FormikInput field="identification" formik={formik} label="Identificación" />
        </div>

        <div className="col p-0 pr-2">
          <FormikInput field="licensePlate" formik={formik} label="Placa del vehículo" />
        </div>

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

        <div className="col p-0 pr-2">
          <FormikInput field="address" formik={formik} label="Dirección" />
        </div>

      </div>

    </div>
  );
}