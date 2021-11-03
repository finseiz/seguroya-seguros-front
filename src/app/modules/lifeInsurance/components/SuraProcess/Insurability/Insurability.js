import BaseSection from 'app/components/UI/baseSection'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import BeneficiaryForm from './BeneficiaryForm'
import { useFormik } from 'formik'
import { initialValues, insurabilitySchema } from './formik'
import { actions } from "app/modules/healthInsurance/redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { sendOtp, sendUserInformation } from '../controller'
import { SuraLifeProcessOTP } from 'app/routes/childs/Life/routes'

export const SuraInsurabilityInfo = () => {

    const { clientData, selectedPlan:{redirectValues} } = useSelector(state => state.lifeInsurance)

    const [message, setMessage] = useState({type: '', message: '', show: false})
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const formik = useFormik({
        initialValues,
        validationSchema: insurabilitySchema,
        onSubmit: async (values) => {

            setLoading(true);
            const canContinue = await sendUserInformation(values, redirectValues)
            setLoading(false);

            if (canContinue) {
                dispatch(actions.setSuraProgress(3));
                sendOtp(redirectValues)
                history.push(SuraLifeProcessOTP);
            }else{
                setMessage({type: 'danger', message: 'Error al envía los datos, por favor intenta nuevamente', show: true});
                setTimeout(() => setMessage({type: '', message: '', show: false}), 4000);    
            }
        }
    });

    const actionsButton = [
        {
            text: "Atras",
            className: "btn btn-primary primary-button process__process-button px-5 mx-3",
            onClick: () => history.goBack(),
        },
        {
            text: "Continuar",
            className: "btn btn-primary primary-button process__process-button px-5 mx-3",
            type: "submit"
        },
    ];

    return (
        <form onSubmit={formik.handleSubmit}>

            <BaseSection
                title="Información de asegurabilidad"
                actions={actionsButton}
                loading={loading}
            >

                <BeneficiaryForm
                    beneficiary={clientData}
                    formik={formik}
                    loading={loading}
                />

                {
                    message.show &&
                    (
                        <div className={`alert alert-${message.type} m-4`} role="alert">
                            { message.message }
                        </div>
                    )
                }
            </BaseSection>


        </form>


    )
}

