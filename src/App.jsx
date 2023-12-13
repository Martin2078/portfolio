import { useEffect, useRef, useState } from 'react'
import profileImg from './assets/images/foto cv.jpeg'
import html from './assets/images/html.png'
import css from './assets/images/css.png'
import js from './assets/images/js.png'
import MongoDB from './assets/images/mongo.png'
import Express from './assets/images/express.png'
import React from './assets/images/react.png'
import NodeJs from './assets/images/node.png'
import Tailwind from './assets/images/tailwind.png'
import ReactNative from './assets/images/react-native.png'
import Redux from './assets/images/redux.png'
import Firebase from './assets/images/firebase.png'
import Carrousel from './components/Carrousel'
import MyTinerary from './assets/images/MyTinerary.png'
import MyTinerary2 from './assets/images/MyTinerary2.png'
import MyTinerary3 from './assets/images/MyTinerary3.png'
import MyTinerary4 from './assets/images/MyTinerary4.png'
import MyTinerary5 from './assets/images/MyTinerary5.png'
import MateriaCriolla from './assets/images/materiaCriolla.png'
import MateriaCriolla2 from './assets/images/materiaCriolla2.png'
import MateriaCriolla3 from './assets/images/materiaCriolla3.png'
import MateriaCriolla4 from './assets/images/materiaCriolla4.png'
import web from './assets/images/web.png'
import mail from './assets/images/gmail.png'
import github from './assets/images/github.png'
import whappsap from './assets/images/whappsap.png'
import linkedin from './assets/images/linkedin.png'
import pc from './assets/images/notProject.png'
import './style.css'

function App() {
  const home = useRef()
  const aboutMe = useRef()
  const portfolio = useRef()
  const contact = useRef()
  let allTechnologies = [
    {
      name: 'MongoDB',
      photo: MongoDB
    },
    {
      name: 'Express',
      photo: Express
    },
    {
      name: 'React',
      photo: React
    },
    {
      name: 'NodeJs',
      photo: NodeJs
    },
    {
      name: 'Redux',
      photo: Redux
    },
    {
      name: 'React Native',
      photo: ReactNative
    },
    {
      name: 'Firebase',
      photo: Firebase
    },
    {
      name: 'Tailwind',
      photo: Tailwind
    },
  ]
  let projects = [
    {
      title: 'MyTinerary',
      description: 'This site is designed exclusively for travelers, offers user-centric pages, allowing exploration of city itineraries and user-shared travel plans. The intuitive interface simplifies navigation and itinerary customization, emphasizing collaboration among travelers. It fosters a community that shares experiences and recommendations, providing detailed destination information while creating a collaborative space to enhance travel experiences.',
      photos: [MyTinerary, MyTinerary2, MyTinerary3, MyTinerary4, MyTinerary5],
      technologies: [{
        name: 'MongoDB',
        photo: MongoDB
      },
      {
        name: 'Express',
        photo: Express
      },
      {
        name: 'React',
        photo: React
      },
      {
        name: 'NodeJs',
        photo: NodeJs
      },
      {
        name: 'Redux',
        photo: Redux
      },
      {
        name: 'Firebase',
        photo: Firebase
      },
      {
        name: 'Tailwind',
        photo: Tailwind
      }],
      link: 'https://mytinerary-galan.vercel.app/',
      sourceCodeFront:'https://github.com/Martin2078/mytinerary-Galan.git',
      sourceCodeBack:'https://github.com/Martin2078/mytinerary-back.git'
    },
    {
      title: 'Materia Criolla',
      description: 'This ecommerce for the purchase of mates and related products stands out for its minimalist design that harmoniously combines with wooden details, evoking a countryside essence and creating a warm and inviting atmosphere. It offers various functionalities for user convenience in choosing a product, such as filters, details, a cart, etc... In addition, the administrator has control over the products, with the ability to delete, edit, or publish new entries.',
      photos: [MateriaCriolla, MateriaCriolla2, MateriaCriolla3, MateriaCriolla4],
      technologies: [{
        name: 'MongoDB',
        photo: MongoDB
      },
      {
        name: 'Express',
        photo: Express
      },
      {
        name: 'React',
        photo: React
      },
      {
        name: 'NodeJs',
        photo: NodeJs
      },
      {
        name: 'Redux',
        photo: Redux
      },
      {
        name: 'Tailwind',
        photo: Tailwind
      }],
      link: 'https://materia-criolla-front.vercel.app/',
      sourceCodeFront:'https://github.com/Martin2078/materiaCriollaFront.git',
      sourceCodeBack:'https://github.com/Martin2078/materiaCriolla-back.git'
    }]


  function navigateTo(place) {
    place.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }



  return (
    <div className=' h-[350vh] flex flex-col'>
      <header className='fixed z-50 top-0 bg-[#ffffffa5] left-0 w-full h-[6vh] flex justify-between px-8 items-center shadow-[0_3px_30px_-5px_rgba(0,0,0,0.3)]'>
        <h1 className='text-3xl font-bold'>
          MyPortfolio
        </h1>
        <div className='flex gap-8'>
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

      <div ref={home} className='w-full h-[100vh] flex items-center justify-center'>
        <div className='w-[60vw] h-[60vh] flex flex-col'>
          <h2 className='text-4xl flex gap-2'>Hi!👋 Im Martin</h2>
          <h2 className='text-6xl font-semibold flex items-end gap-4'>Full Stack Developer 💻</h2>
          <img className='h-[30vh] w-[20vw] object-cover rounded-full my-5' src={profileImg} alt="" />
          <span className='w-full'>
            <h3 className='text-3xl font-semibold'>Skills</h3>
            <span className='w-full h-5vh flex items-center gap-8'>
              <div className='flex gap-1 items-center'>
                <img className='myTechs h-12 object-contain' src={html} alt="" />
                <img className='myTechs h-12 object-contain' src={css} alt="" />
                <img className='myTechs h-10 object-contain' src={js} alt="" />
              </div>
              <div className='flex gap-1'>
                <img className='myTechs h-12 object-contain' src={MongoDB} alt="" />
                <img className='myTechs h-12 object-contain' src={Express} alt="" />
                <img className='myTechs h-12 object-contain' src={React} alt="" />
                <img className='myTechs h-12 object-contain' src={NodeJs} alt="" />
              </div>
              <div className='flex gap-1'>
                <img className='myTechs h-12 object-contain' src={Tailwind} alt="" />
                <img className='myTechs h-12 object-contain' src={ReactNative} alt="" />
              </div>
            </span>
          </span>
        </div>
      </div>

      <div ref={aboutMe} className='w-full h-[100vh] bg-gradient-to-t from-white via-[#2ccdaa] to-white flex items-center justify-center'>
        <div className='w-[85vw] h-[60vh] flex gap-4'>

          <span className='h-full w-full text-justify flex justify-between items-center pl-[5vh]'>
            <span className='w-[40vw] h-[50vh]'>
              <h2 className='text-2xl font-semibold text-center'>AboutMe</h2>
              <p className='font-semibold text-lg'>
                I am an autonomous and proactive person, always in constant pursuit of improvement in
                all areas of my life.
              </p>
              <p className='font-semibold text-lg'>In the IT world, I am continuously exploring opportunities to grow both personally and professionally,
                leveraging my problem-solving skills and ability to quickly learn new things.
                Although I lack work experience in web development, I have participated in projects, both as part of a team
                and individually. In these projects, I dedicate significant effort to ensure they are executed
                professionally with high-level code, intuitive design, and aesthetically pleasing elements, utilizing my
                knowledge. My focus is always geared towards providing maximum user comfort.</p>
            </span>
            <span className='w-[15vw] h-full relative bg-white z-20 rounded-lg'>

              <div className='w-[30vw] h-[55vh] rounded-l-full absolute -z-10 top-[5%] -left-[100%] border-8 border-white'>

              </div>
            </span>
          </span>

        </div>
      </div>

      <div ref={portfolio} className='w-full h-[100vh] flex items-center justify-center'>
        <div className='w-[90vw] h-[80vh] flex flex-col justify-between '>
          <h2 className='text-2xl font-semibold'>Portfolio</h2>
          <span className='w-full h-[70vh] px-5 py-6 flex flex-col items-center gap-10 overflow-y-auto'>
            {projects.map((project) => {
              return <div className='w-11/12 h-[35vh] rounded-xl  flex shadow-lg shadow-[#4a4d4f] shad'>
                <Carrousel data={project.photos} />
                <div className='w-1/2 h-full flex flex-col justify-betweeen px-4 pb-2'>
                  <span className='w-full h-[4vh] flex justify-between'>
                    <h3 className='text-xl font-semibold'>{project.title}</h3>
                    <a className='text-lg font-semibold flex items-center gap-2 hover:text-[#2dc77f]' href={project.link}>
                      <img className='w-5 object-contain' src={web} alt="" />
                      Website
                    </a>
                  </span>
                  <p>{project.description}</p>
                  <span className='w-full h-[10vh] flex items-end '>
                    <span className='w-9/12 flex flex-col justify-between gap-2'>
                      <h3 className='text-xl font-semibold'>Technologies</h3>
                      <span className='w-full flex gap-2'>
                        {project.technologies.map(element => {
                          return <img className='h-8 object-contain' src={element.photo} alt="" />

                        })}
                      </span>
                    </span>
                    <span className='w-3/12 flex flex-col justify-between gap-1'>
                      <h4 className='text-xl font-semibold'>SourceCode</h4>
                      <span className='flex justify-center w-full'>
                        <a className='h-9 sourceCodeS duration-100 border-2 border-r-0 rounded-md flex items-center justify-center' href={project.sourceCodeFront}>
                          <p className='font-semibold hidden px-2'>FrontEnd</p>
                          <img className='w-8' src={github} alt="" />
                        </a>
                        <a className='h-9 sourceCodeS duration-100  border-2 rounded-md flex items-center justify-center' href={project.sourceCodeBack}>
                          <p className='font-semibold hidden px-2'>BackEnd</p>
                          <img className='w-8' src={github} alt="" />
                        </a>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            })}
          </span>
        </div>
      </div>

      <div ref={contact} className='w-full h-[50vh] bg-gradient-to-b from-white to-[#2ccdaa] flex flex-col gap-5 items-center justify-between'>
        <h2 className='text-2xl font-semibold'>Contact</h2>
        <span className='h-[40vh] flex justify-center gap-8 flex-wrap'>
          <a href="mailto:martinleonelgalan@gmail.com" className='contactA h-[15vh] w-[25vw] rounded-xl flex bg-[#0000006a] items-center justify-center shadow-lg shadow-black hover:scale-105 hover:h-[10vh] hover:shadow-xl hover:shadow-[#1D2127]  duration-500 ease-out'>
            <img className='w-20 object-contain duration-500 ease-out' src={mail} alt="" />
          </a>
          <a href="https://wa.me/+541132015174" className='contactA h-[15vh] w-[25vw] rounded-xl flex bg-[#0000006a] items-center justify-center shadow-lg shadow-black hover:scale-105 hover:h-[10vh] hover:shadow-xl hover:shadow-[#1D2127]  duration-500 ease-out'>
            <img className='w-20 object-contain duration-500 ease-out' src={whappsap} alt="" />
          </a>
          <a href="https://github.com/Martin2078" className='contactA h-[15vh] w-[25vw] rounded-xl flex bg-[#0000006a] items-center justify-center shadow-lg shadow-black hover:scale-105 hover:h-[10vh] hover:shadow-xl hover:shadow-[#1D2127]  duration-500 ease-out'>
            <img className='w-20 object-contain duration-500 ease-out' src={github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/martin-galan-aa3080280/" className='contactA h-[15vh] w-[25vw] rounded-xl flex bg-[#0000006a] items-center justify-center shadow-lg shadow-black hover:scale-105 hover:h-[10vh] hover:shadow-xl hover:shadow-[#1D2127]  duration-500 ease-out'>
            <img className='w-20 object-contain duration-500 ease-out' src={linkedin} alt="" />
          </a>

        </span>
      </div>

    </div>
  )
}

export default App
