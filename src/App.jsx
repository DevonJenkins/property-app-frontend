import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import PropertyForm from './pages/Properties/PropertyForm'
import PropertyList from './pages/Properties/PropertyList'
import PropertyDetails from './pages/Properties/PropertyDetails'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Profiles from './pages/Profiles/Profiles'


import * as authService from './services/authService'
import * as propertyService from './services/propertyService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [properties, setProperties] = useState([])
  const navigate = useNavigate()
  console.log(user)
  console.log(properties)

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const addProperty = async (propertyData) => {
    const property = await propertyService.create(propertyData)
    setProperties([...properties, property])
  } 

  const editProperty = async (propertyData) => {
      const updatedProperty = await propertyService.updateProperty(propertyData)
      setProperties(properties.map((property) => (
        property.id === updatedProperty.id ? updatedProperty : property
      )))
  }

  useEffect(() => { 
    const fetchData = async () => {
        const data = await propertyService.getAllProperties()
        setProperties(data)
    }
    fetchData()
  }, [])

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
          <Route 
            path="/properties"
            element={
                <PropertyList properties={properties} user={user}/>
            }
          />
          <Route 
            path="/properties/:id"
            element={
                <ProtectedRoute user={user}>
                    <PropertyDetails user={user}/>
                </ProtectedRoute>
            }
          />
          <Route 
            path="/properties/:id/edit"
            element={
                <ProtectedRoute user={user}>
                    <PropertyForm properties={properties} user={user} editProperty={editProperty}/>
                </ProtectedRoute>
            }
          />
      </Routes>
    </>
  )
}

export default App
