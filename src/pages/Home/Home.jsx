import React from 'react'
import './home.css'
import Navbar from '../Navbar/Navbar'
//import navbar from '../../components/navbar'

const Home = () => {
  return (
    <>
      <div className='home' id='home'>
       <Navbar/>
        <p>Hello There, I am Sushi “not the fish food” and I'm a UI/UX designer in Abuja, Nigeria.<br/> I capture <span className='strike'>user</span> people's needs and wants in a product or service design.<br/> Check out <span className='work'>my work</span> and maybe work with me too!</p> 
        <div className='homepage'>
          <img src={require('/Users/comfortuji/Desktop/design/my-website/src/pages/Home/right image.png')} alt='website aesthetics' className='right' />
          <img src={require('/Users/comfortuji/Desktop/design/my-website/src/pages/Home/left image.png')} alt='website aesthetics' />
        </div> 
        <p>“Good Design is the fundamental building block of a good product”</p>
      </div>
    </>
  )
}

export default Home