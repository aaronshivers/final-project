import {useContext, useEffect} from 'react'
import AppContext from '../context/context'

const Description = ({currentCar}) => {
  const {battery, body, category, wheels} = currentCar

  const priceList = {
    category: {
      street: 20,
      offRoad: 30
    },
    body: {
      military: 10,
      truck: 10,
      sport: 5,
      suv: 5,
      classic: 5,
      atv: 5,
      duneBuggy: 5,
      crawlers: 5,
    },
    wheels: {
      regular: 3,
      fancy: 4
    },
    battery: {
      one: 10,
      two: 20
    }
  }

  const total = (priceList.battery[battery] +
    priceList.body[body] +
    priceList.category[category] +
    priceList.wheels[wheels])

  return (
    <>
      <h2>Car Description</h2>
      <p>battery {battery} ${priceList.battery[battery]}</p>
      <p>body {body} ${priceList.body[body]}</p>
      <p>category {category} ${priceList.category[category]}</p>
      <p>wheels {wheels} ${priceList.wheels[wheels]}</p>
      <p>total ${total}</p>
    </>
  )
}

export default Description
