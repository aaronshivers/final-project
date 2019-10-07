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
          <Description className="product__description" currentCar={currentCar} />
        </div>
      </div>
      <div className='builder'>
        <Builder getCurrentCar={getCurrentCar} />
      </div>

      <style jsx>
        {`
          .container {
            display: grid;
            grid-gap: 1rem;
            grid-template-rows: repeat(3, auto);
            grid-template-areas: 'title'
                                 'product'
                                 'builder';
            margin: 1rem;
          }

          .title {
            grid-area: title;
          }

          .product {
            grid-area: product;
            display: grid;
            grid-gap: 1rem;
            grid-template-rows: repeat(2, auto);
            grid-template-areas: 'image'
                                 'description';
          }

          .product__image {
            width: 100%;
            grid-area: image;
          }

          .product__info-container {
            grid-area: description;
            display: grid;
            grid-gap: 1rem;
            grid-template-rows: repeat(2, auto);
          }

          .builder {
            grid-area: builder;
          }

          @media (min-width: 575px) {
            .product {
              display: grid;
              grid-template-columns: repeat(2, calc(50% - 0.5rem));
              grid-template-areas: 'image description';
            }
          }

          @media (min-width: 768px) {
            .container {
              grid-template-columns: repeat(2, auto);
              grid-template-rows: repeat(2, auto);
              grid-template-areas: 'title title'
                                   'product builder';
            }
          }

        `}
      </style>
    </div>
  )
}

export default Cars