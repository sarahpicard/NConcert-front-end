import { Friend } from "../../components/Friend/Friend"
import { useState } from "react"
import { useEffect } from "react"
import * as profileService from '../../services/profileService'
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
// import { ProfilePage } from './../../pages/ProfilePage/ProfilePage'
import Profiles from "../Profiles/Profiles"
import { Col } from "react-bootstrap"

const Friends = (props) => {
  const [profile, setProfile] = useState([{}])
  let location = useLocation()

  useEffect(() => {
    profileService.showProfile(props.user.profile)
    .then(data => {
      setProfile(data)
    })
  }, [props.user.profile])

  useEffect(() => {
    profileService.showProfile(props.profile.profileId)
    .then(data => {
      setProfile(data)
    })
  }, [props.user.profile])

  return (
    <div>
      <h1>Friends Page</h1>
      {props.user.profile === profile._id ?
        <div>
          {profile.friends.map(friend => 
          <div>
            {profile.friends.length ?
              <div className="container profiles-cards">
                <div className="row">
                  {profile.friends.map(profile =>
                    <Col>
                      <div>
                          <div className="card individual-cards" style={{ width: '18rem'}}>
                            <Link to={`/profile/${profile.profileId}`} state={{profile}}>
                              <img src="https://i.imgur.com/Wk1vQtF.png" alt="avatar" className='all-profiles-avatar-img'/>
                            </Link>
                              <div className="card-body">
                                <h5 className="card-title" key={profile._id}>{profile.name.toUpperCase()}</h5>
                                <p className="card-text">this will be where profile bio goes </p>
                                <i className='bx bx-chevrons-down bx-lg profile-more-info-btn'></i>
                              </div>
                          </div>
                      </div>
                    </Col>
                  )}
                </div>
              </div>
              :
              <p>No friends yet</p>
            }
          </div>
            )}
        </div>
        : 
        <h1> </h1>
        }
    </div>
    )
}

export default Friends