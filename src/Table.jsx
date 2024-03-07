import React from 'react'

const Table = ({ data }) => {
    return (
        <>
            <table>
                <tbody>
                {
                    data.map((item)=>(
                        <tr>
                            {Object.entries(item).map((arr)=>(
                                <td>
                                    {JSON.stringify(arr[1])}
                                </td>
                            ))}
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
  )
}

export default Table