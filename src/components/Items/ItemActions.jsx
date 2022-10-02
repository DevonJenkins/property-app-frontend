import { useNavigate } from 'react-router-dom'
//i will need to get property id into this component 
const ItemActions = ({ item, user, }) => {
    const navigate = useNavigate()
    return (
        item.profile_id === user.id && 
        <div>
			
            <button className="edit btn" onClick={() => navigate(`/properties/${item.id}/edit`, { state: item})}>Edit</button>
            <button className="btn delete"onClick={() => navigate(`/properties/${item.id}/confirmation`, { state: item })}>Delete</button>
        </div>

        
    )
}

export default ItemActions
