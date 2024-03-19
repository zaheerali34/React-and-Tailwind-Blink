import React from 'react'
import { Header } from './Components/Header/Header'
import { Home } from './Components/Home/Home'
import { Section_one } from './Components/Section_one/Section_one'
import { Section_there } from './Components/Section_there/Section_there'
import { Section_Pricing } from './Components/Section_Pricing/Section_Pricing'
import { Footer } from './Components/Footer/Footer'

export const App = () => {
  return (
    <>
        <Header />
        <Home />
        <Section_one />
        <Section_there />
        <Section_Pricing />
        <Footer />
    </>
  )

}
