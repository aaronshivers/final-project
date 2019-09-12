import {useState, useEffect, useContext} from 'react'
import AppContext from '../context/context'
import {startAddCar} from '../actions/cars'
// import Radio from './radio'

const Builder = () => {
  const {state, dispatch} = useContext(AppContext)
  const [category, setCategory] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const car = {
      category,
      body
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
        </div>
      }
      <button type='submit'>Add to Cart</button>
    </form>
  )
}
export default Builder
