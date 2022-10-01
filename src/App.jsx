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
import Confirmation from './components/Confirmation/Confirmation'
import ItemsList from './pages/Items/ItemsList'
import ItemDetails from './pages/Items/ItemDetails'
import Profiles from './pages/Profiles/Profiles'
import * as style from "./App.css"

import * as authService from './services/authService'
import * as propertyService from './services/propertyService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [properties, setProperties] = useState([])
	const [property, setProperty] = useState([])
	const [items, setItems] = useState([])
	const [item, setItem] = useState([])
  const navigate = useNavigate()


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
  
  const deleteProperty = async (id) => {
    await propertyService.deleteOneProperty(id)
    setProperties(properties.filter(property => property.id !== parseInt(id)))
  }
	//should I make an add item function to create item data even though item 
	//creation already works? 
	//
	//edit item
	//delete item

  useEffect(() => { 
    const fetchData = async () => {
        const data = await propertyService.getAllProperties()
        setProperties(data)
    }
    fetchData()
  }, [])

  useEffect(() => { 
    const fetchData = async () => {
        const data = await propertyService.getAllItems()
        setItems(data)
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
                    <PropertyDetails property={property} user={user}/>
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
          <Route
            path="/properties/:id/confirmation"
            element={
                <ProtectedRoute user={user}>
                    <Confirmation deleteProperty={deleteProperty} user={user}/>
                </ProtectedRoute>
            }
          />
					<Route
						path="/properties/:id/items"
						element={
							<ProtectedRoute user={user}>
								<ItemsList property={property} user={user} items={items}/>
							</ProtectedRoute>
						}
					/>
					<Route
						path="/properties/:id/items/:id"
		        element={
              <ProtectedRoute user={user}>
								  < ItemDetails property={property} items={items} item={item} user={user} />
							</ProtectedRoute>
						}
					/>
      </Routes>
    </>
  )
}

export default App
