import React, {useContext} from 'react'
import Link from 'next/link'
import Nav from '../components/nav'
import PageTitle from '../components/page-title'

const Home = () => {
  return (
    <div className="hero-image">
    <div className="container">
      <Nav />
      <PageTitle title='RC Carpenters' />
        <div className="hero-text">
          <h1>I am John Doe</h1>
          <p>And I'm a Photographer</p>
          <button>Hire me</button>
        </div>
      </div> 
      <style jsx>
        {`
          .hero-image {
            background-image: url("/static/bg.jpeg");
            height: 100%;
            width: 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            position: absolute;
            top: 0;
            left: 0;
          }
        
        
        `}
      </style>
    </div>
  )
}

export default Home
