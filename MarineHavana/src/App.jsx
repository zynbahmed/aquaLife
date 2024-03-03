import { Routes, Route, useNavigate } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Registeration from './pages/Registeration'
import Activities from './pages/Activities'
import './App.css'
import Profile from './pages/Profile'
import Login from './pages/Login'
import { useState, useEffect } from 'react'
import CreateActivity from './pages/CreateActivity'
import axios from 'axios'
import ActivityDetails from './components/ActivityDetails'

import { CheckSession } from './services/Auth'

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
  const [newSurface, setNewSurface] = useState({
    id: '',
    title: '',
    image: '',
    description: '',
    price: ''
  })

  const addSurface = (e) => {
    e.preventDefault()
    const currentSurface = surfaces
    const createdSurface = {
      ...newSurface,
      id: parseInt(surfaces.length + 1),
      price: parseInt(newSurface.price)
    }
    currentSurface.push(createdSurface)
    setSurfaces(currentSurface)
    setNewSurface({ id: '', title: '', image: '', description: '', price: '' })
    return createdSurface.id
  }

  const handleChange = (e) => {
    setNewSurface({ ...newSurface, [e.target.name]: e.target.value })
  }

  const handleCreate = () => {
    nav('/creategame')
  }

  const getActivity = async () => {
    let allList = await axios.get('http://localhost:3001/activities')
    console.log(allList)
    setActivities(allList.data)
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
            path="/Activities/:id"
            element={<ActivityDetails activities={activities} />}
          />
          <Route
            path="/creategame"
            element={
              <CreateActivity
                handleChange={handleChange}
                newSurface={newSurface}
                addSurface={addSurface}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
