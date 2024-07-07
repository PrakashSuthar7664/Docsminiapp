import React from 'react'
import Navbar from './Navbar'

const Background = () => {
  return (
    <div className='w-full h-screen fixed z-[2]'>
          
      <Navbar/>
      <h2 className='text-[13vw] tracking-tighter font-semibold text-zinc-900 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>Docs.</h2>
    
    </div>
  )
}

export default Background