import React, {useContext} from 'react'
import AppContext from '../context/context'
import Link from 'next/link'
import CartItem from '../components/cart-item'
import {startRemoveCar} from '../actions/cars'
import PageTitle from '../components/page-title'

const Cart = () => {
  const {state, dispatch} = useContext(AppContext)

  return (
    <div className='container'>
      <div className="cart__container">
        <div className="cart__title">
          <PageTitle title='Cart' />
        </div>
        <div className="cart__checkout">
          <Link href='checkout'><button className='button button--checkout'>Checkout</button></Link>
        </div>
        <div className="cart__items">
          {
            state[0] && state.map((car) => (
              <div className='car__container' key={car.id}>
                <CartItem {...car} />
                <button className="button button--remove" onClick={() => startRemoveCar(car.id)(dispatch, state)}>Remove Item</button>
              </div>
            ))
          }
        </div>
      </div>

      <style jsx>
        {`
          .cart__container {
            margin: 1rem;
            display: grid;
            grid-gap: 1rem;
            grid-template-columns: 1fr 1fr;
            grid-auto-rows: auto;
            grid-template-areas: 'title checkout'
                                 'items items';
          }
          
          .cart__title {
            grid-area: title;
          }
        
          .cart__checkout {
            grid-area: checkout;
            justify-self: end;
          }
          
          .cart__items {
            grid-area: items;
            display: grid;
            grid-gap: 1rem;
            grid-auto-rows: auto;
          }
          
          .car__container {
            padding: 1rem;
            border-bottom: 2px solid black;
          }
        
          .button {
            color: var(--text-color);
            background-color: var(--primary-color);
            font-family: arial;
            font-size: 1.2rem;
            padding: .6rem;
            border: 0;
            border-bottom: 3px solid var(--primary-darker-color);
            text-decoration: none;
            outline: none;
          }
          
          .button:hover {
            background-color: lime;
            cursor: pointer;
            border-bottom: 3px solid limegreen;
          }
        
          .button--remove {
            margin-top: 2rem;
          }
          
          .button--remove:hover {
            background-color: crimson;
            border-bottom: 3px solid darkred;
          }
        `}
      </style>
    </div>
  )
}

export default Cart
