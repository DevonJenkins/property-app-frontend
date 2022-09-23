import { Link } from "react-router-dom"

const ItemCard = ({ property,item, user }) => {
	console.log(property)
  return(
		<>
			<h1>Item card</h1>
			{item.name}
		</>
	)
}

export default ItemCard
