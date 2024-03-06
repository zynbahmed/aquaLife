import Bookings from "../components/Bookings"
import { useNavigate } from "react-router-dom"

import "../Details.css"

const Profiles = ({ user }) => {
  const navigate = useNavigate()
  const handleUpdate = () => {
    navigate(`/Profile/update`)
  }
  return (
    <div>
      <div>
        <button onClick={handleUpdate}>UPDATE</button>
        <section className="album-details">
          <div className="picture">
            <img src={user.profilePic} />
          </div>
          <div className="details-right">
            <div className="detail">
              <div className="label">Username:</div>
              <div className="value">{user.name}</div>
            </div>
            <div className="label">E-mail:</div>
            <div className="value">{user.email}</div>
          </div>
        </section>
      </div>
      <div>
        <h2>Bookings</h2>
        {user.bookings ? (
          <Bookings user={user} />
        ) : (
          <h3>No Booking has been made!</h3>
        )}
      </div>
    </div>
  )
}

export default Profiles
