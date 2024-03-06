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
      <div className="card-container">
        <div className="upper-container">
          <div className="image-container">
            <img src={user.profilePic} alt="Profile picture" />
          </div>
        </div>
        <div className="lower-container">
          <button onClick={handleUpdate}>Edit</button>
            <h3>{user.name}</h3>
            <h4>{user.email}</h4>
            </div>
          <hr></hr>
          <section className="booking-section">
            <table>
              <thead>
                <h2>Bookings</h2>
              </thead>
              <Bookings user={user} />
            </table>
          </section>
        
      </div>
    </div>
  )
}

export default Profiles
