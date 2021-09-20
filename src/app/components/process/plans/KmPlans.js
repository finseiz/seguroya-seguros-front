import React from 'react'
import PropTypes from 'prop-types'
import { toAbsoluteUrl } from 'theme/helpers/AssetsHelpers';
import { useHistory } from 'react-router-dom';
import { parseCurrency } from 'app/helpers/parse-currency';
import Qualification from '../Qualification';

const KmPlan = (props) => {

    const { logoPath, insuranceName, index, qualification, descriptionValues,
        anualPrice, redirect } = props;

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
                        {insuranceName} {index !== undefined && `- Plan ${index + 1}`}
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
                        descriptionValues.map(value => (
                            <div>
                                <p className="plans_plan-label"> {value.label} </p>
                                <p className="plans_plan-value"> {value.value} </p>
                            </div>
                        ))
                    }

                </div>

                <hr />

                <div className="plans__insurance-desc">
                    <p className="plans_plan-label"> Valor a total a pagar </p>
                    <p className="plans_plan-price"> {parseCurrency(anualPrice)} </p>
                </div>

                {/**Insurance Button */}
                <div className="text-center">
                    <button
                        type="button"
                        className="btn primary_btn_expand w-90"
                        onClick={() => history.push(redirect(index))}
                    >
                        Comprar
                    </button>
                </div>

            </div>



        </>
    )
}

KmPlan.propTypes = {
    logoPath: PropTypes.any.isRequired,
    insuranceName: PropTypes.any.isRequired,
    index: PropTypes.any,
    qualification: PropTypes.any,
    descriptionValues: PropTypes.array.isRequired,
    anualPrice: PropTypes.any.isRequired,
}

export default KmPlan
