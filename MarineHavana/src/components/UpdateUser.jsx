import { useRef, useState } from "react"
import { useParams } from "react-router-dom"
import avatars from "../data/avatars"

const UpdateUser = ({ user, setUser }) => {
  const nameRef = useRef(null)
  const emailRef = useRef(null)

  const [selectedImage, setSelectedImage] = useState(user.profilePic || "")

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl)
  }

  const handleSave = async () => {
    if (!selectedImage) {
      alert("Please select an avatar image")
      return
    }

    try {
      const updatedUser = { ...user, profilePic: selectedImage }
      await setUser(updatedUser)
    } catch (error) {
      console.error(error)
    }
  }

  let { user_id } = useParams()

  //   const navigate = useNavigate()

  //   useEffect(() => {
  //     // Client.get("/activities")
  //     //   .then((response) => {
  //     //     // console.log(response)
  //     //     setActivities(response.data)
  //     //   })
  //     //   .catch((error) => {
  //     //     console.log(error)
  //     //   })
  //   }, [])

  //   useEffect(() => {
  //     // getDetails()
  //   })

  const getDetails = () => {
    const filteredUsers = user.find((user) => user._id === user_id)
    setUser(filteredUsers)
  }

  const handleUpdateDate = (e) => {
    e.preventDefault()

    // Client.put(`/activities/${activity_id}`, {
    //   title: titleRef.current.value,
    //   description: desRef.current.value,
    //   price: priceRef.current.value,
    //   image: imgRef.current.value,
    // }).then((response) => {
    //   // console.log(response)
    // //   navigate("/activities")
    // })

    nameRef.current.value = null
    emailRef.current.value = null
  }
  return (
    <div className="background-image">
      {user ? (
        <section id="update-form">
          <form onSubmit={handleUpdateDate}>
            <h1 class="account-title">Update {user.name} Details</h1>
            <p class="account-description">
              Enter the title, description and the price of your activity to
              create your activity
            </p>
            <img
              src={selectedImage || "https://tr.rbxcdn.com/38c6edcb50633730ff4cf39ac8859840/420/420/Hat/Png"}
              alt="Profile Picture"
              className="pfp"
            />
            <h3>Select Avatar:</h3>
            <div className="avatar-container">
              {avatars.map((image) => (
                <img
                  key={image.url}
                  src={image.url}
                  alt={image.alt}
                  className={selectedImage === image.url ? "selected" : ""}
                  onClick={() => handleImageClick(image.url)}
                />
              ))}
            </div>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                defaultValue={user.name}
                type="text"
                id="name"
                ref={nameRef}
              />
            </div>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input
                type="text"
                id="email"
                defaultValue={user.email}
                ref={emailRef}
              />
            </div>
            <button type="submit">Update</button>
          </form>
        </section>
      ) : null}
    </div>
  )
}

export default UpdateUser
