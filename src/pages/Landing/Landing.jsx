import styles from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <h1>Welcome to N'Concert!</h1>
      <div className='profile-details'>
        <Link to='/profile/edit'>
          Edit Profile
        </Link>
        <br /><br />
        <div>Bio:</div> 
        <br />
        <div>
          My Favorite Genres:
          <br />
          My Favorit Artists:
        </div>
        <br />
        <div>
          My Friends:
        </div>
      </div>
      <br />
      <h1>My events</h1>
      <div>
        Interested:
      </div>
      <div>
        Attending:
      </div>
    </main>
  )
}

export default Landing
