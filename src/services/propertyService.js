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
