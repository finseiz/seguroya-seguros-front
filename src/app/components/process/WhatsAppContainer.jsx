import React from 'react'
import { toAbsoluteUrl } from 'theme/helpers/AssetsHelpers'

export const WhatsAppContainer = () => {
    return (
        <div className="custom-card whatsapp__background">

            <div className="d-flex justify-content-center whatsapp__align">

                <div>
                    <img
                        src={toAbsoluteUrl("/media/icons/whatsapp.png")}
                        alt="wa-icon"
                        className="my-2"
                    />
                </div>
                <a href="https://api.whatsapp.com/message/QOFDDFAB7GWIE1" target="_blank">
                    <div>
                        <p className="whatsapp__text"> Contactanos por WhatsApp </p>
                    </div>
                </a>
                
            </div>           
            
        </div>
    )
}
