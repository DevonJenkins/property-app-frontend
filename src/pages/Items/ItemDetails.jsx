import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {getOneItem} from '../../services/propertyService'

//import getOneItem from property service 
//
const ItemDetails = (props) => {
  const { id } = useParams
	const[property, setProperty] = useState(null)
	const[item, setItem] = useState(null)
	


	useEffect(() => {
		const fetchOne = async () => {
			const data = await getOneItem(id)
			setItem(data.item)
			console.log(data.item)
		}
		fetchOne()
	}, [id])
	console.log(`user: ${props.user.name}`)
	console.log(`props: ${props.name}`)
	console.log(`item: ${props.name}`)
	console.log(`property: ${property}`)
	return (
		<>
	    <h1>Item Details Page</h1>
			<section>
				<h2>help me god</h2>	
		
			</section>
		</>
	)
}

export default ItemDetails 
