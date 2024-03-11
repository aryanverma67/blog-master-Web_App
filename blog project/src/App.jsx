import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import NewsLetter from './components/NewsLetter';


function App() {

  return (
    <>
      <div className=''>
        


      </div>
      <Navbar/>

      <Outlet/>
      <NewsLetter/>

      <Footer/>
    </>
  )
}

export default App
