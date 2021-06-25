import React from 'react'
import PropTypes from 'prop-types'
import { toAbsoluteUrl } from 'theme/helpers/AssetsHelpers';

const Plan = (props) => {

    const { logoPath } = props;

    return (
        <div>

            <div className="insurance_logo">
                <img
                    src={toAbsoluteUrl( `/media/logos/${logoPath}` )}
                    />
            </div>
            
        </div>
    )
}

Plan.propTypes = {

}

export default Plan
