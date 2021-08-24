import React from "react";
import Field from "app/modules/_forms/overview/Field";

export function Step2({ formik, onEdit }) {

  return (
    <div className="card-body container w-75">
      <p className="text-left inital-from__title mt-3 px-4"> Tus datos </p>
      <div className="row">

        <div className="col p-0">

          <div className="overview__line">
            <Field form="fullname" name="Nombre" formik={formik} onEdit={onEdit} />
            <Field form="email" name="Correo" formik={formik} onEdit={onEdit} />
            <Field form="cellphone" name="Celular" formik={formik} onEdit={onEdit} />
            <Field form="birthDate" name="Fecha de nacimiento" formik={formik} onEdit={onEdit} />
            <Field form="identification" name="Identificación" formik={formik} onEdit={onEdit} />

          </div>

        </div>

        <div className="col">

          <p className="text-left inital-from__title mt-3 px-4">  </p>

          <Field form="surname" name="Primer apellido" formik={formik} onEdit={onEdit} />
          <Field form="secondSurname" name="Segundo apellido" formik={formik} onEdit={onEdit} />
          <Field form="cellphone" name="Celular" formik={formik} onEdit={onEdit} />
          <Field form="licensePlate" name="Placa" formik={formik} onEdit={onEdit} />

        </div>

      </div>

    </div>
  );

}

