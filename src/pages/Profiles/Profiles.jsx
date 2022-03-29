import { useState, useEffect} from 'react'
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

import './Profiles.css'


const Profiles = () => {
  const [profiles, setProfiles] = useState({})

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => {setProfiles(profiles)})
  }, [])
  
  return (
    <div>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.length ?
        <div className="container profiles-cards">
          <div className="row">
            {profiles.map(profile =>
              <Col>
                <div>
                  <div className="card individual-cards" style={{ width: '18rem'}}>
                    <img src="https://i.imgur.com/tVYJuSL.png" alt="avatar" />
                      <div className="card-body">
                        <h5 className="card-title" key={profile._id}>{profile.name}</h5>
                        <p className="card-text">Some kind of info about the person</p>
                        <Link to={`/profile/${profile._id}`} state={{profile}}> link to profile
                        </Link>
                      </div>
                  </div>
                </div>
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