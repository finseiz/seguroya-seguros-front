import React from 'react'
import BaseSection from 'app/components/UI/baseSection'
import { CarsProcessDoneRoute, CarsProcessSarlaftRoute } from 'app/routes/childs/Cars/routes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actions } from '../../redux';
import Question from 'app/modules/_forms/overview/Question';
import { useFormik } from 'formik';

export const ScheduleAppointment = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(actions.setUniqueProgress(2))
    }, []);

    const formik = useFormik({
        initialValues: {election: ""},
        onSubmit: (values) => {
            history.push(CarsProcessDoneRoute);
        }
    });


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

                <Question
                    question="¿Cómo quieres que sea tu cita de inspección?"
                    formik={formik}
                    align="left"
                    optionsClass="flex-column"
                    questionClass="text-left"
                    radioLabelClass="inital-from__option-without-max"
                    options={[
                        { formikValue: "election", label: "Presencial", value: "pre" },
                        { formikValue: "election", label: "Virtual - Tu tomas las fotos y nos las envías", value: "vir" },
                        { formikValue: "election", label: "Virtual Asistida - Te llamamos para explicarte el proceso", value: "vir2" },
                    ]}
                />

            </BaseSection>
        </div>
    )
}
