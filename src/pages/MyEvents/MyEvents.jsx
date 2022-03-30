import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import * as profileService from '../../services/profileService'
import Event from "../../components/Event/Event"

const MyEvents = (props) => {
  const [profile, setProfile] = useState()
  let location = useLocation()

  useEffect(() => {
    profileService.showProfile(props.user.profile)
    .then(data => {
      setProfile(data)
    })
  }, [])

  return (
  <>
    {console.log(profile?.events)}
    <div>
      <h1>Interested Events!</h1>
      {profile?.events?.map(event => 
        <Event event={event}/>
        )}
    </div>

  </>
  )
}

export default MyEvents