import React, {useContext} from 'react'
import AppContext from '../context/context'
import CheckoutItem from '../components/checkout-item'

const Checkout = () => {
  const {state} = useContext(AppContext);

  const lastCount = {
    sport: 9752,
    suv: 8646,
    classic: 7325,
    atv: 8487,
    duneBuggy: 7445,
    crawler: 3397
  };

  return (
    <div className='container'>
      <h1>Order Summary</h1>
      <div>
        {
          state[0] && state.map((car) => {
            lastCount[car.body] += 1;
            return (
              <div className='item' key={car.id}>
                <CheckoutItem {...car} count={lastCount[car.body]} />
              </div>
            )
          })
        }
      </div>

      <style jsx>
        {`
          .item {
            margin: 1rem;
          }
        `}
      </style>
    </div>
  )
};

export default Checkout
