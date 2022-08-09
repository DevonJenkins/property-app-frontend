import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import PropertyInput from './PropertyInputs'

//----------------------Services----------------------\\

import { createProperty } from '../../services/propertyService'


const PropertyForm = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [form, setForm] = useState({})

    const handleSubmit = async (e) => { 
        e.preventDefault()
        id ? props.updateProperty(form) : createProperty(form)
        navigate('/properties')
    }

    const handleChange = (e) => { 
        setForm({ ...form, [e.target.name]: e.target.value })
    }
//   useEffect(() => { 
//        const fetchOne = async () => { 
//            const data = await getOne(id)
//            setForm({ 
//                id: data.property.id,
//                name: data.property.name,
//
//            })
//        }
//        id && fetchOne()
//        return () => setForm({})
//}, [id])

    return ( 
        <>
            <div className="page-header">
                {
                    !id 
                    ? <h1>You haven't added any properties yet</h1>
                    : <><h1>Add Property</h1></>
                } 
            </div>
            <section>
                <form onSubmit={handleSubmit}>
                    <PropertyInput form={form} handleChange={handleChange} />
                    <button type="submit" className="btn submit">Submit!</button>
                </form>
            </section>
        </>
    )
}

export default PropertyForm
