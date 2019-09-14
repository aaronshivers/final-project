import {useContext, useEffect} from 'react'
import AppContext from '../context/context'
import Nav from '../components/nav'
import CartItem from '../components/cart-item'
import {startRemoveCar} from '../actions/cars'
import Button from '../components/button'


const Cart = () => {
  const {state, dispatch} = useContext(AppContext)

  const handleButtonClick = id => startRemoveCar(id)(dispatch, state)

  return (
    <>
      <Nav />
      <h1>Cart</h1>
      <div>
        {
          state[0] && state.map((car) => (
            <div key={car.id}>
              <CartItem {...car} />
              <Button text='X' id={car.id} handleButtonClick={handleButtonClick} />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Cart