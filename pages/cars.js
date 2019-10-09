import React, {useState, useEffect} from 'react'
import Description from '../components/description'
import Builder from '../components/builder'
import PageTitle from '../components/page-title'

const Cars = () => {
  const [currentCar, setCurrentCar] = useState({});

  const getCurrentCar = car => setCurrentCar(car);
  
  return (
    <div className='container'>
      <div className='car__container'>
        <div className='car__title'>
          <PageTitle title='Car Builder' />
        </div>
        <img className='car__image' src={currentCar.category === 'street' ? './static/car-1.webp' : './static/car-2.webp' } alt={currentCar.category} />
        <div className='car__description'>
          <Description currentCar={currentCar} />
        </div>
        <div className='car__builder'>
          <Builder getCurrentCar={getCurrentCar} />
        </div>
      </div>

      <style jsx>
        {`
          .car__container {
            display: grid;
            grid-gap: 1rem;
            grid-auot-rows: auto;
            grid-template-areas: 'title'
                                 'image'
                                 'description'
                                 'builder';
            margin: 1rem;
          }

          .car__title {
            grid-area: title;
          }

          .car__image {
            width: 100%;
            grid-area: image;
          }

          .car__description {
            grid-area: description;
            display: grid;
            grid-gap: 1rem;
            grid-auto-rows: auto;
          }

          .car__builder {
            grid-area: builder;
          }

          @media (min-width: 575px) {
            .car__container {
              grid-template-columns: 50% 50%;
              grid-auto-rows: auto;
              grid-template-areas: 'title title'
                                   'image description'
                                   'builder builder';
            }
          }
        `}
      </style>
    </div>
  )
}

export default Cars
