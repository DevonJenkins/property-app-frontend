import { Link } from "react-router-dom"

const ItemCard = ({ property,item }) => {

  return(
		<>
			<Link to={{
				pathname: `/properties/${property.id}/items/${item.id}`,
				state: {property, item}
			}}>
				<h1>{item.name}</h1>
			</Link>
			<p>qty: quantity parameter does not exist yet</p>
			<p>this is an item card</p>
			<details>
				<summary>	
					Description	
				</summary>	
				<p>
					{item.description ? item.description : "no description yet"}
				</p>
			</details>
		
		</>
	)
}

export default ItemCard
