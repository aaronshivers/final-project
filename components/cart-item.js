import {useState, useEffect} from 'react'
import {
  getUPC,
  getModel,
  getTotalPrice,
  priceList,
  startingCount,
  getNextCount
} from '../actions/helpers'

const CartItem = ({battery, body, category, wheels}) => {
  const [count, setCount] = useState({
    sport: 9753,
    suv: 8647,
    classic: 7326,
    atv: 8488,
    duneBuggy: 7446,
    crawler: 3398
  })

  useEffect(() => {

  })
  const getNextCount = body => {
    // const newCount = count
    // console.log(newCount[body])
    // newCount[body]++
    // console.log(newCount[body])
    // console.log(count[body]++)
    // console.log(count[body])
    // setCount(body)
    // setCount(count[body]++)
    // setCount(body++)
    // console.log(count[body])
    return count[body]++
  }

  return (
    <>
      <div>
        <p>Category: {category}</p>
        <p>Body: {body}</p>
        <p>Wheels & Tires: {wheels}</p>
        <p>Batteries: {battery}</p>
        <p>Count: {count[body] && getNextCount(body)}</p>
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
