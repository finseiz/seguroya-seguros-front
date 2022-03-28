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
        <div className="col" style={{display: "grid", gap: "1rem"}}>
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

          {
            !formik.values.isNew && (
              <>
                <div className="col p-0">
                  <FormikInput field="carModel" formik={formik} label="Modelo del vehículo" />
                </div>
                <div className="col p-0">
                  <FormikInput field="protectionDevice" formik={formik} label="Dispositivo de protección" />
                </div>
                <div className="col p-0">
                  <FormikInput field="armorValue" formik={formik} label="Valor blindaje" />
                </div>
                <div className="col p-0">
                  <FormikInput field="insuredValue" formik={formik} label="Valor Asegurado" />
                </div>
              </>
            )
          }

          {
            !formik.values.isBorrowerOwner &&
            (
              <>
                <div className="col-6 p-0 pr-3">
                  <FormikSelect
                    field="identificationOwnerType" 
                    formik={formik} 
                    label="Tipo de documento del propietario"
                    options={CarsIdentificationsTypes}
                  />
                 </div>
                 <div className="col-6 p-0">
                  <FormikInput 
                    field="ownerBirthDate" 
                    formik={formik} 
                    label="Fecha de nacimiento del propietario" 
                    type="date" />
                 </div>
              </>
            )
          }


        </div>

        <div className="col" style={{display:"grid", gap: "1rem"}}>

          <FormikSelect
            field="city" formik={formik} label="Ciudad"
            // options={countries.map(country => ({ title: country["nombre"], value: country["id"] }))}
            options={[{ title: "Colombia", value: "0" }]}
            disabled={true}
          />

          <FormikInput field="surnames" formik={formik} label="Apellidos" />
          
          <FormikInput field="email" formik={formik} label="Correo electrónico" type="email"/>

          <FormikInput field="discountCode" formik={formik} label="Tengo un código de descuento (Opcional)"/>

          {
            !formik.values.isNew && (
              <>
                <div className="col p-0">
                  <FormikInput field="carYear" formik={formik} label="Año de auto" />
                </div>
                <div className="col p-0">
                  <FormikInput field="fasecoldaCode" formik={formik} label="Código fasecolda" />
                </div>
                <div className="col p-0">
                  <FormikInput field="accessoryValue" formik={formik} label="Valor de accesorios" />
                </div>
                <div className="col p-0">
                  <FormikInput field="gasSystemValue" formik={formik} label="Valor sistema a gas" />
                </div>
              </>
            )
          }

          <FormikRadioGroup
            formik={formik}
            field="isBorrowerOwner"
            label="¿El tomador es el mismo conductor?"
            options={PositiveOrNegativeOption}
          />

          { !formik.values.isBorrowerOwner &&
            (
              <>
                <div className="col-6 p-0">
                  <FormikInput 
                    field="identificationOwnerNumber" 
                    formik={formik} 
                    label="Número de documento del propietario" />
                 </div>
              </>
            )
          }



        </div>

      </div>

    </div >
  );
}