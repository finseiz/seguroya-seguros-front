import FormikInput from "app/modules/_forms/general/FormikInput";
import FormikRadioGroup from "app/modules/_forms/general/FormikRadioGroup";
import FormikSelect from "app/modules/_forms/general/FormikSelect";
import { PositiveOrNegativeOption } from "app/helpers/radio-options";
import { useEffect } from "react";
import { CarsIdentificationsTypes } from "app/helpers/selet-options";

export function Step1({ formik, countries }) {

  useEffect(() => {
    formik.setFieldValue("firstsubmit", false);
  }, [])

  return (
    <div className="card-body">

      <div className="row">
        <div className="col" style={{display: "grid", gap: "0.3rem"}}>
          <FormikRadioGroup
            formik={formik}
            field="isNew"
            label="¿Este vehículo es nuevo?"
            options={PositiveOrNegativeOption}
          />

          <FormikInput field="licensePlate" formik={formik} label="Ingresa tu placa" />

          <FormikInput field="names" formik={formik} label="Nombres" />

          <div className="row p-0">
            
            <div className="col-6 p-0 pr-3">
              <FormikInput field="cellphone" formik={formik} label="Celular" type="number" />
            </div>

            <div className="col-6 p-0">
              <FormikInput field="birthDate" formik={formik} label="Fecha de nacimiento" type="date" />
            </div>

          </div>

          <div className="row">
            <div className="col-6 p-0 pr-3">
              <FormikSelect
                field="identificationType" formik={formik} label="Tipo de documento"
                options={CarsIdentificationsTypes}
              />
            </div>
            
            <div className="col-6 p-0">
              <FormikInput field="identification" formik={formik} label="Número de documento" />
            </div>
          </div>

        </div>

        <div className="col" style={{display:"grid"}}>
          <FormikSelect
            field="country" formik={formik} label="Ciudad"
            // options={countries.map(country => ({ title: country["nombre"], value: country["id"] }))}
            options={[{ title: "Colombia", value: "0" }]}
            disabled={true}
          />

          <FormikInput field="surnames" formik={formik} label="Apellidos" />
          
          <FormikInput field="email" formik={formik} label="Correo electrónico" type="email"/>

          <FormikInput field="discountCode" formik={formik} label="Tengo un código de descuento (Opcional)"/>

          <FormikRadioGroup
            formik={formik}
            field="isNew"
            label="¿Usted es la persona que aparece en la tarjeta de propiedad?"
            options={PositiveOrNegativeOption}
          />
        </div>

      </div>

    </div >
  );
}