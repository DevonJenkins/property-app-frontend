import { Link } from "react-router-dom"

const PropertyCard = ({ property, user }) => {
    console.log(user.id)
   if (user.id === property.profile_id){
    return (
      <Link to={`/properties/${property.id}`} className="Link">
        <h1>{property.name}</h1>
      </Link>
      )
   }     
     else{
       return(
           null
       )
     } 
   }

export default PropertyCard
