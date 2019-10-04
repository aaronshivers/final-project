import {useContext} from 'react'
import AppContext from '../context/context'
import Link from 'next/link'
import CartItem from '../components/cart-item'
import {startRemoveCar} from '../actions/cars'
import Button from '../components/button'
import PageTitle from '../components/page-title'

const Cart = () => {
  const {state, dispatch} = useContext(AppContext)

  return (
    <div className='container'>
      <PageTitle title='Cart' />
      <div className="car-boxes">
        {
          state[0] && state.map((car) => (
            <div key={car.id}>
              <div className="car-box">
                <CartItem {...car} />
                <button className="button delete" onClick={() => startRemoveCar(car.id)(dispatch, state)}>X</button>
              </div>
            </div>
          ))
        }
      </div>
      <Link href='checkout'><a className='button checkout'>Checkout</a></Link>
      
      <style>
        {`
        .button {
            color: #333;
            background-color: white;
            font-family: arial;
            font-size: 1.2rem;
            padding: .6rem;
            border: 2px solid #333;
            border-radius: 5px;
            text-decoration: none;
        }
        .button:hover {
            background-color: gray;
            cursor: pointer;
        }
        .checkout {
        }
        .delete {
          margin: 1rem;
        }
        .delete:hover {
          background-color: crimson;
        }
        .car-box {
          border: 2px solid black;
          border-radius: 5px;
          margin: 1rem 0;
        }
        .car-boxes {
          margin-top: 2rem;
        }
        `}
      </style>
    </div>
  )
}

export default Cart