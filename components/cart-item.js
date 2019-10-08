import React, {useState, useEffect} from 'react'
import {
  getUPC,
  getModel,
  getTotalPrice,
  priceList,
  spellCheck,
} from '../actions/helpers'


const CartItem = ({battery, body, category, wheels, shell}) => {

  useEffect(() => {

  })
 
  return (
    <div className='cart-item__container'>
      <div className='cart-item__title'>Item</div>
      <div className='cart-item__description'>
        <div className='description__row'>
          <div className='description__column'>Category: </div>
          <div className='description__column'>{category === 'offRoad' ? 'Off Road' : 'Street'} </div>
        </div>
        <div className='description__row'>
          <div className='description__column'>Body: </div>
          <div className='description__column'>{spellCheck(body)}</div>
        </div>
        <div className='description__row'>
          <div className='description__column'>Wheels &amp; Tires: </div>
          <div className='description__column'>{wheels === 'regular' ? 'Regular' : 'Fancy'}</div>
        </div>
        <div className='description__row'>
          <div className='description__column'>Batteries: </div>
          <div className='description__column'>{battery === 'one' ? 'One' : 'Two'}</div>
        </div>
        <div className='description__row'>
          <div className='description__column'>Extra Shell: </div>
          <div className='description__column'>{spellCheck(shell)}</div>
        </div>
        <div className='description__row'>
          <div className='description__column'>Model: </div>
          <div className='description__column'>{getModel(body)}</div>
        </div>
        <div className='description__row'>
          <div className='description__column'>UPC Prefix: </div>
          <div className='description__column'>{getUPC(body)}</div>
        </div>
        <div className='description__row'>
          <div className='description__column'>Total Price: </div>
          <div className='description__column'>${getTotalPrice({battery, body, category, wheels, shell, priceList})}</div>
        </div>
      </div>

      <style jsx>{`
        .cart-item__container {
          display: grid;
          grid-auto-rows: auto;
          grid-template-areas: 'title'
                               'description';
        }
        
        .cart-item__title {
          background-color: var(--primary-color);
          padding: 1rem;
          grid-area: title;
        }
        
        .cart-item__description {
          grid-area: description;
          display: grid;
          grid-auto-rows: 1fr;
        }
        
        .description__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid grey;
        }
        
        .description__column {
          padding: 0.2rem;
        }
      `}
      </style>
    </div>
  )
}

export default CartItem
