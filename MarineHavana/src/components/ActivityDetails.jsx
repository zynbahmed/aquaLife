import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Client from "../services/api"
import { useNavigate } from "react-router-dom"

import Reviews from "./Reviews"
import AddReview from "./AddReview"

const ActivityDetails = (props) => {
  let navigate = useNavigate()
  let { activity_id } = useParams()
  const [act, setAct] = useState("")

  useEffect(() => {
    const activityDetails = async () => {
      let selectedActivity = await axios.get(
        `http://localhost:3001/activities/${activity_id}`
      )
      setAct(selectedActivity.data)
    }
    activityDetails()
  }, [props.activities, activity_id])

  const ali = (a) => {
    setAct(a)
  }

  const handleSubmit = () => {
    Client.delete(`/activities/${activity_id}`, {}).then((response) => {
      navigate("/activities")
    })
  }
  const handleUpdate = () => {
    navigate(`/activities/${activity_id}/update`)
  }

  const handleCart = () => {
    navigate(``)
  }

  return act ? (
    <div>
      <div>
        <h1>{act.title}</h1>
        <h3>{act.description}</h3>
        <h3>{act.price}</h3>
      </div>
      <button onClick={handleSubmit}>DELETE</button>
      <button onClick={handleUpdate}>UPDATE</button>
      <button onClick={handleCart}>Add to Cart</button>
      <div>
        <Reviews reviews={act.reviews} />
        <AddReview activity_id={activity_id} ali={ali} />
      </div>
    </div>
  ) : null
}

export default ActivityDetails
