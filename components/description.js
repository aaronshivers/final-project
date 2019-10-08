import {useContext, useEffect} from 'react'
import AppContext from '../context/context'
import {getUPC, getModel, getTotalPrice, priceList} from '../actions/helpers'

const Description = ({currentCar}) => {
  const {battery, body, category, wheels, shell} = currentCar

  return (
    <div className='product__description'>
      <h2>Car Description</h2>

      <table>
        <tr>
          <td>Model #</td>
          <td></td>
          <td>{getModel(body)}</td>
        </tr>
        <tr>
          <td>UPC Prefix</td>
          <td></td>
          <td>{getUPC(body)}</td>
        </tr>
        <tr>
          <td>Battery</td>
          <td>{battery}</td>
          <td>${priceList.battery[battery]}</td>
        </tr>
        <tr>
          <td>Body</td>
          <td>{body}</td>
          <td>${priceList.body[body]}</td>
        </tr>
        <tr>
          <td>Category</td>
          <td>{category}</td>
          <td>${priceList.category[category]}</td>
        </tr>
        <tr>
          <td>Wheels</td>
          <td>{wheels}</td>
          <td>${priceList.wheels[wheels]}</td>
        </tr>
        <tr>
          <td>Extra Shell</td>
          <td>{shell}</td>
          <td>${priceList.shell[shell]}</td>
        </tr>
        <tr>
          <td>Total Price</td>
          <td></td>
          <td>${getTotalPrice({battery, body, category, wheels, shell, priceList})}</td>
        </tr>
      </table>
    
      <style jsx>
        {`
          .product__description {
            padding-bottom: 1rem;
          }

          table {
            border-spacing: 0;
            border: 2px solid black;
            border-radius: 6px;
          }

          td {
            border-right: 1px solid black;
            border-bottom: 1px solid black;
            padding: .5rem;
            text-transform: capitalize;
          }
        `}
      </style>
    </div>
  )
}

export default Description
