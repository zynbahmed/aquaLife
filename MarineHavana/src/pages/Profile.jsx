const Profiles = (props) => {
  return (
    <div className="container1">
      <div className="profile-card" key={props.id}>
        <img
          className="profile-img"
          // src="public/images/profile.webp"
          alt="user"
        />
        <h2 className="name">{props.name}</h2>
        <h2 className="email">{props.email}</h2>
      </div>
      <div>
        <h2>Bookings</h2>
      </div>
    </div>
  )
}

export default Profiles
