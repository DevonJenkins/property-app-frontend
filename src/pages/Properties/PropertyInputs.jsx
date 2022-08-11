const PropertyInput = ({ form, handleChange}) => { 
   return (
       <>
         <label htmlFor="name">Name:</label>
         <input
            value={form.name ? form.name : ''}
            onChange={handleChange} id ="name" required name="name"
            type="text" placeholder="Name" autoComplete="off"
         />
       </>
   )
}

export default PropertyInput
