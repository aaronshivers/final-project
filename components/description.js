import React, {useContext, useEffect} from 'react'
import { getUPC, getModel, getTotalPrice, priceList, spellCheck } from '../actions/helpers'

const Description = ({currentCar}) => {
  const {battery, body, category, wheels, shell} = currentCar;

  return (
    <div className='description__container'>
      <div className='description__title'>Item</div>
      <div className='description__description'>
        <div className='description__row'>
          <div className='description__column'>Model:</div>
          <div className='description__column'> </div>
          <div className='description__column'>{getModel(body)}</div>
        </div>
        <div className='description__row'>
          <div className='description__column'>UPC Prefix:</div>
          <div className='description__column'> </div>
          <div className='description__column'>{getUPC(body)}</div>
        </div>
        <div className='description__row'>
          <div className='description__column'>Battery:</div>
          <div className='description__column'>{battery}</div>
          <div className='description__column'>${priceList.battery[battery]}</div>
        </div>
        <div className='description__row'>
          <div className='description__column'>Body:</div>
          <div className='description__column'>{body}</div>
          <div className='description__column'>${priceList.body[body]}</div>
        </div>
        <div className='description__row'>
          <div className='description__column'>Category:</div>
          <div className='description__column'>{category}</div>
          <div className='description__column'>${priceList.category[category]}</div>
        </div>
        <div className='description__row'>
          <div className='description__column'>Wheels:</div>
          <div className='description__column'>{wheels}</div>
          <div className='description__column'>${priceList.wheels[wheels]}</div>
        </div>
        <div className='description__row'>
          <div className='description__column'>Extra Shell:</div>
          <div className='description__column'>{shell}</div>
          <div className='description__column'>${priceList.shell[shell]}</div>
        </div>
        <div className='description__row'>
          <div className='description__column'>Total Price: </div>
          <div className='description__column'> </div>
          <div className='description__column'>${getTotalPrice({battery, body, category, wheels, shell, priceList})}</div>
        </div>
      </div>

      <style jsx>
        {`
          .description__container {
            display: grid;
            grid-auto-rows: min-content;
            grid-template-areas: 'title'
                                 'description';
          }
          
          .description__title {
            background-color: var(--primary-color);
            border: 0;
            border-bottom: 3px solid var(--primary-darker-color);
            padding: 1rem;
            grid-area: title;
          }
          
          .description__description {
            grid-area: description;
            display: grid;
            grid-auto-rows: auto;
            align-self: center;
          }
          
          .description__row {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            border-bottom: 1px solid grey;
          }
          
          .description__column {
            padding: 0.2rem;
          }
        `}
      </style>
    </div>
  )
};

export default Description
