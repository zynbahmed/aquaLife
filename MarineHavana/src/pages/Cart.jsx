import Client from '../services/api'
import { useNavigate } from 'react-router-dom'

const Cart = ({ user, cart, setCart }) => {
  let navigate = useNavigate()
  const handleClick = (id, qty) => {
    qty = parseInt(qty)
    const arrayCart = [...cart]
    const itemFound = arrayCart.find((book) => book._id === id)
    itemFound.userQty = qty
    setCart(arrayCart)
  }

  const buy = async () => {
    const request = { cart, user }
    console.log(request)
    await Client.post('/bookings', request)
    // setCart([''])
    navigate('http://localhost:5173/Profile')
  }

  return (
    <div>
      {cart.map((book) => (
        <div>
          <h1>{book.title}</h1>
          <h3>{book.description}</h3>
          <h2>${book.price}</h2>
          <img src={book.image} alt="" />
          <label htmlFor="quantity"></label>
          <input
            type="number"
            id="quantity"
            min={1}
            value={book.userQty}
            onChange={(e) => {
              handleClick(book._id, e.target.value)
            }}
          />
        </div>
      ))}
      <button onClick={buy}>BOOOUUYYY</button>
    </div>
  )
}

export default Cart
