export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_CAR':
    // console.log('hi')
    // console.log([...state, action.car])
      return [...state, action.car]
    case 'GET_CARS':
    // console.log(action.cars)
      return action.cars
    default:
      return state
  }
}