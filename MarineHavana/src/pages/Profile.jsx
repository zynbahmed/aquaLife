import Bookings from "../components/Bookings"

const Profiles = ({ user }) => {
  console.log(user)
  return (
    <div>
      <div>
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
