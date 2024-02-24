import React from 'react'
import NavBarComp from './NavBarFold/NavBarComp'
import HeroComp from './HeroFold/HeroComp'
import CardComp from './CardFold/CardComp'
import SliderCardComp from './SliderCardFold/SliderCardComp'
import FooterClomp from './FooterFold/FooterClomp'

const App = () => {
    return (
      <div>
        <NavBarComp/>
        <HeroComp/>
        <CardComp/>
        <SliderCardComp/>
        <FooterClomp/>
      </div>
    )
}

export default App