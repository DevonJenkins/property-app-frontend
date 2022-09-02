import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {getOneItem} from '../../services/propertyService'

//import getOneItem from property service 
//
const ItemDetails = (props) => {
  const { id } = useParams
	const[item, setItem] = useState(null)

	useEffect(() => {
		const fetchOne = async () => {
			const data = await getOneItem(id)
			setItem(data.item)
		}
		fetchOne()
	}, [id])
	console.log(props)
	return (
		<>
	    <h1>Item Details Page</h1>
			<section>
		
			</section>
		</>
	)
}

export default ItemDetails 
