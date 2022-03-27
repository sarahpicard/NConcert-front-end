import * as tokenService from '../services/tokenService'


const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function showProfile(profile){
  const res = await fetch(`${BASE_URL}/${profile}`)
  return await res.json()
}

function createProfileData(artist) {
  console.log('sanity check')
  // return fetch(BASE_URL, {
  //   method: 'POST',
  //   body: artist
  // },)
}

export {
  getAllProfiles,
  createProfileData,
  showProfile,
}
