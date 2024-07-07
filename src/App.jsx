import React from 'react'
import Navbar from './Navbar'
import Background from './Background'
import Foreground from './Foreground'


const App = () => {
  return (
    <div className=' relative bg-zinc-800 w-full h-screen z-2'>
     
      <Background/>
 <Foreground/>
      </div>
  )
}

export default App