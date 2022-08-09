const PropertyInput = ({ form, handleChange}) => { 
   return (
       <>
         <h1>Congrats! You have successfully passed the component.</h1>
         <h2>This is the input component</h2>
         <label htmlFor="name">Name:</label>
         <input
            defaultValue={form.name ? form.name : ''}
            onChange={handleChange} id ="name"
            type="text" placehold="Name" autoComplete="off"
         />
       </>
   )
}

export default PropertyInput
