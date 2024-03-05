import './App.css'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Nav from './components/Nav'
import Profile from './pages/Profile'
import Activities from './pages/Activities'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import Registeration from './pages/Registeration'
import CreateActivity from './pages/CreateActivity'
import ActivityDetails from './components/ActivityDetails'
import { Routes, Route, useNavigate } from 'react-router-dom'
import UpdateActivity from './pages/UpdateActivity'
import UpdateUser from './components/UpdateUser'

const App = () => {
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState([])

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  let nav = useNavigate()
  const [activities, setActivities] = useState([])
  const [newActivity, setNewActivity] = useState({
    id: '',
    title: '',
    image: '',
    description: '',
    price: ''
  })

  return (
    <div>
      <header>
        <Nav user={user} handleLogOut={handleLogOut} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} user={user} />}
          />
          <Route path="/register" element={<Registeration />} />
          <Route path="/Profile" element={<Profile user={user} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route
            path="/activities/:activity_id"
            element={
              <ActivityDetails
                activities={activities}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/createActivity"
            element={<CreateActivity newActivity={newActivity} />}
          />
          <Route
            path="/activities/:activity_id/update"
            element={<UpdateActivity />}
          />
          <Route
            path="/Profile/update"
            element={<UpdateUser user={user} setUser={setUser}/>}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
