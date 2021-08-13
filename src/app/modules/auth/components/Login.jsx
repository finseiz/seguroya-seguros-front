import React from 'react'
import FormikInput from 'app/modules/_forms/general/FormikInput'
import { useFormik } from 'formik';
import { toAbsoluteUrl } from 'theme/helpers/AssetsHelpers'

export const Login = () => {

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        onSubmit: (values, actions) => {

        },
    });

    return (
        <div className="center-flex text-center auth-login-container">
            <div className="w-75">

                <div>
                    <img
                        className="logo"
                        src={toAbsoluteUrl("/media/logos/logo_seguroya_dark.svg")}
                    />

                </div>

                <div className="bg-white rounded mt-5 mx-auto">

                    <p className="auth-title p-5"> Iniciar sesión </p>

                    <div className="w-50 m-auto text-left">

                        <div className="mt-4">
                            <FormikInput formik={formik} field="email" label="Correo Electrónico" type="email" />
                        </div>

                        <div className="mt-4">
                            <FormikInput formik={formik} field="password" label="Contraseña" type="password" />
                        </div>

                        <button
                            className="btn btn-primary primary-button w-100 my-5"
                        >
                            <b>Iniciar sesión</b>
                        </button>

                    </div>

                </div>

            </div>

        </div>

    )
}
