import React from 'react'
import PropTypes from 'prop-types'
import { toAbsoluteUrl } from 'theme/helpers/AssetsHelpers'

const Cell = ({
    value: initialValue,
    column: { id },
    row: { index },
    onDelete,
    onEdit
}) => {

    if (id === "tools") {

        return (
            <div>
                <button title="editar" type="button" className="btn"
                    onClick={ () => onEdit(index) }
                >
                    <img
                        src={toAbsoluteUrl("/media/icons/edit-Icon.svg")}
                        alt="edit-icon"
                    />
                </button>

                <button title="editar" type="button" className="btn"
                    onClick={ () => onDelete(index) }
                >
                    Borrar
                </button>

            </div>
        )

    } else {
        return (
            <>
                {initialValue}
            </>
        )
    }

}

Cell.propTypes = {

}

export default Cell
