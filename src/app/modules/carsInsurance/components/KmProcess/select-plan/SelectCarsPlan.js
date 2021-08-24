import Plan from 'app/components/process/Plan';
import { WhatsAppContainer } from 'app/components/process/WhatsAppContainer'
import { bolivarPlan } from 'app/helpers/select-plan';
import { actions } from 'app/modules/carsInsurance/redux';
import { CarsKmProcessDetailsPlanRouteFunc } from 'app/routes/childs/Cars/routes';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPlans } from '../controller';


export const SelectCarsPlanKm = () => {

    const { dataToSend, plans } = useSelector(state => state.carsInsurance);
    const dispatch = useDispatch();

    useEffect(() => {
        getPlans(dataToSend)
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
