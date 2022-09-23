import * as tokenService from './tokenService'


const BASE_URL = `${process.env.REACT_APP_API_URL}/api/properties/`
console.log(BASE_URL)

export const create = async (property) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(property),
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}
export const getAllProperties = async () => {
  try {
   const res = await fetch(`${BASE_URL}`) 
   return await res.json()
  } catch (error) {
   throw error 
  }
} 

export const getOne = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}${id}`)
    return await res.json()
  } catch (error) {
    throw error
  }
}

export const updateProperty = async (property) => {
  try {
    const res = await fetch(`${BASE_URL}${property.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(property)
  })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const deleteOneProperty = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}${id}`, {
      method: "DELETE",
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
    }) 
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const addOneItem = async(id, data) => {
  try {
    const res = await fetch(`${BASE_URL}${id}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(data),
    })
    return await res.json()
  } catch (error) {
    throw error
  }
}

export const getOneItem = async (property,item,id) => {
  try {
		console.log(item)
    const res = await fetch(`${BASE_URL}${id}/items`)
    return await res.json()
  } catch (error) {
    throw error
  }
}
