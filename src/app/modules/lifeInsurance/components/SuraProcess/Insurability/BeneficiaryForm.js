import React, { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { DiseaseOption } from './DiseaseOption'
import FormikInput from 'app/modules/_forms/general/FormikInput'
import { getInsurabilityLists } from '../controller'

const BeneficiaryForm = ({ beneficiary: { firstName, surname }, formik }) => {

    const [list, setList] = useState({disease: [], activities: []})
    const relatives = useMemo(() => [
        { id: "MADRE", "nombre": "Madre" },
        { id: "PADRE", "nombre": "Padre" },
        { id: "HERMANOS", "nombre": "Hermanos/as" },
    ], []);

    useEffect(() => {
        getInsurabilityLists()
        .then( data => {
            if ( data ) {
                setList({ disease: data.disease, activities: data.activities })
            }
        })
    }, [])

    return (
        <>
            <p className="process__ins-info-userfullname">{`Declaración  ${firstName} ${surname} `}</p>

            <p className="process__ins-info-question"> 1. ¿Le han diagnosticado alguna enfermedad? </p>

            <div className="row row-cols-3">
                {
                    list.disease.map((disease) => (
                        <div className="col mt-2 p-0" key={disease.id}>
                            <DiseaseOption formik={formik} value={disease} fieldList="disease" />
                        </div>
                    ))
                }
            </div>

            <div className="mt-4">
                <p className="process__ins-info-question"> 2. ¿Alguno de los solicitantes ha tenido enfermedades diferentes a las enunciadas en el númeral 1? </p>
                <FormikInput field={`otherDisease`} formik={formik} />
            </div>

            <p className="process__ins-info-question mt-4"> 3. ¿Alguno de los solicitantes conduce moto o es piloto de aeornaves y/o practica como profesional o aficionado, ocasional o regularmente deprotes tales como? </p>

            <div className="row row-cols-3">
                {
                    list.activities.map((disease) => (
                        <div className="col mt-2 p-0" key={disease.id}>
                            <DiseaseOption formik={formik} value={disease} fieldList="activities" />
                        </div>
                    ))
                }
            </div>

            <div className="mt-4">
                <p className="process__ins-info-question"> 4. ¿Otros deportes denominados de alto riesgo y/o extremos? </p>
                <FormikInput field={`othersSports`} formik={formik} />
            </div>

            <div className="mt-4">
                <p className="process__ins-info-question"> 3. Alguno de sus hermanos/as, padre o madre le han diagnositcado algunos de los siguientes padecimientos antes de  los 50 años: enfermedades cardiovasculares, diabetes, cáncer de colon, cáncer de recto y cáncer de mama. </p>
                <div className="row">
                    {
                        relatives.map((disease) => (
                            <div className="mr-4" key={disease.id}>
                                <DiseaseOption formik={formik} value={disease} fieldList="familiarDisease" />
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

BeneficiaryForm.propTypes = {
    beneficiary: PropTypes.object.isRequired,
}

export default BeneficiaryForm
