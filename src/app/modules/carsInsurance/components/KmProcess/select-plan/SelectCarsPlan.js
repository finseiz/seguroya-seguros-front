import Plan from 'app/components/process/Plan';
import { WhatsAppContainer } from 'app/components/process/WhatsAppContainer'
import { bolivarPlan } from 'app/helpers/select-plan';
import { actions } from 'app/modules/carsInsurance/redux';
import { CarsKmProcessDetailsPlanRouteFunc, CarsProcessDetailsPlanRouteFunc } from 'app/routes/childs/Cars/routes';
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


export const SelectCarsPlanKm = () => {

    const { plans } = useSelector(state => state.carsInsurance);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(actions.setPlans([
            {
                logoPath: "sbs-logo.png",
                insuranceName: "SBS - Auto",
                qualification: 3,
                anualPrice: 500000000,
                share: 200000,
                shareNumber: 12,
                descriptionValues: bolivarPlan(50000000, "Cali - 10km"),
                redirect: CarsKmProcessDetailsPlanRouteFunc
            },
            {
                logoPath: "sbs-logo.png",
                insuranceName: "SBS - Auto",
                qualification: 5,
                anualPrice: 2300000,
                share: 980000,
                shareNumber: 12,
                descriptionValues: bolivarPlan(150000, "Cali - 10km"),
                redirect: CarsKmProcessDetailsPlanRouteFunc
            },

            {
                logoPath: "sbs-logo.png",
                insuranceName: "SBS - Auto",
                qualification: 1,
                anualPrice: 9300000,
                share: 170000,
                shareNumber: 12,
                descriptionValues: bolivarPlan(560000, "Cali - 10km"),
                redirect: CarsKmProcessDetailsPlanRouteFunc
            },
        ]))
    }, [])

    return (
        <div className="container my-5">

            <div className="mx-3">

                <WhatsAppContainer />

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

            </div>

        </div>
    )
}
