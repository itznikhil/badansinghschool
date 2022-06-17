import React from 'react'
import { Footer } from './commonComponents/Footer'
import { Header } from './commonComponents/Header'
import { Router } from './Router/Router'

const App = () => {
  return (
    <div>
      <Header/>
      <Router/>
      <Footer/>
    </div>
  )
}

export default App