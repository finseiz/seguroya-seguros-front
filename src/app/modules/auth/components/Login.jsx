import React, { useState } from "react";
import FormikInput from "app/modules/_forms/general/FormikInput";
import { useFormik } from "formik";
import { toAbsoluteUrl } from "theme/helpers/AssetsHelpers";
import FormikSelect from "app/modules/_forms/general/FormikSelect";
import { createAuthData, login } from "../helpers/controller";
import { loginSchema } from "../helpers/formik";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

export const Login = () => {
  const [requestStatus, setRequestStatus] = useState({
    loading: false,
    error: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { documentType: "", document: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      setRequestStatus({ loading: true, error: "" });
      const data = createAuthData(values);
      login(data, dispatch).then((data) => {
        if (data.error) {
          setRequestStatus({ loading: false, error: data.error });
        } else {
          history.push("/");
        }
      });
    },
  });

  return (
    <div className="center-flex text-center auth-login-container">
      <form className="w-75" onSubmit={formik.handleSubmit}>
        <div className="mt-4">
          <img
            className="logo"
            src={toAbsoluteUrl("/media/logos/logo_seguroya_dark.svg")}
          />
        </div>

        <div className="bg-white rounded mt-2 mx-auto">
          <p className="auth-title pt-4"> Iniciar sesión </p>

          <div className="w-50 m-auto text-left">
            {requestStatus.error && (
              <div className="alert alert-danger text-center" role="alert">
                {requestStatus.error}
              </div>
            )}

            <div className="">
              <FormikSelect
                formik={formik}
                field="documentType"
                label="Tipo de documento"
                options={[
                  { title: "Seleccionar", value: "" },
                  { title: "Cédula", value: "CC" },
                  { title: "Cédula de extranjería", value: "CE" },
                ]}
              />
            </div>

            <div className="mt-4">
              <FormikInput
                formik={formik}
                field="document"
                label="Documento"
                type="number"
              />
            </div>

            <div className="mt-4">
              <FormikInput
                formik={formik}
                field="password"
                label="Contraseña"
                type="password"
              />
            </div>

            {requestStatus.loading ? (
              <div className="spinner-border my-5" role="status">
                <span className="visually-hidden"></span>
              </div>
            ) : (
              <>
                <button
                  type="submit"
                  className="btn btn-primary primary-button w-100 my-5"
                >
                  <b>Iniciar sesión</b>
                </button>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
