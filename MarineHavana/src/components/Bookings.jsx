import axios from "axios"
import { useState, useEffect } from "react"
import Client from "../services/api"
import Activities from "../pages/Activities"

const Bookings = ({ user }) => {
  const [book, setBook] = useState([])

  useEffect(() => {
    const details = async () => {
      let selected = await Client.get("/Auth")
      setBook(selected.data)
      console.log(selected)
    }
    details()
  }, [])

  console.log(book)
  return (
    <div>
      {book?.bookings?.length > 0 &&
        book.bookings.map((list) => (
          <tr>
            {list.activities.map((act) => (
              <td>
                <b>Title: </b>
                {act.title}
              </td>
            ))}
            <td>
              <b>Total Price: </b>${list.totalPrice}
            </td>
          </tr>
        ))}
      <h2></h2>
    </div>
  )
}

export default Bookings

// {book ? <h2>{book.bookings[0].totalPrice}</h2> : <h2>no booking</h2>}
