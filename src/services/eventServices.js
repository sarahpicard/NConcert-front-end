const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/events`

async function getAllEvents() {
  const res = await fetch(BASE_URL)
  return await res.json()
}

// async function searchEvents(){
//   const res = await fetch(BASE_URL, {
//     city: "input value here",
//     keyword: "input value here"
//   })
//   return await res.json()
// }

export {
  getAllEvents,
}