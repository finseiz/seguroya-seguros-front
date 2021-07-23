import React from 'react'
import PropTypes from 'prop-types'
import Radio from "./../../modules/_forms/general/Radio";

/**
 * 
 * @param {string} question
 * @param {object} options - { label, value, active, onChange }
 * @returns 
 */
const Question = ({ question, options, activeError, showError, ...others }) => {
    return (
        <div {...others} >
            {
                question && (
                    <p className="process__question-title">
                        { question }
                    </p>
                )
            }

            <div className="container p-0" >
                <div className="row justify-content-left">
                    {
                        options.map( ( option ) => (
                            <div key={option.optId} className="row align-items-center mt-2">
                                <Radio
                                    active={ option.active() }
                                    onClick={ option.onChange }
                                />
                                <label className="ml-2 mb-0 mr-5 process__option-label">
                                    { option.label }
                                </label>
                            </div>
                        ))
                    }
                </div>
            </div>

            {
                activeError && showError && (
                    <div className="invalid-msj"> Campo requerido </div>
                )
            }
            
        </div>
    )
}

Question.propTypes = {
    question: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
}

export default Question
