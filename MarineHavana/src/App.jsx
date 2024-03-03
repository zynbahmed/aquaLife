import './App.css'
import axios from 'axios'
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

const App = () => {
  const [user, setUser] = useState(null)

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

  const handleChange = (e) => {
    setNewActivity({ ...newActivity, [e.target.name]: e.target.value })
  }

  const getActivity = async () => {
    let allList = await axios.get('http://localhost:3001/activities')
    console.log(allList)
    setActivities(allList.data)
  }

  const addActivity = async () => {
    let res = await axios.post('http://localhost:3001/activities', newActivity)
    console.log(res)
    setActivities([...activities, res.data])
  }

  useEffect(() => {
    getActivity()
  }, [])

  return (
    <div>
      <header>
        <Nav user={user} handleLogOut={handleLogOut} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/activities"
            element={
              <Activities activities={activities} getActivity={getActivity} />
            }
          />
          <Route path="/register" element={<Registeration />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route
            path="/activities/:id"
            element={<ActivityDetails activities={activities} />}
          />
          <Route
            path="/createActivity"
            element={
              <CreateActivity
                newActivity={newActivity}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
