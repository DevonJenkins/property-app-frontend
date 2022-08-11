import { Link } from "react-router-dom"

const PropertyCard = ({ property }) => {
return (
  <Link to={`/properties/${property.id}`} className="card">
    <h1>{property.name}</h1>
  </Link>
  )
}

export default PropertyCard
