import { Link } from 'react-router-dom'

const NavBar = ({ user,  handleLogout }) => {
  return (
    <>
      {user ?
        <nav className='nav-bar'>
          <ul>
							<p>
          	  	<Link className='Link' to="" onClick={handleLogout}>LOG OUT</Link>
							</p>
							<p>
              	<Link className='Link' to="/properties/new">Add a Property</Link>
							</p>
							<p>
              	<Link className='Link'to="/properties">Properties</Link>
							</p>
							<p>
								<Link className='Link' to="/properties/items">Items</Link>
							</p>
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
