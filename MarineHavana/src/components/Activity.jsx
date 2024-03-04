import { Link } from 'react-router-dom'
import './Activity.css'

const Activity = ({ ev }) => {
  return (
    <div>
      <Link to={ev._id}>
        <h1>{ev.title}</h1>
        <h1>{ev.price}</h1>
      </Link>
    </div>
  )
}

export default Activity
