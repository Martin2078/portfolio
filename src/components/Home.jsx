import profileImg from '../assets/images/foto cv.jpeg'
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import js from '../assets/images/js.png'
import MongoDB from '../assets/images/mongo.png'
import Express from '../assets/images/express.png'
import React from '../assets/images/react.png'
import NodeJs from '../assets/images/node.png'
import Tailwind from '../assets/images/tailwind.png'
import ReactNative from '../assets/images/react-native.png'

const Home = ({scrollRef}) => {
  return (
    <div ref={scrollRef} className='w-full h-[100vh] flex items-center justify-center'>
    <div className='w-10/12 lg:w-[60vw] h-[80vh] lg:h-[60vh] flex flex-col md:items-center md:justify-center lg:items-stretch lg:justify-stretch '>
      <h2 className='text-3xl md:text-4xl flex gap-2'>Hi!👋 Im Martin</h2>
      <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold flex items-end'>Full Stack Developer 💻</h2>
      <img className='w-full md:w-[40vw] h-auto lg:w-[30vw] xl:w-[30vw] aspect-[4/4] object-cover rounded-full my-5' src={profileImg} alt="" />
      <span className='w-full flex flex-col items-center lg:items-stretch lg:gap-2'>
        <h3 className='text-3xl font-semibold'>Skills</h3>
        <span className='w-full lg:h-[5vh] flex flex-row flex-wrap items-start justify-center lg:justify-start gap-2 md:gap-8'>
          <div className='w-fit flex justify-center md:justify-stretch gap-1 items-center'>
            <img className='myTechs h-10 lg:h-12 object-contain' src={html} alt="" />
            <img className='myTechs h-10 lg:h-12 object-contain' src={css} alt="" />
            <img className='myTechs h-8 lg:h-10 object-contain' src={js} alt="" />
          </div>
          <div className='w-fit flex justify-center md:justify-stretch gap-1'>
            <img className='myTechs h-10 lg:h-12 object-contain' src={MongoDB} alt="" />
            <img className='myTechs h-10 lg:h-12 object-contain' src={Express} alt="" />
            <img className='myTechs h-10 lg:h-12 object-contain' src={React} alt="" />
            <img className='myTechs h-10 lg:h-12 object-contain' src={NodeJs} alt="" />
          </div>
          <div className='w-fit flex justify-center md:justify-stretch gap-1'>
            <img className='myTechs h-10 lg:h-12 object-contain' src={Tailwind} alt="" />
            <img className='myTechs h-10 lg:h-12 object-contain' src={ReactNative} alt="" />
          </div>
        </span>
      </span>
    </div>
  </div>
  )
}

export default Home