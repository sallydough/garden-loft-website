import React from 'react'
import Home from './components/Home/Home'
import './App.css'
import Safety from './components/Safety/Safety'
import Navbar from './components/Navbar/Navbar'
import Carousel from './components/Carousel';  

function App() {
  
  return (
    <>
      <div>
       <Navbar />
       <Home/>
       <Carousel />
       <Safety/>
      
      </div>
   
   
    </>
  )
}

export default App;
