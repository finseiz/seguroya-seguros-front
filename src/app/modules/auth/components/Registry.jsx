import React from 'react'

import { useFormik } from 'formik';
import FormikInput from 'app/modules/_forms/general/FormikInput'
import FormikSelect from 'app/modules/_forms/general/FormikSelect';
import FormikRadioGroup from 'app/modules/_forms/general/FormikRadioGroup';

export const Registry = () => {

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        onSubmit: (values, actions) => {

        },
    });

    return (
        <div className="mx-auto bg-white w-75 my-4">

            <div className="mx-5 py-4">

                <p className="auth-title mx-3"> Registro </p>

                <div className="row row-cols-2">

                    <div className="col">
                        <FormikInput formik={formik} field="email" label="Nombres" />
                    </div>

                    <div className="col">
                        <FormikInput formik={formik} field="email" label="Apellido" />
                    </div>

                    <div className="col mt-3">
                        <FormikInput formik={formik} field="email" label="Celular" type="phone" />
                    </div>

                    <div className="col mt-3">
                        <FormikInput formik={formik} field="email" label="Correo Electrónico" type="email" />
                    </div>

                    <div className="col mt-3">
                        <FormikSelect
                            formik={formik}
                            field="document_type"
                            label="Tipo de documento"
                            options={[
                                { title: "Seleccionar", value: "" },
                                { title: "Cédula", value: "CC" },
                                { title: "TI", value: "TI" },
                                { title: "Pasaporte", value: "PA" },
                            ]}
                        />
                    </div>

                    <div className="col mt-3">
                        <FormikInput formik={formik} field="email" label="Número de documento" type="number" />
                    </div>

                    <div className="col mt-3">
                        <FormikInput formik={formik} field="email" label="Fecha de Expedición" type="date" />
                    </div>

                    <div className="col mt-3">
                        <FormikInput formik={formik} field="email" label="Fecha de Nacimiento" type="date" />
                    </div>

                    <div className="col mt-3">
                        <FormikRadioGroup
                            formik={formik}
                            field="gender"
                            label="Género"
                            options={[
                                { title: "Femenino", value: "F" },
                                { title: "Masculino", value: "M" }
                            ]}
                        />
                    </div>

                    <div className="col mt-3">
                        <FormikInput formik={formik} field="email" label="Dirección" />
                    </div>

                </div>

                <div className="process__others-container mt-5">
                    <div className="p-3 process__normal-text process__short-container">
                        <p className="text-center"> <b> Términos y condiciones </b> </p>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    </div>
                </div>

                <div className="mt-3">
                    <FormikRadioGroup
                        formik={formik}
                        field="gender"
                        question="¿Aceptas términos y condiciones?"
                        questionClass="text-left"
                        className="mt-4"
                        options={[
                            { title: "Si", value: true },
                            { title: "No", value: false }
                        ]}
                    />
                </div>

            </div>



        </div>
    )
}
