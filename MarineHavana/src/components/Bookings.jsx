import axios from 'axios'
import { useState, useEffect } from 'react'
import Client from '../services/api'
import Activities from '../pages/Activities'

const Bookings = ({ user }) => {
  const [book, setBook] = useState([])

  useEffect(() => {
    const details = async () => {
      let selected = await Client.get('/Auth')
      setBook(selected.data)
      console.log(selected)
    }
    details()
  }, [])

  console.log(book)
  return (
    <div>
      <h1>{user.name}</h1>
      {book?.bookings?.length > 0 &&
        book.bookings.map((list) => (
          <div>
            <h2>{list.totalPrice}</h2>
            {list.activities.map((act) => (
              <div>
                <h1>{act.title}</h1>
              </div>
            ))}
          </div>
        ))}
      <h2></h2>
    </div>
  )
}

export default Bookings

// {book ? <h2>{book.bookings[0].totalPrice}</h2> : <h2>no booking</h2>}
