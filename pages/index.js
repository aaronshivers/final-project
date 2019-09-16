import React, {useContext} from 'react'
import Link from 'next/link'
import Nav from '../components/nav'
import PageTitle from '../components/page-title'

const Home = () => {
  return (
    <div>
      <Nav />
      <PageTitle title='RC Carpenters' />
    </div>
  )
}

export default Home
