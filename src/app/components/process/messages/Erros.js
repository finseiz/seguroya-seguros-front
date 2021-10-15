import React from 'react'
import { toAbsoluteUrl } from 'theme/helpers/AssetsHelpers'

export const ErrorMessage = () => {
    return (
        <div className="container-sm my-5">

            <div className="mx-5 p-5 bg-white rounded text-center">

                <div>
                    <img src={toAbsoluteUrl("/media/images/Error.svg")} />
                </div>

                <div className="mt-4">
                    <img src={toAbsoluteUrl("/media/images/points.svg")} />
                </div>

                <div className="mt-4" style={{color: '#0e1f74', fontWeight: 'bold', fontSize: '1.3rem'}} >
                        No es posible presentar los planes en este momento 
                </div>

                <div className="my-4" style={{color: '#0e1f74', fontSize: '1rem'}} >
                    Por favor intenta en unos momentos
                </div>                

            </div>
            
        </div>
    )
}
