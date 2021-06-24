import React from 'react'
import PropTypes from 'prop-types'
import { toAbsoluteUrl } from 'theme/helpers/AssetsHelpers'

const Field = ({ name, form, formik, onEdit }) => {
    return (
        <div className="container px-4">
            <div className="d-flex flex-row justify-content-between mb-4" >

                <div>
                    <p className="overview__label mb-1"> { name } </p>
                    <span>{formik.values[form] ||  "No aplica" }</span>
                </div>

                <div>
                    <button title="editar" type="button" className="btn"
                        onClick={onEdit}
                    >
                        <img
                            src={toAbsoluteUrl("/media/icons/edit-Icon.svg")}
                            alt="edit-icon"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

Field.propTypes = {
    name: PropTypes.string.isRequired,
    form: PropTypes.string.isRequired
}

export default Field
