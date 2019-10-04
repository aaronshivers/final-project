import {useState, useEffect} from 'react'
import {
  getUPC,
  getModel,
  getTotalPrice,
  priceList,
} from '../actions/helpers'

const CartItem = ({battery, body, category, wheels}) => {

  useEffect(() => {

  })

  return (
    <>
      <div className="cart-item">
        <div className="info">
        <p>Category: {category}</p>
        <p>Body: {body}</p>
        <p>Wheels &amp; Tires: {wheels}</p>
        <p>Batteries: {battery}</p>
        <p>Model: {getModel(body)}</p>
        <p>UPC Prefix: {getUPC(body)}</p>
      </div>
      <div className="price">
        <p align="right">Total Price: ${getTotalPrice({battery, body, category, wheels, priceList})}</p>
      </div>
      <style jsx>{`
        .cart-item {
          display: grid;
          width: 100%;
          grid-template-rows: repeat(2, auto);
          margin-bottom: 1rem;
          border: 0px solid black;
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
    </>
  )
}

export default CartItem
