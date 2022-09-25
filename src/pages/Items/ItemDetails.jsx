import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {getOneItem} from '../../services/propertyService'

const ItemDetails = ({user, property, item})  => {
	console.log(`use params:`, useParams())
	console.log(`item: ${item}`)
  const { id } = useParams()
	//const [item, setItem] = useState(null)
	//const[property, setProperty] = useState(null)
	console.log(`item details: ${id}`)

	useEffect(() => {
		const fetchOne = async () => {
			const data = await getOneItem(property, item, id)
			//setItem(data)
			console.log("data:", data)
		}
		fetchOne()
	}, [property, item, id])
	return (
		<>
	    <h1>Item Details Page</h1>
			<section>
				{id}
			</section>
		</>
	)
}

export default ItemDetails 
