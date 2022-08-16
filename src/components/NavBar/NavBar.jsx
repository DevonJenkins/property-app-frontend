import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul>
              <li className='Link'><Link className='Link' to="" onClick={handleLogout}>LOG OUT</Link></li>
              <li className='Link'><Link className='Link' to="/properties/new">Add a Property</Link></li>
              <li className='Link'><Link className='Link'to="/properties">Properties</Link></li>
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
