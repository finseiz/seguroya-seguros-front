import { useState } from 'react';

export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = ( newFormState = initialState ) => {
        setValues( newFormState );
    }

    const handleInputChange = ( target ) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    const validateAllTrue = () => {
        let returnValue = true;
        Object.values( values ).forEach( (value) => {
            if ( value !== true ){
                returnValue = false;
            }
        })

        return returnValue;
    }

    return [ values, handleInputChange, reset, validateAllTrue ];

}