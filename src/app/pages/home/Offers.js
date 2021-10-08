import React, { useMemo } from 'react'
import { NavLink } from "react-router-dom";

export const Offers = () => {
 
    const offersList = useMemo(() => [
        {
            img: "/media/offers/of1.jpg",
            benefits: [
                "No pagas prima cuando el vehículo está detenido.",
                "Disminución en la prima del seguro por buenos comportamientos de conducción.",
                "Dispositivo para el rastreo del vehículo en caso de hurto."
            ],
           
            path:"/cars",
        },
        {
            img: "/media/offers/of2.jpg",
            benefits: [
                "Planes desde $25.000 pesos mensuales."
            ],
            path:"/life",
        },
        // {
        //     img: "/media/offers/of3.jpg",
            // benefits: [
            //     "Accede a un médico especialista en cualquier horario y desde cualquier lugar.",
            //     "Sin filas, sin largas esperas y con la tranquilidad de no tener riesgos de contagio de COVID-19.",
            //     "Sin restricción de edad. ",

            // ],
        //     path:"/health",
        // },
    ], [])

    return (
        <div className="container-fluid text-center ">

            <h1 className="home-pages__title mt-4"> Ofertas </h1>

            <div className="d-inline-flex flex-wrap row">
                {
                    offersList.map(offer => (
                        <div className="col-4 mt-4 ">
                                <div className="bg-white home-offer__image-container">
                                    <NavLink to={offer.path}>
                                        <img
                                            src={offer.img} 
                                            className="home-offer__image"
                                        />

                                    </NavLink>
                                    <ul className="py-4 text-left home-offer__text">
                                        {
                                            offer.benefits.map(benefit => (
                                                <li> {benefit} </li>
                                            )
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                    ))
                }

                    <div className="col-4 mt-4 ">
                        <div className="bg-white home-offer__image-container">                            
                            <a href="https://api.whatsapp.com/message/QOFDDFAB7GWIE1" target="_blank">
                                <img
                                    src="/media/offers/of3.jpg"
                                    className="home-offer__image"
                                />                            
                            </a>
                            <ul className="py-4 text-left home-offer__text">
                                {                                                                        
                                    [
                                        "Accede a un médico especialista en cualquier horario y desde cualquier lugar.",
                                        "Sin filas, sin largas esperas y con la tranquilidad de no tener riesgos de contagio de COVID-19.",
                                        "Sin restricción de edad. ",
                        
                                    ].map(benefit => (
                                        <li> {benefit} </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
            </div>



        </div>
    )
}