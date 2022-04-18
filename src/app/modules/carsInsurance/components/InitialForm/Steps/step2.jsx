import React from "react";
import Field from "app/modules/_forms/overview/Field";
import { Formik } from "formik";

export function Step2({ formik, onEdit }) {
  console.log(formik.values);
  return (
    <div className="card-body container w-75">
      <div className="row">
        <div className="col p-0">
          <p className="text-left inital-from__title mt-3 px-4"> Tus datos </p>
          <Field
            combined="names,surnames"
            name="Nombre"
            formik={formik}
            onEdit={onEdit}
          />
          <Field
            form="identification"
            name="Identificación"
            formik={formik}
            onEdit={onEdit}
          />
          <Field
            form="birthDate"
            name="Fecha de nacimiento"
            formik={formik}
            onEdit={onEdit}
          />
          <Field
            form="cellphone"
            name="Celular"
            formik={formik}
            onEdit={onEdit}
          />
          <Field form="email" name="Correo" formik={formik} onEdit={onEdit} />
          <Field
            form="licensePlate"
            name="Placa"
            formik={formik}
            onEdit={onEdit}
          />

          {formik.values.discountCoude && (
            <Field
              form="discountCode"
              name="Código descuento"
              formik={formik}
              onEdit={onEdit}
            />
          )}
        </div>

        <div className="overview__line"></div>

        <div className="col" style={{ display: "grid" }}>
          <p className="text-left inital-from__title mt-3 px-4"> Tu Carro</p>
          <Field
            form="licensePlate"
            name="Placa"
            formik={formik}
            onEdit={onEdit}
          />

          {formik.values.brand && (
            <Field form="brand" name="Marca" formik={formik} onEdit={onEdit} />
          )}
          {formik.values.carModel && (
            <Field
              form="carModel"
              name="Modelo"
              formik={formik}
              onEdit={onEdit}
            />
          )}
          {formik.values.status && (
            <Field
              form="status"
              name="Estado"
              formik={formik}
              onEdit={onEdit}
            />
          )}
          {formik.values.type && (
            <Field form="type" name="Tipo" formik={formik} onEdit={onEdit} />
          )}
          {formik.values.city && (
            <Field
              form="city"
              name="Ciudad de circulación"
              formik={formik}
              onEdit={onEdit}
            />
          )}
        </div>
      </div>
    </div>
  );
}
