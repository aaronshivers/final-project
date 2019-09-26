import React from 'react'
import {AppContextProvider} from '../context/context'
import App from 'next/app'
import Head from 'next/head'

class MyApp extends App {

  render() {

    const { Component, pageProps } = this.props
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
          <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Gothic+A1&display=swap" rel="stylesheet" />
        </Head>
        <AppContextProvider>
          <Component {...pageProps} />
        </AppContextProvider>
        <style global jsx>
          {`
            body {
              font-family: 'Gothic A1', sans-serif;
              font-size: 2rem;
              color: #333;
              background-color: #f9e02e;
              height: 100%;
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