import React from 'react'
import "./Cart.css"
import CartCard from '../../components/CartCard/CartCard'
import { useSelector } from 'react-redux'
import ec from "../../assets/emptycart.png"
function Cart() {
  let items = useSelector(state => state);

  return (
    <div className='cart'>
      {items.cart.length <= 0 ? (
        <div className='empty-cart'>
          <img src={ec} alt="" />
          <h1>Empty Cart</h1>
        </div>
      ) : (
        <CartCard />
      )}
    </div>
  )
}

export default Cart;
