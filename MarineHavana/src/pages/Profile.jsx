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
      <div class="card-container">
        <div class="upper-container">
          <div class="image-container">
            <img src={user.profilePic} alt="Profile picture" />
          </div>
        </div>
        <div class="lower-container">
          <div>
            <h3>{user.name}</h3>
            <h4>{user.email}</h4>
          </div>
          <div>
            <button onClick={handleUpdate}>UPDATE</button>
          </div>
          <div>
            <section class="booking-section">
              <table>
                <thead>
                  <tr>
                    <th>Bookings</th>
                  </tr>
                </thead>
                <tbody>
                  <Bookings user={user} />
                </tbody>
              </table>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profiles
