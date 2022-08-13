import { useNavigate } from 'react-router-dom'

const PropertyActions = ({ property, user}) => {
    const navigate = useNavigate()
    return (
        property.profile_id === user.id && 
        <div>
            <button className="edit btn" onClick={() => navigate(`/properties/${property.id}/edit`, { state: property})}>edit</button>
            <button>delete</button>
        </div>

        
    )
}

export default PropertyActions
