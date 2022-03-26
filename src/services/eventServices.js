const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/events`

async function getAllEvents() {
  const res = await fetch(BASE_URL)
  return await res.json()
}
// async function searchEvents() {
//   const res = await fetch(BASE_URL).json?keyword={SOMETHING}&city={SOMETHING}&apikey=Kim5J88GrD7Fd32jnkeNCTtc4QARtrEv {
//     method: 'POST'
//   }
// }
// this is not right - we will need to refactor the correct url to make sure that it has accurate info and possibly assign variables for keyword and city 




// async function searchEvents(){
//   const res = await fetch(BASE_URL, {
//     city: "input value here",
//     keyword: "input value here"
//   })
//   return await res.json()
// }

export {
  getAllEvents,
  // searchEvents
}