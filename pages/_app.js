import React from 'react'
import {AppContextProvider} from '../context/context'
import App from 'next/app'

class MyApp extends App {

  render() {

    const { Component, pageProps } = this.props
    return (
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    )
  }
}

export default MyApp