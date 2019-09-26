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
      <div className='container'>
        <Nav />
        <PageTitle className='title' title='Cars' />
        <div className='image'></div>
        <Description currentCar={currentCar} />
        <Builder getCurrentCar={getCurrentCar} />
      </div>
      <style jsx>
        {`
          .image {
            background-image: radial-gradient(transparent 50%, #f9e02e 70%),
              url('/static/car-1.webp');
            height: 426px;
            background-position: center;
          }
        `}
      </style>
    </>
  )
}

export default Cars