import React, { useState } from 'react'

import PropTypes from 'prop-types'
import BaseSection from 'app/components/UI/baseSection'
import { diseaseList } from './constants'
import { DiseaseOption } from './DiseaseOption'
import FormikInput from 'app/modules/_forms/general/FormikInput'
import FormikSelect from 'app/modules/_forms/general/FormikSelect'
import FormikRadioGroup from 'app/modules/_forms/general/FormikRadioGroup'

const BeneficiaryForm = ({ beneficiary: { firstName, surname }, formik, index:id }) => {

    return (
        <BaseSection>
            <p className="process__ins-info-userfullname">{`Declaración  ${firstName} ${surname} `}</p>

            <p className="process__ins-info-question"> 1. ¿Le han diagnosticado alguna enfermedad? </p>

            <div className="row row-cols-3">
                {
                    diseaseList.map((disease) => (
                        <div className="col mt-2 p-0">
                            <DiseaseOption id={id} formik={formik} value={disease} fieldList="diseaseList" />
                        </div>
                    ))
                }
            </div>

            <div className="mt-4">
                <p className="process__ins-info-question"> 2. ¿Alguno de los solicitantes ha tenido enfermedades diferentes a las enunciadas en el númeral 1? </p>
                <FormikInput field={`${id}.otherDisease`} formik={formik} />
            </div>

            <div className="mt-4">
                <p className="process__ins-info-question"> 3. Alguno de sus hermanos/as, padre o madre le han diagnositcado algunos de los siguientes padecimientos antes de  los 50 años: enfermedades cardiovasculares, diabetes, cáncer de colon, cáncer de recto y cáncer de mama. </p>
                <div className="row">
                    {
                        ["Padre", "Madre", "Hermanos/as"].map((disease) => (
                            <div className="mr-4">
                                <DiseaseOption id={id} formik={formik} value={disease} fieldList="familyDisease" />
                            </div>
                        ))
                    }
                </div>
            </div>

            <hr></hr>

            <p className="process__ins-info-userfullname mt-4"> Datos básicos adicionales </p>

            <div className="row row-cols-3">

                <div className="col p-0 pr-2 mt-2">
                    <FormikInput field={`${id}.occupation`} formik={formik} label="Ocupación"/>
                </div>

                <div className="col p-0 pr-2 mt-2">
                    <FormikSelect field={`${id}.maritalStatus`} formik={formik} label="Estado civil" 
                        options={[{value: "Ca", title: "Casado"}, {value: "So", title: "Soltero"}]}
                    />
                </div>

                <div className="col p-0 pr-2 mt-2">
                    <FormikInput field={`${id}.weight`} formik={formik} label="Peso" type="number"/>
                </div>

                <div className="col p-0 pr-2 mt-2">
                    <FormikInput field={`${id}.height`} formik={formik} label="Estatura (cm)" type="number"/>
                </div>

                <div className="col p-0 pr-2 mt-2">
                    <FormikInput field={`${id}.otherWeight`} formik={formik} label="Kg ganados/perdidos en el último año (+3/-2)"/>
                </div>

                <div className="col p-0 pr-2 mt-2">
                    <FormikInput field={`${id}.company`} formik={formik} label="Empresa donde trabaja"/>
                </div>

                <div className="col p-0 pr-2 mt-2">
                    <FormikInput field={`${id}.eps`} formik={formik} label="EPS regimen contributivo"/>
                </div>

                <div className="col p-0 pr-2 mt-2">
                    <FormikRadioGroup 
                        field={`${id}.childenOver18`} 
                        formik={formik} 
                        label="¿Tiene numero de hijos dependientes menores de 18 años?" 
                        radioLabelClass="process__ins-info-radio"
                        options={[
                            {title: "Si", value: true},
                            {title: "No", value: false},
                        ]}
                    />
                </div>

                <div className="col p-0 pr-2 mt-2">
                    <FormikRadioGroup 
                        field={`${id}.highOccupationRisk`} 
                        formik={formik}
                        label="¿La ocupación tiene riesgo?" 
                        radioLabelClass="process__ins-info-radio"
                        options={[
                            {title: "Si", value: true},
                            {title: "No", value: false},
                        ]}
                    />
                </div>

                <div className="col p-0 pr-2 mt-2">
                    <FormikRadioGroup 
                        field={`${id}.requestingSeniority`} 
                        formik={formik}
                        label="¿Solicita antiguedad?"
                        radioLabelClass="process__ins-info-radio"
                        options={[
                            {title: "Si", value: true},
                            {title: "No", value: false},
                        ]}
                    />
                </div>

                <div className="col p-0 pr-2 mt-2">
                    <FormikRadioGroup 
                        field={`${id}.emergency`} 
                        formik={formik}
                        label="Emergencia médica" 
                        radioLabelClass="process__ins-info-radio"
                        options={[
                            {title: "Si", value: true},
                            {title: "No", value: false},
                        ]}
                    />
                </div>

            </div>

        </BaseSection>
    )
}

BeneficiaryForm.propTypes = {
    beneficiary: PropTypes.object.isRequired,
}

export default BeneficiaryForm
