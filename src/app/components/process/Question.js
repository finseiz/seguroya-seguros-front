import React from 'react'
import PropTypes from 'prop-types'
import Radio from "./../../modules/_forms/general/Radio";

/**
 * 
 * @param {string} question
 * @param {object} options - { label, value, active, onChange }
 * @returns 
 */
const Question = ({ question, options, ...others }) => {
    return (
        <div {...others} >
            <p className="">
                { question }
            </p>

            <div className="container p-0" >
                <div className="row justify-content-left">
                    {
                        options.map( ( option, i ) => (
                            <div key={i} className="row align-items-center mt-2">
                                <Radio
                                    active={ option.active }
                                    onClick={ option.onChange }
                                />
                                <label className="ml-2 mb-0 mr-5">
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
