import React from 'react'
import PropTypes from 'prop-types'
import { toAbsoluteUrl } from 'theme/helpers/AssetsHelpers';
import { useHistory } from 'react-router-dom';
import Qualification from '../Qualification';

const LifePlan = (props) => {

    const { logoPath, insuranceName, planCount, redirectValues, qualification, descriptionValues, redirect } = props;

    const history = useHistory();

    return (
        <>

            <div className=" custom-card plans_plan-container">

                {/** Insurance Logo */}
                <div className="plans_insurance-logo-space">
                    <img
                        className="plans_insurance-logo"
                        src={toAbsoluteUrl(`/media/logos/${logoPath}`)}
                        style={{ maxWidth: 220 }}
                    />
                </div>

                {/** Insurance Description */}
                <div className="plans__insurance-desc">
                    <p className="plans_plan-name">
                        {insuranceName} - {planCount} 
                    </p>

                    {
                        qualification &&
                        (
                            <div>
                                <p className="plans_plan-label">
                                    Calificación de usuarios
                                </p>
                                <div className="row">
                                    <Qualification
                                        qualification={qualification}
                                    />
                                    <p className="plans_plan-qualification mx-3 my-auto"> {qualification} </p>
                                </div>
                            </div>
                        )
                    }

                    {
                        descriptionValues &&
                        descriptionValues.map((value, i) => (
                            <div key={i}>
                                <p className="plans_plan-label"> {value.label} </p>
                                <p className="plans_plan-value"> {value.value} </p>
                            </div>
                        ))
                    }

                </div>

                <hr />

                {/**Insurance Button */}
                <div className="text-center">
                    <button
                        type="button"
                        className="btn primary_btn_expand w-90"
                        onClick={() => history.push(redirect(redirectValues))}
                    >
                        Ver Pagos
                    </button>
                </div>

            </div>



        </>
    )
}

LifePlan.propTypes = {
    // logoPath: PropTypes.any.isRequired,
    // insuranceName: PropTypes.any.isRequired,
    // index: PropTypes.any,
    // qualification: PropTypes.any,
    // descriptionValues: PropTypes.array.isRequired,
    // anualPrice: PropTypes.any.isRequired,
}

export default LifePlan
