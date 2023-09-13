import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components'

function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repear bg-center'>
          <Navbar/>
          <Hero/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App