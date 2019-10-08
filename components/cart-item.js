import {useState, useEffect} from 'react'
import {
  getUPC,
  getModel,
  getTotalPrice,
  priceList,
} from '../actions/helpers'

const CartItem = ({battery, body, category, wheels, shell}) => {

  useEffect(() => {

  })
  const spellCheck = word => {
    switch (word){
      case 'sport':
        return 'Sport'
      case 'suv':
        return 'SUV'
      case 'classic':
        return 'Classic'
      case 'atv':
        return 'ATV'
      case 'duneBuggy':
        return 'Dune Buggy'
      case 'crawlers':
        return 'Crawlers'
      case 'none':
        return 'None'
      case 'military':
        return 'Military'
      case 'truck':
        return 'Truck'
    }
  } 
  return (
    <>
      <div>
        <p>Category: {category === 'offRoad' ? 'Off Road' : 'Street'}</p>
        <p>Body: {spellCheck(body)}</p>
        <p>Wheels &amp; Tires: {wheels === 'regular' ? 'Regular' : 'Fancy'}</p>
        <p>Batteries: {battery == 'one' ? 'One' : 'Two'}</p>
        <p>Extra Shell: {spellCheck(shell)}</p>
        <p>Model: {getModel(body)}</p>
        <p>UPC Prefix: {getUPC(body)}</p>
        <p>Total Price: ${getTotalPrice({battery, body, category, wheels, shell, priceList})}</p>
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
