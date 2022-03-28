import * as tokenService from '../services/tokenService'


const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/events`

// search events
async function getSearch(keyword, city, page) {
  const res = await fetch(`${BASE_URL}/search/${keyword}/${city}/${page}`)
  return await res.json()
}


export {
  getSearch, 
  // getNextPage
}