export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_CAR':
      return [...state, action.car]
    case 'GET_CARS':
      return action.cars
    case 'REMOVE_CAR':
      return state.filter(({id}) => id !== action.id)
    default:
      return state
  }
}