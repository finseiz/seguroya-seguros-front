import React from 'react'
import PropTypes from 'prop-types'

const FormikInput = ({ label, field, formik, type="text", disable=false }) => {

    const hasError = formik.touched[field] && formik.errors[field];

    return (
        <>
            <label htmlFor={field} className="form-label">
                {label}
            </label>
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
        </>
    )
}

FormikInput.propTypes = {
    label: PropTypes.string,
    field: PropTypes.string.isRequired,
    formik: PropTypes.object.isRequired
}

export default FormikInput
