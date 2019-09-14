import {useContext, useEffect} from 'react'
import AppContext from '../context/context'
import {getUPC, getModel, getTotalPrice, priceList} from '../actions/helpers'

const Description = ({currentCar}) => {
  const {battery, body, category, wheels} = currentCar

  return (
    <>
      <h2>Car Description</h2>
      <p>
        model: {getModel(body)}
      </p>
      <p>
        UPC Prefix: {getUPC(body)}
      </p>
      <p>battery {battery} ${priceList.battery[battery]}</p>
      <p>body {body} ${priceList.body[body]}</p>
      <p>category {category} ${priceList.category[category]}</p>
      <p>wheels {wheels} ${priceList.wheels[wheels]}</p>
      <p>Total Price: ${getTotalPrice({battery, body, category, wheels, priceList})}</p>
    </>
  )
}

export default Description
