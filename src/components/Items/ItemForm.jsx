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
const handleChange = (e) => {
	setForm({ ...form, [e.target.name]: e.target.value})
}

	return (
		<>
			Item Form 
			<form onSubmit={addItem}>
				<input name='name' onChange={handleChange} type="string" value={form.name}/>
	      <button type="submit" className="submit btn">Add Item</button>
			</form>
		</>
	)
}
 export default ItemForm

