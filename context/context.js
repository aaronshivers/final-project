import { createContext, useReducer, useEffect } from 'react'
import reducer from '../reducers/reducer'
import {startGetCars} from '../actions/cars'

const AppContext = createContext()

const AppContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, [])

  useEffect(() => startGetCars()(dispatch), [])

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export {
  AppContext as default,
  AppContextProvider
}