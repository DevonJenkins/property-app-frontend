import { Link } from "react-router-dom"

const ItemCard = ({ property,item, user }) => {
	console.log(property)
  return(
		<Link to={`/properties/${property.id}/items/${item.id}`}>
			<h1>{item.name}</h1>
		</Link>
	)
}

export default ItemCard
