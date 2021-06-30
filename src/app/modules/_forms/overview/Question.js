import React from 'react'
import PropTypes from 'prop-types'
import Radio from '../general/Radio'

/**
 * 
 * @param {string} question
 * @param {object} formik
 * @param {object} options - { formikValue, label, value }
 * @returns 
 */
const Question = ({ question, options, formik, ...others }) => {
    return (
        <div {...others} >
            <p className="inital-from__question">
                { question }
            </p>

            <div className="container" >
                <div className="row justify-content-center">
                    {
                        options.map( ( option, i ) => (
                            <div key={i} className="row align-items-center mt-2">
                                <Radio 
                                    active={ formik.values[option.formikValue] === option.value }
                                    onClick={ () => formik.setFieldValue(option.formikValue, option.value) }
                                />
                                <label className="inital-from__option ml-2 mb-0">
                                    { option.label }
                                </label>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}

Question.propTypes = {
    question: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
}

export default Question
