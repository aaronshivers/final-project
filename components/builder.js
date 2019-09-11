import {useState, useEffect, useContext} from 'react'
import AppContext from '../context/context'
import {addCar, getCars} from '../actions/cars'

const Builder = () => {
  const {state, dispatch} = useContext(AppContext)
  const [category, setCategory] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    getCars()(dispatch)
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    const car = {
      category,
      body
    }
    addCar(car)(dispatch, state)
  }

  // useEffect(() => {
  //   setCategory('')
  //   setBody('')
  // }, [state])

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
      <button type='submit'>Add to Cart</button>
    </form>
  )
}
export default Builder
