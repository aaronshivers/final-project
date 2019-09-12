import {useContext, useEffect} from 'react'
import AppContext from '../context/context'
import Nav from '../components/nav'
import {startRemoveCar} from '../actions/cars'

const Cart = () => {
  const {state, dispatch} = useContext(AppContext)

  return (
    <>
      <Nav />
      <h1>Cart</h1>
      <div>
        {
          state[0] && state.map(({id, category, body, wheels, battery}) => (
            <div key={id}>
              <div>{category}</div>
              <div>{body}</div>
              <div>{wheels}</div>
              <div>{battery}</div>
              <button onClick={() => startRemoveCar(id)(dispatch, state)}>X</button>
            </div>
          ))
        }
      </div>

    </>
  )
}

export default Cart