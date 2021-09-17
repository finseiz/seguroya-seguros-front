import React, { useEffect, useState } from 'react'

import { useFormik } from 'formik';
import FormikInput from 'app/modules/_forms/general/FormikInput'
import FormikSelect from 'app/modules/_forms/general/FormikSelect';
import FormikRadioGroup from 'app/modules/_forms/general/FormikRadioGroup';
import { registryInitialValues, registrySchema } from '../helpers/formik';
import { getCities, getDepartments, signupUser } from '../helpers/controller';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

export const Registry = () => {

    const dispatch = useDispatch();
    const [requestStatus, setRequestStatus] = useState({loading: false, error: ""});
    const [departments, setDepartments] = useState([]);
    const [cities, setCities] = useState([]);
    const history = useHistory();    

    const formik = useFormik({
        initialValues: registryInitialValues,
        onSubmit: async (values) => {
            setRequestStatus({loading: true, error: ""});
            const message = await signupUser(values, dispatch);
            if ( message === "" ){
                setRequestStatus({loading: false, error: ""});
                history.push("/")
            }else{
                setRequestStatus({loading: false, error: message});
            }
        },
        validationSchema: registrySchema
    });

    useEffect(() => {
        getDepartments()
        .then( (data) => setDepartments(data) );
    }, [dispatch])

    useEffect(() => {
        formik.setFieldValue("city", "")
        if ( formik.values.department > 0 ){
            getCities(formik.values.department)
            .then( (data) => setCities(data) );
        }else{
            setCities([])
        }
    }, [formik.values.department])


    return (
        <form 
            className="mx-auto bg-white w-75 my-4"
            onSubmit={formik.handleSubmit}
        >

            <main className="mx-5 py-4">

                <h1 className="auth-title mx-3"> Registro </h1>

                <div className="row row-cols-2">

                    <div className="col">
                        <FormikInput formik={formik} field="name" label="Nombres" />
                    </div>

                    <div className="col">
                        <FormikInput formik={formik} field="surname" label="Apellido" />
                    </div>

                    <div className="col mt-3">
                        <FormikInput formik={formik} field="phone" label="Celular" type="phone" />
                    </div>

                    <div className="col mt-3">
                        <FormikInput formik={formik} field="email" label="Correo Electrónico" type="email" />
                    </div>

                    <div className="col mt-3">
                        <FormikSelect
                            formik={formik}
                            field="documentType"
                            label="Tipo de documento"
                            options={[
                                { title: "Seleccionar", value: "" },
                                { title: "Cédula", value: "CC" },
                                { title: "Cédila de extranjería", value: "CE" },
                            ]}
                        />
                    </div>

                    <div className="col mt-3">
                        <FormikInput formik={formik} field="document" label="Número de documento" type="number" />
                    </div>

                    <div className="col mt-3">
                        <FormikInput formik={formik} field="birthDate" label="Fecha de Nacimiento" type="date" />
                    </div>

                    <div className="col mt-3">
                        <FormikInput formik={formik} field="password" label="Contraseña" type="password" />
                    </div>

                    <div className="col mt-3">
                        <FormikSelect
                            formik={formik}
                            field="department"
                            label="Departamento"
                            options={ departments }
                        />
                    </div>

                    <div className="col mt-3">
                        <FormikSelect
                            formik={formik}
                            field="city"
                            label="Ciudad"
                            options={ cities }
                        />
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
                        <FormikInput formik={formik} field="address" label="Dirección" />
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
                        field="tAndC"
                        question="¿Aceptas términos y condiciones?"
                        questionClass="text-left"
                        className="mt-4"
                        showError
                        options={[
                            { title: "Si", value: true },
                            { title: "No", value: false }
                        ]}
                    />
                </div>

                <div className="text-center m-4">
                    {
                        requestStatus.loading ?
                        (
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden"></span>
                            </div>
                        ) : 
                        (
                            <button 
                                type="submit"
                                className="btn btn-primary primary-button px-5"
                            >
                                <b>Registrarme</b>
                            </button>
                        )
                    }
                    
                </div>

                {
                    requestStatus.error !== "" && 
                    (
                        <div className="alert alert-danger" role="alert"> {requestStatus.error} </div>
                    )
                }

            </main>



        </form>
    )
}
