import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import PropertyForm from './pages/Properties/PropertyForm'
import Profiles from './pages/Profiles/Profiles'


import * as authService from './services/authService'
import * as propertyService from './services/propertyService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [properties, setProperties] = useState([])
  const navigate = useNavigate()
  console.log(user)

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const addProperty = async (propertyData) => {
    const property = await propertyService.createProperty(propertyData)
    setProperties([...properties, property])
  } 

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route 
            path="/properties/new"
            element={
              <PropertyForm addProperty={addProperty} user={user}/>
            }
      />
      </Routes>
    </>
  )
}

export default App
