import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { WhatsAppContainer } from 'app/components/process/WhatsAppContainer'
import { suraPlan } from 'app/helpers/select-plan';
import { actions } from 'app/modules/healthInsurance/redux';
import Plan from 'app/components/process/Plan';
import { HealthProcessDetailsPlanRouteFunc } from 'app/routes/childs/Health/routes';

export const SelectSuraHealthPlan = () => {

    const { plans } = useSelector(state => state.healthInsurance);
    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch( actions.setPlans([
            {
                logoPath: "sura-logo.png", 
                insuranceName: "Sura",
                qualification: 3,
                anualPrice: 5000000,
                share: 200000,
                shareNumber: 12,
                descriptionValues: suraPlan("Evoluciona"),
                redirect: HealthProcessDetailsPlanRouteFunc
            },
            {
                logoPath: "sura-logo.png", 
                insuranceName: "Sura",
                qualification: 1,
                anualPrice: 2300000,
                share: 100000,
                shareNumber: 12,
                descriptionValues: suraPlan("Clásico"),
                redirect: HealthProcessDetailsPlanRouteFunc
            },
        ]) )
    }, [])

    return (
        <div className="container my-5">

            <div className="mx-3">

            <WhatsAppContainer />
            
            <div className="row justify-content-between mt-3" >
                {
                    plans.length && (
                        plans.map( ( plan, i ) => (
                            <Fragment key={i}>
                                <Plan
                                    index={i}
                                    { ...plan }
                                />
                            </Fragment>
                        ))
                    )
                }
            </div>

            </div>

        </div>
    )
}
