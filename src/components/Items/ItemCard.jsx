import { Link, useLocation } from "react-router-dom"
import PropertyCard from "../PropertyCard/PropertyCard"

const ItemCard = ({ property,item,user }) => {

  return(
		
		<>
			
			{console.log("user id: ", user.id)}
			{console.log(useLocation())}
		
			<Link to={`/properties/${item.property_id}/items/${item.id}`} 
			params={{banana: "banana"}}
			item={item}
			className="Link">
				<h1>{item.name} : {item.property_id}</h1>
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
