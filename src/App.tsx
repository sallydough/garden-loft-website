import React from 'react'
import Home from './components/Home/Home'
import './App.css'
import Safety from './components/Safety/Safety'
import Navbar from './components/Navbar/Navbar'
import Carousel from './components/Carousel';  
import Units from './components/Units/Units';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <>
      <div>
       <Navbar />
       <Home/>
       <Safety/>
       <Carousel />
       <Units />
       <Footer/>
      
      </div>
   
   
    </>
  )
}

export default App;
