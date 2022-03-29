import * as tokenService from '../services/tokenService'


const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function showProfile(profile){
  console.log("profile: ", profile)
  const res = await fetch(`${BASE_URL}/${profile}`)
  return await res.json()
}

async function createProfileData(profile) {
  console.log('profile: ', profile)
  return await fetch(`${BASE_URL}/${profile}/create`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(profile)
  },)
  .then(res => res.json())
}

async function addFriend (profileId, profileName, profileBio) {
  return await fetch(`${BASE_URL}/add/${profileId}/${profileName}/${profileBio}`, 
  {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify()
  },)
  .then(res => res.json)
}

async function deleteFriend (profileObjectId) {
  return await fetch(`${BASE_URL}/delete/${profileObjectId}/`, 
  {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify()
  },)
  .then(res => res.json)
}

export {
  getAllProfiles,
  createProfileData,
  showProfile,
  addFriend,
  deleteFriend,
}
