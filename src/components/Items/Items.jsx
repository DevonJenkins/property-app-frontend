import ItemForm from './ItemForm'

const Items = ({ property, user, setProperty }) => {

	return (
			<section>
				<h1>Items</h1>
				< ItemForm property={property} setProperty={setProperty}/>
			</section>
	)
}

export default Items
