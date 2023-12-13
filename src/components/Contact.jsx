import mail from '../assets/images/gmail.png'
import github from '../assets/images/github.png'
import whappsap from '../assets/images/whappsap.png'
import linkedin from '../assets/images/linkedin.png'
import '../style.css'

const Contact = ({scrollRef}) => {
  return (
    <div ref={scrollRef} className='w-full h-[80vh] lg:h-[50vh] bg-gradient-to-b from-white to-[#2ccdaa] flex flex-col gap-5 items-center lg:justify-between'>
    <h2 className='text-2xl font-semibold'>Contact</h2>
    <span className='h-full lg:h-[40vh] flex flex-col lg:flex-row justify-center gap-8 lg:flex-wrap'>
      <a href="mailto:martinleonelgalan@gmail.com" className='contactA h-[12vh] lg:h-[15vh] w-[80vw] lg:w-[40vw] rounded-xl flex bg-[#0000006a] items-center justify-center shadow-lg shadow-black hover:scale-105 hover:h-[10vh] hover:shadow-xl hover:shadow-[#1D2127]  duration-500 ease-out'>
        <img className='w-20 object-contain duration-500 ease-out' src={mail} alt="" />
      </a>
      <a href="https://wa.me/+541132015174" className='contactA h-[12vh] lg:h-[15vh] w-[80vw] lg:w-[40vw] rounded-xl flex bg-[#0000006a] items-center justify-center shadow-lg shadow-black hover:scale-105 hover:h-[10vh] hover:shadow-xl hover:shadow-[#1D2127]  duration-500 ease-out'>
        <img className='w-20 object-contain duration-500 ease-out' src={whappsap} alt="" />
      </a>
      <a href="https://github.com/Martin2078" className='contactA h-[12vh] lg:h-[15vh] w-[80vw] lg:w-[40vw] rounded-xl flex bg-[#0000006a] items-center justify-center shadow-lg shadow-black hover:scale-105 hover:h-[10vh] hover:shadow-xl hover:shadow-[#1D2127]  duration-500 ease-out'>
        <img className='w-20 object-contain duration-500 ease-out' src={github} alt="" />
      </a>
      <a href="https://www.linkedin.com/in/martin-galan-aa3080280/" className='contactA h-[12vh] lg:h-[15vh] w-[80vw] lg:w-[40vw] rounded-xl flex bg-[#0000006a] items-center justify-center shadow-lg shadow-black hover:scale-105 hover:h-[10vh] hover:shadow-xl hover:shadow-[#1D2127]  duration-500 ease-out'>
        <img className='w-20 object-contain duration-500 ease-out' src={linkedin} alt="" />
      </a>

    </span>
  </div>
  )
}

export default Contact