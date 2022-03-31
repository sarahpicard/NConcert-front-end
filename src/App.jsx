import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import * as eventService from './services/eventServices.js'
import * as profileService from './services/profileService'
import Home from './pages/Home/Home'
import MyEvents from './pages/MyEvents/MyEvents'
import Favorites from './pages/Favorites/Favorites'
import Events from './pages/Events/Events'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import EditProfile from './pages/EditProfile/EditProfile'
import EventDetail from './pages/EventDetail/EventDetail'
import MyEventDetails from './pages/MyEventDetails/MyEventDetails'
import Friends from './pages/FriendsToggle/FriendsToggle'



const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    if (user.profile) {
    profileService.showProfile(user.profile)
    .then(data => setProfile(data))
    }
  }, [user])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleDeleteFriend = (friendId) => {
    console.log(friendId)
    try {
      profileService.deleteFriend(friendId)
    } catch (err) {
      console.log(err)
    } 
  }



  

  
  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route path="/profile/edit" user={user} element={<EditProfile/>}/>
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
        <Route path='/' element={<Home />} />
        <Route path='/myevents' element={<MyEvents user={user}/>} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/events' element={<Events />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/profile/:id' element={<ProfilePage user={user} /> }/>
        <Route path="/profile/:id/edit" element={<EditProfile user={user} />}/>
        <Route path='/events/:id' element={<EventDetail />} />
        <Route path='/myevents' element={<MyEvents user={user} />}/>
        <Route path='/myevents/:id' element={<MyEventDetails user={user}/>}/>
        <Route path='/friends' element={<Friends user={user} handleDeleteFriend={handleDeleteFriend} />} />
      </Routes>
    </>
  )
}

export default App
