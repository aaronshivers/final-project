import {useContext, useEffect} from 'react'
import AppContext from '../context/context'
import Nav from '../components/nav'

const Cart = () => {
  const {state, dispatch} = useContext(AppContext)

  return (
    <>
      <Nav />
      <h1>Cart</h1>
      <div>
        {
          state && state.map(({category, body}, i) => (
            <div key={i}>
              <div>{category}</div>
              <div>{body}</div>
            </div>
          ))
        }
      </div>

    </>
  )
}

export default Cart