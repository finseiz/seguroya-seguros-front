import { parseCurrency } from 'app/helpers/parse-currency'
import { WhatsAppContainer } from 'app/components/process/WhatsAppContainer'
import { HomeRoute } from 'app/routes/routes'
import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { paymentResponse,setPayCotization } from './repository'
import { toAbsoluteUrl } from "../../../../theme/helpers";

export const Response = (props) => {

    const transactionID = useMemo(() => {
        return new URLSearchParams(props.location.search).get("ref_payco")
    }, [])

    const [requestStatus, setRequestStatus] = useState({ loading: true, error: "", data: undefined });



    useEffect(() => {
        if (transactionID !== "" && transactionID !== undefined && transactionID !== null) {
            paymentResponse(transactionID)
                .then(
                    verifyInformation
                )
                .catch(
                    () => setRequestStatus({ loading: false, error: "Occurió un error al recuperar el pago", data: undefined })
                )
        } else {
            setRequestStatus({ loading: false, error: "Error en la referencia de pago", data: undefined })
        }
    }, [])

    const transationState = (state) => {
        switch (state) {
            case 1:{
                setPayCotization();
                return "ACEPTADA"
            }
            case 3:
                return "PENDIENTE"
            default:
                return "FALLIDA"
        }
    }

    const verifyInformation = (response) => {
        console.log(response.body);
        if (response?.body?.success === true) {            
            const data = response.body.data;
            const dataToShow = {
                amount: parseCurrency(data.x_amount) + " COP",
                bank: data.x_bank_name,
                date: data.x_fecha_transaccion,
                state: transationState(data.x_cod_transaction_state),
                transactionId: data.x_transaction_id,
                reference: data.x_id_factura,

            }
            setRequestStatus({ loading: false, error: "", data: dataToShow })

        } else {
            setRequestStatus({ loading: false, error: "Occurió un error al recuperar el pago (REF)", data: undefined })
        }
    }

    return (
        <div>
            <div className="mx-auto mt-5 w-75">
                <WhatsAppContainer />
            </div>

            {
                requestStatus.data &&  requestStatus.data.state == "ACEPTADA" &&
                (
                    <div className="mx-auto mt-5 w-25">

                    <div className="container custom-card bg-white row">
                        <div className="col-2 pt-2 pb-2">
                            <img
                                 src={toAbsoluteUrl("/media/icons/Aceptado.png")}
                                alt="Aceptado"
                                className="mx-2 my-1 state-icon"
                            />
                        </div>
                        <div className="col-10 pt-2 pb-2 ">
                            <div className="styleFont">Pago confirmado </div>
                            <div className="styleFontligth">Tu pago ha sido confirmado</div>
                        </div>
    
                    </div>
                    

                    <div className="container mt-2  custom-card bg-white row">
                    <div className= "col-12 mt-3 styleTitleligth"> Referencia de pago </div>
                        <div className= "col-12 styleFontMedium mb-2 mt-1"> {requestStatus.data.reference}  </div>
                        <div className= "col-12 solid-line" > </div>
                        
                        <div className= "col-12 mt-2 styleTitleligth"> Tu banco </div>
                        <div className= "col-12 styleFontMedium mt-1 mb-3"> {requestStatus.data.bank} </div>                           
                        <div className= "col-12 solid-line" > </div>

                        <div className= "col-12 mt-2 styleTitleligth"> Tu número de recibo  </div>
                        <div className= "col-12 styleFontMedium mt-1 mb-3"> {requestStatus.data.transactionId} </div>                           
                        <div className= "col-12 solid-line" > </div>                            
                        
                        <div className="col-2 pt-3 mb-3  text-left plans_sel_plan-comment">
                            Total
                        </div>
                        <div className="col-10 pt-3 pb-3 text-right plans_sal_plan-label-2">
                            {requestStatus.data.amount}
                        </div>
    
    
                    </div>
    
                    <div className=" col-12  mt-2 pb-3 text-center">
                        <Link to={HomeRoute} >
                            <button
                                type="button"
                                className="btn btn-primary primary-button w100 mt-3 pl-5 pr-5"
                            >
                                <b> Volver al inicio </b>
                            </button>
                        </Link>
                    </div>
    
                </div>
                )
            }

            {
                requestStatus.data &&  requestStatus.data.state == "PENDIENTE" &&
                (
                    <div className="mx-auto mt-5 w-25">

                    <div className="container custom-card bg-white row">
                        <div className="col-2 pt-2 pb-2">
                            <img
                                 src={toAbsoluteUrl("/media/icons/Pendiente.png")}
                                alt="pendiente"
                                className="mx-2 my-1 state-icon"
                            />
                        </div>
                        <div className="col-10 pt-2 pb-2 ">
                            <div className="styleFont">Confirmando el pago</div>
                            <div className="styleFontligth">Estamos validando tu pago</div>
                        </div>
    
                    </div>
    
                    <div className="container custom-card mt-2 bg-white row">
                        <div className="col-2 pt-2 pb-2">
                            <img
                                 src={toAbsoluteUrl("/media/icons/clock.png")}
                                alt="pendiente"
                                className="mx-2 my-1 state-icon-min"
                            />
                        </div>
                        <div className="col-10 pt-3 ">
                            <div className="styleFontligth">Esperando a que tu banco confirme</div>
                        </div>
    
                    </div>
    
                    <div className="container mt-2  custom-card bg-white row">
                        <div className="col-2 pt-3 text-left plans_sel_plan-comment">
                            Total
                        </div>
                        <div className="col-10 pt-3 pb-3 text-right plans_sal_plan-label-2">
                            {requestStatus.data.amount}
                        </div>
    
    
                    </div>
    
                    <div className=" col-12  mt-2 pb-3 text-center">
                        <Link to={HomeRoute} >
                            <button
                                type="button"
                                className="btn btn-primary primary-button w100 mt-3 pl-5 pr-5"
                            >
                                <b> Volver al inicio </b>
                            </button>
                        </Link>
                    </div>
    
                </div>
                )
            }

            {
                requestStatus.data &&  requestStatus.data.state == "FALLIDA"  &&
                (
                    <div className="mx-auto mt-5 w-25">

                    <div className="container custom-card bg-white row">
                        <div className="col-2 pt-2 pb-2">
                            <img
                                 src={toAbsoluteUrl("/media/icons/Rechazado.png")}
                                alt="pendiente"
                                className="mx-2 my-1 state-icon"
                            />
                        </div>
                        <div className="col-10 pt-2 pb-2 ">
                            <div className="styleFont">Pago rechazado</div>
                            <div className="styleFontligth">Revisa tus fondos o permisos</div>
                        </div>
    
                    </div>
    
                    <div className="container custom-card mt-2 bg-white row">
                        <div className="col-12 pt-2 pb-2">
                            <div className="styleFontRed">¿Qué pasó?</div>
                        </div>
                        <div className="col-12 pt-1 pb-2 ">
                            <div className="styleFontligth">Puede ser que no tengas fondos o que tu banco haya bloqueado la transacción,<strong> revisa y vuelve a intentarlo </strong></div>
                        </div>
    
                    </div>
    
                    <div className=" mt-2  custom-card bg-white row">
                       
                        <div className= "col-12 mt-3 styleTitleligth"> Referencia de pago </div>
                        <div className= "col-12 styleFontMedium mb-2 mt-1"> {requestStatus.data.reference}  </div>
                        <div className= "col-12 solid-line" > </div>
                        <div className= "col-12 mt-2 styleTitleligth"> Tu banco </div>
                        <div className= "col-12 styleFontMedium mt-1 mb-3"> {requestStatus.data.bank} </div>                           
    
                    </div>
    
                    <div className=" col-12  mt-2 pb-3 text-center">
                        <Link to={HomeRoute} >
                            <button
                                type="button"
                                className="btn btn-primary primary-button w100 mt-3 pl-5 pr-5"
                            >
                                <b> Volver al inicio </b>
                            </button>
                        </Link>
                    </div>
    
                </div>
                )
            }
                         
           

        </div>
    )
}
