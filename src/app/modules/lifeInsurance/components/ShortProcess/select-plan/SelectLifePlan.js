import { WhatsAppContainer } from 'app/components/process/WhatsAppContainer'
import { actions } from 'app/modules/lifeInsurance/redux';
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
                price: 100000,
                qualification: 3,
                returnPercent: 85,
                anualPrice: 100000,
                share: 100000,
                shareNumber: 12
            },
            {
                logoPath: "colmena-logo.svg", 
                insuranceName: "Colmena",
                price: 233000,
                qualification: 1,
                returnPercent: 87,
                anualPrice: 100000,
                share: 100000,
                shareNumber: 12
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
                                    logoPath={plan.logoPath}
                                    index={i}
                                    insuranceName={plan.insuranceName}
                                    price={plan.price}
                                    qualification={plan.qualification}
                                    returnPercent={plan.returnPercent}
                                    anualPrice={plan.anualPrice}
                                    share={plan.share}
                                    shareNumber={plan.shareNumber}
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
