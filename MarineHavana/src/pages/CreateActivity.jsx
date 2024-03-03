import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const CreateActivity = (props) => {
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    let surfaceId = props.addSurface(e)
    navigate(`/Activities:${surfaceId}`)
  }

  const newActivity = props.newSurface

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create Game</h1>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            value={newActivity.title}
            onChange={props.handleChange}
            name={'title'}
            placeholder={'title'}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            value={newActivity.description}
            onChange={props.handleChange}
            name={'description'}
            placeholder={'description'}
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            value={newActivity.price}
            onChange={props.handleChange}
            name={'price'}
            placeholder={'price'}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CreateActivity
