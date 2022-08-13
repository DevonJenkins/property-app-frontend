import { useNavigate, useLocation, useParams, Link } from 'react-router-dom'


const Confirmation = (props) => {
    const { id } = useParams()
    const { state } = useLocation()
    const navigate = useNavigate()
    const resource = props.deleteProperty ? 'properties' : 'items'

    const handleDelete = () => {
        props.deleteProperty && props.deleteProperty(id)
        //props.deleteItem && props.deleteItem(id)
        navigate(`/${resource}`)
    }

    return (
        <>
            <div>
                <h1>Delete Confirmation</h1>
                <section>
                    <h2>Are you sure you want to delet {state.name}?</h2> 
                    <button>
                        <Link classname="submit btn" to={`/${resource}/${id}`}>Cancel</Link>
                    </button>
                    <button onClick={handleDelete} type="button" classname="delete btn">YES! DELETE ALREADY!!</button>
                </section>
            </div>

        </>
            )
}

export default Confirmation
