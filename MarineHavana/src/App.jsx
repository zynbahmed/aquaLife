import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Activities from './pages/Activities'
import './App.css'


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
        </Routes>
</main>
    </div>


    
  )
}

export default App
