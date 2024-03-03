import { useState } from 'react'
import surfaceAct from '../data/surface'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Activities = () => {
  let nav = useNavigate()
  const [surfaces, setSurfaces] = useState(surfaceAct)

  const handleCreate = () => {
    nav('/creategame')
  }

  return (
    <div>
      <h1>this is surface</h1>
      {surfaces.map((surface) => (
        <div className="container">
          <Link to={`${surface.id}`}>
            <div className="grid-item">
              <h1>{surface.title}</h1>
              <h3>{surface.description}</h3>
              <h3>{surface.price}</h3>
            </div>
          </Link>
        </div>
      ))}
      <button onClick={handleCreate}>Create Surface Activity</button>
    </div>
  )
}

export default Activities
