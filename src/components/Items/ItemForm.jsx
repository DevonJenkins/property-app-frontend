import { useState } from "react";
//import moment from 'moment'

import { addOneItem } from '../../services/propertyService'
const initialState = {
	name: 'Name',
}

const ItemForm = ({ property, setProperty }) => {
	const [form, setForm] = useState(initialState)

	const addItem = async (e) => {
		e.preventDefault()
		const item = await addOneItem(property.id, form)
		setProperty(item)
		setForm(initialState)
	}

	return (
		<>
			Item Form 
		</>
	)
}
 export default ItemForm

