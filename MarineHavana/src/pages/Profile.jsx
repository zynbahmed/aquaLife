import Bookings from "../components/Bookings"
import { useNavigate } from "react-router-dom"

const Profiles = ({ user }) => {
  const navigate = useNavigate()
  const handleUpdate = () => {
    navigate(`/Profile/update`)
  }
  return (
    <div>
      <div>
        <button onClick={handleUpdate}>UPDATE</button>
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
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
