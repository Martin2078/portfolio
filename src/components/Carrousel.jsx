import React, { useEffect, useState } from 'react'
import arrow from '../assets/images/arrow.png'
const Carrousel = ({data}) => {

  const [position,setPosition]=useState(0)
  const [timeoutId, setTimeoutId] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  function handleTouchStart(event) {
    setTouchStartX(event.touches[0].clientX);
  }
  function handleTouchMove(event) {
    setTouchEndX(event.touches[0].clientX);
  }
  function handleTouchEnd() {
    if (touchStartX && touchEndX) {
      const difference = touchEndX - touchStartX;
      if (difference > 0) {
        if (position===0) {
          setPosition(data.length-1)
        }else{
          setPosition(position-1)
        }
      } else if (difference < 0) {

        if (position===data.length-1) {
          setPosition(0)
        }else{
          setPosition(position+1)
        }
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  }
  function nextPhoto() {
    setPosition(position<data.length-1 ? position+1 : 0)
  }
  function prevPhoto() {
    setPosition(position==0 ? data.length-1 : position-1)
  }
  
  function startTimeOut() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(nextPhoto, 4500);
    setTimeoutId(newTimeoutId);
  }

  useEffect(()=>{
    startTimeOut()
  },[position])
  return (
    <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} className='w-full lg:w-1/2 h-[30vh] md:h-[25vh] lg:h-full relative'>
      <button className='absolute left-0 top-0 h-full opacity-0 hover:opacity-100 z-10 w-1/6 bg-[#30303054] flex items-center justify-center' onClick={()=>prevPhoto()}>
        <img className='w-10 rotate-180' src={arrow} alt="" />
      </button>
      <img className='w-full h-full rounded-xl' src={data[position]} alt="" />
      <button className='absolute right-0 top-0 h-full opacity-0 hover:opacity-100 z-10 w-1/6 bg-[#30303054] flex items-center justify-center' onClick={()=>nextPhoto()}>
      <img className='w-10' src={arrow} alt="" />

      </button>
    </div>
  )
}

export default Carrousel