import React from 'react'
import PropTypes from 'prop-types'
import { toAbsoluteUrl } from 'theme/helpers/AssetsHelpers';

const Qualification = ({qualification, ...others}) => {
    return (
        <div {...others}>
            { 
                Array(5).fill(5).map( (_, i) => {
                    return (
                        <img
                            key={i}
                            className="mx-1"
                            src={toAbsoluteUrl(`/media/icons/star${ (i+1) <= Number(qualification)  ? "-fill" : ""}.svg` )}
                        />
                    )
                })
            }
        </div>
    )
}

Qualification.propTypes = {
    qualification: PropTypes.number.isRequired
}

export default Qualification
