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
    <div className="background-image">
      <section id="update-form">
        <form onSubmit={handleSubmit}>
          <h1 class="account-title">Create Your Activity</h1>
          <p class="account-description">
            Enter the title, description and the price of your activity to create your activity
          </p>
          <div>
            <label htmlFor="title"></label>
            <input
              type="text"
              id={'title'}
              placeholder={'title'}
              ref={titleRef}
            />
          </div>
          <div>
            <label htmlFor="description"></label>
            <textarea
              type="description"
              id={'description'}
              placeholder={'description'}
              cols="30"
              rows="10"
              ref={descRef}
            ></textarea>
          </div>
          <div>
            <label htmlFor="price"></label>
            <input
              type="number"
              id={'price'}
              placeholder={'price'}
              ref={priceRef}
            />
          </div>
          <div>
            <label htmlFor="image"></label>
            <input
              type="text"
              id={'image'}
              placeholder={'image'}
              ref={imgRef}
            />
          </div>
          <button type="submit">Create Activity</button>
        </form>
      </section>
    </div>
  )
}

export default CreateActivity
