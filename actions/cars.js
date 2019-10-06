const uuidv1 = require('uuid/v1')

export const addCar = car => ({type: 'ADD_CAR', car})

export const startAddCar = (carData = {}) => (dispatch, state) => {
  const {
    id = uuidv1(),
    category = '',
    body = '',
    wheels = '',
    battery = false,
    shell = ''
  } = carData

  const car = {
    id,
    category,
    body,
    wheels,
    battery,
    shell,
    createdAt: Date.now()
  }

  localStorage.setItem('cars', JSON.stringify([...state, car]))

  return dispatch(addCar({...car}))
}

export const getCars = cars => ({type: 'GET_CARS', cars})

export const startGetCars = () => (dispatch, state) => {
  const foundCars = JSON.parse(localStorage.getItem('cars')) || []
  const allCars = [...foundCars]
  return dispatch(getCars(allCars))
}

const removeCar = id => ({type: 'REMOVE_CAR', id})

export const startRemoveCar = id => (dispatch, state) => {
  const foundCars = JSON.parse(localStorage.getItem('cars'))
  const filteredCars = foundCars.filter(car => car.id !== id)
  localStorage.setItem('cars', JSON.stringify(filteredCars))
  return dispatch(removeCar(id))
}
