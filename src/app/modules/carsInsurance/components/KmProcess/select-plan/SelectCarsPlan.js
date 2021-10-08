import React, { useEffect, useMemo, useState } from 'react'

import KmPlan from 'app/components/process/plans/KmPlans';
import { WhatsAppContainer } from 'app/components/process/WhatsAppContainer'
import { useDispatch, useSelector } from 'react-redux';
import { getPlans } from '../controller';
import { Loading } from 'app/components/process/messages/Loading';

export const SelectCarsPlanKm = () => {    
    const [requestStatus, setRequestStatus] = useState({ loading: false, error: false });
    const { dataToSend, plans } = useSelector(state => state.carsInsurance);
    const dispatch = useDispatch();

    useEffect(() => {
        if ( plans.length === 0 ) {
            setRequestStatus({ loading: true, error: false})
            getPlans(dataToSend, dispatch)
            .then(plansResponse => {                
                if ( plansResponse === undefined) setRequestStatus({ loading: false, error: true})
                else setRequestStatus({ loading: false, error: false})
            })
        }
    }, [dataToSend])

    return (
        <div className="container my-5">

            <div className="mx-3">

                <WhatsAppContainer />

                {
                    requestStatus.loading ?
                    (
                        // <div>
                        //     Estamos buscando los mejores planes...
                        // </div>
                        <div> <Loading /> </div>
                    ) :
                    requestStatus.error ?
                    (
                        <div>
                            No fue posible encontrar ningún plan (ERR)
                        </div>
                    ) :
                    (
                        <div className="row justify-content-between mt-3" >
                            {
                                plans.length > 0 ?  (
                                    plans.map((plan, i) => (
                                        <KmPlan
                                            key={i}
                                            index={i}
                                            {...plan}
                                        />
                                    ))
                                ) : (
                                    <div>
                                        No existen planes disponibles para ti
                                    </div>
                                )
                            }
                        </div>
                    )
                }



            </div>

        </div>
    )
}
