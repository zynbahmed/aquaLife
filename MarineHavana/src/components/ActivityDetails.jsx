import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Client from '../services/api'
import { useNavigate } from 'react-router-dom'

import Reviews from './Reviews'
import AddReview from './AddReview'

import '../Details.css'

const ActivityDetails = (props) => {
  let navigate = useNavigate()
  let { activity_id } = useParams()
  const [act, setAct] = useState('')
  const [addToCartMessage, setAddToCartMessage] = useState("")

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
      navigate('/activities')
    })
  }
  const handleUpdate = () => {
    navigate(`/activities/${activity_id}/update`)
  }
  const addCart = (act) => {
    const existingItemIndex = props.cart.findIndex(
      (itemInCart) => itemInCart._id === act._id
    )
    if (existingItemIndex !== -1) {
      return
    }
    act.userQty = 1
    props.setCart([...props.cart, act])
    // navigate('/activities')
    setAddToCartMessage("Added to cart!")
  }

  return act ? (
    <div>
      {props.user.userType === "admin" && (
        <div>
          <button onClick={handleSubmit}>DELETE</button>
          <button onClick={handleUpdate}>UPDATE</button>
        </div>
      )}
{props.user.userType === "user" && (
        <button onClick={() => addCart(act)}>Add to Cart</button>
      )}
      
      <section className="album-details">
        <div className="picture">
          <img src={act.image} alt="" />
        </div>
        <div className="details-right">
          <div className="detail">
            <div className="label">Title:</div>
            <div className="value">{act.title}</div>
          </div>
          <div className="details-description">
            <div className="detail">
              <div className="value">{act.description}</div>
            </div>
            <div className="price-detail">
              <h4 className="price-label">Price:</h4>
              <div className="price-value">${act.price}</div>
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <Reviews reviews={act.reviews} />
          <AddReview activity_id={activity_id} ali={ali} />
        </section>
      </div>
    </div>
  ) : null
}

export default ActivityDetails
