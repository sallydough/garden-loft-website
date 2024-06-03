import React from 'react'
import Home from './components/Home/Home'
import './App.css'
import Safety from './components/Safety/Safety'
import Navbar from './components/Navbar/Navbar'

import Carousel from './components/Carousel';  
import Units from './components/Units/Units';
import Costs from './components/Costs/Costs'
import Footer from './components/Footer/Footer';
import Process from './components/Process/Process'

function App() {
  
  return (
    <>
      <div>
       <Navbar />
       <Home/>
       <Safety/>
       <Carousel />
       <Units />
       <Costs />
       <Process />
       <Footer/>

      </div>
   
   
    </>
  )
}

export default App;
