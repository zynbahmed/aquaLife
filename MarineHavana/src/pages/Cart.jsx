import Client from '../services/api'
import '../Cart.css'

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
    await Client.post('/bookings', request)
    setCart([])
    navigate('/Profile')
  }

  const totalPrice = () => {
    let price = 0
    cart.forEach((el) => {
      price = price + el.price * el.userQty
    })
    return price
  }

  return (
    <div className="cart-background">
      <section className="cart-section">
        {/* Conditionally render cart details based on cart length */}
        {cart.length > 0 ? (
          <article className="flex">
            {cart.map((book) => (
              <div className="" key={book._id}>
                <figure className="figure">
                  <img src={book.image} alt="" />
                </figure>
                <div>
                  <div>
                    <div>
                      <h1 className="h1-cart">{book.title}</h1>
                      <p className="p-cart">Cost: ${book.price}</p>
                      <label htmlFor="quantity">Quantity:</label>
                      <input
                        type="number"
                        id="quantity"
                        min={1}
                        value={book.userQty}
                        onChange={(e) => handleClick(book._id, e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="">
              <h1>Total Price: ${totalPrice()}</h1>
              <button className="my-button" onClick={buy}>
                BUY
              </button>
            </div>
          </article>
        ) : (
          <h2 className="h2-cart">Cart Empty</h2>
        )}
      </section>
    </div>
  )
}

export default Cart
