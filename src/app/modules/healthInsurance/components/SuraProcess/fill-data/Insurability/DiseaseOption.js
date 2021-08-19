import React from 'react'
import Radio from "app/modules/_forms/general/Radio"

export const DiseaseOption = ({list, value}) => {

    return (
        <div className="row">
            <div className="col-md-auto p-0">
                <Radio
                    active={ list.some( disease => value === disease) }
                    imageType="square"
                />
            </div>
            <div className="col p-0">
                { value }
            </div>
            
        </div>
    )
}