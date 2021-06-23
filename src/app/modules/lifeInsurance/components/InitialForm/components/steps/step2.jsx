import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import Field from "app/modules/_forms/overview/Field";

const getObject = (values) => {
  let ans = {};
  for (let key in values) {
    ans[key] = false;
  }
  return ans;
};

export function Step2({ formik }) {
  const [displayFields, setDisplayFields] = React.useState( getObject(formik.values) );

  console.log(displayFields);

  return (
    <div className="card-body container w-75">

      <p className="text-left inital-from__title mt-3"> Tus datos </p>

      <div className="row row-cols-2">
          <Field form="fullname" name="Nombre" formik={formik} />
          <Field form="cellphone" name="Celular" formik={formik} />

          <Field form="identification" name="Identificación" formik={formik} />
          <Field form="email" name="Correo" formik={formik} />

          <Field form="issue_date" name="Fecha de expedición" formik={formik} />
          <Field form="gender" name="Género" formik={formik} />

          <Field form="birth_date" name="Fecha de nacimiento" formik={formik} />
          <Field form="ocupation" name="Ocupación" formik={formik} />

          <Field form="discount_code" name="Código de descuento" formik={formik} />
          <Field form="address" name="Dirección" formik={formik} />

      </div>

    </div>
  );
}
