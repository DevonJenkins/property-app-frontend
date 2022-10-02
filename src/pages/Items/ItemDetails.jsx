import { useState, useEffect } from 'react'
import { useParams, useLocation, Navigate, useNavigate} from 'react-router-dom'
import {getOneItem} from '../../services/propertyService'


const ItemDetails = ({user, property})  => {
  const { id }  = useParams()
	const { pathname } = useLocation()
	const [item, setItem] = useState(null)
	const navigate = useNavigate()
	//i need to get property id to pass it into the use effect
	const splitPathname = pathname.split("/")

	const itemId = id //initalize item id variable make useEffect more clear
	const propertyId = splitPathname[2]//separates property id from pathname 
	useEffect(() => {
		const fetchOne = async () => {
			const data = await getOneItem(itemId, propertyId) 
			setItem(data)
		}
		fetchOne()
	}, [itemId, propertyId])
	return (
			<>

	    <h1>Item Details Page</h1>

			{ item 
				?
				<div>
					
					<h1>Name: {item.item.name}</h1> 
				
					<h1>Description: {item.item.description ? item.item.description : "no description yet"}</h1>
					
				
				</div>
				: "loading item"
			}
				
        <button className="btn delete"onClick={() => navigate(`/properties/${propertyId}/items/${itemId}/confirmation`, { state: item })}>Delete</button>
			</>
	)
}

export default ItemDetails 
