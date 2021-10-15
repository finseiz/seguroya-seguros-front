import React, { Fragment, useEffect, useState } from 'react'
import LifePlan from 'app/components/process/plans/LifePlans';
import { WhatsAppContainer } from 'app/components/process/WhatsAppContainer'
import { useDispatch, useSelector } from 'react-redux';
import { getPlans } from '../controller';
import { Loading } from 'app/components/process/messages/Loading';
import { ErrorMessage } from 'app/components/process/messages/Erros';


export const SelectLifePlan = () => {

    const { plans, clientData } = useSelector(state => state.lifeInsurance);
    const [requestStatus, setRequestStatus] = useState({ loading: false, error: false})
    const dispatch = useDispatch();

    useEffect(() => {

        if ( plans.length === 0 ){
            setRequestStatus({ loading: true, error: false})
            getPlans(dispatch, clientData).then( response => {
                if ( response ) setRequestStatus({ loading: false, error: false})
                else setRequestStatus({ loading: false, error: true})
            })
        }
        
    }, [])

    return (
        <div className="container my-5">

            <div className="mx-3">

            <WhatsAppContainer />

            {
                requestStatus.error ?
                (
                    <ErrorMessage />  
                ):
                requestStatus.loading ? 
                (
                    
                    <Loading /> 
                ):
                (
                <div className="row justify-content-between mt-3" >
                    {
                        plans.length && (
                            plans.map( ( plan, i ) => (
                                <Fragment key={i}>
                                    <LifePlan 
                                        index={i}
                                        { ...plan }
                                    />
                                </Fragment>
                            ))
                        )
                    }
                </div>
                )
            }

            </div>

        </div>
    )
}
