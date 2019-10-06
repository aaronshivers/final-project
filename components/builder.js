import {useState, useEffect, useContext} from 'react'
import AppContext from '../context/context'
import {startAddCar} from '../actions/cars'
import Button from './button'

const Builder = ({getCurrentCar}) => {
  const {state, dispatch} = useContext(AppContext)
  const [category, setCategory] = useState('street')
  const [body, setBody] = useState('sport')
  const [wheels, setWheels] = useState('regular')
  const [battery, setBattery] = useState('one')
  const [shell, setShell] = useState('none')

  useEffect(() => getCurrentCar(
    {battery, body, category, wheels, shell}),
    [battery, body, category, wheels, shell]
  )

  const handleSubmit = e => {
    e.preventDefault()
    const car = {
      category,
      body,
      wheels,
      battery,
      shell
    }
    startAddCar(car)(dispatch, state)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Categories</legend>
          <label>
            <input
              type='radio'
              name='category'
              value='street'
              onChange={e => setCategory('street')}
              checked={category === 'street'}
            />
            Street
          </label>
          <label>
            <input
              type='radio'
              name='category'
              value='offRoad'
              onChange={e => setCategory('offRoad')}
              checked={category === 'offRoad'}
            />
            Off Road
          </label>
        </fieldset>
        <fieldset>
          <legend>Body Types</legend>
          {
            category === 'street' ?
            <>
              <label>
                <input
                  type='radio'
                  name='body'
                  value='sport'
                  onChange={e => setBody('sport')}
                  checked={body === 'sport'}
                />
                Sport
              </label>
              <label>
                <input
                  type='radio'
                  name='body'
                  value='suv'
                  onChange={e => setBody('suv')}
                  checked={body === 'suv'}
                />
                SUV
              </label>
              <label>
                <input
                  type='radio'
                  name='body'
                  value='classic'
                  onChange={e => setBody('classic')}
                  checked={body === 'classic'}
                />
                Classic
              </label>
            </> :
            <>
              <label>
                <input
                  type='radio'
                  name='body'
                  value='atv'
                  onChange={e => setBody('atv')}
                  checked={body === 'atv'}
                />
                ATV
              </label>
              <label>
                <input
                  type='radio'
                  name='body'
                  value='duneBuggy'
                  onChange={e => setBody('duneBuggy')}
                  checked={body === 'duneBuggy'}
                />
                Dune Buggy
              </label>
              <label>
                <input
                  type='radio'
                  name='body'
                  value='crawlers'
                  onChange={e => setBody('crawlers')}
                  checked={body === 'crawlers'}
                />
                Crawlers
              </label>
            </>
          }
        </fieldset>
        <fieldset>
          <legend>Wheels & Tires</legend>
          <label>
            <input
              type='radio'
              name='wheels'
              value='regular'
              onChange={e => setWheels('regular')}
              checked={wheels === 'regular'}
            />
            Regular
          </label>
          <label>
            <input
              type='radio'
              name='wheels'
              value='fancy'
              onChange={e => setWheels('fancy')}
              checked={wheels === 'fancy'}
            />
            Fancy
          </label>
        </fieldset>
        <fieldset>
          <legend>Batteries</legend>
          <label>
            <input
              type='radio'
              name='battery'
              value='one'
              onChange={e => setBattery('one')}
              checked={battery === 'one'}
            />
            One
          </label>
          <label>
            <input
              type='radio'
              name='battery'
              value='two'
              onChange={e => setBattery('two')}
              checked={battery === 'two'}
            />
            Two
          </label>
        </fieldset>
        <fieldset>
          <legend>Extra Shell</legend>
          <label>
            <input
              type='radio'
              name='shell'
              value='none'
              onChange={e => setShell('none')}
              checked={shell === 'none'}
            />
            None
          </label>
          <label>
            <input
              type='radio'
              name='shell'
              value='military'
              onChange={e => setShell('military')}
              checked={shell === 'military'}
            />
            Military
          </label>
          <label>
            <input
              type='radio'
              name='shell'
              value='truck'
              onChange={e => setShell('truck')}
              checked={shell === 'truck'}
            />
            Truck
          </label>
        </fieldset>
        <div className='button-container'>
          <Button className='button' text='Add to Cart'/>
        </div>
      </form>
      <style jsx>
        {`

          fieldset {
            border: 2px solid;
            border-radius: 5px;
          }

          label {
            padding: 1rem;
          }

          .button-container {
            margin-top: 1rem;
          }
        `}
      </style>
    </>
  )
}
export default Builder
