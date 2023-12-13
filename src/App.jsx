import { useEffect, useRef, useState } from 'react'
import './style.css'
import Portfolio from './components/Portfolio'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'

function App() {
  const home = useRef()
  const aboutMe = useRef()
  const portfolio = useRef()
  const contact = useRef()


  function navigateTo(place) {
    place.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }



  return (
    <div className='h-auto flex flex-col'>
      <header className='fixed z-50 top-0 bg-[#ffffffa5] left-0 w-full h-[6vh] flex justify-center lg:justify-between lg:px-8 items-center shadow-[0_3px_30px_-5px_rgba(0,0,0,0.3)]'>
        <h1 className='text-3xl font-bold'>
          MyPortfolio
        </h1>
        <div className='hidden lg:flex gap-8'>
          <button onClick={() => navigateTo(home)} className='text-xl font-semibold'>
            Home
          </button>
          <button onClick={() => navigateTo(aboutMe)} className='text-xl font-semibold'>
            About Me
          </button>
          <button onClick={() => navigateTo(portfolio)} className='text-xl font-semibold'>
            Portfolio
          </button>
          <button onClick={() => navigateTo(contact)} className='text-xl font-semibold'>
            Contact
          </button>
        </div>
      </header>

      <Home scrollRef={home}/>

      <AboutMe scrollRef={aboutMe}/>

      <Portfolio scrollRef={portfolio}/>

      <Contact scrollRef={contact}/>

    </div>
  )
}

export default App
