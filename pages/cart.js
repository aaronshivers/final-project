import {useContext} from 'react'
import AppContext from '../context/context'
import Nav from '../components/nav'
import Link from 'next/link'
import CartItem from '../components/cart-item'
import {startRemoveCar} from '../actions/cars'
import Button from '../components/button'
import PageTitle from '../components/page-title'

const Cart = () => {
  const {state, dispatch} = useContext(AppContext)

  return (
    <>
      <Nav />
      <PageTitle title='Cart' />
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
      <Link href='checkout'><a className='link'>Checkout</a></Link>
      <style>
        {`
        .link {
            color: #333;
            background-color: white;
            font-family: arial;
            font-size: 1.2rem;
            padding: .6rem;
            border: 2px solid #333;
            border-radius: 5px;
            text-decoration: none;
        }
        .link:hover {
            background-color: gray;
            cursor: pointer;
        }
        `}
      </style>
    </>
  )
}

export default Cart