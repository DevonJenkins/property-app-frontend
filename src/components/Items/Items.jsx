import ItemForm from './ItemForm'
import { Link } from 'react-router-dom'

const Items = ({ property,  setProperty }) => {
	
return (
			<section>
				<h1>Items</h1>
				< ItemForm property={property} setProperty={setProperty}/>
				{console.log(property.items)}
					<Link to= {`/properties/${property.id}/items`} >
						Items
					</Link>
				{property.items.map((item) => (
					<Link to= {`/properties/${property.id}/items/${item.id}`} >
							<h1 className='Link'>{item.name}</h1>
					</Link>
				))}
			</section>

	)
}

export default Items
