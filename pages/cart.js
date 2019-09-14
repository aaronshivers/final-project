import {useContext, useEffect} from 'react'
import AppContext from '../context/context'
import Nav from '../components/nav'
import CartItem from '../components/cart-item'
import {startRemoveCar} from '../actions/cars'


const Cart = () => {
  const {state, dispatch} = useContext(AppContext)

  return (
    <>
      <Nav />
      <h1>Cart</h1>
      <div>
        {
          state[0] && state.map((car) => (
            <div key={car.id}>
              <CartItem {...car} />
              <button onClick={() => startRemoveCar(car.id)(dispatch, state)}>X</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Cart