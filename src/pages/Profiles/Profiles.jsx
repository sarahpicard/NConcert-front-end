import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom'
import UserCard from '../../components/UserCard/UserCard'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'


const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])


  return (
    <div>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.length ? 
          <div className="container">
            <div className="row">
              <div className="col"></div>
                {profiles.map(profile=>
                  <Col>
                    <UserCard profileName={profile.name} id={profile._id}>
                    </UserCard>
                  </Col>
                )}
              </div>
            </div>
      :
        <p>No profiles yet</p>
      }
    </div>
  )
}
 
export default Profiles