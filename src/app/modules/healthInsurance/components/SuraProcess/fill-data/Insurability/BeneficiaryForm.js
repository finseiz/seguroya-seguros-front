import React, { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import BaseSection from 'app/components/UI/baseSection'
import { DiseaseOption } from './DiseaseOption'
import FormikInput from 'app/modules/_forms/general/FormikInput'
import FormikSelect from 'app/modules/_forms/general/FormikSelect'
import FormikRadioGroup from 'app/modules/_forms/general/FormikRadioGroup'
import { getDiseases } from '../../controller'

const BeneficiaryForm = ({ beneficiary: { firstName, surname }, formik, first, onPrevious }) => {

    const [diseaseList, setDiseaseList] = useState([]);
    const relatives = useMemo(() => [
        {id: "MADRE", "nombre": "Madre"},
        {id: "PADRE", "nombre": "Padre"},
        {id: "HERMANOS", "nombre": "Hermanos/as"},
    ], []);

    const maritalStatus = useMemo(() => [
        {value: "", title: "Seleccione"},
        {value: "SOLTERO", title: "Soltero"},
        {value: "CASADO", title: "Casado"},
        {value: "VIUDO", title: "Viudo"},
        {value: "UNION_LIBRE", title: "Union libre"},
    ], []);

    useEffect(() => {
        getDiseases()
        .then((data) => setDiseaseList(data) )
    }, [])

    return (
        <BaseSection>
        
            <p className="process__ins-info-userfullname">{`Declaración  ${firstName} ${surname} `}</p>

            <p className="process__ins-info-question"> 1. ¿Le han diagnosticado alguna enfermedad? </p>

            <div className="row row-cols-3">
                {
                    diseaseList.map((disease) => (
                        <div className="col mt-2 p-0" key={disease.id}>
                            <DiseaseOption formik={formik} value={disease} fieldList="diseaseList" />
                        </div>
                    ))
                }
            </div>

            <div className="mt-4">
                <p className="process__ins-info-question"> 2. ¿Alguno de los solicitantes ha tenido enfermedades diferentes a las enunciadas en el númeral 1? </p>
                <FormikInput field={`otherDisease`} formik={formik} />
            </div>

            <div className="mt-4">
                <p className="process__ins-info-question"> 3. Alguno de sus hermanos/as, padre o madre le han diagnositcado algunos de los siguientes padecimientos antes de  los 50 años: enfermedades cardiovasculares, diabetes, cáncer de colon, cáncer de recto y cáncer de mama. </p>
                <div className="row">
                    {
                        relatives.map((disease) => (
                            <div className="mr-4" key={disease.id}>
                                <DiseaseOption formik={formik} value={disease} fieldList="familyDisease" />
                            </div>
                        ))
                    }
                </div>
            </div>

            <hr></hr>

            <p className="process__ins-info-userfullname mt-4"> Datos básicos adicionales </p>

            <div className="row row-cols-3">

                <div className="col p-0 pr-2 mt-2">
                    <FormikInput field={`occupation`} formik={formik} label="Ocupación"/>
                </div>

                <div className="col p-0 pr-2 mt-2">
                    <FormikSelect field={`maritalStatus`} formik={formik} label="Estado civil" options={maritalStatus} />
                </div>

                <div className="col p-0 pr-2 mt-2">
                    <FormikInput field={`weight`} formik={formik} label="Peso" type="number"/>
                </div>

                <div className="col p-0 pr-2 mt-2">
                    <FormikInput field={`height`} formik={formik} label="Estatura (cm)" type="number"/>
                </div>

                <div className="col p-0 pr-2 mt-2">
                    <FormikInput field={`otherWeight`} formik={formik} label="Kg ganados/perdidos en el último año (+3/-2)"/>
                </div>

                <div className="col p-0 pr-2 mt-2">
                    <FormikInput field={`company`} formik={formik} label="Empresa donde trabaja"/>
                </div>

                <div className="col p-0 pr-2 mt-2">
                    <FormikInput field={`eps`} formik={formik} label="EPS"/>
                </div>

                <div className="col p-0 pr-2 mt-2">
                    <FormikRadioGroup 
                        field={`childenOver18`} 
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
                        field={`highOccupationRisk`} 
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
                        field={`requestingSeniority`} 
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
                        field={`emergency`} 
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

            <div className="row justify-content-between mt-5">

                <div>
                    {
                        !first && 
                        (
                            <button 
                                className="btn btn-primary primary-button process__process-button px-5" 
                                type="button"
                                onClick={onPrevious}
                            > Anterior </button>
                        )
                    }
                </div>

                <div>
                    {
                        <button 
                            className="btn btn-primary primary-button process__process-button px-5" 
                            type="submit"
                        > Siguiente </button>
                    }
                </div>

            </div>

        </BaseSection>
    )
}

BeneficiaryForm.propTypes = {
    beneficiary: PropTypes.object.isRequired,
}

export default BeneficiaryForm
