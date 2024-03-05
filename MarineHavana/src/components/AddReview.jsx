import { useState, useEffect } from "react"
import Client from "../services/api"
import { Navigate, useNavigate } from "react-router-dom"
import Reviews from "./Reviews"

const AddReview = ({ activity_id, ali }) => {
  const navigate = useNavigate()
  const initialState = {
    content: "",
  }

  const [review, setReview] = useState(initialState)

  const handleChange = (event) => {
    setReview({ ...review, [event.target.id]: event.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    Client.post(`/activities/${activity_id}/review`, review)
      .then((response) => {
        console.log(response.data)
        ali(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

    setReview(initialState)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="content">Review:</label>
        <textarea
          id="content"
          type="text"
          onChange={handleChange}
          value={review.content}
          rows={8}
        />
        <button type="submit">Add Review</button>
      </form>
    </div>
  )
}

export default AddReview
