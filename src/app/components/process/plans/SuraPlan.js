import React from 'react'
import PropTypes from 'prop-types'
import { toAbsoluteUrl } from 'theme/helpers/AssetsHelpers';
import { useHistory } from 'react-router-dom';
import Qualification from '../Qualification';
import { HealthProcessBeneficiariesRoute } from 'app/routes/childs/Health/routes';
import { useDispatch } from 'react-redux';
import { actions } from 'app/modules/healthInsurance/redux';

const SuraPlan = (props) => {

    const { logoPath, insuranceName, index, qualification, data: { solucion } } = props;

    const history = useHistory();
    const dispatch = useDispatch();

    return (
        <div>

            <div className="container custom-card plans_plan-container" style={{ maxWidth: 300 }}>

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

                    <p className="plans_plan-name">
                        {solucion["nombre"]}
                    </p>

                    {
                        qualification && (

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

                    <div>
                        <p className="plans_plan-label"> Beneficios </p>
                        <p className="plans_plan-health-value"> {solucion["descripcion"]} </p>
                    </div>

                </div>

                <hr />

                {/**Insurance Button */}
                <div className="text-center">
                    <button
                        type="button"
                        className="btn primary_btn_expand w-90"
                        onClick={() => {
                            dispatch(actions.setSelectedPlan({
                                solutionId: solucion["codigo"],
                                logoPath
                            }))
                            history.push(HealthProcessBeneficiariesRoute)
                        }}
                    >
                        Ver detalles
                    </button>
                </div>

            </div>



        </div>
    )
}

SuraPlan.propTypes = {
    logoPath: PropTypes.any,
    insuranceName: PropTypes.any,
    index: PropTypes.any,
    qualification: PropTypes.any,
    descriptionValues: PropTypes.array,
    anualPrice: PropTypes.any,
    share: PropTypes.any,
    shareNumber: PropTypes.any,
}

export default SuraPlan
