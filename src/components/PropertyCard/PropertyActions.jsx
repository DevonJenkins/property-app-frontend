import { useNavigate } from 'react-router-dom'

const PropertyActions = ({ property, user}) => {
    const navigate = useNavigate()
    return (
        property.profile_id === user.id && 
        <div>
            <button className="edit btn" onClick={() => navigate(`/properties/${property.id}/edit`, { state: property})}>Edit</button>
            <button className="btn delete"onClick={() => navigate(`/properties/${property.id}/confirmation`, { state: property })}>Delete</button>
        </div>

        
    )
}

export default PropertyActions
