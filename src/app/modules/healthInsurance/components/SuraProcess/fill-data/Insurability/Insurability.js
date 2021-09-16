import BaseSection from 'app/components/UI/baseSection'
import React from 'react'
import { useSelector } from 'react-redux'
import BeneficiaryForm from './BeneficiaryForm'
import { useFormik } from 'formik'
import { initialValues, insurabilitySchema } from './formik'
import { actions } from "app/modules/healthInsurance/redux";
import { HealthProcessAuthRoute, HealthProcessSelectPlanRoute } from 'app/routes/childs/Health/routes'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const InsurabilityInfo = () => {

    const { beneficiaries, data:{client} } = useSelector(state => state.healthInsurance)
    const dispatch = useDispatch();
    const history = useHistory();
    const formList = [...beneficiaries, client]

    const formik = useFormik({
        initialValues: initialValues(formList),
        //validationSchema: insurabilitySchema
    });

    const actionsButton = [
        {
            text: "Atras",
            className: "btn btn-primary primary-button process__process-button px-5 mx-3",
            onClick: () => {
                history.push(HealthProcessSelectPlanRoute);
            },
        },
        {
            text: "Continuar",
            className: "btn btn-primary primary-button process__process-button px-5 mx-3",
            onClick: () => {
                dispatch(actions.setSuraProgress(3));
                history.push(HealthProcessAuthRoute);
            },
        },
    ];

    return (
        <div>

            <BaseSection
                title="Información de asegurabilidad"
            >
            </BaseSection>

            {
                formList.map((beneficiary, i) => (
                    <BeneficiaryForm key={i} beneficiary={beneficiary} formik={formik} index={i} />
                ))
            }

            <BaseSection
                actions={actionsButton}
            >
            </BaseSection>


        </div>


    )
}

export default InsurabilityInfo
