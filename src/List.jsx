import React from 'react'
import ListItem from './ListItem'

const List = ({ data, setData }) => {
  return (
    <>
		<ul>
			{data.map((item)=>(
				<ListItem
					key={item.id}
					item={item}
				/>
	        ))}
      </ul>
    </>
  )
}

export default List