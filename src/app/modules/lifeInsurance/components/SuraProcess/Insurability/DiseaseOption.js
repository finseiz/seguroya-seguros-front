import React from 'react'
import Radio from "app/modules/_forms/general/Radio"

export const DiseaseOption = ({ formik, value, fieldList }) => {
    
    const list = formik.values[fieldList];

    const addOrRemoveItem = () => {
        let valuesCopy = [...formik.values[fieldList]];
        const index = list.findIndex( diseaseId => value.id === diseaseId )
        if ( index !== -1 ) {
            valuesCopy.splice( index, 1 );
        }else{
            valuesCopy.push(value.id)
        }
        formik.setFieldValue(fieldList, valuesCopy)
    }

    return (
        <div className="row">
            <div className="col-md-auto p-0">
                <Radio
                    active={list.some(diseaseId => value.id === diseaseId)}
                    imageType="square"
                    onClick={addOrRemoveItem}
                />
            </div>
            <div className="col p-0">
                {value.nombre}
            </div>

        </div>
    )
}