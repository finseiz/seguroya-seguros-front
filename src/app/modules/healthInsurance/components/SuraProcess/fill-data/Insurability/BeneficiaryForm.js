import React, { useState } from 'react'

import PropTypes from 'prop-types'
import BaseSection from 'app/components/UI/baseSection'
import { diseaseList } from '../beneficiaries/constants'
import { DiseaseOption } from './DiseaseOption'

const BeneficiaryForm = ({ beneficiary:{name, lastname, id}, reducerState }) => {

    return (
        <BaseSection>
            <p className="process__ins-info-userfullname">{ `Declaración  ${name} ${lastname} ${id} ` }</p>

            <p className="process__ins-info-question"> 1. ¿Le han diagnosticado alguna enfermedad? </p>

            <div className="row row-cols-3">
                {
                    diseaseList.map( (disease) => (
                        <div className="col mt-2 p-0">
                            <DiseaseOption list={reducerState[id].diseaseList} value={disease} />   
                        </div>
                    ))
                }
            </div>
        </BaseSection>
    )
}

BeneficiaryForm.propTypes = {
    beneficiary: PropTypes.object.isRequired,
}

export default BeneficiaryForm
