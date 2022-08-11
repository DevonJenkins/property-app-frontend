const PropertyInput = ({ form, handleChange}) => { 
   return (
       <>
         <h1>Congrats! You have successfully passed the component.</h1>
         <h2>This is the input component</h2>
         <label htmlFor="name">Name:</label>
         <input
            value={form.name}
            onChange={handleChange} id ="name" required name="name"
            type="text" placeholder="Name" autoComplete="off"
         />
       </>
   )
}

export default PropertyInput
