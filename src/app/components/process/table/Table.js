import React from 'react'
import PropTypes from 'prop-types'
import { useTable } from 'react-table'
import Cell from "./Cell";

const TableProcess = ({ columns, data, deleteRow, editRow, indexEmptyMessage = 0 }) => {

    const columnsTable = React.useMemo(() => columns.map((col) => ({ Header: col.title, accessor: col.field })), [data]);

    const defaultColumn = {
        Cell: (values) => (
            <Cell
                {...values}
                onDelete={deleteRow}
                onEdit={editRow}
            />
        )
    }

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns: columnsTable, data: data, defaultColumn })


    const emptyMessage = [
        (<div>
            <p>
                Aún no has añadido beneficiarios a tu plan
            </p>
            <p>
                Puedes añadir a tu cónyugue, hijos/as, hermanos/as u otros.
                En caso de que no los quieras añadir manualmente, quedarán
                como beneficiarios los de ley.
            </p>
        </div>),
        (<div>
            <p>
                Aún no has añadido otros asegurados a tu plan. Puedes añadir a tu 
                cónyugue, hijos/as, hermanos/as u otros.
            </p>
        </div>)
    ]

    return (
        <>
            <table {...getTableProps()} className="table" >
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()} >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()} >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {
                !data.length && (
                    <div className="container-sm process__process-table-message px-5">
                        { emptyMessage[indexEmptyMessage] }
                    </div>
                )
            }
        </>

    )
}

TableProcess.propTypes = {

}

export default TableProcess
