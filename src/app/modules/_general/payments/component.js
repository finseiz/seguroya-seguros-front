import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

export const Payment = ({ payment:{ name, description, amount }}) => {

    const [initialLoading, setInitialLoading] = useState(true);

    useEffect(() => {
        const script = document.createElement("script");

        script.src = "https://checkout.epayco.co/checkout.js";
        script.async = true;

        script.onload = () => {
            window.ePayco.checkout.configure({
                key: "3ad1fbb480ef39abc622bbc93b53ae73",
                test: "true"
            });
            setInitialLoading(false)
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handlePay = () => {
        var data = {
            name: name,
            description: description,
            amount: amount,
            country: "CO",
            currency: "COP",
            external: "false",
            response: "http://192.168.0.4:3000/pagos"
        };

        window.ePayco.checkout.open(data);
    }


    return (
        <>
            {
                initialLoading ?
                (
                    <p>Espere...</p>
                ):
                (
                    <button
                        className="btn btn-primary primary-button w-100 mt-3"
                        onClick={handlePay}
                    >
                        <b>Realizar el pago</b>
                    </button>
                )
            }
        </>
    )
}

Payment.propTypes = {
    name: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired, 
    amount: PropTypes.number.isRequired,
}


