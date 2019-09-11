export const addCar = ({category, body}) => (dispatch, state) => {
  const updatedCars = [...state, {category, body}]

  localStorage.setItem('cars', JSON.stringify(updatedCars))

  return dispatch({type: 'ADD_CAR', car: {category, body}})
}

export const getCars = () => dispatch => {
  const cars = JSON.parse(localStorage.getItem('cars'))
  return dispatch({type: 'GET_CARS', cars})
}