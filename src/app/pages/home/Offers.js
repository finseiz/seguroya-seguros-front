import React, { useMemo } from 'react'

export const Offers = () => {

    const offersList = useMemo(() => [
        {
            img: "/media/offers/of1.jpg",
            benefits: [
                "Planes desde $25.000 pesos mensuales."
            ]
        },
        {
            img: "/media/offers/of2.jpg",
            benefits: [
                "No pagas prima cuando el vehículo está detenido.",
                "Disminución en la prima del seguro por buenos comportamientos de conducción.",
                "Dispositivo para el rastreo del vehículo en caso de hurto."
            ]
        },
        {
            img: "/media/offers/of3.jpg",
            benefits: [
                "Accede a un médico especialista en cualquier horario y desde cualquier lugar.",
                "Sin filas, sin largas esperas y con la tranquilidad de no tener riesgos de contagio de COVID-19.",
                "Sin restricción de edad. ",

            ]
        },
    ], [])

    return (
        <div className="container-fluid text-center">

            <h1 className="home-pages__title mt-4"> Ofertas </h1>

            <div className="d-inline-flex flex-wrap">
                {
                    offersList.map(offer => (
                        <div className="mt-4 mx-4">
                            <div className="bg-white home-offer__image-container">
                                <img
                                    src={offer.img}
                                    className="home-offer__image"
                                />

                                <ul className="py-4 text-left home-offer__text">
                                    {
                                        offer.benefits.map(benefit => (
                                            <li> {benefit} </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>



        </div>
    )
}