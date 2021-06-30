import React from 'react'
import PropTypes from 'prop-types'
import { toAbsoluteUrl } from 'theme/helpers/AssetsHelpers';
import Qualification from "./Qualification";
import { parseCurrency } from "./../../const/parse-currency";
import { useHistory } from 'react-router-dom';
import { LifeProcessDetailsPlanRouteFunc } from 'app/routes/childs/Life/routes';

const Plan = ( props ) => {

    const { logoPath, insuranceName, index, qualification, price, returnPercent, 
    anualPrice, share, shareNumber} = props;

    const history = useHistory();

    return (
        <div>

            <div className="container custom-card plans_plan-container">

                {/** Insurance Logo */}
                <div className="plans_insurance-logo-space">
                    <img
                        className="plans_insurance-logo"
                        src={toAbsoluteUrl( `/media/logos/${logoPath}` )}
                    />
                </div>

                {/** Insurance Description */}
                <div className="plans__insurance-desc">
                    <p className="plans_plan-name">
                        { insuranceName } - Plan { index + 1 }
                    </p>

                    <div>
                        <p className="plans_plan-label">
                            Calificación de usuarios
                        </p>
                        <div className="row">
                            <Qualification 
                                qualification={qualification}
                            />
                            <p className="plans_plan-qualification mx-3 my-auto"> { qualification } </p>
                        </div>
                    </div>

                    <div>
                        <p className="plans_plan-label">Prima</p>
                        <p className="plans_plan-value">
                            { `${parseCurrency(price)}COP` }
                        </p>
                    </div>

                    <div>
                        <p className="plans_plan-label"> Retorno de prima </p>
                        <p className="plans_plan-value"> {returnPercent}% </p>
                    </div>
                </div>

                <hr/>

                <div className="plans__insurance-desc">
                    <p className="plans_plan-label"> Valor a pagar anual </p>
                    <p className="plans_plan-price"> { parseCurrency(anualPrice) } </p>
                    <p className="plans_plan-value"> { `Hasta ${ parseCurrency(share) } por ${shareNumber} coutas` } </p>
                </div>

                {/**Insurance Button */}
                <div className="text-center">
                    <button 
                        type="button"
                        className="btn primary_btn_expand w-90"
                        onClick={ () => history.push( LifeProcessDetailsPlanRouteFunc(index) ) }
                    >
                        Comprar
                    </button>
                </div>

            </div>
            


        </div>
    )
}

Plan.propTypes = {
    logoPath: PropTypes.any,
    insuranceName: PropTypes.any,
    index: PropTypes.any,
    qualification: PropTypes.any,
    price: PropTypes.any,
    returnPercent: PropTypes.any,
    anualPrice: PropTypes.any,
    share: PropTypes.any,
    shareNumber: PropTypes.any,
}

export default Plan
