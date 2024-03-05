import Client from "../services/api"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

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
    await Client.post("/bookings", request)
    setCart([])
    navigate("/Profile")
  }

  return (
    <div>
      {/* Conditionally render cart details based on cart length */}
      {cart.length > 0 ? (
        <>
          {cart.map((book) => (
            <div key={book._id}>
              <h1>{book.title}</h1>
              <h2>${book.price}</h2>
              <img src={book.image} alt="" />
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                min={1}
                value={book.userQty}
                onChange={(e) => handleClick(book._id, e.target.value)}
              />
            </div>
          ))}
          <button onClick={buy}>BUY</button>
        </>
      ) : (
        <h2>Cart Empty</h2>
      )}
    </div>
  )
}

export default Cart
