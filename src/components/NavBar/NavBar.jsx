import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const NavBar = ({ user,  handleLogout, property }) => {
	console.log("nav bar id:", useParams())
  return (
    <>
      {user ?
        <nav>
          <ul>
              <li className='Link'><Link className='Link' to="" onClick={handleLogout}>LOG OUT</Link></li>
              <li className='Link'><Link className='Link' to="/properties/new">Add a Property</Link></li>
              <li className='Link'><Link className='Link'to="/properties">Properties</Link></li>
							<li className='Link'> <Link className='Link' to="/properties/items">banana</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
              <li className='Link' ><Link className='Link'to="/login">Log In</Link></li>
              <li className='Link'><Link className='Link'to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
