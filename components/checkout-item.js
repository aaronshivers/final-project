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
        <p>Model: {getModel(body)}</p>
        <p>UPC Prefix: {getUPC(body)}</p>
        <p>Count: {count}</p>
      </div>
      <div className='price'>
        <p align="right">Item Price: ${getTotalPrice({battery, body, category, wheels, priceList})}</p>
      </div>

      <style jsx>{`
        .checkout-item {
          display: grid;
          width: 100%;
          grid-template-rows: repeat(2, auto);
          margin-bottom: 1rem;
          border: 2px solid black;
          border-radius: 5px;
        }

        .info {
          border-bottom: 1px solid black;
        }

        .price {
          display: grid;
          width: 100%;
          align-content: right;
        }

        .info, .price {
          
          padding: .5rem;
        }
      `}
      </style>
    </div>
  )
}

export default CheckoutItem
