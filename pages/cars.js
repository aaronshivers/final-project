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
    <div className='container'>
      <PageTitle className='title' title='Car Builder' />
      <div className='product'>
        <img className="product__image" src={currentCar.category === 'street' ? './static/car-1.webp' : './static/car-2.webp' } />
        <div className='product__info-container'>
          <h2 className='product__title'>{currentCar.category === 'street' ? 'Street Car' : 'Off Road Vehicle'}</h2>
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

          @media (min-width: 768px) {
            .product {
              display: grid;
              grid-template-columns: 50% 50%;
              grid-template-areas: '.' '.';
            }
          }

        `}
      </style>
    </div>
  )
}

export default Cars