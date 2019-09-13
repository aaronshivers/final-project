import {useState, useEffect} from 'react'
import Nav from '../components/nav'
import Description from '../components/description'
import Builder from '../components/builder'

const Cars = () => {
  const [currentCar, setCurrentCar] = useState({})

  const getCurrentCar = car => {
    setCurrentCar(car)
  }

  // useEffect(() => console.log(currentCar), [currentCar])
  
  return (
    <>
      <Nav />
      <h1>Cars</h1>
      <img src='/static/car.webp' alt='car image' />
      <Description currentCar={currentCar} />
      <Builder getCurrentCar={getCurrentCar} />
    </>
  )
}

export default Cars