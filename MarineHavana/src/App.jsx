import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Registeration from './pages/Registeration'
import Activities from './pages/Activities'
import './App.css'
import Profile from './pages/Profile'


const App = () => {
  return (

    <div>
      <header>
        <Nav/>
      </header>
<main>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/About" element={ <About /> } />
          <Route path="/Activities" element={ <Activities /> } />  
          <Route path="/Registeration" element={ <Registeration /> } />
          <Route path="/Profile" element={ <Profile /> } />
        </Routes>
</main>
    </div>


    
  )
}

export default App
