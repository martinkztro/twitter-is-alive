import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import FollowSection from './components/FollowSection'


function App() {

  return (
    <>
      <main className='grid grid-cols-3 bg-[#0E2229] h-screen'>

        <Navbar />

        <div>
          <h1 className='text-slate-700 text-center font-bold'>NEWSPAPER SECTION</h1>
        </div>

        <FollowSection />

      </main>
    </>
  )
}

export default App
