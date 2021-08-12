import React from 'react'
import PropTypes from 'prop-types'

/**
 * 
 * @param {options} { title, value } 
 * @returns 
 */
const FormikSelect = ({ label, field, formik, options, labelClass="", className="" }) => {

    const hasError = formik.touched[field] && formik.errors[field];

    return (
        <div className={`${className}`}>
            <label htmlFor={field} className={`form-label ${labelClass}`}>
                {label}
            </label>

            <select
                className="form-select form-control"
                {...formik.getFieldProps(field)}
            >
                {
                    options.map( (option, i) => (
                        <option key={i} value={option.value}> {option.title} </option>
                    ) )
                }
            </select>
            {
                hasError && (
                    <div className="invalid-msj">{formik.errors[field]}</div>
                )
            }
        </div>
    )
}

FormikSelect.propTypes = {
    label: PropTypes.string,
    field: PropTypes.string.isRequired,
    formik: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
}

export default FormikSelect
