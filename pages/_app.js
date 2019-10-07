import React from 'react'
import {AppContextProvider} from '../context/context'
import App from 'next/app'
import Head from 'next/head'
import Nav from '../components/nav'

class MyApp extends App {

  render() {

    const { Component, pageProps } = this.props
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />

        </Head>
        <div className='grid-container'>
          <Nav className='navbar' />
          <main className='main'>
            <AppContextProvider>
              <Component {...pageProps} />
            </AppContextProvider>
          </main>
        </div>

        <style global jsx>
          {`

            :root {
              --primary-color: #ffde2b
            }

            * {
              box-sizing: border-box;
            }

            html, body, .grid-container {
              height: 100%;
              margin: 0;
            }

            .grid-container {
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 4rem 1fr;
              grid-template-areas: 'navbar' 'main'
            }

            body {
              margin: 0;
              font-family: 'Montserrat', sans-serif;
              color: black;
            }

            .navbar {
              grid-area: navbar;
            }

            .main {
              grid-area: main;
            }

            .container {
              margin-right: 1rem;
              margin-left: 1rem;
            }

            @media (min-width: 768px) {
              .container {

              }
            }
          `}
        </style>
      </div>
    )
  }
}

export default MyApp