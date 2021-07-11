import React from 'react'
import PropTypes from 'prop-types'
import Question from "./../overview/Question";

/**
 * 
 * @param {array} options - { title, value }  
 * @returns 
 */
const FormikRadioGroup = ({ label, field, formik, options, question, questionClass, marginTop, radioLabelClass, ...others }) => {

    const hasError = formik.touched[field] && formik.errors[field];

    return (
        <>
            {
                label && 
                (
                    <label htmlFor={field} className="form-label">
                        {label}
                    </label>
                )
            }
            <Question
                formik={formik}
                question={question}
                align="left"
                questionClass={questionClass}
                marginTop={marginTop}
                radioLabelClass={radioLabelClass}
                options={ options.map( (option) => ({ 
                    formikValue: field, 
                    label: option.title, 
                    value: option.value 
                }))}
                { ...others }
            />
            {
                hasError && (
                    <div className="invalid-msj">{formik.errors[field]}</div>
                )
            }
        </>
    )
}

FormikRadioGroup.propTypes = {
    label: PropTypes.string,
    field: PropTypes.string.isRequired,
    formik: PropTypes.object.isRequired
}

export default FormikRadioGroup
