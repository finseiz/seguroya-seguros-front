
import { parseCurrency } from 'app/helpers/parse-currency'
import { HomeRoute } from 'app/routes/routes'
import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { paymentResponse } from './repository'

export const Response = (props) => {

    const transactionID = useMemo(() => {
        return new URLSearchParams(props.location.search).get("ref_payco")
    }, [])

    const [requestStatus, setRequestStatus] = useState({ loading: true, error: "", data: undefined });

    //Success
    //http://192.168.0.4:3000/pagos/?ref_payco=&ref_payco=47d3fea3d01eec230b056d95

    //Error
    //http://192.168.0.4:3000/pagos/?ref_payco=&ref_payco=3c74f2f2d490a4fe417f515c


    useEffect(() => {
        if (transactionID !== "" && transactionID !== undefined && transactionID !== null) {
            paymentResponse(transactionID)
                .then(verifyInformation)
                .catch(() => setRequestStatus({ loading: false, error: "Occurió un error al recuperar el pago", data: undefined }))
        } else {
            setRequestStatus({ loading: false, error: "Error en la referencia de pago", data: undefined })
        }
    }, [])

    const transationState = (state) => {
        switch (state) {
            case 1:
                return "ACEPTADA"
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
        <div className="container mt-5 p-5 custom-card bg-white">

            {
                requestStatus.error !== "" ?
                (
                    <div className="alert alert-danger mt-4" role="alert">
                        {requestStatus.error}
                    </div>
                ) :
                requestStatus.data &&
                (
                    <div className="mx-auto w-50">
                        <table className="table table-bordered border-light">
                            <tbody>
                                <tr>
                                    <td>Estado</td>
                                    <td> <b> {requestStatus.data.state} </b>  </td>
                                </tr>
                                <tr>
                                    <td>Referencia</td>
                                    <td> {requestStatus.data.reference} </td>
                                </tr>
                                <tr>
                                    <td>Banco</td>
                                    <td> {requestStatus.data.bank} </td>
                                </tr>
                                <tr>
                                    <td>Recibo</td>
                                    <td> {requestStatus.data.transactionId} </td>
                                </tr>
                                <tr>
                                    <td><b>Total</b></td>
                                    <td> {requestStatus.data.amount} </td>
                                </tr>
                            </tbody>

                        </table>

                    </div>
                )
            }

            <Link to={HomeRoute} >
                <button
                    type="button"
                    className="btn btn-primary primary-button w100 mt-3"
                >
                    <b> Volver al inicio </b>
                </button>
            </Link>
        </div>
    )
}
