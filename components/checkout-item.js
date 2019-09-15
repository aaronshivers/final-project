import {useState, useEffect} from 'react'
import {
  getUPC,
  getModel,
  getTotalPrice,
  priceList,
} from '../actions/helpers'

const CheckoutItem = ({battery, body, category, wheels, count}) => {

  return (
    <div className='checkout-item'>
      <div className='info'>
        <p>model: {getModel(body)}</p>
        <p>UPC Prefix: {getUPC(body)}</p>
        <p>Count: {count}</p>
      </div>
      <div className='price'>
        <p>Total Price: ${getTotalPrice({battery, body, category, wheels, priceList})}</p>
      </div>
      <style jsx>{`
        .checkout-item {
          display: grid;
          width: 100%;
          grid-template-columns: repeat(2, auto);
        }

        .info {
        }

        .price {
          width: 150px;
        }

        div {
          border: 1px solid black;
          margin: 1rem;
        }
      `}
      </style>
    </div>
  )
}

export default CheckoutItem
