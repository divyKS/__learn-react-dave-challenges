import React from 'react'

const Table = ({ data }) => {
    return (
        <>
            <table>
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
            </table>
        </>
  )
}

export default Table