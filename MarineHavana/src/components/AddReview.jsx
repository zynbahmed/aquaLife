import { useState } from "react"
import Client from "../services/api"

const AddReview = ({ activity_id, ali }) => {
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
  <form className="my-form" onSubmit={handleSubmit}>
    <label className="my-label" htmlFor="content"></label>
    <textarea
      className="my-textarea"
      placeholder="add a review"
      id="content"
      type="text"
      onChange={handleChange}
      value={review.content}
      rows={8}
      cols={100}
    />
    <button className="my-button" type="submit">ADD REVIEW</button>
  </form>
</div>
  )
}

export default AddReview
