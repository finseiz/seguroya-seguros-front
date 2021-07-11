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
const Question = ({ question, options, formik, align="center", questionClass="", marginTop="2", radioLabelClass="", ...others }) => {
    return (
        <div {...others} >
            {
                question &&
                (
                    <p className={`inital-from__question ${questionClass}`}>
                        {question}
                    </p>
                )
            }

            <div className="container p-0" >
                <div className={`row justify-content-${align}`}>
                    {
                        options.map((option, i) => (
                            <div key={i} className={`row align-items-center mt-${marginTop}`}>
                                <Radio
                                    active={formik.values[option.formikValue] === option.value}
                                    onClick={() => formik.setFieldValue(option.formikValue, option.value)}
                                />
                                <label className={`inital-from__option ml-2 mb-0 ${radioLabelClass}`}>
                                    {option.label}
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
