const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/events`

async function getAllEvents() {
  console.log("service BASE_URL: ", BASE_URL)
  const res = await fetch(BASE_URL)
  return await res.json()
}

export {
  getAllEvents,
}