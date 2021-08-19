import BaseSection from 'app/components/UI/baseSection'
import React, { useReducer, useState } from 'react'
import { useSelector } from 'react-redux'
import { reducerActions } from '../beneficiaries/constants'
import BeneficiaryForm from './BeneficiaryForm'

const Insurability = () => {

    const { beneficiaries } = useSelector(state => state.healthInsurance)
    // { diseaseList: [], otherDisease: "", familyDisease: [] }
    // payload= { index: 0, value: "" }
    
    function reducer(state, action) {
        const stateCopy = [...state];
        switch (action.type) {
            case reducerActions.addDiseaseToList:
                let userDiseaseList = stateCopy[action.payload.index].diseaseList;
                userDiseaseList.add(action.payload.value);
                stateCopy[action.payload.index].diseaseList = userDiseaseList;
                return stateCopy;
            case reducerActions.addOtherDisease:
                stateCopy[action.payload.index].otherDisease = action.payload.value;
                return stateCopy;
            case reducerActions.addFamilyDisease:
                let familyDiseaseList = stateCopy[action.payload.index].familyDisease;
                familyDiseaseList.add(action.payload.value);
                stateCopy[action.payload.index].familyDisease = familyDiseaseList;
                return stateCopy;
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, new Array(beneficiaries.length).fill({diseaseList: [], otherDisease: "", familyDisease: []}) )

    return (
        <div>

            <BaseSection
                title="Información de asegurabilidad"
            >
            </BaseSection>

            {
                beneficiaries.map((beneficiary, i) => (
                    <BeneficiaryForm key={i} beneficiary={beneficiary} reducerState={state} />
                ))
            }
        </div>


    )
}

export default Insurability
