import ItemCard from "../../components/Items/ItemCard"

const ItemList = ({ user, property, items}) => {
	return (
		<>
			<h1>Items list page</h1>
			{items.map((item) => (
		    <ItemCard 
				key={item.id} 
				property={property} 
				item={item} 
				user={user}
				/>
			))}
		</>
	)
}

export default ItemList
