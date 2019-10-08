import {
  getUPC,
  getModel,
  getTotalPrice,
  priceList,
  spellCheck,
} from '../actions/helpers'

const CheckoutItem = ({battery, body, category, wheels, shell, count}) => {

  return (
    <div className='checkout-item__container'>
      <div className='checkout-item__title'>Item</div>
      <div className='checkout-item__description'>
        <div className='description__row'>
          <div className='description__column'>Category: </div>
          <div className='description__column'>{category === 'offRoad' ? 'Off Road' : 'Street'} </div>
        </div>
        <div className='description__row'>
          <div className='description__column'>Body: </div>
          <div className='description__column'>{spellCheck(body)}</div>
        </div>
        <div className='description__row'>
          <div className='description__column'>Count: </div>
          <div className='description__column'>{count}</div>
        </div>
        <div className='description__row'>
          <div className='description__column'>Model: </div>
          <div className='description__column'>{getModel(body)}</div>
        </div>
        <div className='description__row'>
          <div className='description__column'>UPC Prefix: </div>
          <div className='description__column'>{getUPC(body)}</div>
        </div>
        <div className='description__row'>
          <div className='description__column'>Total Price: </div>
          <div className='description__column'>${getTotalPrice({battery, body, category, wheels, shell, priceList})}</div>
        </div>
      </div>

      <style jsx>{`
        .checkout-item__container {
          display: grid;
          grid-auto-rows: auto;
          grid-template-areas: 'title'
                               'description';
        }
        
        .checkout-item__title {
          background-color: var(--primary-color);
          border: 0;
          border-bottom: 3px solid var(--primary-darker-color);
          padding: 1rem;
          grid-area: title;
        }
        
        .checkout-item__description {
          grid-area: description;
          display: grid;
          grid-auto-rows: 1fr;
        }
        
        .description__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid grey;
        }
        
        .description__column {
          padding: 0.2rem;
        }
      `}
      </style>
    </div>
  )
}

export default CheckoutItem
