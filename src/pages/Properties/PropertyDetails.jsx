import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import PropertyActions from '../../components/PropertyCard/PropertyActions'

//Services
import { getOne } from '../../services/propertyService'

//Components 
import Items from '../../components/Items/Items'
import ItemCard from '../../components/Items/ItemCard'


const PropertyDetails = ({ user }) => {
    const { id } = useParams()
    const [property, setProperty] = useState(null)
    const [item, setItem] = useState(null)

    useEffect(() => {
        const fetchOne = async () => {
            const data = await getOne(id)
            setProperty(data.property)
        }
        fetchOne()
    }, [id])

    if (!property) return <h1>Loading Property Details</h1>
    console.log(property)
    console.log(property.items)
    return (
        <>
            <section>
                <h1>{property.name}</h1>
                <h1>{property.profile_id}</h1>
            </section>
            <div>
                < PropertyActions property={ property } user={ user }/>
            </div>
		    	<section>
						<Items user={user} property={property} setProperty={setProperty}/>
					<ul>
					{property.items.map((item) => (
						<Link to={`/properties/${property.id}/items/${item.id}`}
							key={item.id} item={item} user={user} className='Link'>
						<li>{item.name}</li>
		        <ItemCard property={property} item={item} />
						</Link>
					))}
					</ul>
					</section>
        </>
  )
}

export default PropertyDetails
