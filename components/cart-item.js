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
      <div>
        <p>Category: {category}</p>
        <p>Body: {body}</p>
        <p>Wheels & Tires: {wheels}</p>
        <p>Batteries: {battery}</p>
        <p>model: {getModel(body)}</p>
        <p>UPC Prefix: {getUPC(body)}</p>
        <p>Total Price: ${getTotalPrice({battery, body, category, wheels, priceList})}</p>
      </div>
      <style jsx>{`
        div {
          border: 1px solid black;
          margin: 1rem;
        }
      `}
      </style>
    </>
  )
}

export default CartItem
