import React, { useEffect, useRef, useState } from 'react'
import { WhatsAppContainer } from 'app/components/process/WhatsAppContainer'
import { toAbsoluteUrl } from 'theme/helpers/AssetsHelpers'
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Qualification from 'app/components/process/Qualification';
import { parseCurrency } from 'app/const/parse-currency';
import Comments from "./../../../../../components/process/Comments";
import { actions } from 'app/modules/carsInsurance/redux';
import { CarsProcessOtpRoute } from 'app/routes/childs/Cars/routes';


export const PlanDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { plans } = useSelector(state => state.carsInsurance);
    const [selectPlan, setSelectPlan] = useState();
    let history = useHistory();

    const [benefits, setBenefits] = useState([]);
    const [commets, setCommets] = useState([]);

    useEffect(() => {
        setSelectPlan(plans[id]);
        setBenefits([
            "Si tienes un accidente contra otro vehículo, un bien material, una o varias personas, tienes unaprotección del 80%.",
            "Si tienes un accidente y tu carro tiene un daño superior al 75% del valor del vehículo tienes una protección de $2’000.000 y el valor a pagar es $300.000.",
            "Si te roban tu vehículo y se considera perdido totalmente tienes una protección de $2’000.000.",
            "Si tienes un accidente y tu carro tiene un daño inferior al 75% del valor del vehículo (ej. puertas, el parabrisas, etc.), el valor a pagar es $300.000.",
            "Tienes 10 conductores elegidos en el año."
        ]);
        setCommets([
            { 
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
                qualification: "1", 
                userName: "Roberto Sanchez", 
                userImageUrl: "www.src.com" 
            },
        ])
    }, []);

    return (
        <div className="container my-5">

            <div className="mx-3">

                <WhatsAppContainer />

                {
                    selectPlan && (
                        <div className="custom-card bg-white my-4">

                            <div className="row plans_sal_container-details">

                                {/** Insurance left */}
                                <div className="plan-sal_container-desc">
                                    
                                    {/** Insurance Logo */}
                                    <div>
                                        <img
                                            src={toAbsoluteUrl( `/media/logos/${selectPlan.logoPath}` )}
                                        />
                                    </div>

                                    {/** Insurance Name */}
                                    <div className="plans_sel_plan-name mt-4">
                                        { selectPlan.insuranceName } - Vida
                                    </div>

                                    {/** INsurance benefits */}
                                    <ul className="plan_sel_benefits">
                                        {
                                            benefits.map( (benefit, i) => (
                                                <li className="my-3 plan_sel_benefit-item" key={i}>
                                                    { benefit }
                                                </li>
                                            ) )
                                        }
                                    </ul>

                                    <Comments commentList={commets} />
                                </div>

                                {/** Insurance Right */}
                                <div>

                                    {/** Insurance qualification */}
                                    <p className="mb-1 plans_sal_plan-label-2"> Calificación de usuario </p>
                                    <div className="row">
                                        <Qualification qualification={selectPlan.qualification} className="mb-4" />
                                        <p className="plans_plan-qualification my-1 mx-2"> { selectPlan.qualification } </p>
                                    </div>

                                    {/** Insurance Price */}
                                    <div className="">
                                        <p className="mb-1 plans_sal_plan-label-2"> Precio </p>
                                        <p className="mb-1 plans_sal_plan-value-2"> { parseCurrency(selectPlan.anualPrice) } </p>
                                        <p className=""> { `Hasta ${ parseCurrency(selectPlan.share) } por ${selectPlan.shareNumber} coutas` } </p>
                                    </div>

                                    {/**Insurance Button */}
                                    <div className="text-center">
                                        <button 
                                            type="button"
                                            className="btn primary_btn_expand w-100"
                                            onClick={ () => { 
                                                dispatch( actions.setSelectedPlan( plans[id] ) )
                                                history.push( CarsProcessOtpRoute ) 
                                            } }
                                        >
                                            Comprar
                                        </button>
                                    </div>
                                    
                                    
                                </div>

                            </div>

                        </div>
                    )
                }

                

            </div>
        </div>
    )
}

