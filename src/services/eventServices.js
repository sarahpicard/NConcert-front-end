import * as tokenService from '../services/tokenService'


const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/events`

// search events
async function getSearch(keyword, city, page) {
  const res = await fetch(`${BASE_URL}/search/${keyword}/${city}/${page}`)
  return await res.json()
}

async function showEvent(event) {
  // console.log(event)
  const res = await fetch(`${BASE_URL}/${event}`)
  return await res.json()
}

async function createComment(event) {
  return await fetch(`${BASE_URL}/${event}/comments`, {
    method: 'POST', 
  },)
}

export {
  getSearch, 
  showEvent, 
  createComment,
  // getNextPage
}