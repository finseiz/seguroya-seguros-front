import React from 'react'
import BaseSection from 'app/components/UI/baseSection'
import { CarsProcessSarlaftRoute, CarsProcessSelectPlanRoute } from 'app/routes/childs/Cars/routes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actions } from '../../../redux';
import { useFormik } from 'formik';
import { initalData, schema } from './formik';
import FormikRadioGroup from 'app/modules/_forms/general/FormikRadioGroup';
import FormikInput from 'app/modules/_forms/general/FormikInput';
import FormikSelect from 'app/modules/_forms/general/FormikSelect';

export const ScheduleAppointment = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(actions.setUniqueProgress(0))
    }, []);

    const formik = useFormik({
        initialValues: initalData,
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(actions.editDataToSend(values));
            history.push(CarsProcessSelectPlanRoute);
            dispatch(actions.setUniqueProgress(2))
        }
    });

    useEffect(() => {

        if ( formik.values.isNewCar === false ){
            formik.setValues({
                ...formik.values,
                carBrand: null,
                carModel: null,
            })
        }else{
            formik.setValues({
                ...formik.values,
                carBrand: "",
                carModel: "",
            })
        }
        
    }, [ formik.values.isNewCar ]);

    useEffect(() => {

        if ( formik.values.includeAccessories === false ){
            formik.setFieldValue("accesoriesSum", 0)
        }else{
            formik.setFieldValue("accesoriesSum", "")
        }
        
    }, [ formik.values.includeAccessories ]);

    const actionsButton = [
        {
            text: "Atras",
            className: "btn btn-primary primary-button process__process-button px-5 mx-3",
            onClick: () => {
                dispatch(actions.setUniqueProgress(1));
                history.push(CarsProcessSarlaftRoute);
            },
        },
        {
            text: "Continuar",
            className: "btn btn-primary primary-button process__process-button px-5 mx-3",
            onClick: () => formik.handleSubmit(),
        },
    ];

    return (
        <div>
            <BaseSection
                title="Agenda tu cita de inspección"
                actions={actionsButton}
            >

                <p className="text-center"> <b> Información adicional </b> </p>

                <div className="row">

                    <div className="col">
                        <FormikRadioGroup
                            label="¿Deseas adquirir el seguro para un carro nuevo?"
                            formik={formik}
                            field="isNewCar"
                            optionsClass="flex-column"
                            radioLabelClass="inital-from__option-without-max"
                            options={[
                                { title: "Si", value: true },
                                { title: "No", value: false },
                            ]}
                        />
                    </div>

                    {
                        formik.values.isNewCar &&
                        (
                            <>
                                <div className="col-sm">
                                    <FormikInput field="carBrand" label="Marca del vahiculo" formik={formik} />
                                </div>
                                <div className="col-sm">
                                    <FormikInput field="carModel" label="Modelo" formik={formik} type="number" />
                                </div>
                            </>
                        )
                    }

                </div>

                <div className="row mt-4">

                    <div className="col">
                        <FormikRadioGroup
                            label="¿Deseas agregar accesorios adicionales al seguro?"
                            formik={formik}
                            field="includeAccessories"
                            optionsClass="flex-column"
                            radioLabelClass="inital-from__option-without-max"
                            options={[
                                { title: "Si", value: true },
                                { title: "No", value: false },
                            ]}
                        />
                    </div>

                    {
                        formik.values.includeAccessories &&
                        (
                            <>
                                <div className="col-sm">
                                    <FormikInput field="accesoriesSum" label="Valor de los accesorios" formik={formik} />
                                </div>
                            </>
                        )
                    }

                </div>

                <div className="row mt-4">

                    <div className="col">
                        <FormikRadioGroup
                            label="¿Cómo quieres que sea tu cita de inspección?"
                            formik={formik}
                            field="inspectionType"
                            align="left"
                            optionsClass="flex-column"
                            questionClass="text-left"
                            radioLabelClass="inital-from__option-without-max"
                            options={[
                                { title: "Presencial", value: "PRESENCIAL" },
                                { title: "Virtual - Tu tomas las fotos y nos las envías", value: "VIRTUAL" },
                                { 
                                    title: (
                                        <span> Virtual Asistida - Te llamamos <br/> para explicarte el proceso </span>
                                    ), 
                                    value: "VIRTUAL_ASISTIDA" 
                                },
                            ]}
                        />
                    </div>

                    <div className="col">
                        <FormikSelect 
                            label="¿Qué tipo de pago deseas realizar?"
                            formik={formik}
                            field="payment"
                            options={[
                                {title: "Selecciona", value: ""},
                                {title: "Mensual", value: 1},
                                {title: "Trimestral", value: 3},
                                {title: "Semestral", value: 6},
                                {title: "Anual", value: 12}
                            ]}
                        />
                    </div>

                </div>




            </BaseSection>
        </div>
    )
}

