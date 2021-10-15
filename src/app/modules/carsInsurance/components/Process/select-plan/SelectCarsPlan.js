import { WhatsAppContainer } from 'app/components/process/WhatsAppContainer'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPlans } from '../controller';
import { Loading } from 'app/components/process/messages/Loading';
import CarPlan from 'app/components/process/plans/CarPlans';

export const SelectCarsPlan = () => {

    const { plans, dataToSend } = useSelector(state => state.carsInsurance);
    const [request, setRequest] = useState({ loading: false, error: false})
    const dispatch = useDispatch();

    useEffect(() => {

        if (  plans.length === 0 ){
            setRequest({ loading: true, error: false });
            getPlans(dataToSend, dispatch)
            .then( _ => {                
                setRequest({ loading: false, error: false });
            })
            .catch( _ => setRequest({ loading: false, error: true }) )
        }
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
                        <Loading />
                    ):
                    <div className="row justify-content-between mt-3" >
                        {
                            plans.length && (
                                plans.map((plan, i) => (
                                    <CarPlan
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