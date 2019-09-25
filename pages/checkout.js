import {useContext} from 'react'
import AppContext from '../context/context'
import CheckoutItem from '../components/checkout-item'

const Checkout = () => {
  const {state, dispatch} = useContext(AppContext)

  const lastCount = {
    sport: 9752,
    suv: 8646,
    classic: 7325,
    atv: 8487,
    duneBuggy: 7445,
    crawler: 3397
  }

  return (
    <div className='container'>
      <h1>Order Summary</h1>
      <div>
        {
          state[0] && state.map((car) => {
            lastCount[car.body] += 1
            return (
              <div key={car.id}>
                <CheckoutItem {...car} count={lastCount[car.body]} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Checkout
