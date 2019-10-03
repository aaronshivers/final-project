import {useState, useEffect} from 'react'
import Description from '../components/description'
import Builder from '../components/builder'
import PageTitle from '../components/page-title'

const Cars = () => {
  const [currentCar, setCurrentCar] = useState({})

  const getCurrentCar = car => {
    setCurrentCar(car)
  }
  
  return (
    <main>
      <div className='product'>
        <img className="product__image" src='./static/car-1.webp' />
        <PageTitle className='title' title='Cars' />
        <div className='product__info-container'>
          <h2 className='product__title'>{currentCar.category}</h2>
          <Description currentCar={currentCar} />
        </div>
      </div>
      <Builder getCurrentCar={getCurrentCar} />
      
      <style jsx>
        {`
          .product__image {
            width: 100%;
          }

          .product__info-container {
            margin: 1rem;
          }
        `}
      </style>
    </main>
  )
}

export default Cars