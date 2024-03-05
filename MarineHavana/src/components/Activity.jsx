import { Link } from 'react-router-dom'
import './Activity.css'

const Activity = ({ event }) => {
  return (
    <div>
      {event.map((ev) => (
        <Link to={ev._id}>
          <h1>{ev.title}</h1>
          <h1>{ev.price}</h1>
          <img src={ev.image} alt="" />
        </Link>
      ))}
    </div>
  )
}

export default Activity
