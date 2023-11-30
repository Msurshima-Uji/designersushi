import React from 'react'
import './works.css'
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from '../Navbar/Navbar'

const Works = () => {
  return (
    <>
      <div className='works' id='works'>
        <p className='worksp'>Projects on SushiTechSpace</p>
        <div className='catalogue-one'>
          <Row className='mx-auto'>
            <Col xs={6} md={3}>
              <div class="card text-dark">
                <img class="card-img-top" src={require('/Users/comfortuji/Desktop/design/my-website/src/pages/Works/Finlution.png')} alt="Tax Consultancy website UI"/>
                <div class="card-body">
                  <a href='https://www.figma.com/file/qcrV7EDfSGtAZAhbCzg82I/Tax-Consultancy-Site?type=design&node-id=0%3A1&mode=design&t=1Od9W1G3zfSi6VXe-1'><p class="card-text">Finlutions App</p></a>
                </div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div class="card text-dark">
                <img class="card-img-top" src={require('/Users/comfortuji/Desktop/design/my-website/src/pages/Works/Giwa Studios.png')} alt="Giwa Studios website UI"/>
                <div class="card-body">
                  <a href='https://www.figma.com/file/ni7G5hLe8WectuTpfJ6Jql/Giwa-Studios-Website?type=design&node-id=1%3A1263&mode=design&t=FYhN1evBIyeMfUah-1'><p class="card-text">Giwa Studios</p></a>
                </div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div class="card text-dark">
                <img class="card-img-top" src={require('/Users/comfortuji/Desktop/design/my-website/src/pages/Works/social media.png')} alt="Social Media App UI"/>
                <div class="card-body">
                  <a href='https://www.figma.com/file/sqmDA56xv8GTprL7dQ0ra7/Social-Media-App-Design?type=design&node-id=0-1&mode=design&t=7z5d9anJpOojN69z-0'><p class="card-text">Social Media App Design</p></a>
                </div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div class="card text-dark">
                <img class="card-img-top" src={require('/Users/comfortuji/Desktop/design/my-website/src/pages/Works/legit.png')} alt="User Journey"/>
                <div class="card-body">
                  <a href='https://www.figma.com/file/gZFBWqbk6lKqySfpvD2W84/Group-1A?type=whiteboard&node-id=0%3A1&t=2plj24xPctkBnWmN-1'><p class="card-text">Legit.ng UX Group Research</p></a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className='catalogue-two'>
          <Row className='mx-auto'>
            <Col xs={6} md={3}>
              <div class="card text-dark">
                <img class="card-img-top" src={require('/Users/comfortuji/Desktop/design/my-website/src/pages/Works/getww.png')} alt="News Inspo"/>
                <div class="card-body">
                  <a href='https://www.figma.com/file/tDdnR14MQ8sX0qSqOGBzvn/Photography-Course-Landing-Page-Samples-GetWorldWide-Company?type=design&node-id=0%3A1&mode=design&t=QqaLulk6JMGl6RQU-1'><p class="card-text">GetWorldWide</p></a>
                </div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div class="card text-dark">
                <img class="card-img-top" src={require('/Users/comfortuji/Desktop/design/my-website/src/pages/Works/user research.png')} alt="User Research Report"/>
                <div class="card-body">
                  <a href='https://docs.google.com/presentation/d/1fEcQcXXVrS23fqBpMgCKf4FFlDlj8rOwowyj7xf5EXA/edit?usp=sharing'><p class="card-text">User Research Report</p></a>
                </div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div class="card text-dark">
                <img class="card-img-top" src={require('/Users/comfortuji/Desktop/design/my-website/src/pages/Works/peer.jpg')} alt="Peer Learning"/>
                <div class="card-body">
                  <a href='https://thepeerlearning.com/'><p class="card-text">Peer Learning Content</p></a>
                </div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div class="card text-dark">
                <img class="card-img-top" src={require('/Users/comfortuji/Desktop/design/my-website/src/pages/Works/FREE DELIVERY .png')} alt="Delivery UI"/>
                <div class="card-body">
                  <a href='https://msurshima-uji.github.io/foodiesEat/food/'><p class="card-text">Foodie.Eats Website</p></a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className='catalogue-two'>
          <Row className='mx-auto'>
            <Col xs={6} md={3}>
              <div class="card text-dark">
                <img class="card-img-top" src={require('/Users/comfortuji/Desktop/design/my-website/src/assets/Beth logo.png')} alt="Card image cap"/>
                <div class="card-body">
                  <a href='https://drive.google.com/drive/folders/15_qBuql6JaZaHcfT7-ORUDzSz0BLoW82'><p class="card-text">Graphic Branding</p></a>
                </div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div class="card text-dark">
                <img class="card-img-top" src={require('/Users/comfortuji/Desktop/design/my-website/src/assets/SXD cover.png')} alt="Card image cap"/>
                <div class="card-body">
                  <a href='https://www.instagram.com/sushi_x_denims/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=='><p class="card-text">Sushi X Denims</p></a>
                </div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div class="card text-dark">
                <img class="card-img-top" src={require('/Users/comfortuji/Desktop/design/my-website/src/assets/WRI First five.png')} alt="WRI"/>
                <div class="card-body">
                  <a href='https://www.instagram.com/wri_we.read.it/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=='><p class="card-text">We Read It BookClub</p></a>
                </div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div class="card text-dark">
                <img class="card-img-top" src={require('/Users/comfortuji/Desktop/design/my-website/src/pages/Works/TYE.png')} alt="Graphics Branding"/>
                <div class="card-body">
                  <a href='https://msurshima-uji.github.io/tinysnote/'><p class="card-text">Tiny Notepad Website</p></a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <p className='workit'></p>
      </div>

    </>
  )
}

export default Works