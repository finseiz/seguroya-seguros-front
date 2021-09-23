
import React from 'react'
import { Carousel } from 'react-bootstrap'
import { toAbsoluteUrl } from 'theme/helpers/AssetsHelpers'

export const OurClients = () => {
    return (
        <div className="d-inline justify-content-center">
            <Carousel>
                <Carousel.Item>
                    
                    <Slider 
                        text='“Haber adquerido una póliza de salud, fue la mejor inversión que pude haber hecho, por mi bienestar” ' 
                        name="Vanessa Martínez"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    
                    <Slider 
                        text='"Encontré un seguro de vida, que se ajusta a mi necesidad y presupuesto"' 
                        name="Pedro García."
                    />

                </Carousel.Item>
                <Carousel.Item>
                    
                    <Slider 
                        text='“El seguro por kilómetros, me permite pagar solo lo que realmente consumo, excelente e innovador producto” ' 
                        name="Julio González."
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    )
}

const Slider = ({ text, name }) => {
    return (
        <div className="container">
            <div className="row m-0">
                <div className="col-3">
                    <div className="profile-image">
                        <img
                            src={toAbsoluteUrl("/media/icons/persona-white.svg")}
                            style={{ maxWidth: '8rem' }}
                            alt="author_photo"
                        />
                    </div>
                </div>
                <div className="col-9 text-left">
                    <p>
                        { text }
                    </p>

                    <p>
                        <strong> { name } </strong>
                    </p>
                </div>
            </div>
        </div>
    )
}

