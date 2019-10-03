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
        <Nav />
        <AppContextProvider>
          <Component {...pageProps} />
        </AppContextProvider>
        <style global jsx>
          {`
            * {
              box-sizing: border-box;
            }

            body {
              margin: 0;
              font-family: 'Montserrat', sans-serif;
              color: black;
              min-height: 100vh;
            }

            main {
            }

            .container {
              width:768px;
              margin: 0 auto;
            }
          `}
        </style>
      </div>
    )
  }
}

export default MyApp