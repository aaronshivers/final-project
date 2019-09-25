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
          <Link href='/cars'>
            <button>Shop Now</button>
          </Link>
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

          button {
              background-color: white;
              font-family: arial;
              font-size: 1.2rem;
              padding: .6rem;
              border: 2px solid black;
              border-radius: 5px;
          }

          button:hover {
              background-color: gray;
              cursor: pointer;
          }
        `}
      </style>
    </div>
  )
}

export default Home
