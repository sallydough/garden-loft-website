import React from 'react'
import Home from './components/Home/Home'
import './App.css'
import Safety from './components/Safety/Safety'
import Navbar from './components/Navbar/Navbar'

import Carousel from './components/Carousel';  
import Units from './components/Units/Units';
import Footer from './components/Footer/Footer';
import Testimony from './components/Testimony/Testimony'
import Report from './components/Report/Report'

function App() {
  
  return (
    <>
      <div>
       <Navbar />
       <Home/>

       <Safety/>

       <Carousel />
       <Report/>
       <Units />
       <Testimony/>
       <Footer/>

      </div>
   
   
    </>
  )
}

export default App;
