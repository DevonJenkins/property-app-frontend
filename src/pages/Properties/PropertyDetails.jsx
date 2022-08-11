import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//Services
import { getOne } from '../../services/propertyService'

//Components 


const PropertyDetails = ({ user }) => {
    const { id } = useParams()
    const [property, setProperty] = useState(null)

    useEffect(() => {
        const fetchOne = async () => {
            const data = await getOne(id)
            setProperty(data.property)
        }
        fetchOne()
    }, [id])

    console.log(property)
    if (!property) return <h1>Loading Property Details</h1>
    console.log(property.items)
    return (
        <>
            <section>
                <h1>{property.name}</h1>
                <ul>
                
                {property.items.map((item) => (
                    <li>{item.name}</li>
                ))}
                </ul>
            </section>
        </>
  )
}

export default PropertyDetails