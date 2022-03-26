const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/events`

// get all events
async function getAllEvents() {
  const res = await fetch(BASE_URL)
  return await res.json()
}

// search events
async function getSearch(keyword, city) {
  const res = await fetch(`${BASE_URL}/search/${keyword}/${city}`)
  return await res.json()
}

async function getNextPage(_links){
  const res = await fetch(`${BASE_URL}/search/${_links}`)
  return await res.json()
}

export {
  getAllEvents,
  getSearch, 
  getNextPage
}