import React from "react";
import Field from "app/modules/_forms/overview/Field";

export function Step2({ formik, onEdit }) {

  return (
    <div className="card-body container w-75">

      <div className="row row-cols-2">
        <p className="text-left inital-from__title mt-3 px-4"> Tus datos </p>
        <i></i>

        <Field form="fullname" name="Nombre" formik={formik} onEdit={onEdit} />
        <Field form="cellphone" name="Celular" formik={formik} onEdit={onEdit} />

        <Field form="identification" name="Identificación" formik={formik} onEdit={onEdit} />
        <Field form="email" name="Correo" formik={formik} onEdit={onEdit} />

        <Field form="issue_date" name="Fecha de expedición" formik={formik} onEdit={onEdit} />
        <Field form="gender" name="Género" formik={formik} onEdit={onEdit} />

        <Field form="birth_date" name="Fecha de nacimiento" formik={formik} onEdit={onEdit} />
        <Field form="ocupation" name="Ocupación" formik={formik} onEdit={onEdit} />

        <Field form="discount_code" name="Código de descuento" formik={formik} onEdit={onEdit} />
        <Field form="address" name="Dirección" formik={formik} onEdit={onEdit} />

      </div>

    </div>
  );
}
