import {useContext} from 'react'
import AppContext from '../context/context'
import Builder from '../components/builder'

const Test = () => {
  const {state, dispatch} = useContext(AppContext)

  return (
    <Builder />
  )
}

export default Test