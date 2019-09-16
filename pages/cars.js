import {useState, useEffect} from 'react'
import Nav from '../components/nav'
import Description from '../components/description'
import Builder from '../components/builder'
import PageTitle from '../components/page-title'

const Cars = () => {
  const [currentCar, setCurrentCar] = useState({})

  const getCurrentCar = car => {
    setCurrentCar(car)
  }

  // useEffect(() => console.log(currentCar), [currentCar])
  
  return (
    <>
      <Nav />
      <PageTitle title='Cars' />
      <img src='/static/car.webp' alt='car image' />
      <Description currentCar={currentCar} />
      <Builder getCurrentCar={getCurrentCar} />
    </>
  )
}

export default Cars