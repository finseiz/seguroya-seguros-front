import BaseSection from 'app/components/UI/baseSection'
import React, { useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import BeneficiaryForm from './BeneficiaryForm'
import { useFormik } from 'formik'
import { initialValues, insurabilitySchema } from './formik'
import { actions } from "app/modules/healthInsurance/redux";
import { HealthProcessAuthRoute } from 'app/routes/childs/Health/routes'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const InsurabilityInfo = () => {

    const { beneficiaries, data:{client} } = useSelector(state => state.healthInsurance)
    const dispatch = useDispatch();
    const history = useHistory();
    const formList = useMemo(() => [...beneficiaries, client], [])
    const [currentBeneficiary, setCurrentBeneficiary] = useState(0);

    const formik = useFormik({
        initialValues: initialValues(formList[currentBeneficiary]),
        validationSchema: insurabilitySchema,
        enableReinitialize: true,
        onSubmit: (values) => {

            if ( currentBeneficiary === formList.length - 1 ){
                alert('Health')
            }else{
                setCurrentBeneficiary(currentBeneficiary + 1)
            }

            // dispatch(actions.setSuraProgress(3));
            // history.push(HealthProcessAuthRoute);
            
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
                <BeneficiaryForm 
                    beneficiary={formList[currentBeneficiary]} 
                    formik={formik} 
                    first={ currentBeneficiary === 0 }
                    onPrevious={ () => setCurrentBeneficiary(currentBeneficiary - 1) }
                />
            </form>

            <BaseSection
                actions={actionsButton}
            >
            </BaseSection>


        </div>


    )
}

export default InsurabilityInfo
