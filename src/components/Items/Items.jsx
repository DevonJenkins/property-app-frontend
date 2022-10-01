import ItemForm from './ItemForm'
//import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Items = ({ property,  setProperty }) => {
	const { state } = useLocation()
	

	return (
			<section>
				<h1>Items</h1>
				< ItemForm property={property} setProperty={setProperty}/>
					<Link to= {`/properties/${property.id}/items`} >
						Items
					</Link>
			</section>

	)
}

export default Items
