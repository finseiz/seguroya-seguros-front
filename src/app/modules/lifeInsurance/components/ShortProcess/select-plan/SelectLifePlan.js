import { WhatsAppContainer } from 'app/components/process/WhatsAppContainer'
import { colmenaPlan } from 'app/helpers/select-plan';
import { actions } from 'app/modules/lifeInsurance/redux';
import { LifeProcessDetailsPlanRouteFunc } from 'app/routes/childs/Life/routes';
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Plan from "./../../../../../components/process/Plan";

export const SelectLifePlan = () => {

    const { plans } = useSelector(state => state.lifeInsurance);
    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch( actions.setPlans([
            {
                logoPath: "colmena-logo.svg", 
                insuranceName: "Colmena",
                qualification: 3,
                anualPrice: 5000000,
                share: 200000,
                shareNumber: 12,
                descriptionValues: colmenaPlan(25000, 80),
                redirect: LifeProcessDetailsPlanRouteFunc
            },
            {
                logoPath: "colmena-logo.svg", 
                insuranceName: "Colmena",
                qualification: 1,
                anualPrice: 2300000,
                share: 100000,
                shareNumber: 12,
                descriptionValues: colmenaPlan(49000, 33),
                redirect: LifeProcessDetailsPlanRouteFunc
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
