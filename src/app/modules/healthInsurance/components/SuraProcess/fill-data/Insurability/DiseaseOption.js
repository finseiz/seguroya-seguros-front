import React from 'react'
import Radio from "app/modules/_forms/general/Radio"

export const DiseaseOption = ({ formik, id, value, fieldList }) => {

    const list = formik.values[id][fieldList];

    const addOrRemoveItem = () => {
        let valuesCopy = [...formik.values];
        const index = list.findIndex( disease => value === disease )
        if ( index !== -1 ) {
            valuesCopy[id][fieldList].splice( index, 1 );
        }else{
            valuesCopy[id][fieldList].push(value)
        }
        formik.setValues(valuesCopy)
    }

    return (
        <div className="row">
            <div className="col-md-auto p-0">
                <Radio
                    active={list.some(disease => value === disease)}
                    imageType="square"
                    onClick={addOrRemoveItem}
                />
            </div>
            <div className="col p-0">
                {value}
            </div>

        </div>
    )
}