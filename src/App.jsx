import { useRef, useState } from 'react'
import profileImg from './images/foto cv.jpeg'
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import mongo from './images/mongo.png'
import express from './images/express.png'
import react from './images/react.png'
import node from './images/node.png'
import tailwind from './images/tailwind.png'
import reactNative from './images/react-native.png'

function App() {
  const home=useRef()
  const aboutMe=useRef()
  const portfolio=useRef()
  const contact=useRef()

  function navigateTo(place) {
    place.current.scrollIntoView({behavior:'smooth',block:'end'})
  }

  return (
    <div className=' h-[400vh] flex flex-col'>
      <header className='fixed top-0 bg-white left-0 w-full h-[6vh] flex justify-between px-8 items-center shadow-[0_3px_30px_-5px_rgba(0,0,0,0.3)]'>
        <h1 className='text-3xl font-bold'>
          MyPortfolio
        </h1>
        <div className='flex gap-8'>
          <button onClick={()=>navigateTo(home)} className='text-xl font-semibold'>
            Home
          </button>
          <button onClick={()=>navigateTo(aboutMe)} className='text-xl font-semibold'>
            About Me
          </button>
          <button onClick={()=>navigateTo(portfolio)} className='text-xl font-semibold'>
            Portfolio
          </button>
          <button onClick={()=>navigateTo(contact)} className='text-xl font-semibold'>
            Contact
          </button>
        </div>
      </header>

      <div ref={home} className='w-full h-[100vh] flex items-center justify-center'>
        <div className='w-[60vw] h-[60vh] flex flex-col'>
          <h2 className='text-4xl'>Hi! Im Martin</h2>
          <h2 className='text-6xl font-semibold'>Full Stack Developer</h2>
          <img className='h-[30vh] w-[20vw] object-cover rounded-full my-5' src={profileImg} alt="" />
          <span className='w-full'>
            <h3 className='text-3xl font-semibold'>Skills</h3>
            <span className='w-full h-5vh flex items-center gap-8'>
              <div className='flex gap-1 items-center'>
                <img className='h-12 object-contain' src={html} alt="" />
                <img className='h-12 object-contain' src={css} alt="" />
                <img className='h-10 object-contain' src={js} alt="" />
              </div>
              <div className='flex gap-1'>
                <img className='h-12 object-contain' src={mongo} alt="" />
                <img className='h-12 object-contain' src={express} alt="" />
                <img className='h-12 object-contain' src={react} alt="" />
                <img className='h-12 object-contain' src={node} alt="" />
              </div>
              <div className='flex gap-1'>
                <img className='h-12 object-contain' src={tailwind} alt="" />
                <img className='h-12 object-contain' src={reactNative} alt="" />
              </div>
            </span>
          </span>
        </div>
      </div>

      <div ref={aboutMe} className='w-full h-[100vh] flex items-center justify-center'>
        <div className='w-[70vw] h-[60vh] flex gap-4'>
          <span className='w-1/2 h-full flex flex-col'>
            <img className='w-full h-2/5 rounded-lg' src={profileImg} alt="" />
            <img className='w-full h-2/5 -translate-y-6 rounded-lg' src={profileImg} alt="" />
          </span>
          <span className='w-1/2'>
            <h2 className='text-lg font-semibold'>AboutMe</h2>
            <p>
            I am an autonomous and proactive person, always in constant pursuit of improvement in
            all areas of my life.
            </p>
            <p>In the IT world, I am continuously exploring opportunities to grow both personally and professionally,
            leveraging my problem-solving skills and ability to quickly learn new things.
            Although I lack work experience in web development, I have participated in projects, both as part of a team
            and individually. In these projects, I dedicate significant effort to ensure they are executed
            professionally with high-level code, intuitive design, and aesthetically pleasing elements, utilizing my
            knowledge. My focus is always geared towards providing maximum user comfort.</p>
          </span>
        </div>
      </div>

      <div ref={portfolio} className='w-full h-[100vh] flex items-center justify-center'>
        <div className='w-[90vw] h-[80vh] flex flex-col'>

        </div>
      </div>

      <div ref={contact} className='w-full h-[100vh] flex items-center justify-center'>
        <div className='w-[60vw] h-[60vh]'>

        </div>
      </div>

    </div>
  )
}

export default App
