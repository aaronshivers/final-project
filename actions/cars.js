export const addCar = car => ({type: 'ADD_CAR', car})

export const startAddCar = (carData = {}) => (dispatch, state) => {
// console.log(carData, state)
  const {
    category = '',
    body = '',
    createdAt = 0
  } = carData

  const car = {category, body, createdAt}

  localStorage.setItem('cars', JSON.stringify([...state, car]))

  return dispatch(addCar({...car}))
}

export const getCars = cars => ({type: 'GET_CARS', cars})

export const startGetCars = () => (dispatch, state) => {
  const foundCars = JSON.parse(localStorage.getItem('cars')) || []
  const allCars = [...foundCars]
  // cars.push(temp)
  // console.log(allCars)
  return dispatch(getCars(allCars))
}