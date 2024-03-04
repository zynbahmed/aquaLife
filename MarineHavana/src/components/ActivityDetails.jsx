import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Client from '../services/api'
import { useNavigate } from 'react-router-dom'

const ActivityDetails = (props) => {
  let navigate = useNavigate()
  let { activity_id } = useParams()
  const [act, setAct] = useState('')

  useEffect(() => {
    const activityDetails = async () => {
      let selectedActivity = await axios.get(
        `http://localhost:3001/activities/${activity_id}`
      )
      setAct(selectedActivity.data)
    }
    activityDetails()
  }, [props.activities, activity_id])

  const handleSubmit = () => {
    Client.delete(`/activities/${activity_id}`, {}).then((response) => {
      navigate('/activities')
    })
  }
  return act ? (
    <div>
      <div>
        <h1>{act.title}</h1>
        <h3>{act.description}</h3>
        <h3>{act.price}</h3>
      </div>
      <button onClick={handleSubmit}>DELETE</button>
    </div>
  ) : null
}

export default ActivityDetails
