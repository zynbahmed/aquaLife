import { useRef, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import avatars from '../data/avatars'
import Client from '../services/api'

const UpdateUser = ({ user, setUser }) => {
  const nameRef = useRef(null)
  const emailRef = useRef(null)

  const [selectedImage, setSelectedImage] = useState(user.profilePic || '')

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl)
  }
  const navigate = useNavigate()

  useEffect(() => {
    Client.get('/Auth')
      .then((response) => {
        // console.log(response)
        setUser(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleUpdateDate = async (e) => {
    e.preventDefault()

    if (!selectedImage) {
      return
    }
    try {
      const updatedUser = { ...user, profilePic: selectedImage }
      Client.put(`/Auth/update`, {
        name: nameRef.current.value,
        email: emailRef.current.value
      }).then((response) => {
        // console.log(response)
        navigate('/Profile')
      })
      await setUser(updatedUser)
    } catch (error) {
      console.error(error)
    }

    nameRef.current.value = null
    emailRef.current.value = null
  }
  return (
    <div className="background-image-profile">
      {user ? (
        <section id="update-user">
          <form onSubmit={handleUpdateDate}>
            <h1 class="account-title">Update {user.name} Details</h1>
            <p class="account-description">
              Enter the title, description and the price of your activity to
              create your activity
            </p>
            <h3>Your current Avatar:</h3>
            <img
              src={
                selectedImage ||
                'https://tr.rbxcdn.com/38c6edcb50633730ff4cf39ac8859840/420/420/Hat/Png'
              }
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
                  className={selectedImage === image.url ? 'selected' : ''}
                  onClick={() => handleImageClick(image.url)}
                />
              ))}
            </div>
            <div>
              <input
                defaultValue={user.name}
                type="text"
                id="name"
                ref={nameRef}
                placeholder={'Username'}
              />
            </div>
            <div>
              <input
                type="text"
                id="email"
                defaultValue={user.email}
                ref={emailRef}
                placeholder={'E-mail'}
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
