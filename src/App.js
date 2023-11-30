import React from 'react'
import './index.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Works from './pages/Works/Works';
import Contact from './pages/Contact/Contact';


const App = () => {
  return (
    <>
        <Home/>
        <About/>
        <Works/>
        <Contact/>
    </>
  )
}

export default App