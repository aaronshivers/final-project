import React, {useContext} from 'react'
import Link from 'next/link'
import Nav from '../components/nav'
import PageTitle from '../components/page-title'

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__box">
            <h1 className="hero__title">RC Carpenters</h1>
            <p className="hero__subtitle">
              Get Your Game On!
            </p>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .hero {
            background: url('/static/bg.jpeg');
            background-size: cover;
            background-position: center;
            width: 100%;
          }

          .hero__container {
            height: 100vh;
            width: 100vw;
            display: grid;
          }

          .hero__box {
            justify-self: center;
            align-self: center;
            text-align: center;
          }

          .hero__title {
            font-size: 3rem;
            font-weight: 300;
            background-color: black;
            color: white;
            padding: 1rem;
          }

          .hero__subtitle {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-evenly;
            align-items: center;
            line-height: 2.5rem;
            padding: 1rem;
            background-color: black;
            color: white;
          }

          .description {
            text-transform: none;
            text-align: justify;
            font-size: 1.2rem;
            letter-spacing: normal;
            border-bottom: 1px solid black;
            margin-bottom: 1rem;
            margin-left: 1rem;
            margin-right: 1rem;
          }
        `}
      </style>
    </>
  )
}

export default Home
