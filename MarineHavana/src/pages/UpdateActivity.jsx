import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useRef } from "react"
import Client from "../services/api"

const UpdateActivity = () => {
  const titleRef = useRef(null)
  const desRef = useRef(null)
  const priceRef = useRef(null)

  const [activityDetails, setActivityDetails] = useState({})
  const [activities, setActivities] = useState([])

  let { activity_id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    Client.get("/activities")
      .then((response) => {
        // console.log(response)
        setActivities(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    getDetails()
  })

  const getDetails = () => {
    const filteredActivties = activities.find(
      (activity) => activity._id === activity_id
    )
    setActivityDetails(filteredActivties)
  }

  const handleUpdateDate = (e) => {
    e.preventDefault()

    Client.put(`/activities/${activity_id}`, {
      title: titleRef.current.value,
      description: desRef.current.value,
      price: priceRef.current.value,
    }).then((response) => {
      // console.log(response)
      navigate("/activities")
    })

    titleRef.current.value = null
    desRef.current.value = null
    priceRef.current.value = null
  }
  return (
    <div>
      {activityDetails ? (
        <div>
          <form onSubmit={handleUpdateDate}>
            <label htmlFor="title">Title:</label>
            <input
              defaultValue={activityDetails.title}
              type="text"
              id="title"
              ref={titleRef}
            />
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              defaultValue={activityDetails.description}
              ref={desRef}
            />
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              defaultValue={activityDetails.price}
              ref={priceRef}
            />
            <div>
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  )
}

export default UpdateActivity
