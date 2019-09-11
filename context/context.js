import { createContext, useReducer } from 'react'
import reducer from '../reducers/reducer'

const AppContext = createContext()

const AppContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, [])

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