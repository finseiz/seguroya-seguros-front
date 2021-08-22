import React from 'react'
import PropTypes from 'prop-types'

const FormikInput = ({ field, formik, label="", type="text", disable=false, labelClass="", className="" }) => {

    const hasError = formik.touched[field] && formik.errors[field];

    return (
        <div className={`${className}`}>
            { label && (
                <label htmlFor={field} className={`form-label ${labelClass}`}>
                    {label}
                </label>
            ) }
            <input
                type={type}
                name={field}
                className={`form-control ${hasError ? "is-invalid" : ""}`}
                disabled={disable}
                {...formik.getFieldProps(field)}
            />
            {
                hasError && (
                    <div className="invalid-feedback">{formik.errors[field]}</div>
                )
            }
        </div>
    )
}

FormikInput.propTypes = {
    label: PropTypes.string,
    field: PropTypes.string.isRequired,
    formik: PropTypes.object.isRequired
}

export default FormikInput
