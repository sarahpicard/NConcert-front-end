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
                  <Link to={`/profile/${profile._id}`} state={{profile}}>
                    <div className="card individual-cards" style={{ width: '18rem'}}>
                      <Link to={`/profile/${profile._id}`} state={{profile}}>
                        <img src="https://i.imgur.com/Wk1vQtF.png" alt="avatar" className='all-profiles-avatar-img'/>
                      </Link>
                        <div className="card-body">
                          <h5 className="card-title" key={profile._id}>{profile.name.toUpperCase()}</h5>
                          <p className="card-text">this will be where profile bio goes </p>
                          <Link to={`/profile/${profile._id}`} state={{profile}}> 
                            <i className='bx bx-chevrons-down bx-lg profile-more-info-btn'></i>
                          </Link>
                        </div>
                    </div>
                  </Link>
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