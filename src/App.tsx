import React from 'react'
import Home from './components/Home/Home'
import './App.css'
import Safety from './components/Safety/Safety'
import Navbar from './components/Navbar/Navbar'

import Footer from './components/Footer/Footer
import Carousel from './components/Carousel';  
import Units from './components/Units/Units';

function App() {
  
  return (
    <>
      <div>
       <Navbar />
       <Home/>
       <Carousel />
       <Safety/>
       <Footer/>


       <Units />
      
      </div>
   
   
    </>
  )
}

export default App;
