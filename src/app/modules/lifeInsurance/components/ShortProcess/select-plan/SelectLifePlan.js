import { WhatsAppContainer } from 'app/components/process/WhatsAppContainer'
import React from 'react'
import Plan from "./../../../../../components/process/Plan";

export const SelectLifePlan = () => {

    return (
        <div className="container my-5">

            <WhatsAppContainer />
            
            <div className="row justify-content-between" >
                <Plan 
                    logoPath="colmena-logo.svg"
                />
                <Plan 
                    logoPath="colmena-logo.svg"
                />
                <Plan 
                    logoPath="colmena-logo.svg"
                />
            </div>

        </div>
    )
}
