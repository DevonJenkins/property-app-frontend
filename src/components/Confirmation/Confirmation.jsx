import { useNavigate, useLocation, useParams, Link } from 'react-router-dom'


const Confirmation = (props) => {
  const { id } = useParams()
  const { state } = useLocation()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const propertyResource = props.deleteProperty ? 'properties' : 'items'
  const itemResource = props.deleteItem ? 'properties' : 'items'
	const splitPath = pathname.split('/')
	const itemId = splitPath[4]
	const propertyId = splitPath[2]
	console.log(pathname)
	console.log(splitPath)
	console.log(splitPath.length)
	console.log(`property ID: ${propertyId}`)
	console.log(`item ID: ${itemId}`)

  const handleDelete = () => {
		//add conditional here somehow. 
			//I can get a pathname, then split it.
			//for a property, the split pathname length should be 4 - 1
			//for an item, the split pathname length should be 6 - 1 
				//i must account for an extra character in the resulting array
					//because i am splitting by '/' and the path begins with '/', i am
		//left with an empty string at the beginning of each array
		if (splitPath.length === 3){ 
			props.deleteProperty && props.deleteProperty(id)
			navigate(`/${propertyResource}`)
		} else if (splitPath.length === 6){
			console.log('delete test')
		  props.deleteItem && props.deleteItem(itemId, propertyId)
			navigate(`/properties/${propertyId}`)
			//if item resource doesn't work, i can get creative with pathname once
			//again
		}
  }

  return (
    <>

      <div>
        <h1>Delete Confirmation</h1>
          <section>
            <h2>Are you sure you want to delete {state.name}?</h2> 
              <button>
                <Link className="submit btn" to={`/properties/${propertyId}`}>Cancel</Link>
              </button>
            <button onClick={handleDelete} 
              type="button" 
              className="delete btn">
                YES! DELETE ALREADY!!
            </button>
          </section>
      </div>

    </>
  )
}

export default Confirmation
