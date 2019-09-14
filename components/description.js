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

  const getTotalPrice = ({battery, body, category, wheels, priceList}) => {
    return (
      priceList.battery[battery] +
      priceList.body[body] +
      priceList.category[category] +
      priceList.wheels[wheels]
    )
  }

  const getModel = body => {
    switch (body) {
      case 'sport':
        return 'SPT2019'
      case 'suv':
        return 'SUV3019'
      case 'classic':
        return 'CLS4019'
      case 'atv':
        return 'ORAT2400'
      case 'duneBuggy':
        return 'ORDB3400'
      case 'crawlers':
        return 'ORCR'
      default:
        return 'N/A'
    }
  }

  const getUPC = body => {
    switch (body) {
      case 'sport':
        return '357901'
      case 'suv':
        return '642852'
      case 'classic':
        return '315790'
      case 'atv':
        return '113342'
      case 'duneBuggy':
        return '885532'
      case 'crawlers':
        return '756643'
      default:
        return 'N/A'
    }
  }

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
