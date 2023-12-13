import React from 'react'

const AboutMe = ({scrollRef}) => {
  return (
    <div ref={scrollRef} className='w-full h-[100vh] bg-gradient-to-t from-white via-[#2ccdaa] to-white flex items-center justify-center'>
          <div className='w-[85vw] h-[80vh] md:h-[70vh]  gap-4 text-clip md:gap-[5vh] lg:gap-0 md:text-justify flex flex-col lg:flex-row justify-between items-center '>
            <span className='w-full lg:w-[40vw]  h-fit lg:h-[50vh]'>
              <h2 className='text-2xl font-semibold text-center'>AboutMe</h2>
              <p className='font-semibold text-base md:text-lg'>
                I am an autonomous and proactive person, always in constant pursuit of improvement in
                all areas of my life.
              </p>
              <p className='font-semibold text-base md:text-lg'>In the IT world, I am continuously exploring opportunities to grow both personally and professionally,
                leveraging my problem-solving skills and ability to quickly learn new things.
                Although I lack work experience in web development, I have participated in projects, both as part of a team
                and individually. In these projects, I dedicate significant effort to ensure they are executed
                professionally with high-level code, intuitive design, and aesthetically pleasing elements, utilizing my
                knowledge. My focus is always geared towards providing maximum user comfort.</p>
            </span>
            <span className='self-end hidden md:block w-[15vw] md:min-h-[35vh] lg:h-full lg:max-h-[55vh]  relative bg-white z-20 rounded-lg'>
              <div className='w-[30vw] aspect-[4/4] h-[30vh] lg:h-[50vh] top-[8.25%] lg:top-[5%] rounded-l-full absolute -z-10 -left-[100%] border-8 border-white'>

              </div>
            </span>
          </div>

      </div>
  )
}

export default AboutMe