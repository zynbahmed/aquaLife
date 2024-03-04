import { useNavigate } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import Client from '../services/api'

const CreateActivity = (props) => {
  let navigate = useNavigate()
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const priceRef = useRef(null)
  const imgRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    Client.post('/activities', {
      title: titleRef.current.value,
      description: descRef.current.value,
      price: priceRef.current.value,
      image: imgRef.current.value
    }).then((response) => {
      // console.log(response)
      navigate('/activities')
    })
    titleRef.current.value = null
    descRef.current.value = null
    priceRef.current.value = null
    imgRef.current.value = null
    // props.addActivity()
    // console.log(newActivity)
    // navigate('/activities')
  }

  const newActivity = props.newActivity

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add Activity</h1>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id={'title'}
            placeholder={'title'}
            ref={titleRef}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id={'description'}
            placeholder={'description'}
            cols="30"
            rows="10"
            ref={descRef}
          ></textarea>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id={'price'}
            placeholder={'price'}
            ref={priceRef}
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input type="text" id={'image'} placeholder={'image'} ref={imgRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CreateActivity
