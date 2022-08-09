import * as tokenService from './tokenService'


const BASE_URL = `${process.env.REACT_APP_API_URL}/api/properties/`

export const createProperty = async (property) => {
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
