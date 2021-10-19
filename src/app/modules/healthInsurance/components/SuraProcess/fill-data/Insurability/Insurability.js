import BaseSection from 'app/components/UI/baseSection'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import BeneficiaryForm from './BeneficiaryForm'
import { useFormik } from 'formik'
import { initialValues, insurabilitySchema } from './formik'
import { actions } from "app/modules/healthInsurance/redux";
import { HealthProcessAuthRoute } from 'app/routes/childs/Health/routes'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { sendBeneficiariesInformation } from '../../controller'

const InsurabilityInfo = () => {

    const {
        beneficiaries,
        data: { client, insurabilityInfoBeneficiaries },
        selectedPlan: { quoteId },
        generalLists: { documentTypes }
    } = useSelector(state => state.healthInsurance)
    const [currentBeneficiary, setCurrentBeneficiary] = useState(0);
    const [message, setMessage] = useState({type: '', message: '', show: false})
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(actions.handleInsurabilityPerson(client))
        beneficiaries.forEach(ben => dispatch(actions.handleInsurabilityPerson(ben)))
    }, [beneficiaries]);

    const formik = useFormik({
        initialValues: initialValues(insurabilityInfoBeneficiaries[currentBeneficiary]),
        validationSchema: insurabilitySchema,
        enableReinitialize: true,
        onSubmit: async (values) => {
            dispatch(actions.handleInsurabilityPerson(values));
            if (currentBeneficiary === insurabilityInfoBeneficiaries.length - 1) {
                setLoading(true);
                const canContinue = await sendBeneficiariesInformation(quoteId, documentTypes, insurabilityInfoBeneficiaries)
                setLoading(false);
                // if (canContinue) {
                //     dispatch(actions.setSuraProgress(2));
                //     history.push(HealthProcessAuthRoute);
                // }
            } else {
                setCurrentBeneficiary(currentBeneficiary + 1);
                setMessage({type: 'success', message: '¡Excelente! Información agregada satisfactoriamente', show: true});
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
    ];

    return (
        <div>

            <BaseSection
                title="Información de asegurabilidad"
            >
            </BaseSection>

            <form onSubmit={formik.handleSubmit}>
                {
                    insurabilityInfoBeneficiaries[currentBeneficiary] &&
                    (
                        <BeneficiaryForm
                            beneficiary={insurabilityInfoBeneficiaries[currentBeneficiary]}
                            formik={formik}
                            first={currentBeneficiary === 0}
                            onPrevious={() => setCurrentBeneficiary(currentBeneficiary - 1)}
                            loading={loading}
                        />
                    )
                }
            </form>

            {
                message.show &&
                (
                    <div className="alert alert-success mx-4" role="alert">
                        { message.message }
                    </div>
                )
            }

            <BaseSection
                actions={actionsButton}
                loading={loading}
            >
            </BaseSection>


        </div>


    )
}

export default InsurabilityInfo
