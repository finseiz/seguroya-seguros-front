import React from "react";
import Field from "app/modules/_forms/overview/Field";

export function Step2({ formik, onEdit }) {

  return (
    <div className="card-body container w-75">

      <div className="row">

        <div className="col">
          <p className="text-left inital-from__title mt-3 px-4"> Tus datos </p>

          <div className="overview__line">
            <Field form="name" name="Nombre" formik={formik} onEdit={onEdit} />
            <Field form="document_type" name="Tipo de documento" formik={formik} onEdit={onEdit} />
            <Field form="identification" name="Identificación" formik={formik} onEdit={onEdit} />

          </div>

        </div>

        <div className="col">

          <p className="text-left inital-from__title mt-3 px-4"> Tus carro </p>

          <Field form="license_plate" name="Placa" formik={formik} onEdit={onEdit} />
          <Field form="city" name="Ciudad" formik={formik} onEdit={onEdit} />
          <Field form="cellphone" name="Telefono" formik={formik} onEdit={onEdit} />

        </div>

      </div>

    </div>
  );

}
