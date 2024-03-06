import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useRef } from "react"
import Client from "../services/api"

const UpdateActivity = () => {
  const titleRef = useRef(null)
  const desRef = useRef(null)
  const priceRef = useRef(null)
  const imgRef = useRef(null)

  const [activityDetails, setActivityDetails] = useState({})
  const [activities, setActivities] = useState([])

  let { activity_id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    Client.get("/activities")
      .then((response) => {
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
      image: imgRef.current.value,
    }).then((response) => {
      navigate(`/activities/${activity_id}`)
    })

    titleRef.current.value = null
    desRef.current.value = null
    priceRef.current.value = null
    imgRef.current.value = null
  }
  return (
    <div className="background-image">
      {activityDetails ? (
        <section id="update-form">
          <form onSubmit={handleUpdateDate}>
            <h1 class="account-title">
              Update {activityDetails.title} Activity
            </h1>
            <p class="account-description">
              Update the title, description and the price of your activity below
            </p>
            <div>
              <label htmlFor="title"></label>
              <input
                defaultValue={activityDetails.title}
                type="text"
                id="title"
                ref={titleRef}
                placeholder={"title"}
              />
            </div>
            <div>
              <label htmlFor="description"></label>
              <textarea
                type="description"
                id="description"
                defaultValue={activityDetails.description}
                placeholder={"description"}
                cols="30"
                rows="10"
                ref={desRef}
              ></textarea>
            </div>
            <div>
              <label htmlFor="price"></label>
              <input
                type="text"
                id="price"
                defaultValue={activityDetails.price}
                ref={priceRef}
                placeholder={"price"}
              />
            </div>
            <div>
              <label htmlFor="image"></label>
              <input
                type="text"
                id={"image"}
                defaultValue={activityDetails.image}
                ref={imgRef}
                placeholder={"image"}
              />
            </div>
            <button type="submit">Update</button>
          </form>
        </section>
      ) : null}
    </div>
  )
}

export default UpdateActivity
