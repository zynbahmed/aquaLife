const Profiles = (props) => {
  return (
    <div className="container1">
      <div
        className="profile-card"
        // key={profile.id}
      >
        <img
          className="profile-img"
          src="public/images/profile.webp"
          alt="user"
        />
        <h2 className="name">
          {/* {profile.name} */}
          Esra
        </h2>
        <h2 className="email">
          {/* {profile.email} */}
          Esra@gmail.com
        </h2> 
    </div>
    </div>
  )
}

export default Profiles
