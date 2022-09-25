import { useState, useEffect} from "react"

const ItemList = ({user, property, items}) => {

	return (
		<>
			<h1>Items list page</h1>
			{items.map((item) => (
				<h1 key={item.id}>{item.name}</h1>	
			))}
		</>
	)
}

export default ItemList
