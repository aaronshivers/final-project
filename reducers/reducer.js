export default (state, action) => {
  switch (action.type) {
    case 'GET_CARS':
      return action.cars
    case 'ADD_CAR':
      return [...state, action.car]
    default:
      return state
  }
}