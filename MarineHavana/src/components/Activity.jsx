import { Link } from 'react-router-dom'
import './Activity.css'

const Activity = (props) => {
  return (
    <div className="container">
      <div className="grid-item">
        <h1>{props.title}</h1>
        <h3>{props.description}</h3>
        <h3>{props.price}</h3>
      </div>
    </div>
  )
}

export default Activity
