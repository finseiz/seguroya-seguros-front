import React, { useEffect, useRef, useState } from 'react'
import { WhatsAppContainer } from 'app/components/process/WhatsAppContainer'
import { toAbsoluteUrl } from 'theme/helpers/AssetsHelpers'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Qualification from 'app/components/process/Qualification';
import { parseCurrency } from 'app/const/parse-currency';
import Comments from "./../../../../../components/process/Comments";


export const PlanDetails = () => {

    const { id } = useParams();
    const { plans } = useSelector(state => state.lifeInsurance);
    const [selectPlan, setSelectPlan] = useState();

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
            {
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
                qualification: "4", 
                userName: "Juan Perez", 
                userImageUrl: "www.src.com" 
            }
        ])
    }, []);

    return (
        <div className="container my-5">

            <div className="mx-3">

                <WhatsAppContainer />

                {
                    selectPlan && (
                        <div className="custom-card bg-white my-4">

                            <div className="row py-4 px-5">

                                {/** Insurance left */}
                                <div className="w-75">
                                    
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
                                            onClick={ () => {} }
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

