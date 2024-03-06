import { useState, useEffect } from "react"
import Client from "../services/api"

const Bookings = () => {
  const [book, setBook] = useState([])

  useEffect(() => {
    const details = async () => {
      let selected = await Client.get("/Auth")
      setBook(selected.data)
    }
    details()
  }, [])

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
    </div>
  )
}

export default Bookings
