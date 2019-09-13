import {useState, useEffect, useContext} from 'react'
import AppContext from '../context/context'
import {startAddCar} from '../actions/cars'
import Button from './button'

const Builder = () => {
  const {state, dispatch} = useContext(AppContext)
  const [category, setCategory] = useState('')
  const [body, setBody] = useState('')
  const [wheels, setWheels] = useState('')
  const [battery, setBattery] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const car = {
      category,
      body,
      wheels,
      battery
    }
    startAddCar(car)(dispatch, state)
  }

  useEffect(() => console.log(category))

  // useEffect(() => {
  //   setCategory('')
  //   setBody('')
  // }, [state])
  const handleOnChange = value => setCategory(value)

  return (
    <form onSubmit={handleSubmit}>
      <h3>Category</h3>
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
      <h3>Body Type</h3>
      {
        category === 'street' &&
        <div>
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
          <label>
            <input
              type='radio'
              name='body'
              value='military'
              onChange={e => setBody('military')}
              checked={body === 'military'}
            />
            Military
          </label>
          <label>
            <input
              type='radio'
              name='body'
              value='trucks'
              onChange={e => setBody('trucks')}
              checked={body === 'trucks'}
            />
            Trucks
          </label>
        </div>
      }
      {
        category === 'offRoad' &&
        <div>
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
          <label>
            <input
              type='radio'
              name='body'
              value='military'
              onChange={e => setBody('military')}
              checked={body === 'military'}
            />
            Military
          </label>
          <label>
            <input
              type='radio'
              name='body'
              value='trucks'
              onChange={e => setBody('trucks')}
              checked={body === 'trucks'}
            />
            Trucks
          </label>
        </div>
      }
      <h3>Wheels & Tires</h3>
      <div>
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
      </div>
      <h3>Batery</h3>
      <div>
        <label>
          <input
            type='radio'
            name='battery'
            value='false'
            onChange={e => setBattery('false')}
            checked={battery === 'false'}
          />
          No Battery
        </label>
        <label>
          <input
            type='radio'
            name='battery'
            value='true'
            onChange={e => setBattery('true')}
            checked={battery === 'true'}
          />
          Add Battery
        </label>
      </div>
      <Button text='Add to Cart'/>
    </form>
  )
}
export default Builder
