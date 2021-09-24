import Plan from 'app/components/process/Plan';
import { WhatsAppContainer } from 'app/components/process/WhatsAppContainer'
import { bolivarPlan } from 'app/helpers/select-plan';
import React, { Fragment, useEffect, useState } from 'react'
import { actions } from 'app/modules/carsInsurance/redux';
import { CarsProcessDetailsPlanRouteFunc } from 'app/routes/childs/Cars/routes';
import { useDispatch, useSelector } from 'react-redux';
import { getPlans } from '../controller';


export const SelectCarsPlan = () => {

    const { plans, dataToSend } = useSelector(state => state.carsInsurance);
    const [request, setRequest] = useState({ loading: false, error: false})
    const dispatch = useDispatch();

    useEffect(() => {

        if (  plans.length === 0 ){
            getPlans(dataToSend)
            .then( data => {
                setRequest({ loading: true, error: false });
                dispatch(actions.setPlans(data))
                setRequest({ loading: false, error: false });
            })
            .catch( error => setRequest({ loading: false, error: true }) )

        }

        // dispatch(actions.setPlans([
        //     {
        //         logoPath: "bolivar-logo.svg",
        //         insuranceName: "Bolivar - Auto",
        //         qualification: 3,
        //         anualPrice: 500000000,
        //         share: 200000,
        //         shareNumber: 12,
        //         descriptionValues: bolivarPlan(50000000, "Todo riesgo"),
        //         redirect: CarsProcessDetailsPlanRouteFunc
        //     },
        //     {
        //         logoPath: "bolivar-logo.svg",
        //         insuranceName: "Bolivar - Auto",
        //         qualification: 5,
        //         anualPrice: 2300000,
        //         share: 980000,
        //         shareNumber: 12,
        //         descriptionValues: bolivarPlan(150000, "Todo riesgo"),
        //         redirect: CarsProcessDetailsPlanRouteFunc
        //     },

        //     {
        //         logoPath: "bolivar-logo.svg",
        //         insuranceName: "Bolivar - Auto",
        //         qualification: 1,
        //         anualPrice: 9300000,
        //         share: 170000,
        //         shareNumber: 12,
        //         descriptionValues: bolivarPlan(560000, "Todo riesgo"),
        //         redirect: CarsProcessDetailsPlanRouteFunc
        //     },
        // ]))
    }, [])

    return (
        <div className="container my-5">

            <div className="mx-3">

                <WhatsAppContainer />

                {
                    request.error ?
                    (
                        <div> No fue posible recuperar planes </div>
                    ):
                    request.loading ? 
                    (
                        <div> Estamos buscando los mejores planes </div>
                    ):
                    <div className="row justify-content-between mt-3" >
                        {
                            plans.length && (
                                plans.map((plan, i) => (
                                    <Plan
                                        key={i}
                                        index={i}
                                        {...plan}
                                    />
                                ))
                            )
                        }
                    </div>
                    
                }

            </div>

        </div>
    )
}
