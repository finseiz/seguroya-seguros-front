import React from 'react'
import PropTypes from 'prop-types'
import { toAbsoluteUrl } from 'theme/helpers/AssetsHelpers'

const Radio = ({ active, ...others }) => {
    return (
        <button
            type="button"
            className={"radio"}
            { ...others }
        >
            {
                active ? 
                <img 
                    src={toAbsoluteUrl("/media/icons/radio-on.svg")}
                    alt="life-icon"
                /> :
                <img 
                    src={toAbsoluteUrl("/media/icons/radio-off.svg")}
                    alt="life-icon"
                />
            }
        </button>
    )
}

Radio.propTypes = {

}

export default Radio
