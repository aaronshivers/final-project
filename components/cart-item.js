import {useState, useEffect} from 'react'
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
    <>
      <table>
        <tr>
        <td>Category: </td>
        <td>{category === 'offRoad' ? 'Off Road' : 'Street'} </td>
        </tr>
        <tr>
          <td>Body: </td>
          <td>{spellCheck(body)}</td>
        </tr>
        <tr>
          <td>Wheels &amp; Tires: </td>
          <td>{wheels === 'regular' ? 'Regular' : 'Fancy'}</td>
        </tr>
        <tr>
          <td>Batteries: </td>
          <td>{battery == 'one' ? 'One' : 'Two'}</td>
        </tr>
        <tr>
          <td>Extra Shell: </td>
          <td>{spellCheck(shell)}</td>
        </tr>
        <tr>
          <td>Model: </td>
          <td>{getModel(body)}</td>
        </tr>
        <tr>
          <td>UPC Prefix: </td>
          <td>{getUPC(body)}</td>
        </tr>
        <tr>
          <td>Total Price: </td>
          <td>${getTotalPrice({battery, body, category, wheels, shell, priceList})}</td>
        </tr>
      </table>
      <style jsx>{`
        table {
          border-spacing: 0;
          border: 2px solid black;
          border-radius: 5px;
        }
        td{
          border: 1px solid black;
          padding: .5rem;
        }
        td:first-of-type {
          font-weight: bolder;
        }
      `}
      </style>
    </>
  )
}

export default CartItem
