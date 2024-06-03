import React from 'react'
import Home from './components/Home/Home'
import './App.css'
import Safety from './components/Safety/Safety'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  
  return (
    <>
      <div>
       <Navbar />
       <Home/>
       <Safety/>
       <Footer/>

      
      </div>
   
   
    </>
  )
}

export default App
