import Carrousel from './Carrousel'
import web from '../assets/images/web.png'
import pc from '../assets/images/notProject.png'
import MyTinerary from '../assets/images/MyTinerary.png'
import MyTinerary2 from '../assets/images/MyTinerary2.png'
import MyTinerary3 from '../assets/images/MyTinerary3.png'
import MyTinerary4 from '../assets/images/MyTinerary4.png'
import MyTinerary5 from '../assets/images/MyTinerary5.png'
import MateriaCriolla from '../assets/images/materiaCriolla.png'
import MateriaCriolla2 from '../assets/images/materiaCriolla2.png'
import MateriaCriolla3 from '../assets/images/materiaCriolla3.png'
import MateriaCriolla4 from '../assets/images/materiaCriolla4.png'
import MongoDB from '../assets/images/mongo.png'
import Express from '../assets/images/express.png'
import React from '../assets/images/react.png'
import NodeJs from '../assets/images/node.png'
import Tailwind from '../assets/images/tailwind.png'
import ReactNative from '../assets/images/react-native.png'
import Redux from '../assets/images/redux.png'
import Firebase from '../assets/images/firebase.png'
import github from '../assets/images/github.png'
import '../style.css'

const Portfolio = ({scrollRef}) => {
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
  return (
    <div ref={scrollRef} className='w-full h-[100vh] flex items-center justify-center'>
        <div className='w-full  lg:w-[90vw] h-[90vh] flex flex-col justify-between '>
          <h2 className='text-2xl text-center lg:text-start font-semibold'>Portfolio</h2>
          <span className='w-full h-[85vh] lg:h-[70vh] px-2 md:px-5 py-6 flex flex-col md:flex-row md:justify-center lg:justify-stretch lg:flex-col items-center gap-10 md:gap-5 lg:gap-10 overflow-y-auto'>
            {projects.map((project) => {
              return <div className='w-full md:w-[50%] lg:w-full h-fit  lg:h-[45vh] rounded-xl  flex flex-col lg:flex-row shadow-lg shadow-[#4a4d4f] '>
                <Carrousel data={project.photos} />
                <div className='w-full min-h-[60vh] md:min-h-[50vh] lg:w-1/2 lg:min-h-full flex flex-col justify-around lg:justify-between px-2 lg:px-4 py-2 lg:py-0  lg:pb-2 xl:py-4'>
                  <span className='w-full h-[5vh] lg:h-[4vh] flex items-center justify-between'>
                    <h3 className='text-xl font-semibold'>{project.title}</h3>
                    <a className='text-lg font-semibold flex items-center gap-2 hover:text-[#2dc77f]' href={project.link}>
                      <img className='w-5 object-contain' src={web} alt="" />
                      Website
                    </a>
                  </span>
                  <p className='text-sm min-[375px]:text-base xl:text-lg'>{project.description}</p>
                  <span className='w-full h-fit lg:h-[10vh] flex flex-col lg:flex-row items-end '>
                    <span className='w-full lg:w-9/12 flex flex-col items-center lg:items-stretch justify-between gap-1 lg:gap-2'>
                      <h3 className='text-xl font-semibold'>Technologies</h3>
                      <span className='w-full flex justify-center lg:justify-stretch gap-1 lg:gap-2'>
                        {project.technologies.map(element => {
                          return <img className='h-8 object-contain' src={element.photo} alt="" />

                        })}
                      </span>
                    </span>
                    <span className='w-full lg:w-3/12 flex flex-col items-center lg:items-stretch justify-between gap-1'>
                      <h4 className='text-xl font-semibold'>SourceCode</h4>
                      <span className='flex justify-center w-full'>
                        <a className='bg-[#2dc77f] lg:bg-white h-9 sourceCodeS duration-100 border-2 border-r-0 rounded-md flex items-center justify-center' href={project.sourceCodeFront}>
                          <p className='block font-semibold lg:hidden px-2'>FrontEnd</p>
                          <img className='w-8' src={github} alt="" />
                        </a>
                        <a className='bg-[#2dc77f] lg:bg-white h-9 sourceCodeS duration-100  border-2 rounded-md flex items-center justify-center' href={project.sourceCodeBack}>
                          <p className='block font-semibold lg:hidden px-2'>BackEnd</p>
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
  )
}

export default Portfolio