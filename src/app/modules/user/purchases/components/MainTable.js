import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { useTable } from 'react-table'
import { getUserPolicies } from '../controller'


export const MainTable = ({ }) => {

    const { authToken } = useSelector(state => state.auth)

    const [data, setData] = useState([]);

    const columns = React.useMemo(
        () => [
            { Header: '', accessor: 'logo', 
                Cell: ( cellData ) => ( <img src={ cellData.value } style={{maxWidth: "3.5rem"}}/>)
            },
            { Header: 'Marco', accessor: 'aseguradora'},
            { Header: 'Tomador', accessor: 'nombres'},
            { Header: 'Tipo', accessor: 'tipoPoliza'},
            { Header: 'Estado', accessor: 'estado'},
            { Header: 'Adquirido', accessor: 'fechaCotizacion', 
                Cell: (cellData) => moment(cellData.value).format('DD-MM-YYYY')
            }
        ],
        []
    )

    useEffect(() => {
        getUserPolicies(authToken)
        .then((data) => setData(data))
    }, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        <main className="purchase__main-container">

            <div className="purchase__table-container"> 

            <table {...getTableProps()} className="table purchase__table">

                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps()}
                                    className="line-none"
                                >
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
                                        <td
                                            {...cell.getCellProps()}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>

            </table>

            </div>

        </main>
    )
}
