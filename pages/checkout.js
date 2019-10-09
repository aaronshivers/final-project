import React, {useContext} from 'react'
import AppContext from '../context/context'
import CheckoutItem from '../components/checkout-item'
import PageTitle from '../components/page-title'

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
      <div className='checkout__container'>
        <div className='checkout__title'>
          <PageTitle title='Order Summary' />
        </div>
        <div className='checkout__items'>
          {
            state[0] && state.map((car) => {
              lastCount[car.body] += 1;
              return (
                <div className='checkout__item' key={car.id}>
                  <CheckoutItem {...car} count={lastCount[car.body]} />
                </div>
              )
            })
          }
        </div>
      </div>

      <style jsx>
        {`
          .checkout__container {
            margin: 1rem;
            display: grid;
            grid-gap: 1rem;
            grid-auto-rows: auto;
            grid-template-areas: 'title'
                                 'items';
          }

          .checkout__title {
            grid-area: title;
          }

          .checkout__items {
            grid-area: items;
            margin-bottom: 1rem;
          }

          .checkout__item {
            margin-bottom: 1rem;
          }
        `}
      </style>
    </div>
  )
};

export default Checkout
