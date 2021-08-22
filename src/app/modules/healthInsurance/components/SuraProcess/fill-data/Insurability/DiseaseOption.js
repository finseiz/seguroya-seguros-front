import React from 'react'
import Radio from "app/modules/_forms/general/Radio"

export const DiseaseOption = ({ formik, id, value }) => {

    const list = formik.values[id].diseaseList;

    const addOrRemoveItem = () => {
        let valuesCopy = [...formik.values];
        const index = list.findIndex( disease => value === disease )
        if ( index !== -1 ) {
            valuesCopy[id].diseaseList.splice( index, 1 );
        }else{
            valuesCopy[id].diseaseList.push(value)
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