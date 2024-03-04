import { Link } from 'react-router-dom'
import './Activity.css'

const Activity = ({ ev }) => {
  return (
    <div>
      <div>
        <h1>{ev.title}</h1>
        <h1>{ev.price}</h1>
      </div>
    </div>
  )
}

export default Activity
