import React from 'react'
import PropTypes from 'prop-types'
import { toAbsoluteUrl } from 'theme/helpers/AssetsHelpers'

const Radio = ({ active, imageType = "radio", ...others }) => {

    return (
        <button
            type="button"
            className={"radio"}
            { ...others }
        >
            {
                active ? 
                <img 
                    src={toAbsoluteUrl(`/media/icons/${imageType}-on.svg`)}
                    alt="life-icon"
                /> :
                <img 
                    src={toAbsoluteUrl(`/media/icons/${imageType}-off.svg`)}
                    alt="life-icon"
                />
            }
        </button>
    )
}

Radio.propTypes = {
    active: PropTypes.bool.isRequired
}

export default Radio
