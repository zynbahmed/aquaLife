const Profiles = ({ user }) => {
  return (
    <div>
      <div key={user._id}>
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
      </div>
      <div>
        <h2>Bookings</h2>
      </div>
    </div>
  )
}

export default Profiles
